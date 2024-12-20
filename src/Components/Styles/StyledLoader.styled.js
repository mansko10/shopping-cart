import styled from "styled-components";

const StyledLoader = styled.div`
  min-height: calc(100vh - 101px);
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    width: 50px;
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #483d8b;
    --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: l3 1s infinite linear;
    @keyframes l3 {
      to {
        transform: rotate(1turn);
      }
    }
  }
`;

export default StyledLoader;
