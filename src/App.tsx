import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatServer from "@pages/ChatServer";
import Login from "@pages/Login";
import SingUp from "@pages/SingUp";

function App() {
  return (
    <main className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatServer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
