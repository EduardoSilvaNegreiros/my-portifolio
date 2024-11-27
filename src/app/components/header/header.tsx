import Image from "next/image";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi I`m Eduardo</h1>
        <h1>Software Engineer</h1>
      </div>
      
      <Image
        src="/vercel.svg"
        alt="Vercel logo"
        width={100}
        height={24}
        priority
      />
    </div> 
  );
}
