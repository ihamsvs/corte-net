
import { CorteNetFeatures } from "./components/CorteNetFeatures";

import { HeroSection } from "./components/hero-section";
import { InfoCards } from "./components/info-cards";

export default function Home() {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <main className="container mx-auto px-6 py-16">
        <HeroSection/>
        <div className="grid lg:grid-cols-1 gap-12 items-center max-w-6xl mx-auto">
          <CorteNetFeatures/>
          <InfoCards/>
        </div>
      </main>
    </div>
  );
}
