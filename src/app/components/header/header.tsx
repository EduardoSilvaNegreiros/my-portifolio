import Image from "next/image";

import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div>
      <h1>Oi, eu sou o Eduardo 👋</h1>
      <h2>Desenvolvedor de Software</h2>
      </div>

      <Image
        src="/perfil.png"
        alt="Vercel logo"
        width={325}
        height={310}
        priority
      />
    </div> 
  );
}
