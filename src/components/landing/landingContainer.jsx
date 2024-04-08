
export default function LandingContainer({ children }) {
    return (
        <section>
            <div className="w-[80%]  mt-28 md:mt-12 mx-auto flex flex-col-reverse justify-between items-center md:flex-row   ">
                {children}
            </div>
        </section>
    )
}