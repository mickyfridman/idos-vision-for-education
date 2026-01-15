const QuoteSection = () => {
  return (
    <section className="py-20 gradient-sand">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <svg 
            className="w-16 h-16 mx-auto mb-8 text-primary/30" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-4xl font-display text-earth leading-relaxed">
            אם כולם ידעו לפחות רבע ממה שאני יודע – הצלחתי.
          </blockquote>
          <div className="mt-8 h-1 w-24 bg-terracotta mx-auto rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
