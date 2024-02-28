import { ButtonContainer } from "./style";

export function Button({ label, onClick }) {
    return (
        <ButtonContainer onClick={onClick} type="button">
            {label}
        </ButtonContainer>
    )
}