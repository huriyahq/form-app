import { useState } from "react";


function Accordion(props) {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="accordion">
            <h3 
                className="accordion-title"
                onClick={() => setIsVisible(!isVisible)}
            >
                {props.title}
            </h3>

            {
                isVisible ? 
                <div className="accordion-content">
                    <h4>Answer</h4>
                    <p>This is some text inside the accordion.</p>
                </div>
                :
                ""
            }

        </div>
    );
}

export default Accordion;