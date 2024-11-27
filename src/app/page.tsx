import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <main>
    <Image
    src="/vercel.svg"
    alt="Vercel logo"
    width={100}
    height={24}
    priority
    />
   </main>
  );
}
