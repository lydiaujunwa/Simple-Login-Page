import React from "react";

const InputForm = (props) => {
    return(
        <div>
            <label htmlFor="FirstName" className="form-label">
                {props.label}
              </label>
              <input
                style={{border: "2px solid blue", backgroundColor: "grey"}}
                value={props.name}
                type={props.type} 
                className="form-control"
                placeholder={props.label}
                name={props.name}
                onChange={props.onChange}
              />
        </div>
    )
}
export default InputForm;