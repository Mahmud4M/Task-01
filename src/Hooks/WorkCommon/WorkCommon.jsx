import PropTypes from 'prop-types';
import "./WorkCommon.css";

const WorkCommon = ({ title, descrip }) => {
    return (
        <>
            <div className="common lg:w-[22rem] w-[15rem]">
                <h1 className="common-head lg:text-2xl text-lg text-black font-bold">{title}</h1>
                <p className="common-text text-lg lg:mt-5">{descrip}</p>
            </div>
        </>
    );
};

WorkCommon.propTypes = {
    title: PropTypes.string,
    descrip: PropTypes.string,
}

export default WorkCommon;