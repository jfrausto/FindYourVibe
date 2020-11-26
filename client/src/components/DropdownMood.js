import React, { useEffect , useState} from 'react';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Moods from './DropdownItems/Moods';

export default function DropdownMood() {

  // initialize the title of our dropdown menu to 'Vibe'
  const [titleMood, setTitleMood] = useState("Vibe");

  return (
    <>
    {/* add a KEY prop for each child in a list <li>
        in this case, the 'list' <li> is the Dropdown.Item */}
      <Col>
        <DropdownButton size="sm" id="dropdown-item-button" title={titleMood}>
          {
            Moods.map( elem => {
              return <Dropdown.Item key={elem} as="button">
                        <div onClick={ (e) => setTitleMood(e.target.textContent)}>
                          {elem}
                        </div>
                      </Dropdown.Item>
            })
          }
        </DropdownButton>
      </Col>
    </>
  )
}
