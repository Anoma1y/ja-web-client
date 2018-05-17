import React from 'react';
import './style.scss';

export default () => (
  <div className={'sidebar-notice sidebar-container'}>
    <div className={'sidebar-notice_icon sidebar-container_icon'}>
      <svg height="28px" version="1.1" viewBox="0 0 32 32" width="28px"><g fill="none" fillRule="evenodd" id="Icons new Arranged Names" stroke="none" strokeWidth="1"><g fill="#ffffff" id="101 Warning"><path d="M14.4242327,6.14839275 C15.2942987,4.74072976 16.707028,4.74408442 17.5750205,6.14839275 L28.3601099,23.59738 C29.5216388,25.4765951 28.6755462,27 26.4714068,27 L5.5278464,27 C3.32321557,27 2.47386317,25.4826642 3.63914331,23.59738 Z M16,20 C16.5522847,20 17,19.5469637 17,19.0029699 L17,12.9970301 C17,12.4463856 16.5561352,12 16,12 C15.4477153,12 15,12.4530363 15,12.9970301 L15,19.0029699 C15,19.5536144 15.4438648,20 16,20 Z M16,24 C16.5522848,24 17,23.5522848 17,23 C17,22.4477152 16.5522848,22 16,22 C15.4477152,22 15,22.4477152 15,23 C15,23.5522848 15.4477152,24 16,24 Z M16,24" id="Triangle 29"/></g></g></svg>
    </div>

    <div className={'sidebar-notice_message sidebar-container_content'}>
      Unverified account
    </div>
  </div>
);