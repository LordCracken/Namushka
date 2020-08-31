import React from 'react';

export const FeaturesList = ({ data }) => (
  <ul className="features card__features">
    {data.count ? <li className="features-item">{data.count}</li> : null}
    {data.bonus ? <li className="features-item">{data.bonus}</li> : null}
    {data.maximum ? <li className="features-item">{data.maximum}</li> : null}
  </ul>
);
