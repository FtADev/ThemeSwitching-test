import ThemeToggle from "./ThemeToggle";

export default function Home() {
  return (
    <main className="bg-primary flex min-h-screen flex-col items-center justify-between p-24 ">
    <ThemeToggle/>

    <h1
    className="text-secondary text-4xl font-bold"
    >This is a test project</h1>
    </main>
  );
}
