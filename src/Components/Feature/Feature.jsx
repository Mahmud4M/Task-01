import CommonHead from "../../Hooks/CommonHead";
import feature01 from "../../assets/feature01.png";
import feature02 from "../../assets/feature02.png";
import feature03 from "../../assets/feature03.png";


const Feature = () => {
    return (
        <>
            <div className="m-24">
                <CommonHead title="What we Feature" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry" />
            </div>

            <div className="flex justify-between">
                <div className="">
                    <img className="w-28 mx-auto" src={feature01} alt="Image Loading..." />
                    <div className="w-[19rem] text-center mt-5">
                        <h1 className="text-2xl font-manrope font-bold">Scan & Track</h1>
                        <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="">
                    <img className="w-28 mx-auto" src={feature02} alt="Image Loading..." />
                    <div className="w-[19rem] text-center mt-5">
                        <h1 className="text-2xl font-manrope font-bold">Visualise & Analyse</h1>
                        <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="">
                    <img className="w-28 mx-auto" src={feature03} alt="Image Loading..." />
                    <div className="w-[19rem] text-center mt-5">
                        <h1 className="text-2xl font-manrope font-bold">Save with Super Points</h1>
                        <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;