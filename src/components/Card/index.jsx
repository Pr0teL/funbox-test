import React from "react"
import styles from './Card.module.css'
export default function Card({
    active,
    tag,
    title,
    taste,
    weight,
    porc,
    present,
    bottomText
}) {
    const [selected, setSelected] = React.useState(false)
    const [hover, setHover] = React.useState(false)

    return (
        <>
            <div onMouseLeave={() => selected && setHover(false)} onMouseEnter={() => selected && setHover(true)} onClick={()=> {active && setSelected(!selected); setHover(false)}} style={selected ? { backgroundImage: 'url("./img/activeCardBack.svg")'} : !active ? { backgroundImage: 'url("./img/disableCardBack.svg")'} : { backgroundImage: 'url("./img/CardBack.svg")'}} className={styles.card}>
                <div style={active? {opacity: "1"}: {opacity: "0.2"}} className={styles.info}>
                    <p style={hover ? {color: "#D91667"} : { color: "#666666"}} className={styles.tagline}>{hover ? "Котэ не доволен?" :tag}</p>
                    <h1 className={styles.title}>{title}</h1>
                    <h3 className={styles.with}>{taste}</h3>
                    <p className={styles.description}>{porc}</p>
                    <p className={styles.description}>{present}</p>
                </div>
                <div style={selected ? {background: "#D91667"} : !active ? {background: "#B3B3B3"} : {background: "#1698D9"}} className={styles.weight}>
                    <h1>{weight}</h1>
                    <p>кг</p>
                </div>
                <img style={active ? {filter: "grayscale(0%)"} : {filter: "grayscale(30%)", opacity: 0.6}} src="./img/Cat.png" alt="Cat" />
                <p style={active ? {color: "#FFF"} : {color: "#FFFF66"}} className={styles.bottomText}>
                    {selected ? bottomText : active ? <>Чего сидишь? Порадуй котэ, <span>купи</span></> : `Печалька, ${taste} закончился.`}
                </p>
            </div>
        </>

    )
}