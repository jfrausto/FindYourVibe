import React, { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';

export default function PostToastError({ showToast }) {

  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("im in hereeeeeeeeeeeee");
    setShow(showToast);
  }, [showToast]);

  return (
    <>
      <Col xs={12} sm={{span: 8, offset: 2}} md={{span: 6, offset: 3}} lg={{span: 4, offset: 4}}>
          <Toast animation={true} onClose={() => setShow(false)} show={show} delay={1500} autohide>
            <Toast.Body>select a song and/or write your thoughts!</Toast.Body>
          </Toast>
      </Col>
    </>
  )
}
