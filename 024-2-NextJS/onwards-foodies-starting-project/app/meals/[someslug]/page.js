import Link from "next/link";

export default function SomeSlug({ params }) {
  return (
    <main>
      <p>This is the dynamic meals page</p>
      <Link href={"./"}> Meals page</Link>
      <p>{params.someslug}</p>
    </main>
  );
}
