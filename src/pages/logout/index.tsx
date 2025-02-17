import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        
        const response = await fetch('/api/logout', {
          method: 'GET',
          credentials: 'include', 
        });

        if (response.ok) {
          
          localStorage.removeItem('token');

          
          navigate('/login');
        } else {
          console.error('Gagal logout:', await response.text());
        }
      } catch (error) {
        console.error('Terjadi kesalahan:', error);
      }
    };

    handleLogout();
  }, [navigate]);

  return null;
}