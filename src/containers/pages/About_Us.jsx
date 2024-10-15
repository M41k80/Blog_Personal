import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";

import { useEffect } from "react";
import Header from "components/about/Header";
import TestStats from "components/about/TestStats";
import Images from "components/about/Images";
import Clients from "components/about/Clients";
import Features from "components/about/Features";
import Team from "components/about/Team";
import Cta from "components/about/Cta";
import { Helmet } from "react-helmet-async";

function About_Us() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
    <Helmet>
      <title>M41k80 | About Us</title>
      <meta name="description" content="M41k80 is a software agency that provides services to businesses in the software industry. We offer a wide range of services including web development, app development, digital marketing, and more." />
      <meta name="keywords" content='agencia de software, software agency, web development, creacion de pagina web' />
      <meta name="robots" content="all" />
      <link rel="canonical" href="" />
      <meta name="author" content="M41k80" />
      <meta name='publisher' content='M41k80' />

       {/* social media tags */}
      <meta property="og:title" content="M41k80 | Software Agency" />
      <meta property="og:description" content="M41k80 is a software agency that provides services to businesses in the software industry. We offer a wide range of services including web development, app development, digital marketing, and more." />
      <meta property="og:url" content="" />
      <meta property="og:site_name" content="M41k80 | Software Agency" />
      <meta property="og:image" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@m41k80" />
      <meta name="twitter:creator" content="@m41k80" />
      <meta name="twitter:title" content="M41k80 | Software Agency" />
      <meta name="twitter:description" content="M41k80 is a software agency that provides services to businesses in the software industry. We offer a wide range of services including web development, app development, digital marketing, and more." />
      <meta name="twitter:image" content="" />
      <meta name="twitter:url" content="" />
    </Helmet>
      <Navbar />
        <div className="pt-28">
            <Header />
            <TestStats />
            <Images />
            <Clients />
            <Features />
            <Team />
            <Cta />

        </div>
      <Footer />
    </Layout>
  );
}
export default About_Us;
