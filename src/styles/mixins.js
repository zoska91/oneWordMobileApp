export const flexCenter = `
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const scroll = () => `

    &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #C0C0C0;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #2e2757;
      border-radius: 10px;
      border: 1px solid #C0C0C0;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

`;
