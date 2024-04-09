
export default function Container({ children, styles }) {
    return (
        <section>
            <div className={`px-[10%] mx-auto flex flex-col-reverse justify-evenly lg:justify-between items-center lg:flex-row  ${styles}`}>
                {children}
            </div>
        </section >
    )
}