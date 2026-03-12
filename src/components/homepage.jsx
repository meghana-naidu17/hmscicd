import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setStats({
        doctors: 45,
        patients: 1200,
        departments: 12,
      });
    }, 700);
  }, []);

  if (!stats) return <p>Loading hospital data...</p>;

  return (
    <div>
      <h1>Welcome to Our Hospital</h1>

      <p>We provide quality healthcare with experienced doctors.</p>

      <ul>
        <li>Total Doctors: {stats.doctors}</li>
        <li>Total Patients: {stats.patients}</li>
        <li>Departments: {stats.departments}</li>
      </ul>
    </div>
  );
};

export default Homepage;
