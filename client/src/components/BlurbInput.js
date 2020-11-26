import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import TextareaCounter from 'react-textarea-counter';
import './styles/BlurbInput.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from './ButtonGroup';

// input group component that allows user input
export default function BlurbInput(props) {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={{span: 6, offset: 3}}>
                        <TextareaCounter countLimit={140} rows={3}/>
                    </Col>
                </Row>
                <Row>
                    <ButtonGroup />
                </Row>
            </Container>
        </>
    )
}
