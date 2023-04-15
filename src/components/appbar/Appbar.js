import styles from "./Appbar.module.scss"
import logoIc from "./assets/logo_prints.png"
import menuIc from "./assets/menu.svg"
import searchIc from "./assets/search.svg"
import avatarIc from "./assets/avatar.svg"
import cartIc from "./assets/cart.svg"
import { Link } from "react-router-dom"

export default function Appbar(props) {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.inner}>
        <img className={styles.logo} src={logoIc} alt="" />
        <section className={styles.searchField}>
          <button className={`${styles.button} ${styles.menu}`}><img src={menuIc} alt="" /> PRODUCTS</button>
          <input placeholder="Jotters, Paper Bag, Shirts" />
          <button className={`${styles.button} ${styles.search}`}><img src={searchIc} alt="" /> SEARCH</button>
        </section>
        <section className={styles.secondaryBtn}>
          <Link className={styles.button} to={"/auth"} ><img src={avatarIc} alt="" /> LOGIN / SIGN UP</Link>
          <button className={styles.button}><img src={cartIc} alt="" /> CART</button>
        </section>
      </div>
    </nav>
  )
}