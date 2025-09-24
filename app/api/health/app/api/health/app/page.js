async function getHealth() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/health`, { cache: "no-store" });
  return res.json();
}
export default async function Page() {
  const json = await getHealth();
  return (
    <main style={{padding:20,fontFamily:"system-ui"}}>
      <h1>Health Check</h1>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </main>
  );
}
