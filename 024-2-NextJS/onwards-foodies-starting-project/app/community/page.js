import Link from "next/link";

export default function Community() {
  return (
    <main>
      <p>This is the Community page</p>
      <p>
        <Link href={"/meals"}> Meals page</Link>
      </p>
      <p>
        <Link href={"/"}> Home page</Link>
      </p>
    </main>
  );
}
