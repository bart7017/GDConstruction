import React from "react";
import Image from "next/image";
import { navItems } from "constants/navItems";
import { CustomLink } from "./CustomLink";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineEnvironment,
} from "react-icons/ai";

export const Footer = () => {
  const contacts = [
    {
      name: "Téléphone",
      icon: (
        <AiOutlinePhone className="h-5 w-5 hover:text-primary transition duration-150" />
      ),
      link: "tel:0695918103",
      text: "06 95 91 81 03",
    },
    {
      name: "Adresse",
      icon: (
        <AiOutlineEnvironment className="h-5 w-5 hover:text-primary transition duration-150" />
      ),
      link: "https://maps.google.com/?q=Pamfou+77830",
      text: "77830 Pamfou",
    },
  ];
  
  return (
    <div className="bg-white text-gray-800 py-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-8">
            <Image
              src="/images/GDConstructionLogo.png"
              alt="GD Construction Logo"
              width={320}
              height={320}
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Votre expert en maçonnerie générale et rénovation à Pamfou. 
            Spécialistes tous corps d'état pour un service complet.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              {navItems.map((navItem: any, idx: number) => (
                <CustomLink
                  key={`footer-link-${idx}`}
                  href={navItem.link}
                  className="text-gray-600 hover:text-primary transition-colors block"
                >
                  {navItem.name}
                </CustomLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              {contacts.map((contact: any, idx: number) => (
                <a
                  key={`contact-${idx}`}
                  href={contact.link}
                  className="text-gray-600 hover:text-primary transition-colors flex items-center justify-center space-x-3"
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {contact.icon}
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <div className="space-y-2 text-gray-600">
              <p>• Maçonnerie générale</p>
              <p>• Rénovation intérieure</p>
              <p>• Rénovation extérieure</p>
              <p>• Plomberie</p>
              <p>• Électricité</p>
              <p>• Couverture</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm mb-2">
              © {new Date().getFullYear()} GD Construction. Tous droits réservés.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 text-gray-400 text-xs">
              <a href="/mentions-legales" className="hover:text-primary transition-colors">
                Mentions légales
              </a>
              <span className="hidden sm:inline">•</span>
              <span>Politique de confidentialité</span>
              <span className="hidden sm:inline">•</span>
              <span>RGPD</span>
            </div>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <p className="text-gray-500 text-sm text-center">
              SIRET : À venir • Assurance décennale
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
