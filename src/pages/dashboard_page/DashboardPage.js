import Appbar from "../../components/appbar/Appbar"
import { Footer } from "../../components/footer/Footer"
import Layout from "../../components/layout/Layout"
import styles from "./DashboardPage.module.scss"
import avatarIc from "./assets/avatar.png"
import arrowDownIc from "./assets/arrowDown.svg"
import { DropdownCollapsible } from "../../components/dropdown/Dropdown"
import { Button, FlatButton } from "../../components/button/Button"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../redux/hooks"
import { Status } from "../../utilities/helper"
import { ErrorCard, LoadingCard } from "../../components/card/Card"
import { useIsAuthUser } from "../../utilities/hooks"

export function DashboardPage(props) {
    useIsAuthUser()

    const [status, data, error, reload] = useUser()
    if (status === Status.pending) {
        return <LoadingCard />
    } else if (status === Status.failed) {
        return <ErrorCard error={error} reload={reload} />
    }
    
    return (
        <Layout appBar={<Appbar />} footer={<Footer />}>
            <section className={styles.dashboard}>
                <div className={styles.inner}>
                    <div className={styles.profile}>
                        <div className={styles.avatar}>
                            <img src={avatarIc} alt="avatar" />
                        </div>
                        <div className={styles.texts}>
                            <h3>Welcome {data!=undefined && data.data.first_name}</h3>
                            <h6>{data!=undefined && data.data.email}</h6>
                        </div>
                    </div>
                    <DropdownCollapsible title={"MY ACCOUNT"}>
                        <a className={styles.dropLink}>Orders <img src={arrowDownIc} alt={''} /></a>
                        <a className={styles.dropLink}>Inbox <img src={arrowDownIc} alt={''} /></a>
                        <a className={styles.dropLink}>Reviews <img src={arrowDownIc} alt={''} /></a>
                        <a className={styles.dropLink}>Coupon <img src={arrowDownIc} alt={''} /></a>
                        <a className={styles.dropLink}>Saved Items <img src={arrowDownIc} alt={''} /></a>
                        <a className={styles.dropLink}>Recently Viewed <img src={arrowDownIc} alt={''} /></a>
                    </DropdownCollapsible>

                    <DropdownCollapsible title={"MY ACCOUNT"}>
                        <h6 className={styles.dropLink}>Personal Information <FlatButton theme={"orange"}>Edit</FlatButton></h6>
                        <h6 className={styles.dropLink}>Address/Location <FlatButton theme={"orange"}>Edit</FlatButton></h6>
                        <h6 className={styles.dropLink}>Password <FlatButton theme={"orange"}>Change</FlatButton></h6>
                        <h6 className={styles.dropLink}>Newsletter <FlatButton theme={"orange"}>Opt In</FlatButton></h6>
                        <h6 className={styles.dropLink}>Close Account</h6>
                    </DropdownCollapsible>
                    <Button theme={"orange"} className={styles.btn}>LOG OUT</Button>
                    <Button theme={"orange"} className={styles.btn}>NEEDS HELP</Button>
                </div>
            </section>
        </Layout>
    )
}