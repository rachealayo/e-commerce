import React from "react";
import styled from "styled-components";

const Card = ({image, name, price, description}) => {
    return (
        <Box>
            <Top><img src={image}/></Top>
            <Down>
                <Object>{name}</Object>
                <Amount>{price}</Amount>
                <Text>{description}</Text>
            </Down>
        </Box>
    )
}

export default Card;

const Box = styled.div`
height: 80%;
width: 30%;
border-radius: 5px;
// background-color: gold;
margin: 10px;
border: 1px solid grey;
`;

const Top = styled.div`
height: 70%;
width: 100%;
// background-color: navy;
display: flex;
justify-content: center;
align-items: center;

img{
    height: 95%;
    width: 95%;
}
`;

const Down = styled.div`
height: 30%;
width: 100%;
// background-color: red;
border-top: 1px solid grey;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const Object = styled.div`
font-size: 18px;
font-weight: bold;
color: black;
margin-left: 10px;
`;

const Amount = styled.div`
font-size: 18px;
margin-left: 10px;
font-weight: bold;
color: black;
`;

const Text = styled.div`
color: gainsboro;
margin-left: 10px;
`;