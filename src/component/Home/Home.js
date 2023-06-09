import React from "react";
import styled from "styled-components";
import Card from "../Card/card";
import Detail from "../DetailedPg/detail"

const Home = (props) =>{
    return(
        <Container>
            <Wrap>
                <Card image="/bag.jpg" name="Fjallraven - Foldsack No. 1
                Backpack, Fits 15 Laptops" price="$ 109.95" description="men clothing"/>
                <Card image="/men's fit.jpg" name="Mens Casual Premium Slim
                 Fit T-Shirts" price="$ 22.3" description="men clothing"/>
                <Card image="/winterjacket.png" name="Mens Cotton Jacket"
                 price="$ 55.99" description="men clothing"/>
                <Card image="/slimfit shirt.jpg" name="Mens Casual Slim Fit"
                price="$ 15.99" description="men clothing"/>
            </Wrap>
          <Detail/>
        </Container>
    )
}
export default Home;

const Container = styled.div`
   height: auto;
   width: 100%;
// background-color: blue;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

const Wrap = styled.div`
   height: 90vh;
   width: 90%;
//    background-color: tomato;
   display: flex;
   justify-content: center;
   align-items: center;
`;