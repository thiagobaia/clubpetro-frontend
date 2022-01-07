import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}

  :root {
    --green: ##4F9419;
    --green-button: #006C18;
    --text-title-card: #4F9419;
    --text-body: #000000;
    --text-input: #868686;
    --shape: #ffffff;

  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }
    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1,h2,h3,h4,h5, h5 {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }


  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;    
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--shape);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }

`;
