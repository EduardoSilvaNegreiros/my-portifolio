import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span>EN - Intermediário</span>
        <span>BR - Nativo</span>
      </div>

      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>
          Universidade Nove de Julho -{" "}
          <strong>Análise e Desenvolvimento de Sistemas</strong>
        </span>
        <span>
          CNA Jaraguá - <strong>Curso de Inglês (5 anos)</strong>
        </span>
      </div>
    </div>
  );
}
