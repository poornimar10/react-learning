import React,{useState} from 'react';
import './Todolist.css';


const Todolist =()=>{
    const [items, setItems] = useState([]);
    const [text, setText] = useState("");
    
    const handleChange = (e) => setText(e.target.value);
    const addItem = () =>
    {  
                
                if(!/^\s/.test(text)&&text!==""){
                const newItem = {
                    id: 1+Math.random(),
                    value: text
                };
                setText("");
                setItems(items.concat(newItem));
                }
    }
    const deleteItem=(id)=>{
            const updatedList = items.filter(item=>item.id!==id)
            setItems(updatedList);
    }

return (
    <div className="todoListMain">
        <div className="header">
                    <h1>TO-DO LIST</h1>
                    <input id="to-do" type="text" placeholder="Type the Data here..." value={text} onChange={(e) => handleChange(e)}/>
                    <button className="addItem" onClick={addItem}>Add Task</button>
                    <br/>
        </div>
        <div>
            <ul className="theList">
                    {items.map(item=>{
                        return(
                            <li key={item.id}>
                                {item.value}
                                <button data-testid="Delete" className="deleteItem" onClick={()=>deleteItem(item.id)}>
                                    DELETE
                                </button>
                            </li>
                        )
                    })}
                    </ul>
        </div>
           
    </div>
    );
}

export default Todolist;
   


