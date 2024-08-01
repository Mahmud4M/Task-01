import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Cover from "../Cover/Cover";
import Customer from "../Customer/Customer";
import Feature from "../Feature/Feature";
import Shape from "../Shape/Shape";
import Works from "../Works/Works";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                {/* <Banner /> */}
            </div>
            <div className="max-w-screen-xl mx-auto space-y-16 mb-10">
                <Feature />
            </div>
            <div>
                <Works />
            </div>
            <div className="my-16">
                <Cover />
            </div>
            <div className="max-w-screen-xl mx-auto space-y-16 mb-10">
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