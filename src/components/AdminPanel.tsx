import { useEffect, useState } from 'react';

const AdminPanel: React.FC = () => {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const pwd = prompt('Inserisci password per accedere all’area admin:');
    if (pwd === 'torneo2025') {
      setAuthorized(true);
    } else {
      alert('Accesso negato');
      window.location.href = '/';
    }
  }, []);

  if (!authorized) return null;

  return (
    <div>
      <h2>Area Admin</h2>
      <p>Benvenuto nell'area amministratore.</p>
    </div>
  );
};

export default AdminPanel;