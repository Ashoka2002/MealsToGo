import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.button};
`;

export const RestaurantCard = styled(Card)`
  padding: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-radius: ${({ theme }) => theme.sizes[0]};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  border-radius: ${({ theme }) => theme.sizes[0]};
  height: 200px;
`;

export const Info = styled.View`
  padding: ${({ theme }) => theme.space[2]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: -5px;
  gap: 10px;
`;
