import gallery2 from "@/assets/gallery-2.jpg";
import QuestionnaireDialog from "./QuestionnaireDialog";

const CorporateSection = () => {
  const services = [
    {
      title: "Executive Dinners",
      description: "Impress clients and partners with sophisticated multi-course dining experiences.",
    },
    {
      title: "Team Events",
      description: "Build company culture with memorable culinary team-building experiences.",
    },
    {
      title: "Product Launches",
      description: "Make a statement with innovative catering that matches your brand vision.",
    },
    {
      title: "Board Meetings",
      description: "Elevated catering services for your most important business discussions.",
    },
    {
      title: "Conference Catering",
      description: "Full-service solutions for multi-day events and large-scale conferences.",
    },
    {
      title: "Holiday Parties",
      description: "Celebrate your team's achievements with festive, memorable gatherings.",
    },
  ];

  return (
    <section id="corporate" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={gallery2}
              alt="Elegant corporate dinner setting"
              className="w-full h-[600px] object-cover rounded-sm shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="heading-section text-foreground mb-6">
              Corporate Excellence
            </h2>
            <div className="section-divider mb-8 mx-0" />
            <p className="body-elegant text-muted-foreground mb-10">
              Elevate your corporate events with culinary experiences that reflect 
              your company's commitment to excellence. We understand that business 
              events require precision, professionalism, and impeccable service.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-serif text-lg text-foreground mb-1">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <QuestionnaireDialog>
              <button className="btn-elegant">
                Plan Your Corporate Event
              </button>
            </QuestionnaireDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
