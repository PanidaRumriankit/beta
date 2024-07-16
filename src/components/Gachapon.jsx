import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { gachacards } from '../constants/index';
import { Box, Button } from '@mui/material';
import { GachaCard } from './cards';
import IMAGES from '../assets/images';
import Navbars from './Navbars';
import Footer from './Footer';
import './Gachapon.css';

function ResponsiveCarousel() {
    const [autoPlay, setAutoPlay] = useState(true);
    const [enlargedCard, setEnlargedCard] = useState(null);

    const handleTestYourLuck = () => {
        const nearestCardId = findNearestCard();
        setAutoPlay(false);
        setEnlargedCard(nearestCardId);
    };

    const findNearestCard = () => {
        // Logic to find the nearest card
        return gachacards[0].id;
    };

    const handleOverlayClick = () => {
        setAutoPlay(true);
        setEnlargedCard(null);
    };

    const current_page = "/Gachapon";

    const nearestCard = gachacards.find(card => card.id === enlargedCard);

    return (
        <Box
            id="gachapon"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
            className="pt-16"
        >
            <video
                autoPlay
                muted
                loop
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1
                }}
            >
                <source src={IMAGES.starburst} type="video/mp4" />
            </video>
            <Navbars page={current_page} />
            <Box sx={{ flex: '1 0 auto', padding: 5, margin: 2 }}>
                <Carousel
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlay={autoPlay}
                    autoPlaySpeed={1}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    customTransition="all 1s linear"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover={false}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {gachacards.map((gacha) => (
                        <Box key={gacha.id}>
                            <GachaCard
                                title={gacha.title}
                                describe={gacha.describe}
                                img={gacha.img}
                                star={gacha.star}
                            />
                        </Box>
                    ))}
                </Carousel>
                <Box sx={{ textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleTestYourLuck}
                        sx={{ my: 2 }}
                    >
                        Test your luck
                    </Button>
                </Box>
            </Box>
            {enlargedCard && (
                <div className="overlay" onClick={handleOverlayClick}>
                    <div className="enlarged-card-container">
                        <GachaCard
                            title={nearestCard.title}
                            describe={nearestCard.describe}
                            img={nearestCard.img}
                            star={nearestCard.star}
                        />
                    </div>
                </div>
            )}
            <Footer sx={{ flexShrink: 0 }} />
        </Box>
    );
}

export default ResponsiveCarousel;