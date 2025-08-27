import React from "react";
import {
  MapPinIcon,
  ClockIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Button from "../ui/Button"; // Assuming you have the Button component

// Define social links (using text links for simplicity without specific icons)
const socialLinks = [
  {
    name: "Instagram",
    ariaLabel: "Follow A7 Laundry on Instagram",
    link: "https://www.instagram.com/a7laundry/",
  },
  {
    name: "Google Reviews",
    ariaLabel: "Read A7 Laundry Google Reviews",
    link: "https://www.google.com/search?q=A7+Laundry+Winter+Garden+FL#lrd=0x88e8e91e92e9b5bb:0xe3baf39952489c9a,1,,,", // Example link (replace with actual)
  },
];

// Direct Google Maps link for the address
const googleMapsLink =
  "https://www.google.com/maps/search/?api=1&query=10097+Tuller+Loop,+Winter+Garden,+FL+34787";
// WhatsApp link (replace with your actual number in international format without + or spaces)
const whatsappNumber = "14076708839"; // EXAMPLE NUMBER - REPLACE
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20A7%20Laundry!%20I'd%20like%20to%20know%20more%20about%20your%20services.`; // Pre-filled message

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-zinc-50 py-16 sm:py-24 scroll-mt-16">
      {/* ID and scroll margin */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 mb-4">
            <PhoneIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-6 text-lg text-zinc-700 leading-relaxed">
            Ready to experience the A7 difference? Reach out today or find us
            here.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Column 1: WhatsApp (Primary Contact) */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-zinc-100">
            <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">
<<<<<<< HEAD
              Number Phone
            </h3>
            <p className="text-zinc-600 mb-5 flex-grow">
              The quickest way to get answers or schedule your pickup. 📞 (689)407-2015
            </p>
            <a href="tel:+1(689)407-2015">
              <Button variant="primary" size="lg" className="w-full">
                CALL NOW
=======
              Chat on WhatsApp
            </h3>
            <p className="text-zinc-600 mb-5 flex-grow">
              The quickest way to get answers or schedule your pickup. Tap
              below!
            </p>
            <a href={whatsappLink} rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="w-full">
                Talk to a Specialist
>>>>>>> 263a8605d642bb2afda33bb661c3da41d3fe6a3c
              </Button>
            </a>
          </div>

          {/* Column 2: Address & Map */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-zinc-100">
            <MapPinIcon className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">
              Our Location
            </h3>
            <address className="text-zinc-600 not-italic mb-5 flex-grow">
              10097 Tuller Loop
              <br />
              Winter Garden, FL 34787
            </address>
<<<<<<< HEAD
          
=======
>>>>>>> 263a8605d642bb2afda33bb661c3da41d3fe6a3c

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="secondary" className="w-full">
                View on Google Maps
              </Button>
            </a>
          </div>

          {/* Column 3: Hours & Social */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-zinc-100">
            <ClockIcon className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">
              Opening Hours
            </h3>
            <p className="text-zinc-600 mb-6 flex-grow">
              Every day
              <br />
              7:00 AM – 10:00 PM
            </p>

            {/* Social Links */}
            <div className="w-full pt-6 border-t border-zinc-200">
              <h4 className="text-md font-medium text-zinc-500 mb-3">
                Follow Us
              </h4>
              <div className="flex justify-center space-x-5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="text-zinc-500 hover:text-blue-600 transition-colors duration-150 hover:cursor-pointer"
                  >
                    {link.name} {/* Displaying name instead of icons */}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final Call to Action - Book Pickup via WhatsApp */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-6">
            Ready for effortless laundry?
          </h3>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg">
              Book Your Pickup Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
