

const CommonHead = ({ title, descrip }) => {
    return (
        <>
            <div className="lg:w-[650px] w-[450px] mx-auto text-center leading-10">
                <h1 className="lg:text-5xl text-4xl  font-bold text-balck">{title}</h1>
                <p className="text-lg font-manrope mt-5">{descrip}</p>
            </div>
        </>
    );
};

export default CommonHead;