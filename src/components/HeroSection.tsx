import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="רקע"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 
            className="text-5xl md:text-7xl font-display text-wheat opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            עידו רייס
          </h1>
          <p 
            className="text-xl md:text-3xl text-wheat/80 font-light opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            מועמד לתפקיד מנהלת החינוך של קיבוץ להבות חביבה
          </p>
          
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg 
            className="w-8 h-8 text-wheat/60" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
