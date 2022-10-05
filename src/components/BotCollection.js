import React from "react";
import BotCard from "./BotCard";

function BotCollection( {bots, addToArmy, deleteBot }) {


 //function to collect the bots
//  const getBotData = async() => {
//   const res = await fetch(
//     "http://localhost:8002/bots"
//   ).then((res) => res.json())
//   setBots(res)
//  }

//  useEffect(() => {
//   getBotData()
//  }, [])

  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleBot={addToArmy}
            deleteBot={deleteBot}
          />
           
          
        ))}
        
      </div>
    </div>
  );
}

export default BotCollection;
