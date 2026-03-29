import { motion } from "framer-motion";
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
    <section id="faq" className="py-32 lg:py-48 bg-background border-t border-border/10 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-20 lg:gap-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6 block">Questions</span>
            <h2 className="heading-section text-foreground sticky top-40 mb-10">
              Technical <br /> <span className="italic">Details</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-b border-border/30 last:border-0 p-0">
                    <AccordionTrigger className="font-serif text-2xl md:text-3xl font-light text-left py-10 hover:no-underline hover:text-primary transition-all duration-500 group">
                      <span className="flex items-center gap-6">
                        <span className="text-[10px] tracking-widest text-primary/30 group-hover:text-primary transition-colors">0{index + 1}</span>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground body-elegant pb-10 pl-16">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
