import { useEffect, useState } from "react";
import axios from "axios";

export default function BugReports() {
  const [data, setData] = useState([]);
  const server = process.env.REACT_APP_SERVER;

  useEffect(() => {
    axios
      .get(`${server}/api/admin/bug-reports`)
      .then((res) => setData(res.data));
  }, [server]);

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>User</th>
          <th>Type</th>
          <th>Content</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((b) => (
          <tr key={b.id}>
            <td>{b.user}</td>
            <td>{b.type}</td>
            <td>{b.description}</td>
            <td>{new Date(b.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
