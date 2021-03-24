import React from 'react'

export default function newTextArea(TextAreaVal) {
 return (
  <div contentEditable="true" id="NewtextArea" className='editable' data-placeholder='Enter some text' value={TextAreaVal} placeholder="What's on your mind? Vibe check?">
  </div>
 )
}
