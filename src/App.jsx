import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefit from "./components/Benefit";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefit />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
