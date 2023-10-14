import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import F1 from "./Components/F1"
function App() {
  return (
    <div class="background d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-center h1 fw-bold">Color Picker</h1>
      <F1 />
    </div>
  );
}

export default App;