
const Hero = ({ store }) => {
    const style = {
        backgroundImage: `url(${store?.image})`,
        height: "400px",
        width: "100%"
    }

    return (
        <div className='grid items-center px-10 relative bg-cover bg-no-repeat bg-center' style={style}>
            <div className='absolute inset-0 bg-gray-900 opacity-50'></div>
            <p className='text-5xl font-light text-white relative z-10'>{store?.name}</p>
        </div>
    )
}

export default Hero