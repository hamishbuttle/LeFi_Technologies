import { createGlobalStyle, styled } from "styled-components";
import normalize from "normalize.css";
import {motion} from "framer-motion";

export const designTokens = {
  color: {
    accent: "linear-gradient(180deg, #FFC701 0%, #FFA901 100%)",
    bodyBackground:
      "var(--bg, linear-gradient(180deg, #171616 0%, #272526 58.33%, #1A1718 100%));",
    textPrimary: "#FFFFFF",
    textSecondary: "#A9A9A9",
    textLink: "#FFC701",
    inputBackground: "#272526",
    inputBorder: "#FFA901"
  },
  font: {
    family: "'Montserrat', sans-serif",
    weight: {
      light: 100,
      regular: 300,
      medium: 400
    },
    size: {
      base: "16px",
      h1: "3em", // Updated from 2em to 3em
      h2: "2.4em",
      h3: "1.17em",
      p: "1em",
      a: "1em",
      input: "1em"
    }
  },
  border: {
    radius: "4px"
  },
  responsive: {
    desktop: "900px"
  }
};

const GlobalStyle = createGlobalStyle`
    @import url(${normalize});

  body {
    background: ${designTokens.color.bodyBackground};
    font-family: ${designTokens.font.family};
    color: ${designTokens.color.textPrimary};
    font-size: ${designTokens.font.size.base};
    height: 100vh;
  }

  section {
    padding: 6em 1.6em;
    @media (max-width: 600px) {
      padding: 2.4em 1.6em;
      }   
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }

  h1 {
    font-size: ${designTokens.font.size.h1};
    font-weight: ${designTokens.font.weight.medium};
  }

  h2 {
    font-size: ${designTokens.font.size.h2};
    font-weight: ${designTokens.font.weight.medium};
    max-width: 560px;
    margin: auto;
  }

  h3 {
    font-size: ${designTokens.font.size.h3};
    font-weight: ${designTokens.font.weight.regular};
  }

  p {
    font-size: ${designTokens.font.size.p};
    color: ${designTokens.color.textSecondary};
    font-weight: ${designTokens.font.weight.light};
    line-height: 1.6;
    strong {
      color: white;
    }
  }

  a {
    font-size: ${designTokens.font.size.a};
    color: ${designTokens.color.textLink};
    text-decoration: none;
    font-weight: ${designTokens.font.weight.light};
  }

  input {
    font-size: ${designTokens.font.size.input};
    color: ${designTokens.color.textPrimary};
    background-color: ${designTokens.color.inputBackground};
    border: 1px solid ${designTokens.color.inputBorder};
    border-radius: ${designTokens.border.radius};
    padding: 0.5em;
  }

  span {
    color: ${designTokens.color.accent};
  }
  small {
    color: #FCAC1C;
    text-transform: uppercase;
  }
`;

// Wrapper component
export const Wrapper = styled.div`
  max-width: ${designTokens.responsive.desktop};
  margin: 0 auto;
`;

export const CTA = styled(motion.div)`
  text-align: center;
  padding: 1.6em;
  margin: auto;
  button {
    margin-top: 2em;
  }
`;

// Button component
export const Button = styled.button`
  background: ${designTokens.color.accent};
  border: none;
  border-radius: ${designTokens.border.radius};
  color: black;
  font-weight: ${designTokens.font.weight.regular};
  padding: 6px 20px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    opacity: 0.8;
  }
`;

export const Header = styled.header`
  position: relative;
  min-height: 720px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Points = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 420px;
  div {
    display: flex;
    align-items: center;
    p {
      margin-left: 8px;
    }
  }
`;

const Square = styled.div`
  /* height: 200px; // set a fixed height for the squares */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  img {
    width: 100%;
  }
`;

const SquareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FlexContainer = styled.div`
  margin: 2.4rem 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TextBox = styled.div`
  flex: 1;
  padding: 20px;
`;

export { Square, SquareGrid };

export default GlobalStyle;
