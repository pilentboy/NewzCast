
export default function Container({ children, noContainer, styles }) {
    return (
        <section>
            <div className={`flex flex-col-reverse justify-evenly lg:justify-between items-center lg:flex-row ${!noContainer ? 'container' : null} ${styles}`}>
                {children}
            </div>
        </section >
    )
}