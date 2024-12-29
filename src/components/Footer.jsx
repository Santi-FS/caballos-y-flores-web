import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div id="footer" className="container my-0">
        <footer className="text-center text-lg-start text-white">
          {/* <!-- Grid container --> */}
          <div className="container p-4 pb-0">
            {/* <!-- Section: Links --> */}
            <section className="">
              {/* <!--Grid row--> */}
              <div className="row">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-3 col-xl-3 x-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    <a className="icono" href="/">
                      <img
                        className="img-fluid"
                        src="/assets/img/diseniologo-dorado.png"
                        alt="Logo de Caballos y Flores"
                      />
                    </a>
                  </h6>
                  <p>
                    En Caballos y Flores combinamos la conexión equina con el
                    poder sanador de las flores de Bach y la terapia acompañante
                    para ofrecerte un camino hacia el bienestar integral.
                  </p>
                </div>
                {/* <!-- Grid column --> */}
                <hr className="w-100 clearfix d-md-none" />
                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    <b>Cursos</b>
                  </h6>
                  <p>
                    <a
                      href="https://caballosyflores.com.ar/"
                      className="text-white colorAmarilloHover"
                    >
                      Terapias florales
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://caballosyflores.com.ar/"
                      className="text-white colorAmarilloHover"
                    >
                      Apego seguro
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://caballosyflores.com.ar/"
                      className="text-white colorAmarilloHover"
                    >
                      Equinoterapia
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                <hr className="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    <b>Secciones</b>
                  </h6>
                  <p>
                    <Link
                      href="/terapias"
                      className="text-white colorAmarilloHover"
                    >
                      Terapias
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/cursos"
                      className="text-white colorAmarilloHover"
                    >
                      Cursos
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/lagranja"
                      className="text-white colorAmarilloHover"
                    >
                      La granja
                    </Link>
                  </p>
                </div>

                {/* <!-- Grid column --> */}
                <hr className="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    <Link className="colorAmarilloHover" href="/contacto">
                      Contacto
                    </Link>
                  </h6>
                  <p>
                    <a
                      className="text-white colorAmarilloHover"
                      href="https://maps.app.goo.gl/1jxBJqxfe8TJXnyRA"
                      target="_blank"
                      rel="noopener"
                    >
                      <i className="fas fa-home mr-3"></i>
                      Famatina 1642, X5184 Capilla del Monte, Córdoba
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-white colorAmarilloHover"
                      href="mailto:info@caballosyflores.com.ar"
                    >
                      <i className="fas fa-envelope mr-3"></i>
                      info@caballosyflores.com.ar
                    </a>
                  </p>
                  <p>
                    <a
                      className="text-white colorAmarilloHover"
                      href="tel:+543548505540"
                    >
                      <i className="fas fa-phone mr-3"></i> +54 3548 505540
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!--Grid row--> */}
            </section>

            {/* <!-- redes --> */}
            <div className="text-center text-md-end">
              {/* <!-- WhatsApp --> */}
              <a
                id="iconos"
                className="btn btn-outline-light btn-floating m-1 text-white"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                href="https://api.whatsapp.com/send?phone=543548505540&text=Hola,%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Caballos%20y%20Flores..."
              >
                <i className="fab fa-whatsapp fa-2x"></i>
              </a>

              {/* <!-- Google --> */}
              <a
                id="iconos"
                className="btn btn-outline-light btn-floating m-1 text-white"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                href="mailto:info@caballosyflores.com.ar"
              >
                <i className="far fa-envelope fa-2x"></i>
              </a>

              {/* <!-- Instagram --> */}
              <a
                id="iconos"
                className="btn btn-outline-light btn-floating m-1 text-white"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                href="https://www.instagram.com/caballosyflores_/"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
            <hr className="my-3" />
          </div>

          <hr className="my-3" />
          {/* <!--Copyright--> */}
          <div className="p-3 container row mx-auto">
            <div className="col-4">
              <b>Desarrollo Web:</b> Santiago Meneghini
            </div>
            <div className="col-4">
              <b>Diseño:</b> Sathya Sica
            </div>
            <a className="col-4 text-white fs-6" href="www.miweb.com.ar">
              &copy; 2024 Todos los derechos reservados
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
