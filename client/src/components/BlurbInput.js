import React, {useRef, useEffect, useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import TextareaCounter from 'react-textarea-counter';
import './styles/BlurbInput.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from './ButtonGroup';
import DropdownMood from './DropdownMood';
// import API from '../utils/API';

// input group component that allows user input
export default function BlurbInput() {

    const [TextAreaVal, setTextAreaVal] = useState("");
    // const textAreaVal = useRef("What's on your mind?");
    useEffect(() => {
        console.log(TextAreaVal);
    }, [TextAreaVal]);

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={{span: 8, offset: 2}}>
                        <TextareaCounter onChange={(e) => setTextAreaVal(e.target.value)} placeholder="What's on your mind?" countLimit={140} rows={3} />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <ButtonGroup />
                    <DropdownMood />
                </Row>
            </Container>
        </>
    )
}
