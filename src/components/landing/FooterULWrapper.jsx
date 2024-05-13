
export default function FooterULWrapper({ children, styles }) {
    return (
        <ul className={`space-y-3   ${styles} `} >
            {children}
        </ ul>
    )
}