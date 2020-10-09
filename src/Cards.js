
import React from 'react';


  const Card = (props) => {
    return(
      <section className='cards'>
        <div className='card'>
          <img src={props.imgsrc} alt='Series Wallpapers' className='card_img' />
          <div className='card_info'>
          <span className='card_catagory'>{props.sname}</span>
          <h3 className='card_title'>{props.stitle}</h3>  
            <a href={props.links} target='_blank' rel='noopener noreferrer'> 
            <button>Watch Now</button>        
          </a>
         </div>
       </div>
    </section>
  )
}

export default Card;