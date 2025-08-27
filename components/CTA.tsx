import Link from "next/link";
import React from "react";
import Button from "./Button";

export const CTA = ({ headerText, bodyText }: any) => {
  return (
    <div className="relative bg-gradient-to-br from-building-800 via-building-700 to-building-900 w-full text-white min-h-96 h-full overflow-hidden pb-4 shadow-2xl">
      {/* Effet de grille subtil */}
      <div
        className="absolute inset-0 opacity-10 bg-grid-white/10"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 20%, white 50%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 20%, white 50%, transparent 80%)",
        }}
      ></div>
      
      {/* Gradient overlay pour plus de profondeur */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      {/* Effet lumineux orange */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-secondary/15 to-transparent rounded-full blur-2xl"></div>

      <div className="lg:grid lg:grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-20 max-w-6xl mx-auto relative z-20">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold my-6 text-center bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {headerText || `Prêt à démarrer votre projet ?`}
          </h2>
          <p className="my-6 text-lg md:text-xl tracking-wide font-light text-center max-w-2xl mx-auto text-gray-200 leading-relaxed">
            {bodyText ||
              `Contactez GD Construction pour un devis gratuit et personnalisé. Notre équipe d'experts vous accompagne de A à Z dans tous vos projets de construction et rénovation.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button as="button" variant="large" className="rounded-2xl py-3 px-8 bg-primary hover:bg-secondary text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Devis Gratuit</span>
                <span>📋</span>
              </Link>
            </Button>
            <a
              href="tel:0695918103"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center space-x-2 hover:shadow-lg"
            >
              <span>📞</span>
              <span>06 95 91 81 03</span>
            </a>
          </div>
          
          {/* Badge zone d'intervention */}
          <div className="flex justify-center mt-8">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
              <p className="text-sm font-medium text-gray-200">
                📍 Pamfou et 50km (77, 91, 94 et limitrophes) • Devis gratuit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
