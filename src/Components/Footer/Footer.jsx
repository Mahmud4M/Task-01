import shape from "../../assets/shape03.png";
import shape04 from "../../assets/shape04.png";
import footerLogo from "../../assets/footerLogo.svg";


const Footer = () => {
    return (
        <>
            <div className="p-5 mt-[-27px]">
                <img className="w-2/3 mx-auto" src={shape04} alt="" />
            </div>
            <div className='w-full bg-center bg-cover bg-no-repeat p-20 mt-[-27px]' style={{ backgroundImage: `url(${shape})` }}>
                <div>
                    <div className="flex justify-between items-center">
                        <img src={footerLogo} alt="Image loading..." />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;