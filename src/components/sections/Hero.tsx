import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: "url('/hero-background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-md leading-tight max-w-5xl mx-auto">
          Premium laundry in Winter Garden with free pickup & delivery!
        </h1>

        <p className="text-lg md:text-xl text-zinc-100 max-w-3xl mx-auto mb-10 drop-shadow-sm leading-relaxed">
          Get your clothes clean, fresh, and perfectly folded without leaving
          your home. A7 Laundry brings its proven Brazilian expertise to
          revolutionize your routine in Orlando.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Call Now Button */}
          <Link
            href="tel:+16894072015"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              Call Now 📞
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
