import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// button group that is adjacent to drop down chooser
export default function ButtonGroup() {
  return (
    <>
      <Col>
        <Button className="px-md-5" size="sm" variant="info">Analyze</Button>
      </Col>
      <Col>
        <Button className="px-md-5" size="sm" variant="dark">Post</Button>
      </Col>
    </>
  )
}
