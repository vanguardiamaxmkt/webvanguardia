export type BienTipo = "producto" | "servicio";
export type ReclamoTipo = "reclamo" | "queja";
export type ReclamacionEstado = "pendiente" | "atendido";

/** Fila de la tabla `reclamaciones`. */
export interface Reclamacion {
  id: number;
  codigo: string;
  fecha: string;
  con_nombre: string;
  con_doc_tipo: string;
  con_doc_num: string;
  con_domicilio: string | null;
  con_telefono: string | null;
  con_email: string | null;
  con_menor: number;
  apo_nombre: string | null;
  bien_tipo: BienTipo;
  bien_monto: string | null;
  bien_descripcion: string | null;
  tipo: ReclamoTipo;
  detalle: string;
  pedido: string | null;
  estado: ReclamacionEstado;
  respuesta: string | null;
  created_at: string;
}

/** Datos que envía el formulario público del Libro de Reclamaciones. */
export interface ReclamacionInput {
  con_nombre: string;
  con_doc_tipo: string;
  con_doc_num: string;
  con_domicilio?: string;
  con_telefono?: string;
  con_email?: string;
  con_menor?: boolean;
  apo_nombre?: string;
  bien_tipo: BienTipo;
  bien_monto?: string;
  bien_descripcion?: string;
  tipo: ReclamoTipo;
  detalle: string;
  pedido?: string;
}
