import { User, Briefcase } from "lucide-react";
import idoImage from "@/assets/ido-reis.png";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* About with Profile Image */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-earth border border-border">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-3 bg-primary/20 rounded-full blur-xl" />
                  <img
                    src={idoImage}
                    alt="עידו רייס"
                    className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-primary/30 shadow-earth -scale-x-100"
                    
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display text-primary">אודות עידו</h2>
                </div>
                <div className="space-y-4 text-md text-muted-foreground leading-relaxed">
                  <p>
                    עידו רייס, חבר קיבוץ להבות חביבה, גדל בכפר יונה וחווה על בשרו את כל הרבדים של מערכת החינוך הכפר-יונאית.<br/>
                    כבר מגיל צעיר בלט בכושר ההובלה הטבעי שלו: עוד בכיתה ב' המורים התייעצו איתו כיצד ללמד את הכיתה בצורה יעילה יותר.
                 
                    עידו תמיד נמשך לעולם החינוך וההדרכה, מתוך תשוקה עמוקה לגדל את הדורות הבאים ולהעצים אותם.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Background */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-earth border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-primary">רקע מקצועי</h2>
            </div>
            <div className="space-y-4 text-md text-muted-foreground leading-relaxed">
              <p>
                בעל ניסיון עשיר בניהול צוותי תוכנה בחברת Hailo ובתחומי אבטחה, טכנולוגיה אלחוטית ומערכות חכמות.
              
                רואה בהייטק לא רק קריירה, אלא מנוף חברתי אמיתי לשינוי ושיפור איכות החיים של כל שכבות החברה.
              
                מביא עמו חשיבה חדשנית, יכולת ארגון גבוהה ומיומנויות הדרכה וניהול – כישורים חיוניים להובלת מערכת חינוך קיבוצית מודרנית.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
