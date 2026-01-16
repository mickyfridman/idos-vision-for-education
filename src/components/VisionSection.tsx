import { Lightbulb, Laptop, Users, School, Sparkles } from "lucide-react";

const visionPoints = [
  {
    icon: School,
    text: "אחריות וחירות – כל ילד לומד לקחת אחריות אישית תוך חירות יצירתית וביטוי עצמי",
  },
  {
    icon: Laptop,
    text: "טכנולוגיה משלבת – שילוב חכם ומאוזן של דיגיטל וטכנולוגיה ככלי העצמה ולא כמטרה בפני עצמה",
  },
  {
    icon: Users,
    text: "רוח קהילתית – חיזוק השייכות, הכבוד ההדדי והערבות ההדדית בין ילדים, משפחות וקהילה",
  },
  {
    icon: Sparkles,
    text: "חוסן – בניית חוסן רגשי, חברתי ולימודי שמכין את הילדים לעולם דינמי ומאתגר",
  },
];

const VisionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-primary mb-6">חזון לתפקיד</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              עידו מאמין שתפקיד מנהל החינוך הוא להנגיש ידע, לעורר סקרנות ולתת לכל ילד וילדה בקיבוץ את הכלים למצות את הפוטנציאל האישי שלהם.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              החזון של עידו מבוסס על ראשי תיבות <strong>אטר״ח</strong>:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {visionPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-earth transition-shadow duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-olive-light/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg text-foreground">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
