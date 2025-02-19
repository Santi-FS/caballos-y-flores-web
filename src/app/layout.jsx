import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import metadatos from "../config/metadatos";

export const metadata = { ...metadatos };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="stylesheet" href="/assets/css/bootstrapV5.3.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/css/header.css" />
        <link rel="stylesheet" href="/assets/css/footer.css" />
        <link rel="stylesheet" href="/assets/css/sections.css" />
        <link rel="stylesheet" href="/assets/css/hero-image.css" />
        <link rel="stylesheet" href="/assets/css/color-palette.css" />
        <link rel="stylesheet" href="/assets/css/breackpoints.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/terapias.css" />
      </head>
      <body>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
