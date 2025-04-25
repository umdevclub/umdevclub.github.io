import "@/styles/App.scss";

import { Outlet } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div id="root">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
