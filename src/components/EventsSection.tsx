import eventsHero from "@/assets/events-hero.jpg";
import QuestionnaireDialog from "./QuestionnaireDialog";

const EventsSection = () => {
  const eventTypes = [
    {
      title: "Private Celebrations",
      description: "Birthday parties, anniversaries, and intimate gatherings crafted with care.",
    },
    {
      title: "Social Events",
      description: "Galas, fundraisers, and community celebrations that bring people together.",
    },
    {
      title: "Holiday Gatherings",
      description: "Festive menus and seasonal specialties for your holiday occasions.",
    },
    {
      title: "Milestone Events",
      description: "Graduations, retirements, and life's special moments deserve exceptional cuisine.",
    },
  ];

  return (
    <section id="events" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero Image */}
        <div className="relative mb-16 overflow-hidden rounded-sm">
          <img
            src={eventsHero}
            alt="Elegant outdoor event reception"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <h2 className="heading-section text-white mb-4">
              Private & Social Events
            </h2>
            <p className="body-elegant text-white/90 max-w-2xl">
              From intimate dinner parties to grand celebrations, we create 
              unforgettable culinary experiences for every occasion.
            </p>
          </div>
        </div>

        {/* Event Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-serif text-foreground mb-3">
                {event.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <QuestionnaireDialog>
            <button className="btn-elegant">
              Plan Your Private Event
            </button>
          </QuestionnaireDialog>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
