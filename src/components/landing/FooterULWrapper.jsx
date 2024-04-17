
export default function FooterULWrapper({ children, styles }) {
    return (
        <div className={`space-y-3   ${styles} `} >
            {children}
        </ div>
    )
}