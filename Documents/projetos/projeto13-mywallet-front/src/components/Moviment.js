import styled from "styled-components";

export default function Moviment({date,type,description,value}){
    return (
        <li>
            <MovimentData> <span><Day>{date}</Day> <Text>{description}</Text></span> <Number color={type === "deposit" ? "#03AC00" : "#C70000"}>{value}</Number></MovimentData>
        </li>
    )
}

const MovimentData = styled.span`
    width: 100%;
    font-weight: 400;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    span{
        display: flex;
    }
`

const Day = styled.p`
    color: #C6C6C6;
`

const Text = styled.p`
    color: black;
`
const Number = styled.p`
    color: ${props => props.color};
`