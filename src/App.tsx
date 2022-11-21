import { Box, Button } from "@chakra-ui/react";
import NavbarComponent from "./Component/Navbar/NavbarComponent";
import PortfolioComponent from "./Component/Portfolio/PortfolioComponent";
import "./App.css"
import HomeComponent from "./Component/HomePage/HomeComponent";
import ContactComponent from "./Component/Contact/ContactComponent";



function App() {
  return (
    <div className="App" style={{ scrollBehavior: "smooth" }}>
      <NavbarComponent/>
      <HomeComponent/>
      <PortfolioComponent/>
      <ContactComponent/>
    </div>
  );
}

export default App;
