import React, { useEffect , useState} from 'react';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export default function DropdownMood() {
  return (
    <>
      <Col>
        <DropdownButton size="sm" id="dropdown-item-button" title="Mood">
          <Dropdown.Item as="button">Action</Dropdown.Item>
          <Dropdown.Item as="button">Another action</Dropdown.Item>
          <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>
      </Col>
    </>
  )
}
