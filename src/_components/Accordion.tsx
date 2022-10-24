import React, { memo } from 'react';
import classNames from 'classnames';
import { FiExternalLink } from 'react-icons/fi';
import { forAccordion } from '../../model';

// eslint-disable-next-line react/display-name
const Accordion = memo(({ key, data, activeState, setActiveState }: forAccordion) => {
   return (
      <div key={key} className={classNames("__accordion mb-4", { show: data.role === activeState })}>
         <div onClick={() => setActiveState(data.role)} className={classNames("accordion__header px-4", { active: data.role === activeState })}>
            <h5 className="title">{data.title}</h5>
            <div className="toggleBtn"></div>
         </div>
         <div className={classNames("accordion__body", {})}>
            <div className="row m-0 px-4 py-2">
               <div className="col-md-4 p-3 pe-0">
                  <h6 className="">{data.organization}</h6>
                  <p className="compLink pt-1">
                     Visit
                     <a href={`${data.link}`} target="_blank" rel="noreferrer" className="ms-2">
                        {data.link} <FiExternalLink className="mb-1" />
                     </a>
                  </p>
                  <p className="duration py-2">{data.startDate} - {data.endDate}</p>
                  <p className="compDesc">{data.organizationDescription}</p>
               </div>
               <div className="col-md-8 p-3 desc">
                  <p className="responsibility"><i>{data.responsibility}</i></p>
                  <ul className="mb-4 mt-3">
                     {data.responsibilities.map((item) => (
                        <li key={item.id} className="">* {item.label}</li>
                     ))}
                  </ul>
                  <ul className="techUsed d-flex flex-wrap">
                     {data.techUsed.map((item) => (
                        <li key={item.id} className="me-3 text-uppercase">{item.label}</li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
});

export default Accordion;
