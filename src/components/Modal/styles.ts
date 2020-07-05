import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
  }
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }
  .modal {
    z-index: 100;
    background: white;
    position: relative;
    margin: 300px auto;
    border-radius: 3px;
    max-width: 500px;
    padding: 2rem;
  }
  .modal-header {
    display: flex;
    justify-content: flex-end;
  }
  .modal-close-button {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    opacity: 0.3;
    cursor: pointer;
    border: none;
  }
  button {
    font-size: 0.9rem;
    font-weight: 700;
    border: none;
    border-radius: 3px;
    padding: 0.3rem 1rem;
    margin-left: 6rem;
  }
  .button-default {
    background: #247ba0;
    color: #fff;
  }
  h1 {
    margin-top: -30px;
  }
  p {
    margin: 30px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
    h1 {
      margin-bottom: 24px;
      color: #3a3a3a;
    }
    input {
      margin-top: 10px;
      width: 100%;
      height: 40px;
      border: 1px solid #232129;
      border-radius: 4px;
      color: #888888;
    }
    button {
      margin-top: 20px;
      width: 100px;
      height: 40px;
      background: #069848;
      border-radius: 5px;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, '#069848')};
      }
    }
  }
`;
