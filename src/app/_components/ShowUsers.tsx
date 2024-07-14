import { db } from "@/db";
import React from "react";

export default async function ShowUsers() {
  const users = await db.query.users.findMany();
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
