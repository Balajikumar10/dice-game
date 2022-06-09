import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




import "./Rolldice.css";
import { Button } from '@mui/material';
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
                <br></br>

                {/*<h2>Total attempts: 15</h2>
    <h2>Used attempts{usedattempts}</h2>
    <h2>Remaining attempts{Remainingattempts <= 0 ? 0 : Remainingattempts}</h2>
    <h2>Extra attempts: {extraattempts}</h2>
    <h2>Penalty attempts: {penalty}</h2>
    <h2>Total Earned Points:{totalScore}</h2>*/}
                <Table sx={{ width: 1000, border: 1 }} aria-label="simple table" align="center">
                    <TableHead sx={{ minWidth: 650, border: 1 }}>
                        <TableRow sx={{ minWidth: 650, border: 1 }}>
                            <TableCell sx={{ border: 1 }}>Total attempts</TableCell>
                            <TableCell sx={{ border: 1 }} align="right">Used attempts
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">Remaining attempts
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">Extra attempts
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right">Penalty attempts
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="right"> Total points
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow

                            sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
                        >
                            <TableCell component="th" scope="row">15

                            </TableCell>

                            <TableCell align="right">{usedattempts}</TableCell>
                            <TableCell align="right">{Remainingattempts <= 0 ? 0 : Remainingattempts}</TableCell>
                            <TableCell align="right">{extraattempts}</TableCell>
                            <TableCell align="right">{penalty}</TableCell>
                            <TableCell align="right">{totalScore}</TableCell>
                        </TableRow>

                    </TableBody>
                    <br></br>
                </Table>
                {((Remainingattempts <= 0) && (totalScore >= 20 && totalScore < 35)) ? <Table sx={{ border: 1 }}><TableHead><TableRow><h1>REWARD</h1></TableRow><TableRow><h1>Mission passed : Respect ++ : You Won Bronze <img src='data:image/jpeg;base64,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' /></h1></TableRow></TableHead></Table> : ((Remainingattempts <= 0) && (totalScore >= 35 && totalScore < 50)) ?
                    <Table sx={{ border: 1 }}><TableHead><TableRow><h1>REWARD</h1></TableRow><TableRow><h1>Mission passed : Respect ++ : You Won Silver <img src='data:image/jpeg;base64,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' /></h1></TableRow></TableHead></Table> : ((Remainingattempts <= 0) && (totalScore >= 50 && totalScore < 50)) ? <Table sx={{ border: 1 }}><TableHead><TableRow><h1>REWARD</h1></TableRow><TableRow><h1>Mission passed : Respect ++ : You Won Gold <img src='https://4.imimg.com/data4/WI/TV/MY-9647748/gold-medal-500x500.jpg' /></h1></TableRow></TableHead></Table>
                        : ((Remainingattempts <= 0 && totalScore < 20)) ? <Table sx={{ border: 1 }}><TableHead><TableRow><h1>REWARD</h1></TableRow><TableRow><h1>Mission Failed </h1></TableRow></TableHead></Table> : <Button variant='contained' onClick={roll} disabled={rolling}> {rolling ? "Rolling...." : "Roll dice"} </Button>}
            </div>
        </div >
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