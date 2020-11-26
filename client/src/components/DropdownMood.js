import React, { useEffect , useState} from 'react';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Moods from './DropdownItems/Moods';

export default function DropdownMood() {
  return (
    <>
      <Col>
        <DropdownButton size="sm" id="dropdown-item-button" title="Mood">
          {
            Moods.map( elem => {
              return <Dropdown.Item as="button">{elem}</Dropdown.Item>
            })
          }
        </DropdownButton>
      </Col>
    </>
  )
}
