import "./App.css";
import Homepage from "./Homepage/Homepage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
