import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages";
import { useAppSelector } from "./stores/hooks";
import Snackbar from "./common/Snackbar";

function App() {
  //STORE STATE
  const { snackbarMsg } = useAppSelector((state) => state.snackBar);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
      {snackbarMsg ? <Snackbar /> : null}
    </div>
  );
}

export default App;
