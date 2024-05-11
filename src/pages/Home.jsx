import Banner from "../components/Banner/Banner";
import Feature from "../components/FeatureFood/Feature";
import Faq from "../components/faq/Faq";
import EatingTips from "../components/tips/EatingTips";

const Home = () => {
    return (
        <div>
            <Banner />
            <Feature />
            <EatingTips />
            <Faq />
        </div>
    );
};

export default Home;