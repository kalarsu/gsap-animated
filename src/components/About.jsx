import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import AnimatedTitle from "./AnimatedTitle.jsx";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip', //when this element comes to view, animation will start
                start: 'center center', //animation starts when the center of the #clip element aligns with the center of the viewport.
                end: '+=800 center', // The animation continues until the scroll position has advanced an additional 800 pixels from the start point. The word "center" here helps define the endpoint relative to the viewport.
                scrub: 0.5, //Scrubbing synchronizes the animation with the scroll position, making it play forward or backward as you scroll. The value 0.5 adds a slight delay or smoothing effect to the scrubbing.
                pin: true, //These options pin the #clip element in place during the animation (i.e., it stays fixed while the animation runs)
                pinSpacing: true, //adds spacing to avoid layout shifts.
            }
        });

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        });
    });

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
                <p className="font-general text-sm uppercase md:text-[10px] px-4">Welcome to The colorful adventure of three little chicks</p>
                <AnimatedTitle
                    title="Every f<b>e</b>ather tells<br /><b>a</b> story"
                    containerClass="mt-5 !text-black text-center"
                />

                <div className="about-subtext px-4">
                    <p>Dive into the vibrant world of Red, Green, and Orange as these three little chicks</p>
                    <p>explore big lessons in bravery, uniqueness, and friendship—now available on Amazon!</p>
                </div>
            </div>
            <div id="clip" className="h-dvh w-screen">
                <div className="mask-clip-path about-image">
                    <img
                    src="img/page1.png"
                    alt="background"
                    className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
export default About
