import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatServer from "@app/pages/ChatServer";
import Login from "@app/pages/Login";
import Singup from "@app/pages/Singup";
import Navbar from "@app/components/Navbar";
import { AuthProvider } from "@app/context/AuthContext";
import Private from "@app/routes/Private";
import Public from "@app/routes/Public";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <main className="mx-auto ">
          <Routes>
            <Route
              path="/"
              element={<Private to="/login" element={<ChatServer />} />}
            />
            <Route
              path="/login"
              element={<Public to="/" element={<Login />} />}
            />
            <Route
              path="/singup"
              element={<Public to="/" element={<Singup />} />}
            />
          </Routes>
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
