import Link from "next/link";

export default function CardSection2() {
  return (
    <>
      <div className="container my-1 my-sm-3 my-md-5 p-3 z-depth-1 card color-fondo">
        <section className="text-center text-lg-left dark-grey-text ">
          <div className="row">
            <div className="col-md-5 mb-4 mb-md-0 box-shadow">
              <div className="view overlay z-depth-1-half card">
                <img
                  src="/assets/img/home/section-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <a href="#">
                  <div className="mask rgba-white-light"></div>
                </a>
              </div>
            </div>
            <div className="col-md-7 my-auto">
              <h2 className="font-weight-bold">
                <i>Flores de Bach</i>
              </h2>
              <hr />
              <h4 className="font-weight-bold">
                Energetización Emocional y Equilibrio
              </h4>
              <p className="text-black">
                Las{" "}
                <b>
                  <i>Flores de Bach</i>
                </b>
                , desarrolladas por el Dr. Edward Bach, son esencias florales
                que trabajan a nivel emocional para restaurar el equilibrio en
                las experiencias emocionales. Cada flor tiene propiedades
                específicas que pueden abordar patrones emocionales y facilitar
                la armonización de las emociones.
              </p>
              <Link
                className="btn btn-brown btn-md ml-0 section-0"
                href="/terapias#bannerTerapias"
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
