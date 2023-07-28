import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import Appbar from "../../components/appbar/Appbar";
import { Footer } from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";

import styles from "./OrderPage.module.scss";
import { useContext, useEffect, useState } from "react";
import { Button, FlatButton } from "../../components/button/Button";

import img1 from "./assets/Path 217.svg"
import img2 from "./assets/Group 324.svg"
import img3 from "./assets/Bank Transfer.svg"
import img4 from "./assets/Group 1359.svg"
import img5 from "./assets/Input.svg"
import { Status } from "../../utilities/helper";
import { useProductById, useProductOrderById, useUser } from "../../redux/hooks";
import { ErrorCard, LoadingCard } from "../../components/card/Card";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useIsAuthUser } from "../../utilities/hooks";
import { OrderContext } from "../../utilities/context";

export default function OrderPage(props) {
    useIsAuthUser()
    const [paymentMethod, setPaymentMethod] = useState(0)
    const { id } = useParams();
    const [status, product, error, reload] = useProductById(id);
    const [status2, variation, error2, reload2] = useProductOrderById(id);
    const [status3, user, error3, reload3] = useUser()

    const [total, setTotal] = useState(0)

    // 
    const [opts, setOpts] = useState([])
    const [type, setType] = useState(null)
    const [quantity, setQuantity] = useState(type?.offset ?? 0)

    useEffect(() => {
        // Calculate the discount price
        const discount = parseFloat(type?.discount_rate ?? 100) / 100
        let price = (type?.base_price ?? 0) - (discount * (type?.base_price ?? 0))
        price = (type?.offset ? (quantity / type?.offset) : 0) * price
        opts.forEach((value) => price += value.charge)
        console.log("Price", price, type?.base_price)
        setTotal(price)
    }, [type, opts, quantity])

    // Uncomment for auto populate of offset for quantity
    // useEffect(() => {
    //     setQuantity(state => statetype?.offset ?? 0)
    // }, [type, opts])


    console.log("Data1", product, "variation", variation, "user", user)
    if (status === Status.failed || status2 === Status.failed || status3 === Status.failed) {
        return <ErrorCard error={error || error2 || error3} reload={reload} />
    } else if ((status === Status.pending || product === undefined) || (status2 === Status.pending || variation === undefined) || (status3 === Status.pending || user === undefined)) {
        return <LoadingCard />
    }
    return (
        <Layout appBar={<Appbar />} footer={<Footer />}>
            <div className={styles.variationCard} title="variation card">
                <h3>Please select a variation</h3>
                <h5>Choose different specifications you want</h5>
                <div className={styles.basicInfo}>
                    <h4>{product.data.name} <span>₦{type?.base_price ?? 0}</span></h4>
                    <h5>Offset {type?.offset ?? 0}</h5>
                </div>
                <div className={styles.variations}>
                    <OrderContext.Provider value={{ "options": opts, "setOptions": setOpts, "type": type, "setType": setType }}>
                        <DisplayAllOptions label={"Select Variation"} options={variation.data} />
                    </OrderContext.Provider>
                </div>
                <div className={styles.total}>
                    <span className={styles.discount}>-{type?.discount_rate ?? 0}%</span>
                    <span>₦{total.toFixed(2)}</span>
                    <div className={styles.counter}>
                        <button onClick={() => setQuantity(state => state -= 1)}>-</button>
                        <input value={quantity} onChange={(e) => setQuantity(e.target.value.length === 0 ? 0 : parseInt(e.target.value))} />
                        <button onClick={() => setQuantity(state => state += 1)}>+</button>
                    </div>
                </div>
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
                        <h4>{product.data.name}</h4>
                    </div>
                    <div>
                        <h5>Product Type</h5>
                        <h4>{type?.name}</h4>
                    </div>
                    <div>
                        <h5>Quantity</h5>
                        <h4>{quantity} Pieces</h4>
                    </div>
                    <div>
                        <h5>Client Name</h5>
                        <h4>{`${user.data.first_name} ${user.data.last_name}`}</h4>
                    </div>
                    <div>
                        <h5>Contact</h5>
                        <h4>{user.data.phone}</h4>
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
                    <h5>₦{total.toFixed(2)}</h5>
                </div>
                <div className={styles.fee}>
                    <h6>Delivery Fee</h6>
                    <h5>₦0</h5>
                </div>
                <div className={styles.feeT}>
                    <h5>Total</h5>
                    ₦{total.toFixed(2)}
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


function RenderOption({ specifications, currentType }) {
    const { options, setOptions, type, setType } = useContext(OrderContext)
    console.log(options)
    let specGroup = []
    specifications.forEach((v) => !specGroup.includes(v.key) && specGroup.push(v.key))
    const handleSelected = (value) => {
        const index = options.findIndex(v => v.key === value.key)
        console.log("Index", index, "Type", currentType, type)
        setType(currentType)
        if (type?.name !== currentType?.name) {
            setOptions([value])
        } else {
            if (index === -1) {

                setOptions(op => [...op, value])
            } else {
                let _options = options
                _options.splice(index, 1)
                console.log("Options", _options)
                setOptions([..._options, value]);
            }
        }

    }
    const handleSelectedClass = (value) => {
        const index = options.findIndex(v => v.value === value.value && v.id === value.id)
        if (index === -1) return null
        else return styles.active
    }
    return <div className={styles.option}>
        {specGroup.map(v => {
            const res = specifications.filter(e => e.key === v)
            return <div className={styles.row}>
                <label>{v}</label>
                <ul className={styles.rowItems}>
                    {res.map(value =>
                        <li onClick={() => handleSelected(value)}
                            className={handleSelectedClass(value)}>{value.value}
                        </li>
                    )}
                </ul>
            </div>
        })}
    </div>



}

function DisplayAllOptions({ label, options = [] }) {

    return (
        <div className={styles.displayAllOptions}>
            <label className={styles.label}>{label}</label>
            {options.map((value, index) => <div>
                <div key={index} className={styles.header}>
                    {value?.name}
                </div>
                <RenderOption
                    specifications={value.specifications}
                    currentType={value}
                />
            </div>
            )}
        </div>
    )
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