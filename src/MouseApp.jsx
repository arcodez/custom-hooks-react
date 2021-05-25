import React from "react";
import useBackground from "./hooks/useBackground";

function MouseApp() {
  const { background, position } = useBackground();
  return (
    <>
      <h2>Mouse App</h2>
      <pre style={{ background, height: "100vh" }}>
        {JSON.stringify(position, null, 2)}
      </pre>
    </>
  );
}

export default MouseApp;
