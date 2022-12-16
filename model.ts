import { WithRouterProps } from 'next/dist/client/with-router';
import {
   default as React,
   Dispatch,
   ReactElement,
   SetStateAction,
   useState,
} from 'react';

export interface PageLayoutProps {
   open?: boolean;
   className?: string;
   children?: any;
   onClickAway?: any;
   WithRouterProps?: WithRouterProps;
}

export interface NavMap {
   id: number;
   ariaLabel: string;
   link: string;
   icon: JSX.Element;
}

export interface MenuMap {
   id: number;
   label: string;
   link: string;
   active: number;
   icon?: JSX.Element | string;
}

export interface ActiveSection {
   activeSection: number | null;
}

export interface Title {
   title: string;
}

interface Sub {
   id: number;
   label: string;
}

export interface Accordions {
   id: number;
   role: string;
   title: string;
   organization: string;
   link: string;
   startDate: string;
   endDate: string;
   organizationDescription: string;
   responsibility: string;
   techUsed: Sub[];
   responsibilities: Sub[];
}

export interface state {
   activeState: string | number;
   setActiveState: Dispatch<SetStateAction<string | number>>;
}

export interface forAccordion {
   key: number;
   data: Accordions;
   activeState: string | number;
   setActiveState: Dispatch<SetStateAction<string | number>>;
}

export interface FooterProps {
   label: string;
   link: string;
}
