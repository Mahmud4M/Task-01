

const CommonHead = ({ title, descrip }) => {
    return (
        <>
            <div className="w-[650px] mx-auto text-center leading-10">
                <h1 className="text-5xl font-bold text-balck font-manrope">{title}</h1>
                <p className="text-lg font-manrope mt-5">{descrip}</p>
            </div>
        </>
    );
};

export default CommonHead;