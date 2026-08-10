import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Videos from "@/components/sections/videos";
import Pricing from "@/components/sections/pricing";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Videos />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
