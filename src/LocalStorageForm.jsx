import { useState } from "react";
import { useLocalStorage } from "../src/hooks/useLocalStorage";

export function LocalStorageForm() {
  const [text, setText] = useLocalStorage();

  return (
    <>
      <textarea
        placeholder="Texto Persistente"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button>Enviar</button>
    </>
  );
}
