import styles from "./Card.module.scss"
import { Add, Delete, Error, Favorite, Share } from "@mui/icons-material";
import { FlatButton } from "../button/Button";
import img1 from "./assets/img1.png"
import { Link, useHref, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogContentText, DialogTitle, Grid } from "@mui/material";
import { copyTextToClipboard } from "../../utilities/helper";

export function ProductCard({ value }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isInCart, setIsInCart] = useState(false)
    const cart = useSelector(state => state.cart)
    const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)
    const [copied, setCopied] = useState("COPY")
    const productLink = `${window.location.origin}/print/products/${value.id}/details`
    const handleAddToCart = () => {
        const index = cart.findIndex((item) => item.id === value.id)
        if (index === -1) dispatch(addToCart(value))
        else dispatch(removeFromCart(value.id))
    }
    useEffect(() => {
        // update isInCart the status of the product
        const index = cart.findIndex((item) => item.id === value.id)
        setIsInCart(index === -1 ? false : true)
    }, [cart])
    console.log("Value", value)
    const handleCopyToClipboard = async () => {
        const _copied = await copyTextToClipboard(productLink)
        setCopied(_copied ? "COPIED":"UNABLE TO COPY URL")
    }
    return (
        <section className={styles.product}>
            <div className={styles.head}>
                <div className={styles.discount}>-10%</div>
                <div className={styles.btns}>
                    {isInCart ? <Delete titleAccess="remove from cart" fontSize="small" onClick={handleAddToCart} /> : <Add titleAccess="add to cart" fontSize="small" onClick={handleAddToCart} />}
                    {/* <Favorite fontSize="small" /> */}
                    <Share titleAccess="share link" fontSize="small" onClick={() => setIsShareDialogOpen(true)} />
                    <FlatButton theme={"orange"} onClick={() => navigate(`/print/products/${value.id}/order/`)}>ORDER NOW</FlatButton>
                    {/* Overlay */}
                    <Dialog
                        open={isShareDialogOpen}
                        onClose={() => setIsShareDialogOpen(false)}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {`Share ${value.name}`}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Grid container spacing={2}>
                                    <Grid item xs={10}>
                                        <div className={styles.productLink}>{productLink}</div>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <FlatButton theme={"orange"} onClick={handleCopyToClipboard}>{copied}</FlatButton>
                                    </Grid>
                                </Grid>
                            </DialogContentText>
                        </DialogContent>
                        {/* <DialogActions>
                            <Button onClick={handleClose}>Disagree</Button>
                            <Button onClick={handleClose} autoFocus>
                                Agree
                            </Button>
                        </DialogActions> */}
                    </Dialog>
                </div>
            </div>
            <Link to={`/print/products/${value.id}/details`} className={styles.body}>
                <img src={value.images[0].image} alt="product" />
            </Link>
            <div className={styles.foot}>
                <div>
                    <h5>{value.name !== null && value.name}</h5>
                </div>
                <div className={styles.info}>
                    <div>
                        <h6>100pcs</h6>
                    </div>
                    <div>
                        <h4>{(value.price !== null) && value.price.price}</h4>
                        {/* <h5>#10,000</h5> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export function MiniProductCard(props) {
    return (
        <section className={styles.miniProductCard}>
            <div className={styles.image}>
                <img src={img1} alt="product" />
            </div>
            <label>BUSINESS CARD</label>
        </section>
    )
}

export function LoadingCard(props) {
    return (
        <div className={styles.loadingCard}>
            <div className={styles.loadingCardRoller}></div>
        </div>
    )
}

export function ErrorCard({ error, reload }) {
    return (
        <div className={styles.failedCard}>
            <div className={styles.row}>
                <Error className={styles.icon} />
                <h5>{error}</h5>
            </div>

            {reload && <FlatButton theme={"white"} onClick={reload}>Reload</FlatButton>}
        </div>
    )
}