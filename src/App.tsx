import "./App.css";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Join from "./components/Join";
//import Background from "./components/Background";
import Particles from './components/Particles';
import BannerText from "./components/BannerText";
import GradientText from './components/GradientText';
import Footer from "./components/Footer"; // <-- import Footer

function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar />
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1  }}>
  <Particles
    particleColors={['#00ff00', '#0fc430']}
    particleCount={750}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={true}
  />
</div>

      {/* Floating Navbar */}
      

      {/* Logo */}
      
        <Logo />
      

      {/* Banner centered */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          lineHeight: "1.2",
          color: "black",
          marginTop: "80px",
        }}
      >
        
          <GradientText
            colors={["grey", "white", "grey", "white", "grey"]}
            animationSpeed={8}
            showBorder={false}
            className="custom-class"
          >
            Empowering Students <br />
            Through
          </GradientText>
        
        <BannerText
          texts={["Technology", "Innovation", "Knowledge"]}
          rotationInterval={2500}
          splitBy="words"
          elementLevelClassName="rotating-word"
        />
      </div>

        <Join />
      

      <Footer />
    </div>
  );
}

export default App;
