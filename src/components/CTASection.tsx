import { Send } from "lucide-react";
import idoCta from "@/assets/ido-cta.png";

const CTASection = () => {
  return (
    <section className="py-24 gradient-kibbutz">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display text-wheat">
            תמכו בעידו!
          </h2>
          <p className="text-xl text-wheat/80">
            שתפו והיו שותפים לעתיד החינוך בלהבות חביבה
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img 
              src={idoCta} 
              alt="עידו רייס" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-wheat/30"
            />
            
            <a 
              href="https://wa.me/972505922752?text=שלום%20עידו,%20אני%20רוצה%20לתמוך%20בך%20לתפקיד%20מנהלת%20החינוך" 
              className="bg-[#1877F2] hover:bg-[#166FE5] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-3"
              target="_blank"
            >
              <Send className="w-5 h-5" />
              שלחו לעידו הודעת תמיכה
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
