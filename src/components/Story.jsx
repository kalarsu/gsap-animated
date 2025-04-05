import AnimatedTitle from "./AnimatedTitle.jsx";
import {useRef} from "react";
import gsap from "gsap";
import Button from "./Button.jsx";

const Story = () => {
    const frameRef = useRef(null);
    const handleMouseLeave = () => {
        const element = frameRef.current;
        gsap.to(element, {
            duranger: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut',
        });
    }
    const handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        const element = frameRef.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((y - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut',
        });
    }

    return (
        <section id="twist" className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="flex flex-col size-full items-center py-10 pb-24">
                <p className="font-general text-sm px-4 uppercase md:text-[10px]">When danger lurks, true colors shine—discover what makes our three little heroes extraordinary!</p>
                <div className="relative size-full">
                    <AnimatedTitle
                        title="True colors <b>e</b>merge<br /> when ch<b>a</b>llenges arise"
                        sectionId="story"
                        containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />
                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src="/img/book-cover.png"
                                    alt="Entrance"
                                    className="object-cover scale-[0.8]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm max-sm:mt-20 text-center md:text-start font-circular-web text-violet-50">
                            Expect the unexpected: A journey of bravery and friendship that turns the ordinary into the extraordinary!<br/>
                            <Button id="realm-button" url="https://shorturl.at/o4DPK" title="on Sale on Amazon" containerClass="mt-5 text-black !bg-yellow-300" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Story
