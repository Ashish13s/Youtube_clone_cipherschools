import React from "react";
import styled from "styled-components";
import Card from "../components/Cards/Card";
import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";
import Card3 from "../components/Cards/Card3";
import Card4 from "../components/Cards/Card4";
import Card5 from "../components/Cards/Card5";
import Card6 from "../components/Cards/Card6";
import Card7 from "../components/Cards/Card7";
import Card8 from "../components/Cards/Card8";
import Card9 from "../components/Cards/Card9";
import Card10 from "../components/Cards/Card10";
import Card11 from "../components/Cards/Card11";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <Container>
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
      <Card10 />
      <Card11 />
    </Container>
  );
};

export default Home;
