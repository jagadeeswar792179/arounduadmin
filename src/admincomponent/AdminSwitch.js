export default function AdminSwitch({ tab, setTab }) {
  return (
    <div className="switch-container">
      <button
        className={`switch-btn ${tab === "bugs" ? "active" : ""}`}
        onClick={() => setTab("bugs")}
      >
        Bug Reports
      </button>
      <button
        className={`switch-btn ${tab === "users" ? "active" : ""}`}
        onClick={() => setTab("users")}
      >
        Reported Users
      </button>
      <button
        className={`switch-btn ${tab === "posts" ? "active" : ""}`}
        onClick={() => setTab("posts")}
      >
        Reported Posts
      </button>
      <button
        className={`switch-btn ${tab === "professors" ? "active" : ""}`}
        onClick={() => setTab("professors")}
      >
        Professors
      </button>
    </div>
  );
}
