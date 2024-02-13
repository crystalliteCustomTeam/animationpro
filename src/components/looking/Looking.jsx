"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';

// Import Components
import CTA from "@/components/cta/CTA";

const Looking = ({ content }) => {
    const { title, para: { paraArray }, isCTA, flodImg, css, isBtns } = content;
    // set fold Image
    const router = usePathname();
    let lookinImage;
    let lookingSecCol;
    let bgTransparent;
    switch (router) {
        case '/why-us':
            lookinImage = 'lg:min-w-[1000px] mr-auto'
            lookingSecCol = 'md:absolute right-[54px] top-[18%]'
            break;
        case '/2d-animation':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/3d-animation':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/architectural-services':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/cgi-and-vfx':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/contact-us':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/hybrid-&-cel-animations':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/infographics-design':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/motion-graphics':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/portfolio':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/pricing':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/tech-videos':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/video-editing':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/whiteboard-animation':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        case '/why-us':
            bgTransparent = 'lg:bg-[url("../../public/images/fold-bg.png")]'
            break;
        default:
            break;
    }

    return (
        <>
            <section className={`w-full flex items-center justify-start py-6 md:py-8 lg:py-16 bg-none  bg-no-repeat bg-center bg-cover relative ${bgTransparent}`}>
                <div className="container">
                    <div className='flex flex-col-reverse lg:flex-row items-center justify-around gap-y-7'>
                        <div className={`w-full lg:w-[500px] ${lookinImage}`}>
                            <Image src={flodImg} className={`w-9/12 lg:w-full mx-auto ${css}`} alt="Infinity Animation" quality={85} />
                        </div>
                        <div className={`w-full lg:w-[800px] ${lookingSecCol}`}>
                            <h1 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px] font-semibold font-sans leading-tight mb-5">
                                {title}
                            </h1>
                            {paraArray.map((para, index) => (
                                <p key={index} className="text-[16px] font-normal font-sans leading-snug tracking-wider text-justify mb-5">
                                    {para}
                                </p>
                            ))}

                            {isBtns ?
                                <div className="flex gap-6">
                                    <CTA
                                        text="Get Started"
                                        icon1={true}
                                        bg="bg-prime"
                                        color={`text-white`}
                                        border={`border-2 border-[#f5090b]`}
                                        hover="hover:bg-transparent"
                                        href="#"
                                    />
                                    {isCTA ? <CTA
                                        text="Live Chat"
                                        icon2={true}
                                        bg="bg-[#000]"
                                        color={`text-white`}
                                        border={`border-2 border-[#fff]`}
                                        hover="hover:bg-prime"
                                        href="javascript:$zopim.livechat.window.show();"
                                    /> : null}
                                </div> :
                                null
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Looking
