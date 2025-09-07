import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/announcements")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Order Wins</h1>
      <ul>
        {data.orderWins.map((item, i) => (
          <li key={i}>{item.company} - {item.details}</li>
        ))}
      </ul>

      <h1>Management Change</h1>
      <ul>
        {data.managementChanges.map((item, i) => (
          <li key={i}>{item.company} - {item.details}</li>
        ))}
      </ul>

      <h1>Earnings</h1>
      <ul>
        {data.earnings.map((item, i) => (
          <li key={i}>{item.company} - {item.details}</li>
        ))}
      </ul>
    </div>
  );
}
