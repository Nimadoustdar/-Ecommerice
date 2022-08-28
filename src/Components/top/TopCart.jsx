import React from 'react'
import Tdata from './Tdata'
import AliceCarousel from 'react-alice-carousel';

const TopCart = () => {
    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 2,
        },
        1024: {
            items: 3,
        },
    };
    return (
        <>
            <AliceCarousel
                mouseTracking
                disableButtonsControls
                disableDotsControls
                infinite
                responsive={responsive}
                autoPlay
            >
                {Tdata.map((value, index) => {
                    return (
                        <div className="box product" key={index}>
                            <div className="nametop d_flex">
                                <span className="tLeft">{value.para}</span>
                                <span className="tright">{value.desc}</span>
                            </div>
                            <div className="img">
                                <img src={value.cover} alt="" />
                            </div>
                        </div>
                    )
                })
                }
            </AliceCarousel>
        </>
    )
}

export default TopCart