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
        "white": `${styles.button} ${styles.white}`,
        "green": `${styles.button} ${styles.green}`,
        "greenShade": `${styles.button} ${styles.greenShade}`,
    }
    return (
        <Link className={_theme[theme]} to={to}>{children}</Link>
    )
}

export function OutsetButton({ onClick, theme, children }) {
    const _theme = {
        "orange": `${styles.outsetButton} ${styles.orange}`,
        "green": `${styles.outsetButton} ${styles.green}`,
        "white": `${styles.outsetButton} ${styles.white}`
    }
    return (
        <button className={_theme[theme]} onClick={onClick}>{children}</button>
    )
}

export function FlatButton({ onClick, theme, children, style }) {
    const _theme = {
        "orange": `${styles.flatButton} ${styles.orange}`,
        "white": `${styles.flatButton} ${styles.white}`,
        "purple": `${styles.flatButton} ${styles.purple}`
    }
    return (
        <button className={theme? _theme[theme] : _theme.white} style={style} onClick={onClick}>{children}</button>
    )
}