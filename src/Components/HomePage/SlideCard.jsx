import React from "react"
import Sdata from "./Sdata"
import AliceCarousel from 'react-alice-carousel';
import './Home.css'
const SlideCard = () => {

  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 1,
    },
    1024: {
      items: 1,
    },
  };
  return (
    <>
      <AliceCarousel
        mouseTracking
        disableButtonsControls
        infinite
        responsive={responsive}
      >
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={value.id}>
                <div className='left'>
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className='btn-primary'>Visit Collections</button>
                </div>
                <div className='right'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        })}
      </AliceCarousel>
    </>
  )
}

export default SlideCard