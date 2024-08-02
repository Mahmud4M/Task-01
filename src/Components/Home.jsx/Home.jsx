import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Cover from "../Cover/Cover";
import Customer from "../Customer/Customer";
import Feature from "../Feature/Feature";
import Shape from "../Shape/Shape";
import Works from "../Works/Works";
import "./Home.css"


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <Banner />
            </div>
            <div className="feature max-w-screen-xl mx-auto">
                <Feature />
            </div>
            <div>
                <Works />
            </div>
            <div>
                <Cover />
            </div>
            <div className="customer max-w-screen-xl mx-auto">
                <Customer />
                <Contact />
            </div>
            <div>
                <Shape />
            </div>
        </>
    );
};

export default Home;