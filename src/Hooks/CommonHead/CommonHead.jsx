import PropTypes from 'prop-types';
import "./CommonHead.css"

const CommonHead = ({ title, descrip }) => {
    return (
        <>
            <div className="common-head lg:w-[650px] w-[350px] mx-auto text-center leading-10">
                <h1 className="title lg:text-5xl text-2xl  font-bold text-balck">{title}</h1>
                <p className="descrip lg:text-lg text-base font-manrope mt-5">{descrip}</p>
            </div>
        </>
    );
};


CommonHead.propTypes = {
    title: PropTypes.string,
    descrip: PropTypes.string,
}

export default CommonHead;