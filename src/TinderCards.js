import React, {useState} from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {

    const [people, setpeople] = useState([
        {
            name: "Elon Musk",
            url: 'https://th.bing.com/th/id/OIP.O2yINcQ-Alt0CM5vRD8-WwHaEc?w=280&h=180&c=7&o=5&dpr=1.07&pid=1.7',
        },
        {
            name: "Elon Musk",
            url: 'https://th.bing.com/th/id/OIP.O2yINcQ-Alt0CM5vRD8-WwHaEc?w=280&h=180&c=7&o=5&dpr=1.07&pid=1.7',
        },
    ]);


    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }

    return (
        <div className="tindercards">
            <div className="tindercards_cardContainer">
                {people.map((person) => {
                     <TinderCard 
                     className="swipe"
                     key={person.name}
                     preventSwipe={["up", "down"]}
                     onSwipe={(dir) => swiped(dir, person.name)}
                     onCardLeftScreen={() => outOfFrame(person.name)}>
                       
                       <div style={{ backgroundImage: `url{ ${person.url}}`}}>

                       </div>
   
                   </TinderCard>
                })}
               

            </div>
           {people.map((person)=> {
               <h1>{person.name}</h1>
           })}
        </div>
    )
}

export default TinderCards
