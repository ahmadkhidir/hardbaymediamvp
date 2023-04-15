import styles from "./Layout.module.scss";

export default function Layout({ appBar, children, footer }) {
    return (
        <main className={styles.layout}>
            {appBar}
            <div className={styles.children}>
                {children}
                {footer}
            </div>
        </main>
    )
}