import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./Pages";
import { useAppSelector } from "./stores/hooks";
import Snackbar from "./common/Snackbar";

function App() {
  //STORE STATE
  const { openSnackBar } = useAppSelector((state) => state.snackBar);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
      {openSnackBar ? <Snackbar /> : null}
    </div>
  );
}

export default App;
