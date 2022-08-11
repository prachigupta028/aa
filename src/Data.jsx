import { useState } from "react";
import TinderCard from "react-tinder-card"



function Data(){
    const[list, setList]=useState([
        {
           
           name:"Bheem",
           url:"https://assets.ajio.com/medias/sys_master/root/20211007/Rcha/615e2739f997ddce8904dc63/-1117Wx1400H-4915674870-multi-MODEL.jpg"
        },
        {
        
            name:"Doremnon",
            url:"https://www.animenewsnetwork.com/images/encyc/A14223-1770212360.1400014784.jpg"
         },
         {
            name:"Sinchan",
            url:"https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b966-QUCdKAk4ls9J.jpg"
         },
         {
            
            name:"Tom ang Jerry",
            url:"https://play-lh.googleusercontent.com/kYpK6eJD4U_HA_hqA-Up7PgLCCaCqaNTqq8MslH0rGzMUUKWasd5TFiwYxrNYbOz7yg=w240-h480-rw"
         },
         {
            
            name:"Oggy and Cokroches",
            url:"https://play-lh.googleusercontent.com/ESIxXGbFvnkOxMSqkO68KSsfO6PzkjeTlkmcuKWHvt2YWXWxXRZh5NcYKJXrECgHdGhX=s320-rw"
         },
         {
            
            name:"Pokemon",
            url:"https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg"
         },
        
    ]);



  return (
    
    <div className='card-container'>

      {
        list.map( cartoon => (
          <TinderCard
            className="swipe"
            key={cartoon.name}
            preventSwipe={['up', 'down']}
          >
              <div
                style={ { backgroundImage: `url(${cartoon.url})` } }
                className='card'
              >
                <h2>{cartoon.name}</h2>
              </div>
          </TinderCard>
        ))
      }


    </div>
)
    }


export default Data
