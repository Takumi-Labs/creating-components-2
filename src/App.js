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

// import "./App.css";
// import Card from "./components/Card";

// function App() {
//   return (
//     <div>
//       <h1>Task: Add three Card elements</h1>
//       <Card h2="First card's h2" h3="First card's h3" />
//       <Card h2="Second card's h2" h3="Second card's h3" />
//       <Card h2="Third card's h2" h3="Third card's h3" />
//     </div>
//   );
// }

// export default App;
