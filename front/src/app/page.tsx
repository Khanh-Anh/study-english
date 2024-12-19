'use client';
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [users, setUsers] = useState<{ name: string }[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  console.log(users);
  return <div>{users.map((user) => user.name)}</div>;
}
