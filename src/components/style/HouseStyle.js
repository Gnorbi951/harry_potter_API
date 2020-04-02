import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: white;
`;
export const Cards = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.3rem;
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  background-color: white;
`;

export const Members = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.3rem;
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color: white;
  text-align: center;
`;

export const Student = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f7f7f7;
`;
export const Card = styled.div`
  color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${props => props.color};
`;
export const Logo = styled.img`
  max-width: 350px;
`;

export const HouseContainer = styled.div`
  margin: 1rem auto;
  text-align: center;
`;

export const Name = styled.h1`
  text-decoration: none;
  color: white;

  &:hover {
    color: #303030;
  }
`;

export const LogoSection = styled.div``;
export const TextSection = styled.div`
  margin: 10px auto;
  padding: 10px;
  max-width: 70%;
  font-style: italic;
`;

export const SortingHat = styled.div`
  margin: 2rem auto;
  max-width: 50%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: teal;
  border-top: 2px solid #404040;
`;

export const SortingLink = styled.h1`
  background-color: #404040;
  padding: 1rem;
  color: #ffad34;
  margin: 0;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export const Description = styled.div`
  border-top: 4px solid ${props => props.color};
  border-bottom: 4px solid ${props => props.color};
  border-radius: 20px;
  padding: 1rem;
  max-width: 50%;
  margin: 0 auto 1rem auto;
`;

export const HouseName = styled.h1`
  color: ${props => props.color};
  margin: 0 auto;
`;

export const StudentName = styled.h3`
  color: ${props => props.color};
`;
