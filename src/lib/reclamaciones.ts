import "server-only";
import type { RowDataPacket, ResultSetHeader } from "mysql2";
import { getPool } from "./db";
import type {
  Reclamacion,
  ReclamacionInput,
  ReclamacionEstado,
} from "@/types/reclamacion";

type Row = Reclamacion & RowDataPacket;

function toRow(input: ReclamacionInput) {
  return {
    con_nombre: input.con_nombre,
    con_doc_tipo: input.con_doc_tipo,
    con_doc_num: input.con_doc_num,
    con_domicilio: input.con_domicilio || null,
    con_telefono: input.con_telefono || null,
    con_email: input.con_email || null,
    con_menor: input.con_menor ? 1 : 0,
    apo_nombre: input.apo_nombre || null,
    bien_tipo: input.bien_tipo,
    bien_monto: input.bien_monto ? Number(input.bien_monto) : null,
    bien_descripcion: input.bien_descripcion || null,
    tipo: input.tipo,
    detalle: input.detalle,
    pedido: input.pedido || null,
  };
}

/** Inserta una reclamación y devuelve su id + código correlativo. */
export async function createReclamacion(
  input: ReclamacionInput,
): Promise<{ id: number; codigo: string }> {
  const pool = getPool();
  const [res] = await pool.query<ResultSetHeader>(
    `INSERT INTO reclamaciones SET ?`,
    [{ ...toRow(input), codigo: "" }],
  );
  const id = res.insertId;
  // Código correlativo legible: R-AAAAMMDD-000001
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT DATE_FORMAT(fecha, '%Y%m%d') AS f FROM reclamaciones WHERE id = ?`,
    [id],
  );
  const fecha = (rows[0]?.f as string) || "";
  const codigo = `R-${fecha}-${String(id).padStart(6, "0")}`;
  await pool.query(`UPDATE reclamaciones SET codigo = ? WHERE id = ?`, [codigo, id]);
  return { id, codigo };
}

export async function listReclamaciones(): Promise<Reclamacion[]> {
  const [rows] = await getPool().query<Row[]>(
    `SELECT * FROM reclamaciones ORDER BY id DESC`,
  );
  return rows;
}

export async function getReclamacion(id: number): Promise<Reclamacion | null> {
  const [rows] = await getPool().query<Row[]>(
    `SELECT * FROM reclamaciones WHERE id = ? LIMIT 1`,
    [id],
  );
  return rows[0] ?? null;
}

export async function updateEstado(
  id: number,
  estado: ReclamacionEstado,
  respuesta: string,
): Promise<void> {
  await getPool().query(
    `UPDATE reclamaciones SET estado = ?, respuesta = ? WHERE id = ?`,
    [estado, respuesta || null, id],
  );
}
