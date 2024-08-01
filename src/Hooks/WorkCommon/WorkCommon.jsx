

const WorkCommon = ({ title, descrip }) => {
    return (
        <>
            <div className="w-[22rem]">
                <h1 className="text-2xl text-black font-bold">{title}</h1>
                <p className="text-lg mt-5">{descrip}</p>
            </div>
        </>
    );
};

export default WorkCommon;