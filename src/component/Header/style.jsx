import styled from 'styled-components';

export const StyleHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .definicao {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  .logotipo img {
    width: 80px;
    height: auto;
  }

  .nav-container {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .desktop-nav {
    display: flex;
    gap: 25px;
  }

  .desktop-nav a {
    color: #e3a72f;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    position: relative;
    transition: color 0.3s ease;
  }
  
  .desktop-nav a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #00a1ff;
    transition: width 0.3s ease;
  }

  .desktop-nav a:hover {
    color: #00a1ff;
  }
  
  .desktop-nav a:hover::after {
    width: 100%;
  }

  .social-media {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  
  .social-media a {
    color: #1d1d1d;
    background: #e8e8e8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;
  }

  .social-media a:hover {
    background-color: #00a1ff;
    color: white;
  }

  .menu-icon {
    display: none;
    font-size: 28px;
    cursor: pointer;
    color: #333;
  }

  /* --- Responsive Styles --- */
  @media (max-width: 768px) {
    .menu-icon {
      display: block;
      position: fixed;
      top: 26px;
      right: 24px;
      z-index: 110; /* Acima do menu móvel */
    }

    .nav-container {
      position: fixed;
      top: 0;
      right: -100%; /* Começa fora da tela */
      width: 80%;
      height: 100vh;
      background-color: white;
      box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;
      transition: right 0.4s ease-in-out;
      z-index: 105; /* Abaixo do ícone */
    }

    .nav-container.active {
      right: 0; /* Entra na tela */
    }

    .desktop-nav {
      flex-direction: column;
      text-align: center;
      gap: 30px;
    }

    .desktop-nav a {
      font-size: 22px;
    }
    
    .social-media {
      margin-top: 20px;
    }
  }
`;
