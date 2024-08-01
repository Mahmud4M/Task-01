import WorkCommon from "../../Hooks/WorkCommon/WorkCommon";
import shape02 from "../../assets/worksShape02.svg";
import shape01 from "../../assets/WorkShape01.png";
import shape03 from "../../assets/WorkSape03.svg";
import shape04 from "../../assets/WorkShape04.png";
import shape05 from "../../assets/WorkShape05.png";
import shape06 from "../../assets/WorkShape06.svg";
import shape07 from "../../assets/WorkShape07.svg";
import shape08 from "../../assets/WorkShape08.png";
import One from "../../assets/One.png";
import line01 from "../../assets/Line01.png";
import "./Check.css"

const Check = () => {
    return (
        <>


            <div className="text-center mt-28">
                <h1 className="text-5xl text-black font-bold">How It Works</h1>
            </div>

            <div className="mt-28 relative">
                {/* Line Shape */}
                <div className="absolute top-0 left-[30rem]">
                    <div className="relative">
                        <div className="absolute w-[15.5rem] top-[-3.5rem] left-[0rem]">
                            <img className="w-full" src={line01} alt="" />
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute w-[10rem] top-[6rem] left-[-4.5rem]">
                            <img src={One} alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="relative w-2/5 -z-10">
                        <div className="">
                            <img className="w-100 h-100 object-cover" src={shape01} alt="" />
                        </div>
                        <div className="absolute top-[15rem] left-[15rem]">
                            <WorkCommon title="Download & Sign Up" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                        </div>
                    </div>
                    <div className="w-1/3 mx-auto">
                        <img className="" src={shape02} alt="Image loading..." />
                    </div>
                </div>

                <div className="flex justify-between items-center mt-10">
                    <div className="w-1/3 mx-auto">
                        <img className="" src={shape03} alt="Image loading..." />
                    </div>
                    <div className="relative w-2/5">
                        <div>
                            <div>
                                <img src={shape04} alt="" />
                            </div>
                            <div className="absolute top-[17rem] left-[4rem]">
                                <WorkCommon title="Download & Sign Up" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-10">
                    <div className="relative w-2/5">
                        <div className="">
                            <img src={shape05} alt="" />
                        </div>
                        <div className="absolute top-[15rem] left-[15rem]">
                            <WorkCommon title="Download & Sign Up" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                        </div>
                    </div>
                    <div className="w-1/2 mx-auto">
                        <img className="" src={shape06} alt="Image loading..." />
                    </div>
                </div>

                <div className="flex justify-between items-center mt-10">
                    <div className="w-1/3 mx-auto">
                        <img className="" src={shape07} alt="Image loading..." />
                    </div>
                    <div className="relative w-2/5">
                        <div className="">
                            <img src={shape08} alt="" />
                        </div>
                        <div className="absolute top-[17rem] left-[4rem]">
                            <WorkCommon title="Download & Sign Up" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Check;