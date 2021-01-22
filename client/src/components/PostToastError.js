import React, { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';

export default function PostToastError({ showToast }) {

  const [show, setShow] = useState({
    emptySong: false,
    noResults: false
  });

  useEffect(() => {
    setShow({
      emptySong: showToast.emptySong,
      noResults: showToast.noResults
    });
  }, [showToast.emptySong, showToast.noResults]);

  return (
    <>
      <Col xs={12}
      >
          <Toast 
            animation={true} 
            className="mx-auto" 
            onClose={() => setShow({emptySong: false, noResults: false})} 
            show={show.emptySong} 
            delay={1500} 
            autohide
          >
            <Toast.Body className="alert-msg">select a song and/or write your thoughts!</Toast.Body>
          </Toast>
          
          <Toast 
            animation={true} 
            className="mx-auto" 
            onClose={() => setShow({emptySong: false, noResults: false})} 
            show={show.noResults} 
            delay={1500} 
            autohide
          >
            <Toast.Body className="alert-msg">oh! no songs were found!</Toast.Body>
          </Toast>
      </Col>
    </>
  )
}
