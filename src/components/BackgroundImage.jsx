export default function BackgroundImage({ path }) {
  return (
    <>
      <div
        className="p-5 bg-image position-relative"
        style={{
          backgroundImage: `url('/assets/img/${path}/hero-image.jpeg')`,
          height: "400px",
        }}
      >
        <div
          className="p-5 mask text-white d-flex align-items-end justify-content-center d-md-flex align-items-md-center justify-content-md-end"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="p-5">
            <h1>Caballos y Flores</h1>
            <h5>Sanando con la esencia de la naturaleza</h5>
          </div>
        </div>
      </div>
    </>
  );
}
