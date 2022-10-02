import React, { useEffect, useState } from "react";

function BotCollection() {
const [bots, setBots] = useState()

 //function to collect the bots
 const getBotData = async() => {
  const res = await fetch(
    "http://localhost:8002/bots"
  ).then((res) => res.json())
  setBots(res)
 }

 useEffect(() => {
  getBotData()
 }, [])

  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots &&
        bots.map((bot) => (
          <div className="bot-container">
            id:{bot.id}
            
          </div>
        ))}
        {/*...and here..*/}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;


// return this.props.bots.map(bot => {
//   return <BotCard key={bot.id} bot={bot} addBot={this.props.addBot}/>