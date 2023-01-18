import React from "react"
import Card from "./components/Card"

export default function App() {

    const data = [{
        id: 1,
        active: true,
        tag: "Сказочное заморское яство",
        title: "Нямушка",
        taste: "с фуа-гра",
        porc: "10 порций",
        present: "мышь в подарок",
        weight: "0,5",
        bottomText: "Печень утки разварная с артишоками."
    }, {
        id: 2,
        active: false,
        tag: "Сказочное заморское яство",
        title: "Нямушка",
        taste: "с рыбой",
        porc: "40 порций",
        present: "2 мыши в подарок",
        weight: "2",
        bottomText: "Головы щучьи с чесноком да свежайшая сёмгушка."
    },
    {
        id: 3,
        active: true,
        tag: "Сказочное заморское яство",
        title: "Нямушка",
        taste: "с курой",
        porc: "100 порций",
        present: "5 мышей в подарок заказчик доволен",
        weight: "5",
        bottomText: "Филе из цыплят с трюфелями в бульоне."
    }]
    
    return (
        <div>
            <h1 className="qua">Ты сегодня покормил кота?</h1>
            <div className="cardContainer">
                {
                    data.map((obj) => {
                        return (
                            <Card
                                key={obj.id}
                                active={obj.active}
                                tag={obj.tag}
                                title={obj.title}
                                taste={obj.taste}
                                porc={obj.porc}
                                present={obj.present}
                                weight={obj.weight}
                                bottomText={obj.bottomText}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}