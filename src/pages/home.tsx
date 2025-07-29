import { Navbar } from "@/components/navbar";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { CTABanner } from "@/components/cta-banner";
import { HeroNew } from "@/components/sections/hero-new";
import { ServicesNew } from "@/components/sections/services-new";
import { WhyUs } from "@/components/sections/why-us";
import { BrandLogos } from "@/components/sections/brand-logos";
import { Products } from "@/components/sections/products";
import { Features } from "@/components/sections/features";
import { ContactNew } from "@/components/sections/contact-new";
import { Reviews } from "@/components/sections/reviews";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={localBusinessSchema} />
      <Navbar />
      <main>
        <HeroNew />
        <ServicesNew />
        <WhyUs />
        <CTABanner variant="primary" />
        <BrandLogos />
        <Products />
        <Features />
        <Reviews />
        <CTABanner 
          variant="secondary" 
          title="Ervaar het Verschil van StayCool" 
          subtitle="Join 163+ tevreden klanten in Limburg die genieten van perfect klimaatcomfort"
        />
        <FAQ />
        <ContactNew />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}