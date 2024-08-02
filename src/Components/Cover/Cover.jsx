import target from "../../assets/target.png"
import "./Cover.css";

const Cover = () => {
    return (
        <>
            <div className="p-10 lg:flex lg:justify-evenly items-center bg-[#66ab3e]">
                <div className="mb-5 mt-5 mx-auto">
                    <img src={target} alt="Image loading..." />
                </div>
                <div className="cover-text lg:w-[40rem] w-[20rem] text-white text-start space-y-5 mb-5 mt-5">
                    <h1>We believe grocery shopping should be simple, enjoyable, and rewarding.</h1>
                    <h1>Our mission :-  is to empower you with the tools and insights to make the most of your grocery budget.</h1>
                </div>
            </div>
        </>
    );
};

export default Cover;