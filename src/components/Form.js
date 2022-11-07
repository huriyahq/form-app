import "../App.css";
import { useState } from "react";

function Form(props) {
    /* Simple input that you type your name into. 
    The value of the input will be stored in state
    We will output the state on the page.
    */

   /* We want to keep track of the name input, so we create a state variable for the input */
    const [name, setName] = useState("");
    const [colour, setColour] = useState("");
    const [dropdownState, setDropdownState] = useState("");

    const submitFunction = (e) => {
        e.preventDefault()
        console.log("My favourite fruit is:", dropdownState)
    }
    return (
        <>
            <form action="" className="form" onSubmit={submitFunction}>
                <label htmlFor="personName">Your Name</label>
                {/* htmlFor is the same as the for tag in HTML but this is how it's written in JSX */}
                <input 
                    type="text" 
                    name="personName" 
                    id="personName"
                    placeholder="Enter Name"
                    value={name} /* Value of input is the name state*/
                    onChange={(e) => setName(e.target.value)} /* Changes name state to value of input*/
                />
                <label htmlFor="faveColour">Your favourite colour</label>
                <input
                    type="text"
                    name="faveColour"
                    id="faveColour"
                    placeholder="Enter Colour"
                    value={colour}
                    onChange={(e) => setColour(e.target.value)}
                />
                <label htmlFor="beverage">Select a beverage</label>

                {/* select input starts here */}
                <select 
                    name="dropdown-choices" 
                    id="dropdown-choices"
                    value={dropdownState}
                    onChange={(e) => setDropdownState(e.target.value)}
                >
                    <option value="tea">
                        Tea
                    </option>
                    <option value="coffee">
                        Coffee
                    </option>
                </select>

                <button 
                    type="submit"
                    className="btn"
                >
                Submit
                </button>
            </form>
            <div className="display profile">
                <h2>Profile</h2>
                <p>
                    <strong>Name</strong>
                    <br/>
                    {name}
                </p>
                <p>
                    <strong>Colour</strong>
                    <br/>
                    {colour}
                </p>
                <p>
                    <strong>Drink</strong>
                    <br/>
                    {dropdownState}
                </p>
                {/* Everytime you type in the input, the text should show up here */}
            </div>
        </>
    )
}

export default Form