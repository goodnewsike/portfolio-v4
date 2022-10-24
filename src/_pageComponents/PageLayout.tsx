import React, { memo } from 'react';
import classNames from 'classnames';
import { PageLayoutProps } from '../../model';
import Navbar from './Navbar';

// eslint-disable-next-line react/display-name
const PageLayout = memo((props: PageLayoutProps) => {
   return (
      <section className="PageLayout container-fluid">
         <div className="PageLayout__Backdrop" />
         <Navbar />
         <div className={classNames('PageLayout__Contents container p-0', props.className)}>
            {props.children}
         </div>
      </section>
   );
});

export default PageLayout;
