import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = "אני תומך/ת בעידו רייס לתפקיד מנהל החינוך בקיבוץ להבות חביבה! 🌱";

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
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
            onClick={handleFacebookShare}
            size="lg"
            className="bg-[#1877F2] hover:bg-[#166FE5] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <Share2 className="w-5 h-5" />
            שתף בפייסבוק
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
