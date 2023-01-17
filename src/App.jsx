import React from "react"
import Card from "./components/Card"

export default function App() {
    return (
        <div>
            <h1 className="qua">Ты сегодня покормил кота?</h1>
            <div className="cardContainer">
                <Card
                    active={true}
                    selected={true}
                    tag={"Сказочное заморское яство"}
                    title={"Нямушка"}
                    taste={"с фуа-гра"}
                    porc={"10 порций"}
                    present={"мышь в подарок"}
                    weight={"0,5"}
                    bottomText={"Печень утки разварная с артишоками."}
                />
                <Card
                    active={false}
                    selected={false}
                    tag={"Сказочное заморское яство"}
                    title={"Нямушка"}
                    taste={"с рыбой"}
                    porc={"40 порций"}
                    present={"2 мышь в подарок"}
                    weight={"2"}
                    bottomText={"Головы щучьи с чесноком да свежайшая сёмгушка."}
                />
                 <Card
                    active={true}
                    selected={false}
                    tag={"Сказочное заморское яство"}
                    title={"Нямушка"}
                    taste={"с курой"}
                    porc={"100 порций"}
                    present={"5 мышей в подарок заказчик доволен"}
                    weight={"5"}
                    bottomText={"Филе из цыплят с трюфелями в бульоне."}
                />
            </div>
        </div>
    )
}