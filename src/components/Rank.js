import styled from "styled-components";

const Rank = styled.div`
    width: 320px;
    height: 48px;
    position: absolute;
    top: ${(props) => props.rankNo * 48}px;
    left: 50%;
    margin-left: -160px;
    transition: all 0.3s ease 0s;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

export default Rank;