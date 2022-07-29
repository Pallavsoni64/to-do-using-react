import React from "react";

const List = (props) => {

    return (
        <><div className="listItem">

            <span className="delete"onClick={() =>{
                props.delete(props.id)
            }}>x</span>
            <li>{props.text}</li>
        </div>
        </>
    )
}
export default List;