import React, { useState, useEffect } from 'react';

const StatusWhithHook = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const onActiveStatus = () => {
    setEditMode(true);
  };

  const onDeactiveStatus = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={onActiveStatus}>{props.status || '------'}</span>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={status}
            autoFocus={true}
            onBlur={onDeactiveStatus}
            onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
};
export default StatusWhithHook;
