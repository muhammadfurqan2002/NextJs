import React from "react";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  console.log("hlo world")

  const content = (
    <section>
      <h2>
        <Link href={"/"}>Back to Home</Link>
      </h2>
      <br />
      {users.map((user, index) => {
        return (
          <>
            <p key={index}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
}
