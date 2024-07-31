import CommonHead from "../../Hooks/CommonHead";
import custom01 from "../../assets/custom02.png"
import custom02 from "../../assets/custom02.png"
import custom03 from "../../assets/custom03.png"
import custom04 from "../../assets/custoom04.png"


const Customer = () => {
    return (
        <>
            <div>
                <CommonHead title="Our Happy Customer" descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry" />
            </div>

            <div className="mt-5 flex justify-between gap-5">
                <div>
                    <img className="" src={custom01} alt="Image Loading..." />
                </div>
                <div>
                    <img className="" src={custom02} alt="Image Loading..." />
                </div>
                <div>
                    <img className="" src={custom03} alt="Image Loading..." />
                </div>
                <div>
                    <img className="" src={custom04} alt="Image Loading..." />
                </div>
            </div>
        </>
    );
};

export default Customer;