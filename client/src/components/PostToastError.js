import React, { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';

export default function PostToastError({ showToast }) {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(showToast);
  }, [showToast]);

  return (
    <>
      <Col xs={12}
      >
          <Toast animation={true} className="mx-auto" onClose={() => setShow(false)} show={show} delay={1500} autohide>
            <Toast.Body className="alert-msg">select a song and/or write your thoughts!</Toast.Body>
          </Toast>
      </Col>
    </>
  )
}
