// Les six témoignages d'origine venaient du template et nommaient des clients
// qui n'existent pas. Ils ont été retirés : publier de faux avis est une
// pratique commerciale trompeuse (art. L121-2 code de la consommation) et un
// motif de suspension de fiche Google Business Profile.
//
// À réalimenter avec de vrais avis — les avis Google, une fois la fiche
// validée, sont la source la plus simple et la plus vérifiable.
export const testimonials: {
  name: string;
  content: string;
  designation?: string;
  avatar: string;
}[] = [];
