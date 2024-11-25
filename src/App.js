import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Allroutes from "./routes/Allroutes";
 

function App() {
  return (
    <div>
        <Header/>
        <Allroutes/>
        <Footer/>
    </div>
  );
}

export default App;
