import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatServer from "@app/pages/ChatServer";
import Login from "@app/pages/Login";
import SingUp from "@app/pages/SingUp";
import Navbar from "@app/components/Navbar";
import { AuthProvider } from "@app/context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <main className="mx-auto ">
          <Routes>
            <Route path="/" element={<ChatServer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<SingUp />} />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
