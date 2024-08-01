import target from "../../assets/target.png"

const Cover = () => {
    return (
        <>
            <div className="p-10 lg:flex lg:justify-evenly lg: items-center bg-[#66ab3e]">
                <div>
                    <img src={target} alt="" />
                </div>
                <div className="w-[40rem] text-white text-start space-y-5">
                    <h1>We believe grocery shopping should be simple, enjoyable, and rewarding.</h1>
                    <h1>Our mission :-  is to empower you with the tools and insights to make the most of your grocery budget.</h1>
                </div>
            </div>
        </>
    );
};

export default Cover;