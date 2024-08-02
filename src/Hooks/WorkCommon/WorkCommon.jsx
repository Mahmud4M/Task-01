import PropTypes from 'prop-types';

const WorkCommon = ({ title, descrip }) => {
    return (
        <>
            <div className="lg:w-[22rem] w-[15rem]">
                <h1 className="lg:text-2xl text-lg text-black font-bold">{title}</h1>
                <p className="text-lg lg:mt-5">{descrip}</p>
            </div>
        </>
    );
};

WorkCommon.propTypes = {
    title: PropTypes.string,
    descrip: PropTypes.string,
}

export default WorkCommon;