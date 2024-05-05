import MainButton from "../landing/MainButton"

function TextModal({ text, setDisplay }) {
    return (
        <div className={'w-[350px] h-[350px] rounded-md bg-white text-black text-base font-medium overflow-y-auto flex-col flex justify-between items-center p-4 '}>
            <p className="text-justify">
                Website Terms of Use manage the use of a website by visitors. These are distinct from terms and conditions of business which are concerned with the e-commerce aspects of selling goods or services online, rather than the way in which a website is used. Any businesses with an online presence must include certain details in order to abide by the Electronic Commerce Regulations. Website terms and conditions are the best place to include such information.

                Ensuring that your users understand the limitations of how they can use any website content, including text, images, videos and music, helps to secure your intellectual property.

                If you don't have a clue on how to make terms of use for your website, we can help you out. Just fill in the spaces below and we will send you an email with your very own terms of use for your website.

                The accuracy of the generated document on this website is not legally binding. Use at your own risk.
            </p>
            <MainButton title={'Agree'} type={'button'} lgBTN={false} styles={'bg-purple-1000  mt-2 p-2 main-btn-hover'} action={setDisplay} />
        </div>
    )
}

export default TextModal