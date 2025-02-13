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
        <span>
          Universidade Nove de Julho -{" "}
          <strong>Análise e Desenvolvimento de Sistemas</strong>
          <br />
          Início: 02/2024 - Conclusão: 08/2026
        </span>
        <br />

        <span>
          ETEC Gildo Marçal Bezerra Brandão -{" "}
          <strong>Técnico em Administração</strong>
          <br />
          Conclusão: 2023
        </span>
        <br />

        <span>
          CNA Jaraguá - <strong>Curso de Inglês (5 anos)</strong>
          <br />
          Início: 03/2020 - Conclusão: 11/2024
        </span>
        <br />

        <span>
          Udemy -{" "}
          <strong>Curso de JavaScript e TypeScript (Básico ao Avançado)</strong>
        </span>
        <br />

        <span>
          Udemy -{" "}
          <strong>Laravel 11: Framework, Ecossistema e Projetos Web</strong>
        </span>
        <br />

        <span>
          Udemy -{" "}
          <strong>Algoritmos e Lógica de Programação - O Curso COMPLETO</strong>
        </span>
      </div>
    </div>
  );
}
