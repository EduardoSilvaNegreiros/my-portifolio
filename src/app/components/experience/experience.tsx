import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";

import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experiência" />
      <p>
        Atualmente, desenvolvo minhas habilidades por meio de hackathons,
        projetos acadêmicos e pessoais, além de cursos online, adquirindo
        experiência prática e aprofundando meus conhecimentos na área
      </p>
      <div className="experience-time">
        <div className="experience-language">
          <Image
            src="/reactLogo.png"
            alt="React logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">1 ano</div>
          </div>
        </div>
        <div className="experience-language">
          <Image
            src="/node.png"
            alt="Node logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">1 ano</div>
          </div>
        </div>
        <div className="experience-language">
          <Image
            src="/TypescriptLogo.png"
            alt="Typescript logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>1 ano</span>
            </div>
          </div>
        </div>

        <div className="experience-language">
          <Image src="/js.png" alt="Js logo" width={40} height={40} priority />
          <div className="experience-unit">
            <div className="experience-measure measure-1">1 ano</div>
          </div>
        </div>
      </div>
    </div>
  );
}
