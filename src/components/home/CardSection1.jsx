import Link from "next/link";

export default function CardSection1() {
  return (
    <>
      <div className="container my-1 my-sm-3 my-md-5 p-3 z-depth-1 card color-fondo">
        <section className="text-center text-lg-left dark-grey-text">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0 box-shadow order-md-2 order-1">
              <div className="view overlay z-depth-1-half card">
                <img
                  src="/assets/img/home/section-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <a href="#">
                  <div className="mask rgba-white-light"></div>
                </a>
              </div>
            </div>
            <div className="col-md-8 my-auto order-md-1 order-2">
              <h2 className="font-weight-bold">
                <i>Equinoterapia</i>
              </h2>
              <hr />
              <h4 className="font-weight-bold">
                Comunicación No Verbal y Reflexión Emocional
              </h4>
              <p className="text-black">
                La{" "}
                <b>
                  <i>equinoterapia</i>
                </b>{" "}
                es una modalidad terapéutica que aprovecha la conexión entre
                humanos y caballos. Los caballos, como seres sensibles e
                intuitivos, actúan como espejos emocionales, reflejando las
                emociones y energías de las personas que interactúan con ellos.
                La comunicación no verbal con los caballos permite una
                experiencia única de autorreflexión y conciencia emocional.
              </p>
              <Link
                className="btn btn-brown btn-md ml-0 section-0"
                href="/terapias"
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
