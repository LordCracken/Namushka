import React, { useState } from 'react';
import { Status } from './Status';
import { FeaturesList } from './FeaturesList';

export const FeedCard = ({ data }) => {

  const [selected, setSelected] = useState(false);
  const [classList, setClassList] = useState('package package--hover card__package');

  return (
    <div className="card feed-block__card" 
      selected={selected}>
      <div 
        className={data.disabled ? `${classList} package--disabled` : classList} 
        onClick={() => {
          setSelected(!selected);
          selected ? setClassList('package package--hover card__package') : setClassList(`package card__package package--selected`);
          }}
        onMouseLeave={selected ? () => setClassList(`${classList} package--hover`) : null}>
        <span className="intro card__intro">Сказачное заморское яство</span>
        <h2 className="heading card__heading">
          Нямушка 
          <span className="taste">{data.taste}</span>
        </h2>
        <FeaturesList data={data} />
        <span className="weight">
          <span className="weight__number">{data.weight}</span>
          кг
        </span>
      </div>
      <Status data={data} classList={classList} setClassList={setClassList} selected={selected} setSelected={setSelected} />
    </div>
)};
