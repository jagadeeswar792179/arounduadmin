import { useEffect, useState } from "react";
import axios from "axios";

export default function Professors() {
  const [list, setList] = useState([]);
  const server = process.env.REACT_APP_SERVER;

  const load = async () => {
    const res = await axios.get(`${server}/api/admin/professors`);
    setList(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const verify = async (id) => {
    await axios.patch(`${server}/api/admin/professors/${id}/verify`);
    load();
  };

  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Verified</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map((p) => (
          <tr key={p.id}>
            <td>
              {p.first_name} {p.last_name}
            </td>
            <td>{p.email}</td>
            <td>{p.verified ? "Yes" : "No"}</td>
            <td>
              {!p.verified && (
                <button className="switch-btn" onClick={() => verify(p.id)}>
                  Verify
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
