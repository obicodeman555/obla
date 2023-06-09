import { useState, KeyboardEvent } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from '../styles';
import { useFocus } from '../utils/useFocus';
type NewItemFormProps = {
    onAdd(text: string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
    const [text, setText] = useState("");
    const inputRef = useFocus();

    const handleAddText = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onAdd(text)
        }
    }

    return (
        <NewItemFormContainer>
            <NewItemInput value={text} onChange={(e) => setText(e.target.value)} ref={inputRef} onKeyDown={handleAddText} />
            <NewItemButton onClick={() => onAdd(text)}>
                Create
            </NewItemButton>
        </NewItemFormContainer>
    )
}
