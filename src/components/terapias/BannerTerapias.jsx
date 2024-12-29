export default function BannerTerapias() {
  return (
    <>
      <div
        className="card my-1 my-sm-3 my-md-5"
        style={{
          backgroundImage: "url(/assets/img/terapias/hero-image.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" p-md-3 text-center fs-5 d-flex align-items-center">
          <div className="card-body">
            <b>
              <i>BannerTerapias</i>
            </b>
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            quis error fugit voluptas laboriosam? Vel nihil, ad deserunt fuga
            dolor quas eveniet mollitia maiores quae distinctio vitae voluptas
            illo nulla?
          </div>
        </div>
      </div>
    </>
  );
}
