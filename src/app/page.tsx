import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import AgentTypes from "@/components/AgentTypes";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import Pipeline from "@/components/Pipeline";
import AdvertisingEngine from "@/components/AdvertisingEngine";
import CRMIntegration from "@/components/CRMIntegration";
import DocumentIntelligence from "@/components/DocumentIntelligence";
import MarketResearch from "@/components/MarketResearch";
import BusinessAdmin from "@/components/BusinessAdmin";
import SecretMethod from "@/components/SecretMethod";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <AgentTypes />
      <Features />
      <DashboardPreview />
      <Pipeline />
      <AdvertisingEngine />
      <CRMIntegration />
      <DocumentIntelligence />
      <MarketResearch />
      <BusinessAdmin />
      <SecretMethod />
      <Pricing />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
