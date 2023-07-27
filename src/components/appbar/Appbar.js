import styles from "./Appbar.module.scss"
import logoIc from "./assets/logo_prints.png"
import menuIc from "./assets/menu.svg"
import searchIc from "./assets/search.svg"
import avatarIc from "./assets/avatar.svg"
import cartIc from "./assets/cart.svg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Close } from "@mui/icons-material"
import { useSelector } from "react-redux"

export default function Appbar(props) {
  const authToken = useSelector(state => state.auth.authToken)
  const cart = useSelector(state => state.cart)
  const [isMenu1Open, setIsMenu1Open] = useState(false)
  const [isMenu2Open, setIsMenu2Open] = useState(false)

  const handleMenuOpen = () => {
    if (!isMenu1Open && !isMenu2Open) {
      setIsMenu1Open(true)
      setIsMenu2Open(true)
    } else {
      setIsMenu1Open(false)
      setIsMenu2Open(false)
    }

  }

  const [search, setSearch] = useState("")
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/print/products/search?q=${search}`);
  }
  return (
    <nav className={styles.mainNav}>
      <div className={styles.inner}>
        <img className={styles.logo} src={logoIc} alt="print logo" onClick={() => navigate("/print")} />
        <form className={styles.searchField} onSubmit={handleSearch}>
          <button type="button" className={`${styles.button} ${styles.menu}`} onClick={handleMenuOpen}><img src={menuIc} alt="" />PRODUCTS</button>
          <input required aria-required placeholder="Jotters, Paper Bag, Shirts" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit" className={`${styles.button} ${styles.search}`}><img src={searchIc} alt="" />SEARCH</button>
        </form>
        <section className={styles.secondaryBtn}>
          {authToken === null ? <Link className={styles.button} to={"/auth"} ><img src={avatarIc} alt="" />LOGIN / SIGN UP</Link> :
            <Link className={styles.button} to={"/print/account"} ><img src={avatarIc} alt="" />ACCOUNT</Link>
          }
          <Link className={styles.button} to={"/print/cart"}><img src={cartIc} alt="" />CART {cart.length !== 0 && <div className={styles.overlay}>{cart.length.toString(2)}</div>}</Link>
        </section>
      </div>
      {(isMenu1Open || isMenu2Open) && <div className={styles.menu}>
        {isMenu1Open && <div className={styles.category}>
          <div className={styles.head}>
            <h5>Designs</h5>
            <Close onClick={() => setIsMenu1Open(state => !state)} />
          </div>
          <div className={styles.body}>
            <div className={styles.item}>
              <label>Marketing Materials</label>
              <div className={styles.content}>
                <Link className={styles.link} to={""}>Flyers</Link>
                <Link className={styles.link} to={""}>Banners</Link>
                <Link className={styles.link} to={""}>Stickers</Link>
                <Link className={styles.link} to={""}>Brochure</Link>
                <Link className={styles.link} to={""}>Booklets</Link>
                <Link className={styles.link} to={""}>Signage</Link>
                <Link className={styles.link} to={""}>Notepad</Link>
                <Link className={styles.link} to={""}>Shirts</Link>
                <Link className={styles.link} to={""}>Postcards</Link>
                <Link className={styles.link} to={""}>Showcards</Link>
                <Link className={styles.link} to={""}>Table Tags</Link>
                <Link className={styles.link} to={""}>Jotters</Link>
              </div>
            </div>
            <div className={styles.item}>
              <label>Office Stationary</label>
              <div className={styles.content}>
                <Link className={styles.link} to={""}>Certificates</Link>
                <Link className={styles.link} to={""}>Stamps and Seals</Link>
                <Link className={styles.link} to={""}>Compliment Slip</Link>
                <Link className={styles.link} to={""}>Envelops</Link>
                <Link className={styles.link} to={""}>Notepads</Link>
                <Link className={styles.link} to={""}>NCR / Reciepts</Link>
                <Link className={styles.link} to={""}>ID Cards</Link>
                <Link className={styles.link} to={""}>Letterheads</Link>
                <Link className={styles.link} to={""}>Exclusive Notebook</Link>
                <Link className={styles.link} to={""}>Branded Pen</Link>
                <Link className={styles.link} to={""}>Lanyard</Link>
              </div>
            </div>
            <div className={styles.item}>
              <label>Birthday Package</label>
              <div className={styles.content}>
                <Link className={styles.link} to={""}>Frames</Link>
                <Link className={styles.link} to={""}>Branded Wine Pack</Link>
                <Link className={styles.link} to={""}>Compliment Slip</Link>
                <Link className={styles.link} to={""}>Collage</Link>
                <Link className={styles.link} to={""}>Potraits</Link>
                <Link className={styles.link} to={""}>Cartoon/Caricature</Link>
                <Link className={styles.link} to={""}>Throw Pillow</Link>
                <Link className={styles.link} to={""}>Branded Mugs</Link>
              </div>
            </div>
          </div>
        </div>
        }
        {isMenu2Open && <div className={styles.designs}>
          <div className={styles.head}>
            <h5>Prints Category</h5>
            <Close onClick={() => setIsMenu2Open(state => !state)} />
          </div>
          <div className={styles.body}>
            <div className={styles.item}>
              <label>Marketing Materials</label>
              <div className={styles.content}>
                <Link className={styles.link} to={""}>Flyers</Link>
                <Link className={styles.link} to={""}>Banners</Link>
                <Link className={styles.link} to={""}>Stickers</Link>
                <Link className={styles.link} to={""}>Brochure</Link>
                <Link className={styles.link} to={""}>Booklets</Link>
                <Link className={styles.link} to={""}>Signage</Link>
                <Link className={styles.link} to={""}>Notepad</Link>
                <Link className={styles.link} to={""}>Shirts</Link>
                <Link className={styles.link} to={""}>Postcards</Link>
                <Link className={styles.link} to={""}>Showcards</Link>
                <Link className={styles.link} to={""}>Table Tags</Link>
                <Link className={styles.link} to={""}>Jotters</Link>
              </div>
            </div>
            <div className={styles.item}>
              <label>Office Stationary</label>
              <div className={styles.content}>
                <Link className={styles.link} to={""}>Certificates</Link>
                <Link className={styles.link} to={""}>Stamps and Seals</Link>
                <Link className={styles.link} to={""}>Compliment Slip</Link>
                <Link className={styles.link} to={""}>Envelops</Link>
                <Link className={styles.link} to={""}>Notepads</Link>
                <Link className={styles.link} to={""}>NCR / Reciepts</Link>
                <Link className={styles.link} to={""}>ID Cards</Link>
                <Link className={styles.link} to={""}>Letterheads</Link>
                <Link className={styles.link} to={""}>Exclusive Notebook</Link>
                <Link className={styles.link} to={""}>Branded Pen</Link>
                <Link className={styles.link} to={""}>Lanyard</Link>
              </div>
            </div>
            <div className={styles.item}>
              <label>Birthday Package</label>
              <div className={styles.content}>
                <Link className={styles.link} to={""}>Frames</Link>
                <Link className={styles.link} to={""}>Branded Wine Pack</Link>
                <Link className={styles.link} to={""}>Compliment Slip</Link>
                <Link className={styles.link} to={""}>Collage</Link>
                <Link className={styles.link} to={""}>Potraits</Link>
                <Link className={styles.link} to={""}>Cartoon/Caricature</Link>
                <Link className={styles.link} to={""}>Throw Pillow</Link>
                <Link className={styles.link} to={""}>Branded Mugs</Link>
              </div>
            </div>
          </div>
        </div>}
      </div>}
    </nav>
  )
}