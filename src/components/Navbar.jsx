import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <SearchContainer>
            <Input placeholder="search" />
            <SearchIcon style={{ color: 'gray', fontSize: 14 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Ecom</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  height: 70px;
  ${mobile({ height: '50px', marginBottom: '20px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Languages = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ justifyContent: 'center', flex: 2 })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ marginLeft: '10px', fontSize: '12px' })}
`;
