import feature01 from "../../assets/feature01.png";
import feature02 from "../../assets/feature02.png";
import feature03 from "../../assets/feature03.png";
import CommonHead from "../../Hooks/CommonHead/CommonHead";
import "./Feature.css";


const Feature = () => {
    return (
        <>
            <div className="common-head w-[40rem] mx-auto text-center mt-32 mb-20">
                <h1 className="title text-5xl text-black font-bold">What we Feature</h1>
                <p className="descrip mt-5 text-lg mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>

            <div className="lg:flex lg:justify-between items-center">
                <div className="mb-5">
                    <img className="feature-img lg:w-28 mx-auto" src={feature01} alt="Image Loading..." />
                    <div className="lg:w-[19rem] w-[19rem] text-center mt-5 mx-auto">
                        <h1 className="text-2xl font-manrope font-bold">Scan & Track</h1>
                        <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="mb-5">
                    <img className="w-28 mx-auto" src={feature02} alt="Image Loading..." />
                    <div className="w-[19rem] text-center mt-5 mx-auto">
                        <h1 className="text-2xl font-manrope font-bold">Visualise & Analyse</h1>
                        <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="mb-5">
                    <img className="w-28 mx-auto" src={feature03} alt="Image Loading..." />
                    <div className="w-[19rem] text-center mt-5 mx-auto">
                        <h1 className="text-2xl font-manrope font-bold">Save with Super Points</h1>
                        <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;