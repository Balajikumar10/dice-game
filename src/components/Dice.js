import react from "react";
import "./Dice.css";


const Dice = ({ face }) => {
    return (
        <div>
            <p className={`die fas fa-dice-${face}`} />
        </div>
        //
    )
};
export default Dice;