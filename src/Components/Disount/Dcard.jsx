import React from 'react'
import Ddata from './Ddata'
import AliceCarousel from 'react-alice-carousel';

const Dcard = () => {
    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 4,
        },
        1024: {
            items: 6,
        },
    };
    return (
        < >
            <AliceCarousel
                mouseTracking
                disableButtonsControls
                disableDotsControls
                autoPlay
                infinite
                responsive={responsive}
            >
                {Ddata.map((value, index) => {
                    return (
                        <>
                            <div className='box product' key={index}>
                                <div className='img'>
                                    <img src={value.cover} alt='' width='100%' />
                                </div>
                                <h4>{value.name}</h4>
                                <span>{value.price}</span>
                            </div>
                        </>
                    )
                })}

            </AliceCarousel>
        </>
    )
}

export default Dcard