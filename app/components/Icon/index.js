import * as React from 'react';
import classnames from 'classnames';
import ReactSVG from 'react-svg';
import './style.scss';

type Props = {
  color?: | 'blue' | 'darkGray' | 'eggplant' | 'gray' | 'green' | 'lightGray' | 'maroon' | 'midnight' | 'navy' | 'olive' | 'orange' | 'orchid' | 'pine' | 'purple' | 'red' | 'watermelon' | 'white',
  icon: string,
  inline?: boolean,
  size?: number | string,
};

const Icon = (props: Props) => {

  const {
    color = 'gray',
    icon,
    inline,
    size = 16
  } = props;

  const classBlockName = 'icon';

  const classes = classnames(
    classBlockName,
    {
      [`${classBlockName}__inline`]: !inline,
    }
  );

  return (
    <ReactSVG
      path={`/static/images/icons/${icon}.svg`}
      className={`${classBlockName}_svg ${classBlockName}_svg__color_${color}`}
      wrapperClassName={classes}
      style={{
        width: size,
        height: size
      }}
    />
  );
};

export default Icon;
