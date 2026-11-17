import Nav from "./components/Nav";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Promo from "./components/Promo";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav name="Nadia" />
      <Intro1 name="Nadia" color="blue" greet="Hey" />
      <Intro2 />
      <Intro3 name="Nadia" />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
