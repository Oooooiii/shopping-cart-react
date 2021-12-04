import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categories } from '../data';

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
}

export default Categories;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
