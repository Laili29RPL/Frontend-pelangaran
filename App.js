import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Pelanggaran from "./pages/Pelanggaran";

export default function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/Pelanggaran" element={<Pelanggaran/>} />
        </Routes>
    </BrowserRouter>
  )
  
}
