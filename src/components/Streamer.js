import Rank from "./Rank";
import styled from 'styled-components';
import Score from "./Score";

var Row = styled.div`
    display: flex;
    justify-content: center;
    alignItems: center;
`;

var Col = styled.div`
    padding: 10px;
    width: 120px;
    text-align: center;
`;

var Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 18px;
`

const Streamer = ({streamer, rankNo}) => {
    return <Row>
        <Col>{rankNo + 1}</Col>
        <Col><Avatar src={streamer.picture} width={36} height={36} /></Col>
        <Col>{streamer.displayName}</Col>
        <Col><Score score={streamer.score} /></Col>
    </Row>
}

export default Streamer;