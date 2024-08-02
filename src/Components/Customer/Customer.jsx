import custom01 from "../../assets/custom01.png"
import custom02 from "../../assets/custom02.png"
import custom03 from "../../assets/custom03.png"
import custom04 from "../../assets/custoom04.png"

const Customer = () => {
    return (
        <>
            <div className="common-head w-[40rem] mx-auto text-center mt-32 mb-20">
                <h1 className="title text-5xl text-black font-bold">Our Happy Customer</h1>
                <p className="descrip mt-5 text-lg mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
            </div>

            <div className="mt-5 grid lg:grid-cols-4 grid-cols-2 gap-5 p-5">
                <div className="mb-2">
                    <img className="" src={custom01} alt="Image Loading..." />
                </div>
                <div className="mb-2">
                    <img src={custom02} alt="Image Loading..." />
                </div>
                <div className="mb-2">
                    <img src={custom03} alt="Image Loading..." />
                </div>
                <div className="mb-2">
                    <img src={custom04} alt="Image Loading..." />
                </div>
            </div>
        </>
    );
};

export default Customer;