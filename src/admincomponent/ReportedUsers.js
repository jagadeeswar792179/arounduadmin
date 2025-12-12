import { useEffect, useState } from "react";
import axios from "axios";

export default function ReportedUsers() {
  const [data, setData] = useState([]);
  const server = process.env.REACT_APP_SERVER;

  useEffect(() => {
    axios
      .get(`${server}/api/admin/reported-users`)
      .then((res) => setData(res.data));
  }, [server]);

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Reporter</th>
          <th>Reported User</th>
          <th>Type</th>
          <th>Reason</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((r) => (
          <tr key={r.id}>
            <td>{r.reporter}</td>
            <td>{r.reported}</td>
            <td>{r.type}</td>
            <td>{r.reason || "-"}</td>
            <td>{new Date(r.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
