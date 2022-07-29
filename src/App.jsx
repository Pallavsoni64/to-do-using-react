import React, { useState } from "react";
import List from "./List";
import AddIcon from '@mui/icons-material/Add';
const App = () => {
  const [inputList, getInputList] = useState();
  const [itemList, getItemList] = useState([]);
  const listInput = (event) => {
    getInputList(event.target.value);
  }
  const getItem = () => {
    getItemList((listData) => {
      return [...listData, inputList]
    })
    getInputList('')

  }
  const deleteItem = (id) =>{
 getItemList((listData)=>{
return listData.filter((item,index)=>{
return index !== id;
})
})
  }

  return (
    <>
      <div className="mainContainer">
        <div className="innerContainer">
          <h1>To-Do List <AddIcon/></h1>
          <br />
          <div className="inputDiv">
            <input type="text" placeholder="Add a item"
              value={inputList}
              onChange={listInput} />

            <span className="add" onClick={getItem}>+</span>
          </div>
          <br />
          <ol>

            {
              itemList.map((curItem,index) => {
                return <List text={curItem}
                key ={index}
                id = {index}
                delete ={deleteItem}
                />
              })
            }

          </ol>

        </div>
      </div>
    </>
  )
}
export default App;