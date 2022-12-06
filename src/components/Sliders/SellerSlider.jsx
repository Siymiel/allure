import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

const SellerSlider = () => {
  return (
    <section className='mt-20 px-10'>
    <Splide 
    aria-label="My Favorite Images"
    options={{rewind: true, gap: '1rem' }}
    >
        <SplideTrack>
            <SplideSlide>
                <img className='h-48 w-56' src="https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Img1"/>
            </SplideSlide>
            <SplideSlide>
                <img className='h-48 w-56' src="https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Img2"/>
            </SplideSlide>
            <SplideSlide>
                <img className='h-48 w-56' src="https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Img2"/>
            </SplideSlide>
            <SplideSlide>
                <img className='h-48 w-56' src="https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Img2"/>
            </SplideSlide>
            <SplideSlide>
                <img className='h-48 w-56' src="https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Img2"/>
            </SplideSlide>
            <SplideSlide>
                <img className='h-48 w-56' src="https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Img2"/>
            </SplideSlide>
            <SplideSlide>
                <img className='h-48 w-56' src="https://images.pexels.com/photos/1557980/pexels-photo-1557980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Img2"/>
            </SplideSlide>
        </SplideTrack>
    </Splide>
    </section>
  )
}

export default SellerSlider