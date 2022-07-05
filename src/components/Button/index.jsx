import styled from 'styled-components';

const Button = styled.button`
    background-color: palevioletred;
    border: none;
    color: white;
    border-radius: 5px;
`;

export const CloseButton = () => <Button>x</Button>;

export default Button;