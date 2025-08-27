import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

// WhatsApp Info
const whatsappNumber = "14076708839"; // No plus sign

const specialistMessage = encodeURIComponent(
  "Hi! I'm interested in learning more about your laundry services. Can I speak with a specialist?"
);
const scheduleMessage = encodeURIComponent(
  "Hello! I'd like to schedule a laundry pickup. Can you help me with that?"
);

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
          {/* Schedule Now Button */}
          <Link
<<<<<<< HEAD
            href="tel:+1(689)407-2015"
=======
            href={`https://wa.me/${whatsappNumber}?text=${scheduleMessage}`}
>>>>>>> 263a8605d642bb2afda33bb661c3da41d3fe6a3c
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
<<<<<<< HEAD
              Call Now 📞
            </Button>
          </Link>

         
=======
              Schedule Now
            </Button>
          </Link>

          {/* Talk to Specialist Button */}
          <Link
            href={`https://wa.me/${whatsappNumber}?text=${specialistMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg">
              Talk to a Specialist
            </Button>
          </Link>
>>>>>>> 263a8605d642bb2afda33bb661c3da41d3fe6a3c
        </div>
      </div>
    </section>
  );
};

export default Hero;
