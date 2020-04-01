import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: 323232;
`;

export const Card = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  max-width: 400px;
`;

export const HouseContainer = styled.div`
  margin: 0;
  height: 100vh;
  background-color: white;
  background-size: cover;
`;
