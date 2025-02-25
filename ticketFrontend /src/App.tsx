import { ReactNode, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/LoginPage/LoginPage';
interface ProtectedRouteProps {
  children: ReactNode;
}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    return isLoggedIn ? <>{children}</> : <Navigate to="/" />;
  };

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
