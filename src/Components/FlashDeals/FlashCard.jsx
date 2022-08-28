import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
const FlashCard = ({ productItems,addToCart }) => {
    const [count, setCount] = useState(0)

    const handleLike= ()=>{
        setCount(count+1)
    }
    
    const responsive = {
        0: {
            items: 1,
        },
        512: {
            items: 3,
        },
        1024: {
            items: 5,
        },
    };
    return (
        <>
            <AliceCarousel
                mouseTracking
                disableDotsControls
                autoPlay
                autoPlayInterval={5000}
                infinite={true}
                renderPrevButton={() => {
                    return <div className='control-btn'>
                       <button className='prev'>
                       <i className="fa fa-long-arrow-alt-left"></i>
                       </button>
                    </div>
                }}
                renderNextButton={() => {
                    return <div className='control-btn'>
                    <button className='next'>
                    <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                 </div>
                }}
             
                responsive={responsive}
            >
                {productItems.map(productItem => {
                    return (<div className="box" key={productItem.id}>
                        <div className="product mtop">
                            <div className="img">
                                <span className='discount'> {productItem.discount}% Off</span>
                                <img src={productItem.cover} alt='' />
                                <div className="product-like">
                                    <label >{count}</label>
                                    <br />
                                    <i className="fa-regular fa-heart" onClick={handleLike}></i>
                                </div>
                            </div>
                            <div className="product-details">
                                <h3>{productItem.name}</h3>
                                <div className="rate">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="price">
                                    <h4>{productItem.price}.00</h4>
                                    <button onClick={()=>addToCart(productItem)}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}

            </AliceCarousel>
        </>
    )
}

export default FlashCard