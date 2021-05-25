import useMousePosition from "./useMousePosition";
import { useMemo } from "react";

function useBackground() {
  const position = useMousePosition();
  const background = useMemo(
    () => (position.x < window.innerWidth / 2 ? "pink" : "orange"),
    [position]
  );
  return { position, background };
}

export default useBackground;
