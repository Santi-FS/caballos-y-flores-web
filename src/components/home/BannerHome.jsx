export default function BannerHome() {
  return (
    <>
      <div className="card seccion-index-0 my-1 my-sm-3 my-md-5">
        <div className=" p-md-3 text-center  fs-5 d-flex align-items-center section-0">
          <div className="flex-shrink-0">
            <img
              className="img-fluid planta"
              src="/assets/svg/planta-left.svg"
              alt="planta svg"
            />
          </div>
          <div className="card-body">
            <p>
              En{" "}
              <b>
                <i>Caballos y Flores</i>
              </b>{" "}
              nos embarcamos en un viaje terapéutico único que combina dos
              disciplinas poderosas: la equinoterapia y la terapia floral de
              Bach. Este enfoque holístico busca armonizar el bienestar
              emocional y mental a través de la conexión con caballos y la
              sabiduría de las flores de Bach.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
