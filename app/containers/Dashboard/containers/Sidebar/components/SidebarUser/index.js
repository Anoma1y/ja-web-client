import React from 'react';
import Icon from 'components/Icon';
import './style.scss';

// TODO обрезать svg иконку снизу
export default () => (
  <div className={'user-info sidebar-container'}>

    <div className={'sidebar-container_icon'}>
      <div className={'user-info_avatar'}>
        <Icon icon={'user'} size={25} />
      </div>
    </div>

    <div className={'user-info_name sidebar-container_content'}>
      <p>Alexander Wasowsky</p>
    </div>

  </div>
);
