import Header from "@/src/components/molecules/header/Header";
import Footer from "@/src/components/molecules/footer/Footer";

const MainPage = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen gap-3 min-w-screen">
      {children}
    </main>
  );
};

const Body = ({ children }) => {
  return (
    <section className="flex flex-col items-center justify-center w-auto h-auto">
      {children}
    </section>
  );
};

MainPage.Header = Header;
MainPage.Body = Body;
MainPage.Footer = Footer;

export default MainPage;
