"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const enlaces = [
  { name: "Inicio", href: "/" },
  { name: "Terapias", href: "/terapias" },
  { name: "La Granja", href: "/lagranja" },
  { name: "Cursos", href: "/cursos" },
  { name: "Contacto", href: "/contacto" },
];

export default function NavBar() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const updatePath = () => {
      setCurrentPath(window.location.pathname);
    };
    updatePath();
    // Listener para cambios en el historial del navegador
    window.addEventListener("popstate", updatePath);
    // Listener para cambios en el pushState
    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      updatePath();
    };
    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener("popstate", updatePath);
      window.history.pushState = originalPushState; // Restaurar pushState original
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.1.0/mdb.umd.min.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const header = document.getElementById("header");
    if (!header) return;
    // Agrega la clase por defecto al cargar la página
    header.classList.add("header-default");
    // Función para manejar el scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    };
    // Función para manejar el hover (mouseenter y mouseleave)
    const handleMouseEnter = () => {
      header.classList.remove("header-scrolled");
    };
    const handleMouseLeave = () => {
      if (window.scrollY > 0) {
        header.classList.add("header-scrolled");
      }
    };
    // Agrega los event listeners
    window.addEventListener("scroll", handleScroll);
    header.addEventListener("mouseenter", handleMouseEnter);
    header.addEventListener("mouseleave", handleMouseLeave);
    // Limpia los event listeners al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
      header.removeEventListener("mouseenter", handleMouseEnter);
      header.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <nav id="header" className="navbar navbar-expand-lg bg-body fixed-top">
        <div className="container-fluid container">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- logo CyF --> */}
          <div className="header-content logo mx-auto">
            <a className="" href="/">
              <img
                className="img-fluid"
                src="/assets/img/diseniologo-dorado.png"
                alt="Logo de Caballos y Flores"
              />
            </a>
          </div>

          {/* <!-- enlaces --> */}
          <div
            className="collapse navbar-collapse text-center"
            id="navbarExample01"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 w-100 d-md-flex justify-content-md-around align-items-md-center">
              {enlaces.map((enlace) => (
                <li key={enlace.href} className="nav-item">
                  <Link
                    href={enlace.href}
                    className={`nav-link enlaces ${
                      currentPath === enlace.href ? "enlace-activo" : ""
                    }`}
                  >
                    {enlace.name}
                  </Link>
                </li>
              ))}
              {/* <!-- redes --> */}
              <li className="nav-item">
                <div className="nav-link">
                  {/* <!-- Whatsapp --> */}
                  <a
                    id="iconos"
                    className="btn btn-floating m-1 text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                    href="https://api.whatsapp.com/send?phone=543548505540&text=Hola,%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Caballos%20y%20Flores..."
                  >
                    <i className="fab fa-whatsapp fa-2x"></i>
                  </a>
                  {/* <!-- Google --> */}
                  <a href="" target="_blank"></a>
                  <a
                    id="iconos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-floating m-1 text-white"
                    role="button"
                    href="mailto:info@caballosyflores.com.ar"
                  >
                    <i className="far fa-envelope fa-2x"></i>
                  </a>
                  {/* <!-- Instagram --> */}
                  <a
                    id="iconos"
                    className="btn btn-floating m-1 text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                    href="https://www.instagram.com/caballosyflores_/"
                  >
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
