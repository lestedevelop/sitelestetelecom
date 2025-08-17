'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import teste from '@/assets/teste.jpg'
import teste2 from '@/assets/teste2.webp'
import teste3 from '@/assets/teste3.jpg'
import teste4 from '@/assets/teste4.jpg'
import lesteUltraImage from '@/assets/lesteUltraimg.png'

import Image from 'next/image';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


export default function CarrouselSection(){
    return (
        <section className="max-w-full h-full">
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
            >
                <div style={{height: 600}} className='bg-amber-600'>
                    <Image
                        src={lesteUltraImage} // import via Webpack
                        alt="Logo"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
                <div style={{height: 600}} className='bg-blue-500'>
                    <Image
                        objectFit={'contain'}
                        src={teste2} // import via Webpack
                        alt="Logo2"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
                <div style={{height: 600}} className='bg-green-700'>
                    <Image
                        src={teste3} // import via Webpack
                        alt="Logo3"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
                <div style={{height: 600}} className='bg-red-700'>
                    <Image
                        src={teste4} // import via Webpack
                        alt="Logo4"
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            </Carousel>
        </section>
    )
}