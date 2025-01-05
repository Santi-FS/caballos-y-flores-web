import Link from "next/link";

export default function CardSection1Terapias() {
  return (
    <>
      <div className=" p-3 z-depth-1 card color-fondo section-verde-claro">
        <section className="container text-center text-lg-left dark-grey-text">
          <div className="row">
            <div className="col-md-5 mb-4 mb-md-0 box-shadow order-md-2 order-1 p-5">
              <div className="view overlay z-depth-1-half card ">
                <img
                  src="/assets/img/terapias/CardSection1.jpeg"
                  className="img-fluid card"
                  alt=""
                />
                <div className="mask rgba-white-light"></div>
              </div>
            </div>
            <div className="col-md-7 my-auto order-md-1 order-2">
              <h2 className="font-weight-bold text-black">
                <i>Proceso Terapéutico</i>
              </h2>
              <hr />
              <h4 className="font-weight-bold text-black text-start ">
                Evaluación Inicial
              </h4>
              <p className="text-black text-start">
                Comenzamos con una evaluación integral que incluye la
                interacción inicial entre el individuo y el caballo, así como
                una exploración de las preocupaciones emocionales y mentales.
              </p>
              <br />
              <h4 className="font-weight-bold text-black text-start">
                Selección de Flores de Bach
              </h4>
              <p className="text-black text-start">
                Utilizando las señales emocionales de los caballos,
                seleccionamos las flores de Bach que mejor se alinean con las
                necesidades emocionales del individuo.
              </p>
              <br />
              <h4 className="font-weight-bold text-black text-start">
                Sesiones de Equinoterapia y Terapia Floral
              </h4>
              <p className="text-black text-start">
                Las sesiones integradas implican la interacción con los caballos
                y la administración de las esencias florales. Este proceso busca
                desbloquear emociones, promover la autorreflexión y facilitar la
                transformación positiva.
              </p>
            </div>
          </div>
          <div className="my-3 card p-4 section-0">
            <p>
              Desde Caballos y Flores trabajamos las Terapias Florales junto con
              las Terapias Asistidas con Caballos, la combinación de Caballos y
              Flores es maravillosa para Sanar el Alma, en lo mas profundo del
              ser! Y al igual que los caballos las flores nos acompañan en la
              evolución de nuestros procesos espirituales! Justamente porque
              tanto los caballos como las flores vienen evolucionando desde hace
              miles de años y acompañando al ser humano en su proceso de una
              mejor calidad de vida!
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
