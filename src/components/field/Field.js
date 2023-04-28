import styles from "./Field.module.scss";

export function InputField(props) {
    return (
        <div className={styles.inputfield}>
            <input {...props} />
            {props._error && <label className={styles.error}>{props._error}</label>}
        </div>
    )
}