import type { Route } from "./+types/home";
import Hero from "~/components/Hero/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-primary">
        <Hero />
      </div>
    </>
  );
}
