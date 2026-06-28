"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import LinkExt from "@tiptap/extension-link";
import ImageExt from "@tiptap/extension-image";
import { useRef } from "react";

function ToolBtn({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={`adm-tool${active ? " is-active" : ""}`}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function TipTapEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (html: string) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      LinkExt.configure({ openOnClick: false, autolink: true }),
      ImageExt.configure({ inline: false }),
    ],
    content: value || "",
    immediatelyRender: false,
    editorProps: { attributes: { class: "adm-prose" } },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  if (!editor) return <div className="adm-editor">Cargando editor…</div>;

  async function uploadAndInsert(file: File) {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("folder", "contenido");
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (res.ok && data.url) editor!.chain().focus().setImage({ src: data.url }).run();
    else alert(data.error || "No se pudo subir la imagen.");
  }

  function addLink() {
    const url = prompt("URL del enlace:");
    if (url === null) return;
    if (url === "") editor!.chain().focus().unsetLink().run();
    else editor!.chain().focus().setLink({ href: url }).run();
  }

  return (
    <div>
      <div className="adm-toolbar">
        <ToolBtn active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
          <b>B</b>
        </ToolBtn>
        <ToolBtn active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
          <i>I</i>
        </ToolBtn>
        <ToolBtn active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </ToolBtn>
        <ToolBtn active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          H3
        </ToolBtn>
        <ToolBtn active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
          • Lista
        </ToolBtn>
        <ToolBtn active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          1. Lista
        </ToolBtn>
        <ToolBtn active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          ❝ Cita
        </ToolBtn>
        <ToolBtn active={editor.isActive("link")} onClick={addLink}>
          🔗 Enlace
        </ToolBtn>
        <ToolBtn onClick={() => fileRef.current?.click()}>
          🖼️ Imagen
        </ToolBtn>
      </div>
      <div className="adm-editor">
        <EditorContent editor={editor} />
      </div>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) uploadAndInsert(f);
          e.target.value = "";
        }}
      />
    </div>
  );
}
