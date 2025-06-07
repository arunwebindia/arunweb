import React from "react";
import Header from "./header/Index";
import Footer from "./footer/Index";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <Header></Header>
      <main className="p-3">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
}
