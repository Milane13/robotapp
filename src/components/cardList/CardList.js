import React from "react"
import Card from "../card/Card.js"

// On reçoit en props tout nos robots, et on va itérer à travers notre liste de robots.
// A chaque itération, on renvoit un robot de notre composant Card en lui donnant des props id, name et email

const CardList = ({ robots }) => {
    const cardArray = robots.map((robot) => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
    })
    return <div>{cardArray}</div>
}



export default CardList