import { useState } from "react";
import AdminSwitch from "./AdminSwitch";
import BugReports from "./BugReports";
import ReportedUsers from "./ReportedUsers";
import ReportedPosts from "./ReportedPosts";
import Professors from "./Professors";

export default function AdminPage() {
  const [tab, setTab] = useState("bugs");

  return (
    <div className="admin-pageup">
      <div
        className="logo-login"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <img className="logo-png" src="logo.png" />
        <p>
          Around
          <span>U</span>
        </p>
      </div>
      <div className="admin-page">
        <h2 className="h2h2">Admin Dashboard</h2>
        <AdminSwitch tab={tab} setTab={setTab} />

        {tab === "bugs" && <BugReports />}
        {tab === "users" && <ReportedUsers />}
        {tab === "posts" && <ReportedPosts />}
        {tab === "professors" && <Professors />}
      </div>
    </div>
  );
}
