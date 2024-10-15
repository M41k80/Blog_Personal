import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import Header from "components/home/Header";
import Incentives from "components/home/Incentives";
import UseCases from "components/home/Usecases";
import Features from "components/home/Features";
import Cta from "components/home/Cta";
import LogoCloud from "components/home/Logocloud";
import BlogList from "components/home/BlogList";
import { useEffect } from "react";



function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                <Header />
                <Incentives />
                <UseCases />
                <Features />
                <Cta />
                <LogoCloud />
                <BlogList />
            </div>
            <Footer />
        </Layout>
    )
}
export default Home;