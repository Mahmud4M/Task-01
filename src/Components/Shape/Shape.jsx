import shape from "../../assets/shape.png";

const Shape = () => {
    return (
        <>
            {/* <div className='w-full bg-center bg-cover bg-no-repeat px-32 py-36' style={{ backgroundImage: `url(${shape})` }}>

            </div> */}

            <div>
                <img src={shape} alt="" />
            </div>
        </>
    );
};

export default Shape;