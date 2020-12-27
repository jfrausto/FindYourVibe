import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

// button group that is adjacent to drop down chooser
export default function ButtonGroup({handleButtonClick, isThinking}) {
  return (
    <>
      <Col xs={{span: 4}}>
        <Button onClick={!isThinking ? handleButtonClick : null} 
        disabled={isThinking} 
        className="p-2 px-md-3" 
        size="sm" 
        variant="warning">
          {isThinking ? <div><Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          /> Thinking...</div> : "Analyze"}
        </Button>
      </Col>
      <Col xs={{span: 4}}>
          <Button onClick={handleButtonClick} 
          className="py-2 px-3 px-md-4"
          size="sm" 
          variant="warning">Post</Button>
      </Col>
    </>
  )
}
