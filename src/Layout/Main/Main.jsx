import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <Navbar />
            </div>

            <div className='pt-24 min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>

            <Footer></Footer>
        </>
    );
};

export default Main;