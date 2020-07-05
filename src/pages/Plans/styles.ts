import styled from 'styled-components';
import { darken } from 'polished';

export interface IToggleOption {
  active?: boolean;
}

interface ButtonSelectedPlanProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  border-radius: 15px 15px 0 0;

  > div {
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    align-items: center;
    margin: 20px 0 20px 40px;
  }
`;

export const Toggle = styled.button`
  margin-left: auto;
  margin-right: auto;
  background: #f4f7fc;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  margin-top: 23px;
  width: fit-content;
  border: none;
  display: flex;
`;

export const ToggleOption = styled.div<IToggleOption>`
  padding: 8px 25px;
  background: ${(props): string => (props.active ? '#00A6CE' : 'none')};
  border-radius: ${(props): number => (props.active ? 15 : 0)}px;
  font-weight: ${(props): string => (props.active ? '500' : 'bold')};
  color: ${(props): string => (props.active ? '#fff' : '#222')};
`;

export const PlansList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  list-style: none;
  margin-top: 40px;

  li {
    display: flex;
    flex-direction: column;
    padding: 0 40px;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
      }

      p {
        font-size: 30px;
        color: #00a6ce;
        font-weight: bold;
        margin-left: 15px;
      }
    }

    > p {
      margin-top: 10px;
      font-size: 13px;
      color: #999;
      margin-bottom: 20px;
    }

    strong {
      font-size: 32px;
      color: #00a6ce;
      font-weight: bold;
    }

    & + li {
      border-left: 2px solid #eee;
    }
  }
`;

export const ButtonSelectedPlan = styled.button<ButtonSelectedPlanProps>`
  background: ${props => (props.selected ? '#43B998' : '#F4F7FC')};
  color: ${props => (props.selected ? '#F4F7FC' : '#4a507b')};
  font-size: 26px;
  font-weight: bold;
  border: none;
  width: 95%;
  height: 40px;
  border-radius: 100px;
  margin-top: 10px;
  transition: background 0.2s;

  &:hover {
    cursor: ${props => (props.selected ? 'not-allowed' : '')};
    background: ${props =>
      props.selected ? darken(0.03, '#43B998') : darken(0.03, '#F4F7FC')};
  }
`;

export const Features = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 20px;

  > p {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.8);

    & + p {
      margin-top: 8px;
    }
  }

  img {
    width: 21px;
    height: 21px;
    margin-right: 10px;
  }
`;

export const Attendants = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 50px;

    strong {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 38px;
      color: #222222;
    }

    p {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #00a6ce;
    }
  }
`;

export const ContAttendants = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    background: none;
    border: 0;
  }
  span {
    border: none;
    color: #00a6ce;
    font-size: 32px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border: 0;
  background: #00a6ce;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);

  border-radius: 0 0 15px 15px;

  strong {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    color: #ffffff;
  }

  p {
    font-size: 18px;
    color: #f5f5f5;
  }

  button {
    width: 240px;
    height: 45px;
    border: 0;
    color: #ffffff;
    font-size: 26px;

    background: #43b998;
    border-radius: 100px;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#43B998')};
    }
  }
`;
