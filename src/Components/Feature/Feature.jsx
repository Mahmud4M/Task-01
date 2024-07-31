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

            <div>
                <div className="text-center">
                    <img className="w-1/6 mx-auto" src={feature01} alt="" />
                    <div>
                        <h1>Scan & Track</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;