import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// button group that is adjacent to drop down chooser
export default function ButtonGroup() {
  return (
    <>
      <Col xs={{span: 3, offset: 3}} sm={{ span: 4, offset: 2}}>
        <Button size="sm" variant="info">Analyze</Button>
      </Col>
      <Col xs={3} sm={4}>
        <Button size="sm" variant="dark">Post</Button>
      </Col>
    </>
  )
}
