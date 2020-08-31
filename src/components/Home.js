import React from 'react'
import './css/Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            
            
            <img className="home__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
            <div className="home__row">
                <Product id={1}
                        title="BG Hellcat Gaming Mouse 4800DPI"
                        price={8.98}
                        rating={5}
                        image="https://img.pccomponentes.com/articles/15/159252/bg-hellcat-01-verde.jpg" />
                        <Product id={2}
                        title="Mars Gaming MRK0 Gaming Antighosting Keyboard RGB Rainbow Spanish Layout"
                        price={12.57}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71aXX52T3FL._AC_SL1500_.jpg" />
            </div>

            <div className="home__row">
            <Product id={3}
                        title="GREKT Mouse Mat xxl"
                        price={19.95}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71u%2BcVvrJoL._AC_SL1500_.jpg" />
            
            <Product id={4}
                        title="Nubwo PS4 Headset Xbox One Stereo Gaming Headphones Noise Cancelling Inline Control for PS4 / Xbox 1 / PC"
                        price={34.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/618iUenJFKL._AC_SL1200_.jpg" />
            
            <Product id={5}
                        title="Tonor XLR 3.5 mm Condenser Microphone Kit, Black"
                        price={39.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71f6Q%2B5dc-L._AC_SL1500_.jpg" />

            </div>

            <div className="home__row">
            <Product id={6}
                        title="Huawei MateBook D Laptop, FullView 1080p Full HD Ultrabook, Grey"
                        price={589.90}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-u%2Bm5bxnL._AC_SL1500_.jpg" />
            </div>
        
        </div>
    )
}

export default Home
