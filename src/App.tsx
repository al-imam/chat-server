import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatServer from "@pages/ChatServer";
import Login from "@pages/Login";
import SingUp from "@pages/SingUp";

function App() {
  return (
    <main className="mx-auto sm:max-w-3xl">
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
