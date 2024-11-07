import { TimelineEvent } from "@/components/timeline/timeline-event";

const timelineEvents = [
  {
    year: 1921,
    title: "Oprichting Mitsubishi Electric",
    description: "Mitsubishi Electric wordt opgericht als onderdeel van de Mitsubishi Group, met focus op elektrische apparatuur en innovatie.",
    category: "Oprichting"
  },
  {
    year: 1954,
    title: "Eerste Airconditioner",
    description: "Mitsubishi Electric produceert zijn eerste airconditioner, wat het begin markeert van een lange geschiedenis in klimaatbeheersing.",
    category: "Innovatie"
  },
  {
    year: 1968,
    title: "Internationale Expansie",
    description: "Start van wereldwijde export van airconditioners, waarmee Mitsubishi Electric zijn internationale aanwezigheid vestigt.",
    category: "Expansie"
  },
  {
    year: 1983,
    title: "Inverter Technologie",
    description: "Introductie van de eerste inverter-gestuurde airconditioner, een revolutie in energiebesparing.",
    category: "Mijlpaal"
  },
  {
    year: 1998,
    title: "Kirigamine Serie",
    description: "Lancering van de iconische Kirigamine serie, bekend om zijn superieure prestaties en design.",
    category: "Innovatie"
  },
  {
    year: 2010,
    title: "Revolutionaire SRK Serie",
    description: "Introductie van de SRK serie met geavanceerde functies zoals Human Sensor en Jet Air technologie.",
    category: "Innovatie"
  },
  {
    year: 2017,
    title: "Smart Control Innovatie",
    description: "Introductie van geavanceerde smart control systemen voor alle airconditioners.",
    category: "Technologie"
  },
  {
    year: 2024,
    title: "Next Generation Comfort",
    description: "Lancering van de nieuwste SRK-ZSX serie met verbeterde energieprestaties en comfort features.",
    category: "Innovatie"
  }
];

export function Timeline() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-light/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Pioniers in Klimaattechnologie
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Van de oprichting in 1921 tot de hedendaagse innovaties. Ontdek hoe Mitsubishi Electric 
            de airconditioningmarkt heeft getransformeerd met baanbrekende technologieën.
          </p>
          
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                year={event.year}
                title={event.title}
                description={event.description}
                category={event.category}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}