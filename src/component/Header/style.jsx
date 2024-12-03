import styled from 'styled-components';

export const StyleHeader = styled.div`
  width: 100%;
  height: auto;
  background: #f4f1ea;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 20px;
  text-align: center;

  .container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between; /* Para separar logotipo e menu */
  }

 .btn-service {
  background: #e3a72f;
  padding: 0px 25px;
  border-radius: 20px;
  font-size: 16px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
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
      display: flex; /* Alinha os itens em linha */
      gap: 20px; /* Espaço entre os itens */
      list-style: none; /* Remove os marcadores da lista */
      margin: 0; /* Remove margens padrão */
      padding: 0; /* Remove preenchimento padrão */
    }

    li {
      cursor: pointer;
      transition: color 0.3s;
    }

    .fundo{
           grid-area: social;
    margin: 0 3px;
    color: #ffffff;
    background: #2b6f7b;
    border-radius: 100%;
    display: flex
;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    }
  }

  .dropdown-container {
  position: relative;
  display: inline-block;
  font-family: Arial, sans-serif;
}

.dropdown-button {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
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
}

.dropdown-menu li {
  padding: 8px 20px;
  font-size: 14px;
  color: #333;
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
