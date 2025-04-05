import React from 'react'
import Button from "./Button.jsx";

const ImageClipBox = ({src, clipClass}) =>(
    <div className={clipClass}>
        <img src={src}></img>
    </div>
)

const Contact = () => {
    return (
        <div id="contact" className="min-h-96 w-screen my-20 px-10">
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg-left-20 lg-w-96">
                    <ImageClipBox src="img/little-green-lime.png" clipClass="contact-clip-path-1" />
                    <ImageClipBox src="img/little-red-apple.png" clipClass="contact-clip-path-2 md:-translate-y-12
                    translate-y-60" />
                </div>
                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox src="img/swordman-partial.webp" clipClass="absolute md:scale-125" />
                    <ImageClipBox src="img/little-orange-love.png" clipClass="sword-man-clip-path md:scale-125" />
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="font-general text-[10px] uppercase">Join me</p>
                    <p className="font-zentry special-font mt-10 w-full leading-[0.9] !text-5xl md:text-[6rem]">
                        Spre<b>a</b>ding joy a<b>n</b>d wisdo<b>m</b>, <br/>one p<b>a</b>ge at a ti<b>m</b>e.
                    </p>
                    <Button title="contact" containerClass="mt-10 curson-pointer text-black" url="mailto:c.hsiang.su@gmail.com" />
                </div>
            </div>
        </div>
    )
}
export default Contact
