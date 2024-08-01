import CommonHead from "../../Hooks/CommonHead";
import custom01 from "../../assets/custom01.png"
import custom02 from "../../assets/custom02.png"
import custom03 from "../../assets/custom03.png"
import custom04 from "../../assets/custoom04.png"


const Customer = () => {
    return (
        <>
            <div>
                <CommonHead title="Our Happy Customer" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry" />
            </div>

            <div className="mt-5 grid lg:grid-cols-4 grid-cols-2 gap-5">
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