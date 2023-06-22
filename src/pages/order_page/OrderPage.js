import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import Appbar from "../../components/appbar/Appbar";
import { Footer } from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";

import styles from "./OrderPage.module.scss";
import { useState } from "react";
import { Button, FlatButton } from "../../components/button/Button";

import img1 from "./assets/Path 217.svg"
import img2 from "./assets/Group 324.svg"
import img3 from "./assets/Bank Transfer.svg"
import img4 from "./assets/Group 1359.svg"
import img5 from "./assets/Input.svg"

export default function OrderPage(props) {
    const [paymentMethod, setPaymentMethod] = useState(0)
    return (
        <Layout appBar={<Appbar />} footer={<Footer />}>
            <div className={styles.variationCard} title="variation card">
                <h3>Please select a variation</h3>
                <h5>Choose different specifications you want</h5>
                <h4>Jotter <span>$40 000</span></h4>
                <div className={styles.variations}>
                    <Dropdown label={"sizes"} options={["XL", "XXL", "XXXL"]} />
                    <Dropdown label={"quantity"} withPrice={true} options={[["XL", 2000], ["XXL", 4000], ["XXXL", 9000]]} />
                    <Dropdown label={"inner sheets"} withPrice={true} options={[["XL", 2000], ["XXL", 4000], ["XXXL", 9000]]} />
                    <Dropdown label={"cover type"} options={["XL", "XXL", "XXXL"]} />
                    <Dropdown label={"lamination"} withPrice={true} options={[["XL", 2000], ["XXL", 4000], ["XXXL", 9000]]} />
                </div>
                <div className={styles.total}>10200</div>
                <div className={styles.proceed}>
                    <Button theme={"white"}>SAVE FOR LATER</Button>
                    <Button theme={"orange"}>CHECKOUT</Button>
                </div>
            </div>
            <div className={styles.orderCard} title="order card">
                <h3>Order Details</h3>
                <h5>Certify your order details are correct</h5>
                <div className={styles.basicInfo}>
                    <div>
                        <h5>Product Name</h5>
                        <h4>Jotter</h4>
                    </div>
                    <div>
                        <h5>Product Type</h5>
                        <h4>Soft Bind</h4>
                    </div>
                    <div>
                        <h5>Quantity</h5>
                        <h4>100 Pieces</h4>
                    </div>
                    <div>
                        <h5>Client Name</h5>
                        <h4>Adio Yusuf Babatunde</h4>
                    </div>
                    <div>
                        <h5>Contact</h5>
                        <h4>+2347069360311</h4>
                    </div>
                    <div className={styles.span1}>
                        <h5>Delivery Address</h5>
                        <h4>IBADAN- NO 47, MAJOREGBE STREET, AJIBODE.</h4>
                        <FlatButton theme={"orange"}>Change Address</FlatButton>
                    </div>
                    <div className={styles.span1}>
                        <h5>Delivery Date</h5>
                        <h4>Friday, 19 August - Monday, 22 August (Within Five(5) working days)</h4>
                    </div>
                </div>
                <div className={styles.fee}>
                    <h6>Items Total</h6>
                    <h5>$200,200</h5>
                </div>
                <div className={styles.fee}>
                    <h6>Delivery Fee</h6>
                    <h5>$2,000</h5>
                </div>
                <div className={styles.feeT}>
                    <h5>Total</h5>
                    <h5>$202,200</h5>
                </div>
                <div className={styles.proceed}>
                    <Button theme={"orange"}>PROCEED TO PAYMENT</Button>
                </div>
            </div>
            <div className={styles.paymentCard} title="payment card">
                <h3>Payment</h3>
                <h5>Choose payment method below</h5>
                <div className={styles.paymentMethod}>
                    <div title="credit card" onClick={() => setPaymentMethod(0)}>
                        <img src={img1} alt="credit card" />
                        {paymentMethod === 0 && <img className={styles.selectedIc} src={img4} alt="" />}
                    </div>
                    <div title="paypal" onClick={() => setPaymentMethod(1)}>
                        <img src={img2} alt="paypal" />
                        {paymentMethod === 1 && <img className={styles.selectedIc} src={img4} alt="" />}
                    </div>
                    <div title="bank transfer" onClick={() => setPaymentMethod(2)}>
                        <img src={img3} alt="bank transfer" />
                        {paymentMethod === 2 && <img className={styles.selectedIc} src={img4} alt="" />}
                    </div>
                </div>
                {paymentMethod === 0 && <div className={styles.paymentGateway}>
                    <div className={styles.billing}>
                        <h5>Billing Info</h5>
                        <InputField label="full name" />
                        <InputField label="address" />
                        <div className={styles.row}>
                            <InputField label="city" />
                            <InputField label="zip code" />
                        </div>
                        <Dropdown label="country" options={["United State", "Nigeria"]} />
                    </div>
                    <div className={styles.card}>
                    <h5>Credit Card Info</h5>
                        <InputField label="card number" withLogo />
                        <InputField label="cardholder name" />
                        <InputField label="expire date" />
                        <InputField label="cw" />
                    </div>
                </div>}
                <div className={styles.proceed}>
                    <Button theme={"orange"}>PROCEED TO PAYMENT</Button>
                </div>
            </div>
        </Layout>
    )
}

function Dropdown(props) {
    const [selected, setSelected] = useState(props.options ?
        props.withPrice ?
            [props.options[0][0], props.options[0][1]]
            : props.options[0]
        : "No options")
    const [isDropOpen, setIsDropOpen] = useState(false)
    return <div className={styles.dropdown} title={props.label} onClick={() => setIsDropOpen(state => !state)}>
        <label className={styles.label}>{props.label}</label>
        <div className={styles.dropdownSelect}>
            <div className={styles.selected}>
                <p>{props.withPrice ? selected[0] : selected}</p>
                {isDropOpen ? <ArrowUpward fontSize="small" htmlColor="#707070" /> : <ArrowDownward fontSize="small" htmlColor="#707070" />}
            </div>
            {props.withPrice && <div className={styles.price}>{props.withPrice ? selected[1] : selected}</div>}
        </div>
        {isDropOpen && <div className={styles.dropdownOptions}>
            {props.options.map((value, index) => <div key={index} onClick={() => setSelected(value)} className={styles.option}>{props.withPrice ? value[0] : value}</div>)}
        </div>}
    </div>
}

function InputField(props) {
    return <div className={styles.inputField} title={props.label}>
        <label className={styles.label}>{props.label}</label>
        <form className={styles.field}>
            <input />
            {props.withLogo && <div className={styles.logo}><img src={img5} alt="" /></div>}
        </form>
    </div>
}