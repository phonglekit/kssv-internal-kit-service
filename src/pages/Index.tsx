import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Domains from "@/components/Domains";
import Services from "@/components/Services";
import Certificates from "@/components/Certificates";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Domains />
      <Certificates />
      {/* <Partners /> */}
      <About />
      <Footer />
    </div>
  );
};

export default Index;
