
import Image from "next/image";

interface ExperienceItemProps {
  logo: string;
  alt: string;
  time: string;
}

export function ExperienceItem({ logo, alt, time }: ExperienceItemProps) {
  return (
    <div className="experience-language">
      <Image src={logo} alt={alt} width={40} height={40} priority />
      <div className="experience-unit">
        <div className="experience-measure measure-1">{time}</div>
      </div>
    </div>
  );
}
