// import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Customer from "../Customer/Customer";
import Feature from "../Feature/Feature";


const Home = () => {
    return (
        <>
            {/* <Helmet>
                <title>Home</title>
            </Helmet> */}
            <div>
                <Banner />
            </div>
            <div className="max-w-screen-xl mx-auto space-y-16 mb-10">
                <Feature />
                <Customer />
                <Contact />
            </div>
        </>
    );
};

export default Home;