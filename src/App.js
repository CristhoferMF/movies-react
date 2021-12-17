import { Route, Routes } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<MoviesPage/>}/>
      <Route path="*" element={<p>Not found</p>} />
    </Routes>
    </>
  );
}

export default App;
