import Link from "next/link";

export default function SharePage() {
  return (
    <main>
      <p>This is the Share page component</p>
      <p>
        <Link href={"/meals"}> Meals page</Link>
      </p>
      <p>
        <Link href={"/community"}> Community page</Link>
      </p>
    </main>
  );
}
