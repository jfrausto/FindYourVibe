import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// button group that is adjacent to drop down chooser
export default function ButtonGroup({handleButtonClick}) {
  return (
    <>
      <Col>
        <Button onClick={handleButtonClick} className="px-md-5" size="sm" variant="info">Analyze</Button>
      </Col>
      <Col>
        <Button onClick={handleButtonClick} className="px-md-5" size="sm" variant="dark">Post</Button>
      </Col>
    </>
  )
}
