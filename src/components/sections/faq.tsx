import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Wat zijn de kosten van een airco installatie?",
    answer: "De kosten van een airco installatie zijn afhankelijk van verschillende factoren zoals het type unit, de grootte van de ruimte en de complexiteit van de installatie. Onze prijzen beginnen vanaf €1.799,- voor een complete installatie inclusief montage. Neem contact met ons op voor een exacte prijsopgave op maat."
  },
  {
    question: "Hoe lang duurt een airco installatie?",
    answer: "Een standaard airco installatie duurt gemiddeld 4-6 uur. Bij complexere installaties of bij een multi-split systeem kan dit oplopen tot een hele werkdag. We zorgen ervoor dat de installatie netjes en professioneel wordt uitgevoerd met minimale overlast."
  },
  {
    question: "Is een airco energiezuinig?",
    answer: "Moderne Mitsubishi Electric airconditioners zijn zeer energiezuinig met energielabel A+++. Ze verbruiken gemiddeld 0,5-1 kWh per uur bij koelen. Door gebruik te maken van de Human Sensor en slimme functies kunt u het energieverbruik verder optimaliseren."
  },
  {
    question: "Hoe vaak moet een airco onderhouden worden?",
    answer: "We adviseren om uw airco jaarlijks te laten onderhouden voor optimale prestaties en een langere levensduur. Bij intensief gebruik kan twee keer per jaar onderhoud raadzaam zijn. Tijdens het onderhoud reinigen we de filters, controleren we het systeem en vullen indien nodig het koudemiddel bij."
  },
  {
    question: "Kan een airco ook verwarmen?",
    answer: "Ja, alle Mitsubishi Electric airconditioners die wij installeren zijn warmtepompen die zowel kunnen koelen als verwarmen. In de verwarmingsstand zijn ze zeer efficiënt en kunnen ze tot wel 4-5 keer zoveel warmte produceren als de elektriciteit die ze verbruiken."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Veelgestelde vragen
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}