
export default function LandingContainer({ children, styles }) {
    return (
        <section>
            <div className={`w-[80%] mx-auto flex flex-col-reverse justify-between items-center md:flex-row ${styles}`}>
                {children}
            </div>
        </section >
    )
}