import banner from "../../assets/banner.png";
import mobile from "../../assets/mobile.png";
import roundshape from "../../assets/roundshape.png";
import shape02 from "../../assets/shape02.png";
import "./responsive.css";


const Banner = () => {
    return (
        <>
            <div className='banner w-full bg-center bg-cover bg-no-repeat px-32 py-36 mt-[-5rem]' style={{ backgroundImage: `url(${banner})` }}>
                <div className="shape-one absolute left-0">
                    <img className="w-3/4 h-3/4" src={shape02} alt="Loading" />
                </div>

                <div className="flex justify-between items-center">
                    <div className="banner-text">
                        <h1 className="text-white text-7xl leading-[110px] font-manrope font-bold">Track, Save <br />
                            & Shop Smarter.</h1>
                        <button className="btn-one btn bg-black text-base text-white font-manrope mt-10 px-9 py-2 rounded-full border-none hover:duration-1000">Download Now</button>
                    </div>
                    <div className="">
                        <div className="round"><img src={roundshape} alt="Mobile Image" /></div>
                        <div className=""><img className="mobile absolute top-[18rem] left-[57.5rem]" src={mobile} alt="Mobile Image" /></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;