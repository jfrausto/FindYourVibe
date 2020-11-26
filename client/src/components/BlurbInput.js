import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import TextareaCounter from 'react-textarea-counter';
import './styles/BlurbInput.css';

export default function BlurbInput(props) {
    return (
        <>
            <Container className="mt-5">
                <TextareaCounter countLimit={140} rows={3}/>
            </Container>
        </>
    )
}
