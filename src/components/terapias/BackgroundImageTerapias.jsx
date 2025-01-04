export default function BackgroundImageTerapias({ path }) {
  return (
    <>
      <div
        className="p-5 bg-image-80 position-relative"
        style={{
          backgroundImage: "url(/assets/img/terapias/hero-image.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="p-5 mask text-white d-flex align-items-end justify-content-center d-md-flex align-items-md-center justify-content-md-end"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div
            className="container p-5"
            style={{
              textAlign: "left",
            }}
          >
            <h1>Terapias y actividades</h1>
            {/* <h5>Sanando con la esencia de la naturaleza</h5> */}
          </div>
        </div>
      </div>
    </>
  );
}
