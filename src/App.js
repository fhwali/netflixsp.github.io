import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';


const App = () => (
    <>
      <h1 className='heading_style'>List of My Top Picks Netflix Series </h1>
      {Sdata.map((val) => {
        return (
          <Card 
            key={val.id}
            imgsrc={val.imgsrc} 
            sname={val.sname}
            stitle={val.stitle}
            links={val.links}
          />
        );
    })}
  </>  
)

export default App;