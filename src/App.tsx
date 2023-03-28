import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatServer from "@pages/ChatServer";
import Login from "@pages/Login";
import SingUp from "@pages/SingUp";
import Navbar from "@components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="mx-auto ">
        <Routes>
          <Route path="/" element={<ChatServer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
