import React from 'react';

export const Status = ({ data, selected, setSelected, classList, setClassList }) => (
  data.disabled ? <span className="status card__status status--disabled">Печалька, {data.taste} закончился.</span> :
    selected ? 
      <span 
        className="status card__status" 
        onMouseEnter={selected ? () => setClassList('package package--hover card__package package--selected') : null}>{data.selected}</span> : 
      <span className="status card__status">
          Чего сидишь? Порадуй котэ, <button className="buy-button" 
          onClick={() => {
            setSelected(!selected);
            selected ? setClassList('package package--hover card__package') : setClassList(`${classList} package--selected`);
            }}>
            купи.
          </button>
      </span>
);