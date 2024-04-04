import Footer from "@/components/Footer";
import Headline from "@/components/Headline";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Headline />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
