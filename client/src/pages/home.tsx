import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import HistoriaSection from "@/components/historia-section";
import FotosSection from "@/components/fotos-section";
import ExperienciasSection from "@/components/experiencias-section";
import RelatosSection from "@/components/relatos-section";
import FormularioSection from "@/components/formulario-section";
import OrganizadorSection from "@/components/organizador-section";
import HorariosSection from "@/components/horarios-section";
import LocalizacaoSection from "@/components/localizacao-section";
import ContatosSection from "@/components/contatos-section";
import RedesSociaisSection from "@/components/redes-sociais-section";
import Footer from "@/components/footer";
import Videos from "@/components/videos";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HistoriaSection />
      <FotosSection />
      <ExperienciasSection />
      <RelatosSection />
      <FormularioSection />
      <Videos />
      <OrganizadorSection />
      <HorariosSection />
      <LocalizacaoSection />
      <ContatosSection />
      <RedesSociaisSection />
      <Footer />
    </div>
  );
}
