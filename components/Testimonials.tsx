import { testimonials } from "constants/testimonials";
import React from "react";
import { BlurImage } from "./BlurImage";

type Testimonial = {
  name: string;
  content: string;
  designation?: string;
  avatar?: string;
};
export const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 md:py-40 relative group overflow-hidden"
    >
      {/* Effet de fond dégradé avec couleurs de la marque */}
      <div className="absolute inset-0 bg-gradient-to-br from-building-50/30 via-transparent to-primary/5"></div>
      
      {/* Bulles lumineuses */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/10 blur-3xl rounded-full opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-building-200/40 to-primary/10 blur-3xl rounded-full opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl rounded-full"></div>
      
      {/* Motif géométrique subtil */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #f97316 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, #f97316 2px, transparent 2px)`,
        backgroundSize: '60px 60px'
      }}></div>
      <div className="max-w-xl md:mx-auto md:text-center xl:max-w-none relative z-10">
        <h2 className="font-display text-3xl tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
          Ce que disent nos clients
        </h2>
        <p className="mt-6 text-lg tracking-tight  text-zinc-600">
          La satisfaction de nos clients fait notre fierté. Découvrez leurs témoignages 
          sur nos réalisations de maçonnerie et rénovation.
        </p>
      </div>

      <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 mt-20 relative z-10">
        {testimonials.map((testimonial: Testimonial, idx: number) => (
          <TestimonialCard key={`testimonial-${idx}`} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({
  name,
  content,
  designation,
  avatar,
}: Testimonial) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl px-8 py-12 rounded-2xl border border-white/50 flex-1 mb-6 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group">
      {/* Effet de brillance au hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Bordure colorée */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
      
      <div className="relative z-10">
        <p className="text-xl md:text-2xl font-normal text-zinc-700 leading-relaxed">
          {content}
        </p>

        <div className="flex flex-row space-x-2 mt-8">
          <BlurImage
            src={avatar}
            height="40"
            width="40"
            className="rounded-full border-2 border-primary/20 shadow-lg"
          />

          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-800">{name}</p>
            <p className="text-xs text-primary">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
