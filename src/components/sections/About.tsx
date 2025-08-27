import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const highlights = [
  "Professionally trained team with international standards",
  "Hotel-inspired service experience",
  "High-end, commercial-grade equipment and facility",
];

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative w-full h-[360px] sm:h-[480px] lg:h-full rounded-xl overflow-hidden">
            <Image
              src="/hero-background.jpg" // Replace with your real image
              alt="A7 Laundry Facility"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">
              About Us
            </h2>
            <p className="text-4xl font-bold max-w-md tracking-tight leading-normal sm:text-5xl">
              Brazilian expertise, Orlando service
            </p>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              A7 Laundry brings its successful laundry model from Brazil
              directly to Winter Garden, Orlando. We blend technology, smart
              processes, and a human touch to deliver an exceptional laundry
              experience.
            </p>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              Our mission is simple: treat your clothes as if they were our
              own—with speed, care, and results that speak for themselves.
            </p>

            {/* Highlights */}
            <ul className="mt-8 space-y-4">
              {highlights.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                  <span className="text-base text-zinc-800">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
<<<<<<< HEAD
<a 
  href="tel:+1(689)407-2015" 
  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
>
  📞 call now
</a>

=======
>>>>>>> 263a8605d642bb2afda33bb661c3da41d3fe6a3c

export default About;
