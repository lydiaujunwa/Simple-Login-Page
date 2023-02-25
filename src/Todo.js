import { useState } from "react";
const Todo = () =>{
    const [title, setTitle] = useState("")
    const [submit] = useState("")
    return(
        <div>
        <div className="Todo"> Afams Val</div>
        <input
        value={title}
        type="title"
        className="form-control"
        id="title"
        placeholder= "Enter title"
        name="title"
        onChange={(event)=> setTitle(event.target.value)}
        />
        <button
        type="button"
        onclick={submit}
        className= "btn btn-secondary"
        > Add</button>
        </div>
    );
};
export default Todo;