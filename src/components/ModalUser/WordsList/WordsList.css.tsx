import styled from 'styled-components/native';
import { scroll } from '../../../styles/mixins';

interface IStyles {
  status: number;
}

export const Wrapper = styled.View`
  max-height: 85%;
  margin-top: 20px;
  /* ${scroll} */
`;

export const SingleWord = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 10px;
  /*
  svg {
    fill: ${({ theme }) => theme.colorPrimary};
    cursor: pointer;
    margin: 0 5px;
    transition: 0.3s;

    :hover {
      opacity: 0.7;
      transform: scale(1.3);
    }
  } */

  &:nth-child(even) {
    /* background-image: linear-gradient(
      90deg,
      rgba(89, 131, 252, 0) 0%,
      rgba(194, 185, 204, 0.5) 10%,
      rgba(194, 185, 204, 0.5) 50%,
      rgba(229, 230, 239, 1) 80%,
      rgba(89, 131, 252, 0) 100%
    ); */
  }
`;

export const DataWord = styled.View<IStyles>`
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-direction: column;

  /* span {
    flex-basis: 40%;
    display: block;

    &.status {
      text-transform: uppercase;
      font-weight: bold;
      flex-basis: 10%;
      color: ${({ theme, status }) => theme.status[status]};
    }
  }
*/
`;
