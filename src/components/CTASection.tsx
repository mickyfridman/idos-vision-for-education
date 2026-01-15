import { Send, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const handleWhatsAppMessage = () => {
    window.open('https://wa.me/972505922752?text=שלום%20עידו,%20אני%20רוצה%20לתמוך%20בך%20לתפקיד%20מנהלת%20החינוך', '_blank');
  };

  return (
    <section className="py-24 gradient-kibbutz">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display text-wheat">
            תמכו בעידו!
          </h2>
          <p className="text-xl text-wheat/80">
            שתפו והיו שותפים לעתיד החינוך בלהבות חביבה
          </p>
          
          <Button 
            onClick={handleWhatsAppMessage}
            size="lg"
            className="bg-[#1877F2] hover:bg-[#166FE5] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Send className="w-5 h-5" />
שלחו לעידו הודעת תמיכה          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
