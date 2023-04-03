import styled from "styled-components";
import { Button as MButton} from "@mui/material";

// export const StyledButton = styled(MButton)(props => ({
// color: ${props.color ? 'red' : 'green'}
// )}
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const OrderTrendBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top:70px;
`;

export const StatisticsTab = styled.div`
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: column;
`;


export const ChartCustomise = styled.div`
    margin-top: 25px;
    width: 2vw%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: "Times New Roman", Times, serif;
`;

export const DaysCustomise = styled.div`
    margin-top: 20px;
    width:50vw;
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap;
    // @media (max-width:700px){
    //     flex-direction:column;
    //     justify-content: space-between;
    //     height:20%;
    //     width:15%;
    // }
`;

export const CompareTab = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:flex-start;
    @media(max-width:900px){
        flex-direction: column;
        justify-content: space-between;
        align-items:center;
    }
`;

export const StatisticsGraph = styled.div`
position: relative; 
margin: auto;
height: 63vh;
width: 100%;
@media(max-width:700px){
    height:50vh;
}
@media(max-width:1100px){
    height:60vh;
}
// background-color: aqua;
`;

export const CompareGraph = styled.div`
    position: relative; 
    margin: auto;
    height: 75vh;
    width: 75%;
`;

export const ComparePicker = styled.div`
    border: 2px;
    border-radius: 10px;
    padding: 20px;
    width: 15%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    @media(max-width:900px){
        width:70%;
        align-items: center;
    }
    
`;

export const DateListBox = styled.div`
    width: 100%;
    margin-top:5px;
    justify-content: center;
    display: inline-flex;
    flex-wrap:wrap;
    font-size: small;
    max-height: 380px;
    overflow-y: auto;
    overflow-x: auto;
`;

