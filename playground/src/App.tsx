import { useToggle } from "sihook";

function App() {
  const [isOn, toggle] = useToggle();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>sihook Playground</h1>
      <p>State: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;
