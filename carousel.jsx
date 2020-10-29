import * as React from 'react';
import Step1 from './assets/carousel/onboarding-step-1.svg';
import Step2 from './assets/carousel/onboarding-step-2.svg';
import Step3 from './assets/carousel/onboarding-step-3.svg';
import Step4 from './assets/carousel/onboarding-step-4.svg';
import './carousel.styl'

export default function Carousel() {
    return <>
        <div className="slider">
            <div className="slides">
                <div id="slide-1"> <Step1 /> </div>
                <div id="slide-2"> <Step2 /> </div>
                <div id="slide-3"> <Step3 /> </div>
                <div id="slide-4"> <Step4 /> </div>
            </div>
        </div>
        <div className="links">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
            <a href="#slide-4"></a>
        </div>
    </>;
}