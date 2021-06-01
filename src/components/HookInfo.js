import React from 'react';

export default function HookInfo({ name, description, children }) {
  return (
    <section>
      <h2 className='hook-header'>{name}</h2>
      <div className='hook-container'>
        <div className='column'>
          <p className='column-label'>Description</p>
          <p>{description || `The ${name} hook`}</p>
          <p className='column-label'>Example</p>
          <div className='column__content'>{children}</div>
          {!children && <p>Coming soon...</p>}
        </div>
      </div>
      <hr />
    </section>
  );
}
