import idoImage from "@/assets/ido-reis.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-kibbutz flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-wheat/20 rounded-full blur-2xl" />
              <img
                src={idoImage}
                alt="עידו רייס"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-wheat/30 shadow-earth"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-right space-y-6">
            <h1 
              className="text-5xl md:text-7xl font-display text-wheat opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              עידו רייס
            </h1>
            <p 
              className="text-xl md:text-2xl text-wheat/80 font-light opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              מועמד לתפקיד מנהלת החינוך
            </p>
            <p 
              className="text-2xl md:text-3xl text-terracotta font-display opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              קיבוץ להבות חביבה
            </p>
          </div>
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
