import { useEffect, useState } from "react";
import axios from "axios";

export default function ReportedPosts() {
  const [data, setData] = useState([]);
  const server = process.env.REACT_APP_SERVER;

  useEffect(() => {
    axios
      .get(`${server}/api/admin/reported-posts`)
      .then((res) => setData(res.data));
  }, [server]);

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Reporter</th>
          <th>Post ID</th>
          <th>Type</th>
          <th>Reason</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((p) => (
          <tr key={p.id}>
            <td>{p.reporter}</td>
            <td style={{ fontSize: "12px" }}>{p.post_id}</td>
            <td>{p.type}</td>
            <td>{p.reason || "-"}</td>
            <td>{new Date(p.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
