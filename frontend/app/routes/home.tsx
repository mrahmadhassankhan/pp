import Features from "~/components/Features/features";
import type { Route } from "./+types/home";
import Hero from "~/components/Hero/hero";
import HowItWorks from "~/components/HowItWorks/howItWorks";
import Faqs from "~/routes/Faqs/faqs";
import Reviews from "~/components/Reviews/reviews";
import CookieConsent from "~/components/cookieConsent/cookieConsent";

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
        <Features />
        <HowItWorks />
        <Reviews />
        <Faqs />
        <CookieConsent />
      </div>
    </>
  );
}
