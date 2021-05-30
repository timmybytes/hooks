import React from 'react';

export default function HookInfo({ name, description, children }) {
  return (
    <div>
      <h2 className='hook-name'>{name}</h2>
      <div className='hook-container'>
        <div className='left-column'>
          <p className='column-label'>Description</p>
          <p>{description}</p>
        </div>
        <div className='right-column'>
          <p className='column-label'>Example</p>
          <div className='right-column__content'>{children}</div>
        </div>
      </div>
      <hr />
    </div>
  );
}
