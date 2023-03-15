import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 80%;
  display: flex;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Logo = styled.img`
  height: 50px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da5ea2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #9a4674;
  }
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;
const ListItem = styled.li`
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
