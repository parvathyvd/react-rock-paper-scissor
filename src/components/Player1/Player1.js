import React from 'react';

const player1 = (props) => {
    console.log(props);
    return ( 
        <React.Fragment>
        <h2 className="text-success pt-5">Player A</h2>
        <div className="rounded">
        <div style={{backgroundImage: `url(./img/${props.result}.png)`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', width:'90%',height:'90%'}}>
        </div>
        </div>
    </React.Fragment>
    
)
}
 
export default player1;