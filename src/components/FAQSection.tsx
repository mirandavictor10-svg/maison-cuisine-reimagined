import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does it cost to book Maison Cuisine for a wedding?",
    answer:
      "Since each wedding we do is bespoke, pricing varies widely. You can expect wedding packages to start at around $200 per person.",
  },
  {
    question: "What is included in the pricing?",
    answer:
      "We provide everything needed for a seamless food and beverage experience. That includes all the plate ware, flatware, service ware, and glassware. Meaning you don't have to worry about third-party rental costs. We provide a team of leading hospitality experts to ensure that service is effortless and thoughtful.",
  },
  {
    question: "How many people can you serve?",
    answer:
      "Currently, we are limiting Fine Dining Experiences to 200 guests and Shared Family Style Service to 300 guests in order to maintain quality.",
  },
  {
    question: "What is needed to secure a date?",
    answer:
      "After an initial consultation, we require a 50% deposit that is refundable up until 28 days prior to your event.",
  },
  {
    question: "Do you offer tastings?",
    answer:
      "After booking with us and planning their menu, the couple will be treated to a private dinner that will include all food and beverage they and their guests will experience on the big day.",
  },
  {
    question: "Do you accommodate food allergies?",
    answer:
      "Yes. We accommodate all food allergies and dietary restrictions. We also offer vegetarian and vegan menus.",
  },
  {
    question: "Do you have an event space?",
    answer:
      "We do not have our own event space. We have established relationships with a selection of beautiful venues and find that most spaces are willing to work with us if asked.",
  },
  {
    question: "Will you travel for weddings?",
    answer:
      "Absolutely. We have catered weddings across the country and internationally. Travel and accommodation fees may apply for destination events.",
  },
];

const FAQSection = () => {
  return (
    <section id="weddings" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <h2 className="heading-section text-foreground sticky top-32">
              FAQs
            </h2>
          </div>

          {/* Right Column - Questions */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                  <AccordionTrigger className="font-serif text-xl md:text-2xl font-normal text-left py-6 hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
