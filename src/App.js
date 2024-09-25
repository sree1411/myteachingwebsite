import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AllRoutes from './routes/AllRoutes'

function App() {
  return (
    <div class="container-fluid">
      <Header />
      <main>
        <AllRoutes/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
