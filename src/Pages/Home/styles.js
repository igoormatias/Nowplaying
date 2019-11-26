import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 10px;
  color: #fff;
  min-width: 1080px;

  h1 {
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
`;
export const Input = styled.input`
  border: 0;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 40px;
  border-radius: 50px;
  text-align: center;
`;

export const Button = styled.button`
  border: 0;
  width: 80px;
  height: 40px;
  font-size: 12px;
  color: #ffff;
  border-radius: 10px;
  background: #7159c1;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  padding: auto;
  margin: 8px 8px;

  &:hover {
    background: #7159d9;
  }
`;

export const ArtistList = styled.ul`
  justify-items: self-end;
  padding-left: 490px;
  li {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    width: 290px;
    height: 190px;
    border-radius: 5%;

    div {
      display: flex;
      flex-direction: column;
      background: #1c1c1c;
      color: #fff;
      opacity: 0.9;
      border-radius: 4px;
      padding: 20px;
    }

    span {
      align-items: center;
      justify-content: center;
      display: flex;
      h3 {
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: center;
      }
      img {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
    }
  }
`;
