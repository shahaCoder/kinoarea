import { Inter } from "@next/font/google";
import Link from "next/link";
import Footer from "./Footer";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });
interface Layout {
  children: React.ReactNode;
}

const Layouts: React.FC<Layout> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(29, 37, 56, 255)'
    }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;
