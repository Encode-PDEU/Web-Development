import React, { useState } from 'react'
import ListOfItems from './ListOfItems';
import './App.css'
const ToDoList = ()=>{

    const [item,setItem] = useState("")
    const [totalItems,listItems] = useState([]);
    const setItems = (event) =>{
setItem(event.target.value);

    }
    const addItemsList = ()=>{
listItems((prev)=>{
return [...prev,item];
})
setItem("")

    }
return(

<div>
<div className='main_div'>
<div className="centre_div">
<h1 className="listhead">ToDo List</h1>
<input type="text" value={item} placeholder="Enter items" onChange={setItems}/>
<button className="btn" onClick={addItemsList}>+</button>
<div className="items">

<ul>
   { totalItems.map((value,index)=>{
       return <ListOfItems text={value} key={index} />
    })}
    
</ul>
    </div>
</div>
</div>




</div>

)


}
export default ToDoList