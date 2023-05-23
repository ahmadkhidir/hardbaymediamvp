import { useState } from "react"
import styles from "./Dropdown.module.scss"
import add from "./assets/add.svg"
import remove from "./assets/remove.svg"

export function DropdownCollapsible(props) {
    const [styleState, setStyleState] = useState(styles.active)
    return (
        <section className={`${styles.collapsible} ${props.className}`}>
            <div className={styles.head}>
                <h4>{props.title}</h4>
                {props.icon != null ? <img src={props.icon} alt="gift icon" /> : null }
                <div className={styles.controls}>
                    <img src={remove} alt="remove icon" onClick={() => setStyleState(styles.inactive)} />
                    <img src={add} alt="add icon" onClick={() => setStyleState(styles.active)} />
                </div>
            </div>
            <div className={`${styles.child} ${styleState}`}>
                {props.children}
            </div>
        </section>
    )
}