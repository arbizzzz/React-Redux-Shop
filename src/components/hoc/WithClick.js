import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WithHover({ icon, badgeCount, children, ref }) {
  const [show, setShow] = useState(false);
  const item = useRef(null);

  function onClickHandler() {
    setShow(true);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (item.current && !item.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [item]);

  return (
    <div onClick={onClickHandler} ref={item}>
      {badgeCount && badgeCount > 0 ? (
        <span className='nav-cart-badge'>{badgeCount}</span>
      ) : (
        ''
      )}
      <FontAwesomeIcon icon={icon} size='lg' />
      {show && (
        <div className='nav-card'>
          <div className='card'>
            <div className='card-body'>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}
