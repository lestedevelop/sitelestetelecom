'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import teste from '@/assets/teste.jpg'
import teste2 from '@/assets/teste2.webp'
import teste3 from '@/assets/teste3.jpg'
import teste4 from '@/assets/teste4.jpg'
import lesteUltraImag from '@/assets/lesteUltraimg.png'
import lesteClube from '@/assets/lesteclube.png'

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
                        src={lesteClube} // import via Webpack
                        alt="Logo"
                         objectFit={'contain'}
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
                <div style={{height: 600}} className='bg-amber-600'>
                    <Image
                        src={lesteUltraImag} // import via Webpack
                        alt="Logo"
                         objectFit={'contain'}
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