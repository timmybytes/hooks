import React from 'react';

export default function HookInfo({ name, description, children }) {
  return (
    <div>
      <h2>{name}</h2>
      <div
        style={{
          gap: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          margin: '0 auto',
          minHeight: '100px',
        }}>
        <div style={{ flexBasis: '40%' }}>
          <p
            style={{
              fontSize: '.65em',
              fontStyle: 'italic',
              fontWeight: '700',
              textTransform: 'uppercase',
              padding: '.25rem',
              margin: 0,
              background: '#000',
              color: '#fff',
            }}>
            Description
          </p>
          <p
            style={{
              textAlign: 'left',
            }}>
            {description}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: '40%',
          }}>
          <p
            style={{
              fontSize: '.65em',
              fontStyle: 'italic',
              fontWeight: '700',
              textTransform: 'uppercase',
              padding: '.25rem',
              margin: 0,
              background: '#000',
              color: '#fff',
            }}>
            Example
          </p>
          <div
            style={{
              padding: '.5rem',
              borderRadius: '6px',
              gridColumn: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              textAlign: 'left',
            }}>
            {children}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
