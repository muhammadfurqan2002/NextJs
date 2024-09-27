import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans p-20 bg-slate-300">
        <h1>Home Page</h1>
        <p>
          <Link href={'/users'}>Users</Link>
        </p>
    </div>
  );
}
