import { createRef } from "react";
import { SlideFadeAnimation } from "../animation/Animation";
import styles from "./Layout.module.scss";

export const layoutBodyRef = createRef();

export default function Layout({ appBar, children, footer }) {
    return (
        <main className={styles.layout}>
            {appBar}
            <div className={styles.children} ref={layoutBodyRef}>
                <SlideFadeAnimation>
                    {children}
                    {footer}
                </SlideFadeAnimation>
            </div>

        </main>
    )
}