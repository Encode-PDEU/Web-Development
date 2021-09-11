import React, { useState } from 'react'
import './App.css'

const ListOfItems = (props)=>{
    const [cut,cutIt] = useState(false);
const cutItem = ()=>{
    cutIt(true)
}
return(
<div className="item">
    

    <button onClick={cutItem} className="cut">X</button>
<li style={{display:"inline",textDecoration: cut?"line-through":"none",fontSize:"20px"}}>{props.text}</li>

    

</div>



)


}


export default ListOfItems;