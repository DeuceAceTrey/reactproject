import { useEffect, useState } from "react"

const Score = ({score}) => {
    var [prevScore, setPrevScore] = useState(0);
    if (score > prevScore)
        setTimeout(() => setPrevScore(prevScore + parseInt((score - prevScore) / 2)), 50);
    return prevScore;
}

export default Score;