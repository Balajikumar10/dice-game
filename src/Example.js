import React, { useState } from 'react'




const initailState = {
    die1: <img style={{ height: "50px", width: "50px" }} src='6.png' />,
    die2: <img style={{ height: "50px", width: "50px" }} src='6.png' />,
    rolling: false,
    totalScore: 0,
    points: 0,
    Remainingattempts: 15,
    usedattempts: 0,
    extraattempts: 0,
    penalty: 0,
    g_row: 0
}

const Rolldice = ({ sides }) => {
    const [state, setState] = useState(initailState);
    let { die1, die2, rolling, totalScore, Remainingattempts, usedattempts, extraattempts, penalty, g_row } = state;
    const roll = () => {
        const newDie1 = sides[Math.floor(Math.random() * sides.length)];
        const newDie2 = sides[Math.floor(Math.random() * sides.length)];
        // const newDie1 = sides[0];
        // const newDie2 = sides[0];
        const score1 = Object.keys(newDie1);
        const score2 = Object.keys(newDie2);


        if (score1[0] == 0 && score2[0] == 0 && (g_row == 0)) {

            setState({
                die1: Object.values(newDie1), die2: Object.values(newDie2), rolling: true, totalScore: totalScore + 0, Remainingattempts: Remainingattempts - 0, usedattempts: usedattempts + 0, extraattempts: extraattempts + 0, penalty: penalty + 0, g_row: g_row + 1
            })
        }

        else if ((score1[0] == 0 && score2[0] == 0 && (g_row > 0))) {
            setState({
                die1: Object.values(newDie1), die2: Object.values(newDie2), rolling: true, totalScore: totalScore + 0, Remainingattempts: Remainingattempts - g_row, usedattempts: usedattempts + 1, extraattempts: extraattempts + 0, penalty: penalty + g_row, g_row: g_row + 1
            })
        }
        else if (score1[0] == 1 && score2[0] == 1) {
            setState({
                die1: Object.values(newDie1), die2: Object.values(newDie2), rolling: true, totalScore: totalScore + 10, Remainingattempts: Remainingattempts + 0, usedattempts: usedattempts + 1, extraattempts: extraattempts + 1, penalty: penalty + 0
            })
        }
        else if (score1[0] == 2 && score2[0] == 2) {
            setState({
                die1: Object.values(newDie1), die2: Object.values(newDie2), rolling: true, totalScore: totalScore + 0, Remainingattempts: Remainingattempts - 2, usedattempts: usedattempts + 1, extraattempts: extraattempts + 0, penalty: penalty + 1
            })
        }
        else if (score1[0] == 3 && score2[0] == 3) {
            setState({
                die1: Object.values(newDie1), die2: Object.values(newDie2), rolling: true, totalScore: totalScore + 0, Remainingattempts: Remainingattempts - 2, usedattempts: usedattempts + 1, extraattempts: extraattempts + 0, penalty: penalty + 1
            })
        }
        else if (score1[0] == 4 && score2[0] == 5) {
            setState({
                die1: Object.values(newDie1), die2: Object.values(newDie2), rolling: true, totalScore: totalScore + 1, Remainingattempts: Remainingattempts - 1, usedattempts: usedattempts + 1, extraattempts: extraattempts + 0, penalty: penalty + 0
            })
        }
        else if (score1[0] == 5 && score2[0] == 6) {
            setState({
                die1: Object.values(newDie1), die2: Object.values(newDie2), rolling: true, totalScore: totalScore + 1, Remainingattempts: Remainingattempts - 1, usedattempts: usedattempts + 1, extraattempts: extraattempts + 0, penalty: penalty + 0
            })
        }
        else if (score1[0] == 4 && score2[0] == 4) {
            setState({
                die1: Object.values(newDie1), die2: Object.values(newDie2), rolling: true, totalScore: totalScore + 4, Remainingattempts: Remainingattempts - 1, usedattempts: usedattempts + 1, extraattempts: extraattempts + 0, penalty: penalty + 0
            })
        }
        else if (score1[0] == 5 && score2[0] == 5) {
            setState({
                die1: Object.values(newDie1), die2: Object.values(newDie2), rolling: true, totalScore: totalScore + 6, Remainingattempts: Remainingattempts - 1, usedattempts: usedattempts + 1, extraattempts: extraattempts + 0, penalty: penalty + 0
            })
        }
        else if (score1[0] == 6 && score2[0] == 6) {
            setState({
                die1: Object.values(newDie1), die2: Object.values(newDie2), rolling: true, totalScore: totalScore + 8, Remainingattempts: Remainingattempts - 1, usedattempts: usedattempts + 1, extraattempts: extraattempts + 0, penalty: penalty + 0
            })
        }
        else (
            setState({
                die1: Object.values(newDie1), die2: Object.values(newDie2), rolling: true, totalScore: totalScore + 0, Remainingattempts: Remainingattempts - 1, usedattempts: usedattempts + 1, extraattempts: extraattempts + 0, penalty: penalty + 0
            })
        )
        setTimeout(() => {
            setState((prevState) => ({ ...prevState, rolling: false }))
        }, 100);
    };
    console.log(Remainingattempts)
    console.log(usedattempts);
    return (
        <div>
            <div className='roll-dice'>
                <div className='rolldice-container'>
                    <p>{die1} {die2}</p>
                    <div>
                    </div>
                </div>

                <h2>Total attempts: 15</h2>
                <h2>Used attempts{usedattempts}</h2>
                <h2>Remaining attempts{Remainingattempts <= 0 ? 0 : Remainingattempts}</h2>
                <h2>Extra attempts: {extraattempts}</h2>
                <h2>Penalty attempts: {penalty}</h2>
                <h2>Total Earned Points:{totalScore}</h2>


                {((Remainingattempts <= 0) && (totalScore >= 20 && totalScore < 35)) ? <h1>Mission passed : Respect ++ : You Won Bronze </h1> : ((Remainingattempts <= 0) && (totalScore >= 35 && totalScore < 50)) ? <h1>Mission passed : Respect ++ : You Won Silver </h1> : ((Remainingattempts <= 0) && (totalScore >= 50 && totalScore < 50)) ? <h1>Mission passed : Respect ++ : You Won Gold</h1> : ((Remainingattempts <= 0 && totalScore < 20)) ? <h1>Mission Failed</h1> : <button onClick={roll} disabled={rolling}> {rolling ? "Rolling...." : "Roll dice"} </button>}
            </div>
        </div>
    );
};
Rolldice.defaultProps = {
    sides: [
        { 0: <img style={{ height: "50px", width: "50px" }} src='0.png' /> },
        { 1: <img style={{ height: "50px", width: "50px" }} src='1.png' /> },
        { 2: <img style={{ height: "50px", width: "50px" }} src='2.png' /> },
        { 3: <img style={{ height: "50px", width: "50px" }} src='3.png' /> },
        { 4: <img style={{ height: "50px", width: "50px" }} src='4.png' /> },
        { 5: <img style={{ height: "50px", width: "50px" }} src='5.png' /> },
        { 6: <img style={{ height: "50px", width: "50px" }} src='6.png' /> }
    ]
}
export default Rolldice;