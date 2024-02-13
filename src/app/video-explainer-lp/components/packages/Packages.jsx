import Image from 'next/image'
import React from 'react'

// ==== Images 
import Price from "media/video-explainer/price-img-1.png"
import Link from 'next/link'

const Packages = () => {
    return (
        <>
            <section className='py-[50px] bg-cover bg-center bg-[url("../../public/video-explainer/price-bg.jpg")] packages'>
                <div className="px-4 sm:px-8 lg:max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12">
                            <h2 className='text-white text-center font-[700] montserrat text-[20px] md:text-[25px] lg:text-[30px]'>Our Packages</h2>
                            <p className='text-white text-[16px] lg:text-[18px] montserrat font-[400] py-[17px] text-center pb-[30px]'>You've visited the right website if you're looking for top-of-the-line video animation experts in the US.</p>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="card bg-[#c4df9b] rounded-[10px] py-[10px] overflow-hidden duration-700 relative z-1 cursor-pointer shadow-2xl before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:m-auto before:content-[''] before:rounded-[10px] before:translate-y-[-690px] before:duration-700 before:bg-[#b5ce8f] before:z-0 hover:before:translate-y-[0px] ">
                                <div className="card_top text-center py-[15px] relative z-1">
                                    <h3 className='text-[#231f20] montserrat text-[25px] font-[700] uppercase'>STARTUP PACKAGE</h3>
                                    <Image src={Price} alt='Price_image' className='mx-auto mt-[20px] mb-[10px]' />
                                    <p className='text-[#231f20] montserrat text-[14px]'>Text & Image Compilation</p>
                                    <h4 className='text-[#231f20] text-[50px] font-[700] poppins py-[10px]'>$195</h4>
                                </div>
                                <div className="card_list bg-[#b5ce8f] py-[30px] px-[20px] relative z-1">
                                    <ul className='h-[245px] pl-[5px]'>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            60 Seconds Duration
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Script Writing
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Custom Artwork
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Background Music
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            HD Format Video
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Dedicated Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="card_bottom relative z-1 pt-[12px] px-[25px]">
                                    <div className="flex-wrap gap-y-3 flex items-center justify-between">
                                        <Link href="tel:+1-833-666-6689" className='text-left m-0 text-[14px] leading-[20px] text-[#f61253] montserrat flex flex-col justify-center font-[700]'>
                                            speak with us
                                            <span className='text-[#231f20] text-[16px]'>+1-833-666-6689</span>
                                        </Link>
                                        <Link href="javascript:$zopim.livechat.window.show();" className='text-left m-0 text-[14px] leading-[20px] text-[#f61253] montserrat flex flex-col justify-center font-[700]'>
                                            Want to Discuss
                                            <span className='text-[#231f20] text-[16px]'>Live Chat Now</span>
                                        </Link>
                                    </div>
                                    <div className="flex-wrap gap-y-3 flex items-center justify-center md:justify-between mt-[35px] mb-[20px]">
                                        <Link href="javascript:;" className='flex items-center text-[16px] text-white font-[700] poppins bg-black py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Get Started
                                        </Link>
                                        <Link href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[16px] text-black font-[700] poppins bg-transparent border border-black py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Live Chat
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="card bg-[#ffc88d] rounded-[10px] py-[10px] overflow-hidden duration-700 relative z-1 cursor-pointer shadow-2xl before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:m-auto before:content-[''] before:rounded-[10px] before:translate-y-[-690px] before:duration-700 before:bg-[#ebb882] before:z-0 hover:before:translate-y-[0px] ">
                                <div className="card_top text-center py-[15px] relative z-1">
                                    <h3 className='text-[#231f20] montserrat text-[25px] font-[700] uppercase'>CLASSIC PACKAGE</h3>
                                    <Image src={Price} alt='Price_image' className='mx-auto mt-[20px] mb-[10px]' />
                                    <p className='text-[#231f20] montserrat text-[14px]'>Whiteboard or Motion Graphic Animation</p>
                                    <h4 className='text-[#231f20] text-[50px] font-[700] poppins py-[10px]'>$499</h4>
                                </div>
                                <div className="card_list bg-[#ebb882] py-[30px] px-[20px] relative z-1">
                                    <ul className='h-[245px] pl-[5px]'>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            60 Seconds Duration
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Script Writing
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Professional Voice-over & SFX
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Hand-drawn Illustrations
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Unlimited Revisions
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            HD Format Video
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Dedicated Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="card_bottom relative z-1 pt-[12px] px-[25px]">
                                    <div className="flex-wrap gap-y-3 flex items-center justify-between">
                                        <Link href="tel:+1-833-666-6689" className='text-left m-0 text-[14px] leading-[20px] text-[#f61253] montserrat flex flex-col justify-center font-[700]'>
                                            speak with us
                                            <span className='text-[#231f20] text-[16px]'>+1-833-666-6689</span>
                                        </Link>
                                        <Link href="javascript:$zopim.livechat.window.show();" className='text-left m-0 text-[14px] leading-[20px] text-[#f61253] montserrat flex flex-col justify-center font-[700]'>
                                            Want to Discuss
                                            <span className='text-[#231f20] text-[16px]'>Live Chat Now</span>
                                        </Link>
                                    </div>
                                    <div className="flex-wrap gap-y-3 flex items-center justify-center md:justify-between mt-[35px] mb-[20px]">
                                        <Link href="javascript:;" className='flex items-center text-[16px] text-white font-[700] poppins bg-black py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Get Started
                                        </Link>
                                        <Link href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[16px] text-black font-[700] poppins bg-transparent border border-black py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Live Chat
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="card bg-[#ffd100] rounded-[10px] py-[10px] overflow-hidden duration-700 relative z-1 cursor-pointer shadow-2xl before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:m-auto before:content-[''] before:rounded-[10px] before:translate-y-[-690px] before:duration-700 before:bg-[#ebc100] before:z-0 hover:before:translate-y-[0px] ">
                                <div className="card_top text-center py-[15px] relative z-1">
                                    <h3 className='text-[#231f20] montserrat text-[25px] font-[700] uppercase'>PREMIUM PACKAGE</h3>
                                    <Image src={Price} alt='Price_image' className='mx-auto mt-[20px] mb-[10px]' />
                                    <p className='text-[#231f20] montserrat text-[14px]'>Ultimate 2D Character Animation</p>
                                    <h4 className='text-[#231f20] text-[50px] font-[700] poppins py-[10px]'>$799</h4>
                                </div>
                                <div className="card_list bg-[#ebc100] py-[30px] px-[20px] relative z-1">
                                    <ul className='h-[245px] pl-[5px]'>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            60 Seconds Duration
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Script Writing
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Professional Voice-over & SFX
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Custom 2D Character Illustration
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Unlimited Revisions
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            HD Format Video
                                        </li>
                                        <li className='text-[14px] text-black leading-[35px] font-[500] poppins'>
                                            Dedicated Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="card_bottom relative z-1 pt-[12px] px-[25px]">
                                    <div className="flex-wrap gap-y-3 flex items-center justify-between">
                                        <Link href="tel:+1-833-666-6689" className='text-left m-0 text-[14px] leading-[20px] text-[#f61253] montserrat flex flex-col justify-center font-[700]'>
                                            speak with us
                                            <span className='text-[#231f20] text-[16px]'>+1-833-666-6689</span>
                                        </Link>
                                        <Link href="javascript:$zopim.livechat.window.show();" className='text-left m-0 text-[14px] leading-[20px] text-[#f61253] montserrat flex flex-col justify-center font-[700]'>
                                            Want to Discuss
                                            <span className='text-[#231f20] text-[16px]'>Live Chat Now</span>
                                        </Link>
                                    </div>
                                    <div className="flex-wrap gap-y-3 flex items-center justify-center md:justify-between mt-[35px] mb-[20px]">
                                        <Link href="javascript:;" className='flex items-center text-[16px] text-white font-[700] poppins bg-black py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Get Started
                                        </Link>
                                        <Link href="javascript:$zopim.livechat.window.show();" className='flex items-center text-[16px] text-black font-[700] poppins bg-transparent border border-black py-[12px] px-[35px] tracking-[.3px] rounded-[5px] leading-[20px] shadow-2xl'>
                                            Live Chat
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Packages
