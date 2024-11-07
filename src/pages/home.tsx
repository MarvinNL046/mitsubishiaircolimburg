import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { ContactForm } from "@/components/sections/contact-form";
import { Benefits } from "@/components/sections/benefits";
import { Reviews } from "@/components/sections/reviews";
import { Timeline } from "@/components/sections/timeline";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd schema={organizationSchema} />
      <JsonLd schema={localBusinessSchema} />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Timeline />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}