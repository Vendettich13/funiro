import "./fonts/Gilroy/Gilroy-Bold.ttf";
import "./fonts/Gilroy/Gilroy-Medium.ttf";
import "./fonts/Gilroy/Gilroy-Regular.ttf";
import "./fonts/Gilroy/Gilroy-Semibold.ttf";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Feature } from "./components/Feature/Feature";
import { ProductList } from "./components/Products/ProductList";
import { Gallery } from "./components/Gallery/Gallery";
import { Tips } from "./components/Tips/Tips";
import { Massonry } from "./components/Massonry/Massonry";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <>
      <section>
        <Header />
        <Hero />
      </section>
      <main>
        <Feature />
        <ProductList />
        <Gallery />
        <Tips />
        <Massonry />
      </main>
      <Footer />
    </>
  );
};
