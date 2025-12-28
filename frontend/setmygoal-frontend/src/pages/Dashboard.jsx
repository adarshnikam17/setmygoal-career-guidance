import { useEffect, useState } from "react";
import { getDashboard } from "../services/api";

function Dashboard({ userId }) {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    getDashboard(userId).then(res => {
      setDashboard(res.data);
    });
  }, [userId]);

  if (!dashboard) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>{dashboard.title}</h2>
      <p>{dashboard.description}</p>

      <ul>
        {dashboard.modules.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
