import banner from "../../assets/banner.png";
import mobile from "../../assets/mobile.png";
import roundshape from "../../assets/roundshape.png";
import shape02 from "../../assets/shape02.png";


const Banner = () => {
    return (
        <>
            <div className='w-full bg-center bg-cover bg-no-repeat px-32 py-36 mt-[-5rem]' style={{ backgroundImage: `url(${banner})` }}>
                <div className="absolute left-0">
                    <img className="w-3/4 h-3/4" src={shape02} alt="Loading" />
                </div>

                <div className="lg:flex lg:justify-between lg:items-center space-y-5">
                    <div className="">
                        <h1 className="text-white text-7xl leading-[110px] font-manrope font-bold">Track, Save <br />
                        & Shop Smarter.</h1>
                        <button className="btn btn-primary bg-black text-base text-white font-manrope mt-10 px-9 py-2 rounded-full border-none hover:duration-1000">Download Now</button>
                    </div>
                    <div className="lg:visible invisible">
                        <img src={roundshape} alt="Mobile Image" />
                        <img className="absolute top-[18rem] left-[57.5rem]" src={mobile} alt="Mobile Image" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;