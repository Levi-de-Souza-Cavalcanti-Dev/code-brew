import styled from 'styled-components';

export const StyleHeader = styled.div`
    width: 100%;
    height: auto;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-size: 20px;
    text-align: center;
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    left: 0;
    border-bottom: 1px solid #ffffff;
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(20px);

  .container {
    width: 100%;
  }

  .definicao{
    display: flex;
    width: 1024px;
    margin: 0 auto;
  }


.btn-service {
    align-items: center;
    border: 0;
    border-radius: 8px;
    box-sizing: border-box;
    color: #2b6f7b;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 14px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
}

.btn-service:active,
.btn-service:hover {
  outline: 0;
}

.btn-service span {
  background-color: #e3a72f;
    padding: 7px 25px;
    border-radius: 20px;
    font-weight: 700;
    width: 100%;
    height: 100%;
    transition: 300ms;
}

.btn-service:hover span {
  background: #2b6f7b;
  color: #e3a72f;
}

  .logotipo {
    width: 100px;
    height: auto;

    img {
      width: 95px;
    }
  }

  .menu {
    ul {
      display: flex; 
      list-style: none; 
      margin: 0 30px; 
    }

    li {
      cursor: pointer;
      transition: color 0.3s;
    }

    .fundo{
      color: #1d1d1d;
      background: #e8e8e8;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      padding: 5px;
      font-size: 15px;
      margin: 2px 7px;
    }
  }
.centralizarContent {
width:100%;
 display: flex
;
    justify-content: flex-end;
    align-items: center;
}

.dropdown-container {
  position: relative;
  display: inline-block;
  font-family: Arial, sans-serif;
}

.dropdown-button {
      padding: 10px 15px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: #2b6f7b;
}

.dropdown-container:hover .dropdown-menu {
  opacity: 1;
  visibility: visible; 
  transform: translateY(0);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 5px 0;
  padding: 10px 0;
  width: 200px;
  z-index: 1000;
  opacity: 0; 
  visibility: hidden; 
  transform: translateY(-10px); 
  transition: opacity 0.3s ease 0.5s, transform 0.3s ease;
}

.dropdown-menu li {
  padding: 8px 20px;
  font-size: 14px;
  color: #2b6f7b;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f2f2f2;
}

.dropdown-menu a {
  text-decoration: none;
  color: #333;
}

.dropdown-menu a:hover {
  text-decoration: underline;
}

hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 8px 0;
}

`;
