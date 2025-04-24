import { Outlet } from "react-router";
import "./App.css";
import NavBarItems from "./components/NavBarItems";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBarItems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
