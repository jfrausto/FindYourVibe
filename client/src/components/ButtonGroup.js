import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

// button group that is adjacent to drop down chooser
export default function ButtonGroup({handleButtonClick, isThinking}) {
  return (
    <>
      <Col>
        <Button onClick={!isThinking ? handleButtonClick : null} disabled={isThinking} className="px-md-5" size="sm" variant="info">
          {isThinking ? <div><Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          /> thinking...</div> : "Analyze"}
        </Button>
      </Col>
      <Col>
          <Button onClick={handleButtonClick} className="px-md-5" size="sm" variant="dark">Post</Button>
      </Col>
    </>
  )
}
