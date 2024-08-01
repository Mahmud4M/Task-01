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
import Two from "../../assets/Two.png";
import Three from "../../assets/Three.png";
import Four from "../../assets/Four.png";
import line01 from "../../assets/Line01.png";
import line02 from "../../assets/Line02.png";
import line03 from "../../assets/Line03.png";
import line04 from "../../assets/Line04.png";


const Works = () => {
    return (
        <>
            <div>
                <div className="text-center mt-28">
                    <h1 className="text-5xl text-black font-bold">How It Works</h1>
                </div>

                <div className="mt-28 relative">
                    {/* Line Shape */}
                    <div className="absolute top-0 left-[30rem] lg:visible invisible">
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
                                <img src={shape01} alt="Image loading..." />
                            </div>
                            <div className="absolute lg:top-[15rem] lg:left-[15rem] top-[4.5rem] left-5">
                                <WorkCommon title="Download & Sign Up" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                            </div>
                        </div>
                        <div className="w-1/3 mx-auto">
                            <img className="" src={shape02} alt="Image loading..." />
                        </div>
                    </div>

                    {/* Line Shape */}
                    <div className="lg:visible invisible">
                        <div className="relative">
                            <div className="absolute w-[27rem] top-[-6.5rem] left-[36rem]">
                                <img className="w-full" src={line02} alt="Image loading..." />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute w-[10rem] top-[7.5rem] left-[58.5rem]">
                                <img src={Two} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-10">
                        <div className="w-1/3 mx-auto">
                            <img className="" src={shape03} alt="Image loading..." />
                        </div>
                        <div className="relative w-2/5 -z-10">
                            <div>
                                <div>
                                    <img src={shape04} alt="Image loading..." />
                                </div>
                                <div className="absolute lg:top-[17rem] lg:left-[4rem] top-[4.75rem] left-9">
                                    <WorkCommon title="Scan Receipts" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Line Shape */}
                    <div className="lg:visible invisible">
                        <div className="relative">
                            <div className="absolute w-[27rem] top-[-6.5rem] left-[31rem]">
                                <img className="w-full" src={line03} alt="Image loading..." />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute w-[10rem] top-[7.5rem] left-[26rem]">
                                <img src={Three} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-10">
                        <div className="relative w-2/5 -z-10">
                            <div className="">
                                <img src={shape05} alt="Image loading..." />
                            </div>
                            <div className="absolute lg:top-[15rem] lg:left-[15rem] top-[4.5rem] left-5">
                                <WorkCommon title="Get AI Insights" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                            </div>
                        </div>
                        <div className="w-1/2 mx-auto">
                            <img className="" src={shape06} alt="Image loading..." />
                        </div>
                    </div>

                    {/* Line Shape */}
                    <div className="lg:visible invisible">
                        <div className="relative">
                            <div className="absolute w-[27rem] top-[-6.5rem] left-[36rem]">
                                <img className="w-full" src={line04} alt="Image loading..." />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute w-[10rem] top-[7.5rem] left-[58.5rem]">
                                <img src={Four} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-10">
                        <div className="w-1/3 mx-auto">
                            <img className="" src={shape07} alt="Image loading..." />
                        </div>
                        <div className="relative w-2/5 -z-10">
                            <div className="">
                                <img src={shape08} alt="" />
                            </div>
                            <div className="absolute lg:top-[17rem] lg:left-[4rem] top-[4.75rem] left-9">
                                <WorkCommon title="Plan & Save" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Works;