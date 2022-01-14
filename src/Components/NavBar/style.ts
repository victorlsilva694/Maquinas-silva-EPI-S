import styled from 'styled-components';

export const ContainerBrand = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgb(230,230,230);
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(150,150,150);

  img{
    width: 50px;
    margin-top: 2px;
    height: 46px;
  }
`;

export const ContainerBrandAndText = styled.div`
  width:210px;
  display: flex;
  justify-content: space-between;
  height: 60px;
`;

export const TextBrand = styled.h1`
  color: #E3CD00;
  margin-top: 10px;
  font-family: 'Open Sans';
  text-align: center;
  font-size: max(1vw, 15px);
`;