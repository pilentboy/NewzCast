
export default function MainBox({ styles, children }) {
    return (
        <div className={`rounded-md border border-1 border-gray-200 mx-auto  flex flex-col  space-y-8  ${styles}`}>
            {children}
        </div>
    )
}