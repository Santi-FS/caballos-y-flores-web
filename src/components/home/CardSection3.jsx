import Link from "next/link";

export default function CardSection3() {
  return (
    <>
      <div className="container my-1 my-sm-3 my-md-5 p-3 z-depth-1 card color-fondo">
        <section className="text-center text-lg-left dark-grey-text ">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0 box-shadow order-md-2 order-1">
              <div className="view overlay z-depth-1-half card">
                <img
                  src="/assets/img/home/section-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <a href="#">
                  <div className="mask rgba-white-light"></div>
                </a>
              </div>
            </div>
            <div className="col-md-6 my-auto order-md-1 order-2">
              <h2 className="font-weight-bold">
                <i>Fomento del Crecimiento Personal</i>
              </h2>
              <hr />
              <p className="text-muted">
                <b>
                  <i>Caballos y Flores</i>
                </b>{" "}
                se centra en el crecimiento personal como objetivo central. La
                combinación de la sabiduría equina y las propiedades curativas
                de las flores de Bach crea un entorno propicio para el
                autoconocimiento y la transformación positiva. A través de este
                proceso, los participantes pueden experimentar un mayor sentido
                de propósito, autonomía y autenticidad en sus vidas.
              </p>
              <Link
                className="btn btn-brown btn-md ml-0"
                href="novedades"
                role="button"
              >
                Leer más
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
