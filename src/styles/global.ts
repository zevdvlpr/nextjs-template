import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    
    box-sizing: border-box;              
    
    color: ${({ theme }) => theme.colors.white};
  }
  
  html, body #root {
    height: 100%;   
    width: 100%;        
    
    background-color: ${({ theme }) => theme.colors.black}        
  }
`;
