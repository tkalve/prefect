import Prefect from "./components/Prefect";
import README from "../README.md?raw";

function App() {
  return (
    <div className="container">
      <Prefect className="mypre" mode="light" content={README} />
    </div>
  );
}

export default App;
