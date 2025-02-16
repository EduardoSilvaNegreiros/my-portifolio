// components/experience/experience.tsx
import { SectionTitle } from "../sectionTitle/section-title";
import { ExperienceItem } from "../experience/experienceItem"; // Importando o novo componente
import "./experience.scss";

export function Experience() {
  const experienceData = [
    { logo: "/reactLogo.png", alt: "React logo", time: "1 ano" },
    { logo: "/node.png", alt: "Node logo", time: "1 ano" },
    { logo: "/TypescriptLogo.png", alt: "Typescript logo", time: "1 ano" },
    { logo: "/js.png", alt: "Js logo", time: "1 ano" },
    { logo: "/csharp.png", alt: "C# logo", time: "1 ano" },
    { logo: "/html.png", alt: "HTML logo", time: "1 ano" },
    { logo: "/css.png", alt: "CSS logo", time: "1 ano" },
    { logo: "/php.png", alt: "PHP logo", time: "1 ano" },
    { logo: "/laravel.png", alt: "Laravel logo", time: "6 meses" },
  ];

  return (
    <div className="experience">
      <SectionTitle text="Experiência" />
      <p>
        Atualmente, desenvolvo minhas habilidades por meio de hackathons,
        projetos acadêmicos e pessoais, além de cursos online, adquirindo
        experiência prática e aprofundando meus conhecimentos na área.
      </p>

      <div className="experience-time">
        {experienceData.map((item, index) => (
          <ExperienceItem
            key={index}
            logo={item.logo}
            alt={item.alt}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
}
