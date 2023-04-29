import styles from "./Appbar.module.scss"
import logoIc from "./assets/logo_prints.png"
import menuIc from "./assets/menu.svg"
import searchIc from "./assets/search.svg"
import avatarIc from "./assets/avatar.svg"
import cartIc from "./assets/cart.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Appbar(props) {
  const [search, setSearch] = useState("")
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search-result?q=${search}`);
  }
  return (
    <nav className={styles.mainNav}>
      <div className={styles.inner}>
        <img className={styles.logo} src={logoIc} alt="" />
        <form className={styles.searchField} onSubmit={handleSearch}>
          <button type="button" className={`${styles.button} ${styles.menu}`}><img src={menuIc} alt="" /> PRODUCTS</button>
          <input placeholder="Jotters, Paper Bag, Shirts" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit" className={`${styles.button} ${styles.search}`}><img src={searchIc} alt="" /> SEARCH</button>
        </form>
        <section className={styles.secondaryBtn}>
          <Link className={styles.button} to={"/auth"} ><img src={avatarIc} alt="" /> LOGIN / SIGN UP</Link>
          <button className={styles.button}><img src={cartIc} alt="" /> CART</button>
        </section>
      </div>
    </nav>
  )
}