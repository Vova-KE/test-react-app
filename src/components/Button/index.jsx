import styled from 'styled-components';

const Button = styled.button`
    background-color: palevioletred;
    border: none;
    color: white;
    border-radius: 5px;
`;

export const CloseButton = ({ item = {}, onRemoveItem }) => (
    <Button onClick={onRemoveItem}>
        x
    </Button>
);

export default Button;