import styles from "./Animation.module.scss"

export function SlideFadeAnimation({isOpen=true, children}) {
    const _style = isOpen ? styles.slideUpFade : styles.slideDownFade;
    return (
        <section className={_style}>
            {children}
        </section>
    )
}