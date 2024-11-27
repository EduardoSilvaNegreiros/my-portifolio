import "./globals.scss";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], 
  weight: ['400', '500', '600'] 
});

export const metadata = {
  title: "Eduardo Negreiros",
  description: "Eduardo Negreiros...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
