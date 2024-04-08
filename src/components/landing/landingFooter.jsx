import LandingFooterLI from "./landingFooterLI";
import LandingFooterULWrapper from "./landingFooterULWrapper";

export default function LandingFooter() {

    return (
        <footer>
            <div className="py-10 px-6 mx-auto border-t-2 border-gray-200 w-[80%] h-[250px] ">

                <div className="flex justify-between  w-2/5">
                    <LandingFooterULWrapper>
                        <LandingFooterLI title={'Downloads'} target={'#'} />
                        <LandingFooterLI title={'Terms'} target={'#'} />
                        <LandingFooterLI title={'Privacy'} target={'#'} />
                        <LandingFooterLI title={'Disclaimer'} target={'#'} />
                    </LandingFooterULWrapper>
                    <LandingFooterULWrapper>
                        <LandingFooterLI title={'Advertising'} target={'#'} />
                        <LandingFooterLI title={'Advertising Policies'} target={'#'} />
                        <LandingFooterLI title={'Promote/Boost'} target={'#'} />
                        <LandingFooterLI title={'Contact Us'} target={'#'} />
                    </LandingFooterULWrapper>
                   
                </div>

            </div>

        </footer>
    )
}