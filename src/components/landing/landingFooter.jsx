import LandingFooterLI from "./landingFooterLI";
import LandingFooterULWrapper from "./landingFooterULWrapper";
import SocialMediaLink from "./socialMedialLink";
import {
    FaInstagram,
    FaTelegramPlane,
    FaYoutube,
    FaFacebookF
}
    from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa6";

export default function LandingFooter() {

    return (
        <footer>
            <div className="py-6 px-6 mx-auto flex flex-col  justify-between border-t-2 border-gray-200 w-[80%] h-[250px] lg:flex-row ">

                <div className="flex flex-col justify-between space-y-6 lg:space-y-0 lg:flex-row md:w-2/5">

                    <LandingFooterULWrapper styles={'flex flex-col'}>
                        <LandingFooterLI title={'Downloads'} target={'#'} />
                        <LandingFooterLI title={'Terms'} target={'#'} />
                        <LandingFooterLI title={'Privacy'} target={'#'} />
                        <LandingFooterLI title={'Disclaimer'} target={'#'} />
                    </LandingFooterULWrapper>
                    <LandingFooterULWrapper styles={'flex flex-col'}>
                        <LandingFooterLI title={'Advertising'} target={'#'} />
                        <LandingFooterLI title={'Advertising Policies'} target={'#'} />
                        <LandingFooterLI title={'Promote/Boost'} target={'#'} />
                        <LandingFooterLI title={'Contact Us'} target={'#'} />
                    </LandingFooterULWrapper>

                </div>

                <div className=" mt-6 flex flex-col pb-6 justify-end items-start lg:mt-0 lg:w-2/5  lg:pb-0 lg:px-14">
                    <span className="text-md text-gray-500 mb-5">
                        Find NewzKast on:
                    </span>
                    <div className="flex flex-row items-center space-x-3">
                        <SocialMediaLink icon={<FaFacebookF />} target={'#'} />
                        <SocialMediaLink icon={<FaYoutube />} target={'#'} />
                        <SocialMediaLink icon={<FaTelegramPlane />} target={'#'} />
                        <SocialMediaLink icon={<FaInstagram />} target={'#'} />
                        <SocialMediaLink icon={<FaLinkedinIn />} target={'#'} />
                    </div>
                </div>


            </div>

        </footer>
    )
}