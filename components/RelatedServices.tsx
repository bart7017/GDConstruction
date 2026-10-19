import { Section } from "./Page";
import { ServicesMosaic } from "./ServicesMosaic";

export const RelatedServices = ({
  slugs,
  title = "Nos autres services complémentaires",
}: {
  slugs: string[];
  title?: string;
}) => (
  <Section title={title}>
    <ServicesMosaic slugs={slugs} />
  </Section>
);
