// import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
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
            </div>
        </>
    );
};

export default Home;