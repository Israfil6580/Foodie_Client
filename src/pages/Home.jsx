import { ScrollRestoration } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Feature from "../components/FeatureFood/Feature";
import Faq from "../components/faq/Faq";
import EatingTips from "../components/tips/EatingTips";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Foddie | Home</title>
            </Helmet>
            <Banner />
            <Feature />
            <EatingTips />
            <Faq />
            <ScrollRestoration />
        </div>
    );
};

export default Home;