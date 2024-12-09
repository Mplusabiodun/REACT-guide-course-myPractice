import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <p>This is the meals page</p>
      <p>
        <Link href={"/community"}> Community page</Link>
      </p>
      <p>
        <Link href={"/"}> Home page</Link>
      </p>
    </main>
  );
}
