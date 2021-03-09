import { useState } from "react";
import RepositoryList from "./components/RepositoryList";
import "./styles/global.scss";

export default function App() {
  const [c, setC] = useState(0);

  const incr = () => {
    setC(c + 1);
  };

  return (
    <>
      <RepositoryList />
      <strong>{c}</strong>
      <button onClick={incr}>Increment + </button>
    </>
  );
}
