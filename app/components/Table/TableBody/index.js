import React from 'react';
import classnames from 'classnames';

type Props = {
  children?: any,
  className?: string
};

export default function TableBody(props: Props) {

  const {
    children,
    className,
  } = props;

  const classes = classnames(className);

  return <tbody className={classes}>{children}</tbody>;
}
