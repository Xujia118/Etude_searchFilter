import React, { useEffect, useState } from "react";
import axios from "axios";

import Table from "./Table.jsx";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    fetchUsers();
  }, [query]);

  return (
    <main>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </main>
  );
}

export default App;
