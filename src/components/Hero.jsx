
const Hero = ({ title, imageUrl }) => {
    const style = {
        backgroundImage: `url(${imageUrl})`,
        height: "400px",
        width: "100%"
    }

    return (
        <div className='grid items-center px-10 relative bg-cover bg-no-repeat bg-center' style={style}>
            <div className='absolute inset-0 bg-gray-900 opacity-50'></div>
            <p className='text-5xl font-light text-white relative z-10'>{title}</p>
        </div>
    )
}

export default Hero