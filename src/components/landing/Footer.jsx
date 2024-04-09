import FooterLI from "./FooterLI";
import FooterULWrapper from "./FooterULWrapper";
import SocialMediaLink from "./SocialMedialLink";
import {
    FaInstagram,
    FaTelegramPlane,
    FaYoutube,
    FaFacebookF
}
    from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {

    return (
        <footer>
            <div className="py-6 px-6 mx-auto flex flex-col  justify-between border-t-2 border-gray-200 w-[80%] h-[250px] lg:flex-row ">

                <div className="flex flex-col justify-between space-y-6 lg:space-y-0 lg:flex-row md:w-2/5">

                    <FooterULWrapper styles={'flex flex-col'}>
                        <FooterLI title={'Downloads'} target={'#'} />
                        <FooterLI title={'Terms'} target={'#'} />
                        <FooterLI title={'Privacy'} target={'#'} />
                        <FooterLI title={'Disclaimer'} target={'#'} />
                    </FooterULWrapper>
                    <FooterULWrapper styles={'flex flex-col'}>
                        <FooterLI title={'Advertising'} target={'#'} />
                        <FooterLI title={'Advertising Policies'} target={'#'} />
                        <FooterLI title={'Promote/Boost'} target={'#'} />
                        <FooterLI title={'Contact Us'} target={'#'} />
                    </FooterULWrapper>

                </div>

                <div className=" mt-6 flex flex-col pb-6 justify-end items-start lg:mt-0 lg:w-2/5  lg:pb-0 lg:px-14">
                    <span className="text-md text-gray-500 mb-5">
                        Find NewzKast on:
                    </span>
                    <div className="flex flex-row items-center space-x-3">
                        <SocialMediaLink icon={<FaFacebookF />} target={'#'} label={'Facebook'} />
                        <SocialMediaLink icon={<FaYoutube />} target={'#'} label={'YouTube'} />
                        <SocialMediaLink icon={<FaTelegramPlane />} target={'#'} label={'Telegram'} />
                        <SocialMediaLink icon={<FaInstagram />} target={'#'} label={'Instagram'} />
                        <SocialMediaLink icon={<FaLinkedinIn />} target={'#'} label={'Linkedin'} />
                    </div>
                </div>


            </div>

        </footer>
    )
}