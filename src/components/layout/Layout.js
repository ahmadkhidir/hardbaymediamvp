import { SlideFadeAnimation } from "../animation/Animation";
import styles from "./Layout.module.scss";

export default function Layout({ appBar, children, footer }) {
    return (
        <main className={styles.layout}>
            {appBar}
            <div className={styles.children}>
                <SlideFadeAnimation>
                    {children}
                    {footer}
                </SlideFadeAnimation>
            </div>

        </main>
    )
}