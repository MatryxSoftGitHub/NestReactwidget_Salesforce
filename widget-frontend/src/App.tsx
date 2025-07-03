import { useEffect, useState } from "react";

export default function App() {
  // give the state variable a string type
  const [msg, setMsg] = useState<string>("…loading");

  useEffect(() => {
    fetch("/greeting")
      .then((r) => r.json() as Promise<{ text: string }>)
      .then((d) => setMsg(d.text))
      .catch(() => setMsg("API error"));
  }, []);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "system-ui",
      }}
    >
      <h1>{msg}</h1>
      <p>Rendered by React • Data from NestJS</p>
    </main>
  );
}
