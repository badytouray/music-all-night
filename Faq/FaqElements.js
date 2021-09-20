import styled from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  background: #fff;
  width: 800px;
  align-text: center;
  margin: 10px
  justify-content: center;
  margin-left: 250px;
  
`;

export const Container = styled.div`
  position: absolute;
  width: auto;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  margin-bottom: auto;
`;

export const Wrap = styled.div`
  background: black;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-shadow: 2px solid purple;
  border-radius: 5px;

  h1 {
    padding: 25px;
    font-size: 20px;
  }

  span {
    margin-right: 30px;
  }
`;

export const Dropdown = styled.div`
  background-color: white;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  transition: 0.2 ease-out;

  p {
    font-size: 20px;
    margin: 10px;
    padding: 10px;
  }
`;
