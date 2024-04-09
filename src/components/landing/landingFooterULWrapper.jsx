
export default function LandingFooterULWrapper({ children, styles }) {
    return (
        <div className={`space-y-3  ${styles} `} >
            {children}
        </ div>
    )
}