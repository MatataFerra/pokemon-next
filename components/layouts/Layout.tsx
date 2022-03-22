import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface LayoutProps {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({
  children,
  title = "Pokemon App",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Matata Ferra" />
        <meta name="description" content={`Info sobre pokemon ${title}`} />
        <meta name="keywords" content={`${title}. pokemon, pokedex`} />

        <meta
          property="og:title"
          content={`Información sobre pokemon ${title}`}
        />
        <meta
          property="og:description"
          content="Estadísicas, evolución, tipos, etc."
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
