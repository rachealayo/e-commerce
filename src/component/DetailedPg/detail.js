import React from "react";
import styled from "styled-components";

const Detail = () => {
    return (
        <Container>
           <Wrap>
              <Left>
                <img src="/winterjacket.png"/>
              </Left>
              <And>AND</And>
              <Right>
              <Wrapp>
                  <Topic>Mens Cotton Jacket</Topic>
                 <Price><Tag></Tag>$55.99</Price>
                 <Men>men clothing</Men>
                  <Description>great outerwear jackets for Spring/Autumn/Winter, suitable for
                     many occasions, such as working, hiking, camping,
                     mountain/rock climbing, cycling, traveling or other outdoors.
                     Good gift choice for you or your family member. A warm hearted
                     love to Father, husband or son in this thanksgiving or Christmas
                     Day.
                  </Description>
                  <Cart>Add to Cart</Cart>
                  </Wrapp>
              </Right>
           </Wrap>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
height: 100vh;
width: 100%;
// background-color: red;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px){
    height: 100%;
    width: 100%;
 }
`;

const Wrap = styled.div`
height: 90%;
width: 90%;
// background-color: yellowgreen;
display: flex;
border: 1px solid grey;
`;

const Left = styled.div`
// height: 100vh;
width: 50%;
// background-color: yellow;
display: flex;
border-right: 1px solid grey;
`;

const And = styled.div`
height: 20px;
width: 32px;
background-color: white;
margin-top: 250px;
// margin-right: 30px;
position: absolute;
left: 600px;
font-weight: bold;

`;

const Right = styled.div`
// height: 100vh;
width: 50%;
// background-color: pink;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapp = styled.div`
height: auto;
width: 90%;
// background-color: orange;
display: flex;
flex-direction: column;
`;

const Topic = styled.div`
height: 50px;
width: 90%;
// background-color: peru;
padding-left: 10px;
margin-left: 10px;
display: flex;
align-items: center;
font-size: 25px;
font-weight: bold;
color: black;
`;

const Price = styled.div`
height: 45px;
width: 150px;
background-color: green;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 23px;
font-weight: bold;
color: white;
border-radius: 0.5rem;
margin-top: 15px;
margin-left: 20px;
`;

const Tag = styled.div`
height: 10px;
width: 10px;
background-color: white;
border-radius: 50%;
`;

const Men = styled.div`
height: 40px;
width: 80%;
background-color: whitesmoke;
border-radius: 6px;
border: 2px solid gainsboro;
color: firebrick;
padding-left: 10px;
margin-top: 10px;
display: flex;
align-items: center;
font-weight: bold;
margin-left: 20px;
margin-top: 20px;
`;

const Description = styled.div`
font-size: 20px;
margin-left: 20px;
margin-top: 15px;
font-family: san-serif;
`;
const Cart = styled.div`
height: 50px;
width: 200px;
background-color: hotpink;
border-radius: 5px;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
margin-left: 20px;
margin-top: 20px;
`;