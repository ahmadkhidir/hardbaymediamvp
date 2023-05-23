import { Link } from "react-router-dom"
import styles from "./Button.module.scss"

export function Button({ onClick, theme, children, type, className }) {
    const _theme = {
        "orange": `${styles.button} ${styles.orange} ${className}`,
        "white": `${styles.button} ${styles.white} ${className}`
    }
    return (
        <button className={_theme[theme]} onClick={onClick} type={type}>{children}</button>
    )
}

export function LinkButton({ to, theme, children }) {
    const _theme = {
        "orange": `${styles.button} ${styles.orange}`,
        "white": `${styles.button} ${styles.white}`
    }
    return (
        <Link className={_theme[theme]} to={to}>{children}</Link>
    )
}

export function OutsetButton({ onClick, theme, children }) {
    const _theme = {
        "orange": `${styles.outsetButton} ${styles.orange}`,
        "white": `${styles.outsetButton} ${styles.white}`
    }
    return (
        <button className={_theme[theme]} onClick={onClick}>{children}</button>
    )
}

export function FlatButton({ onClick, theme, children }) {
    const _theme = {
        "orange": `${styles.flatButton} ${styles.orange}`,
        "white": `${styles.flatButton} ${styles.white}`
    }
    return (
        <button className={_theme[theme]} onClick={onClick}>{children}</button>
    )
}