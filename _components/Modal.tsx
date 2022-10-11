import React, {memo} from 'react';
import classNames from 'classnames';
import {createPortal} from 'react-dom';
// import './index.scss';

interface Props {
   open: boolean;
   onClickAway: any;
   className: string;
   children: any;
}

// eslint-disable-next-line react/display-name
const FullscreenModal = memo((props: Props) => {
   return props.open
   ? createPortal(
         <div className="fullScreenModal d-flex align-items-center justify-content-center">
            <div onClick={props.onClickAway} className="fullScreenModal__BackDrop" />
            <div className={classNames('fullScreenModal__Contents p-4 position-relative', props.className)}>{props.children}</div>
         </div>,
         document.body,
      )
      : null;
});

export default FullscreenModal;
