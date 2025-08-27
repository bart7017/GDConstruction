import { AiFillHome, AiOutlineTool } from "react-icons/ai";
import { BsBuilding, BsTools } from "react-icons/bs";
import { GiConcreteBag, GiFloorHatch } from "react-icons/gi";
import { MdElectricalServices, MdPlumbing, MdRoofing } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";

export const features = [
  {
    heading: "Maçonnerie Générale",
    description:
      "Construction de murs, dalles béton, fondations, extensions et tous travaux de gros œuvre. Notre expertise technique garantit la solidité et la durabilité de vos projets.",
    icon: <GiConcreteBag className="text-primary h-6 w-6 relative z-50" />,
    link: "/services/maconnerie-generale"
  },
  {
    heading: "Rénovation Intérieure",
    description:
      "Rénovation complète de cuisine, salle de bain, création d'espaces et aménagements intérieurs. Nous transformons votre habitat selon vos envies.",
    icon: <AiFillHome className="text-primary h-6 w-6 relative z-50" />,
    link: "/services/renovation-interieure"
  },
  {
    heading: "Plomberie",
    description:
      "Installation, réparation et maintenance de systèmes de plomberie. Création de salles de bains, mise aux normes et dépannage d'urgence.",
    icon: <MdPlumbing className="text-primary h-6 w-6 relative z-50" />,
    link: "/services/plomberie"
  },
  {
    heading: "Électricité",
    description:
      "Installation électrique, mise aux normes, dépannage et création de tableaux électriques. Votre sécurité électrique est notre priorité.",
    icon: <MdElectricalServices className="text-primary h-6 w-6 relative z-50" />,
    link: "/services/electricite"
  },
  {
    heading: "Couverture",
    description:
      "Réfection de toitures, démoussage, zinguerie et isolation. Protection complète de votre habitat contre les intempéries.",
    icon: <MdRoofing className="text-primary h-6 w-6 relative z-50" />,
    link: "/services/couverture"
  },
  {
    heading: "Carrelage & Sols",
    description:
      "Pose de carrelage, parquet, sols souples. Finitions de qualité pour sublimer vos espaces intérieurs et extérieurs.",
    icon: <GiFloorHatch className="text-primary h-6 w-6 relative z-50" />,
    link: "/services/carrelage-sols"
  },
  {
    heading: "Pompe à Chaleur & Climatisation",
    description:
      "Installation de pompes à chaleur air-air, air-eau et systèmes de climatisation. Solutions énergétiques performantes pour votre confort thermique.",
    icon: <TbAirConditioning className="text-primary h-6 w-6 relative z-50" />,
    link: "/services/pompe-chaleur-climatisation"
  },
];
