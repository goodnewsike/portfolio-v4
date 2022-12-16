import { useRouter } from 'next/router'

export const useRoutesCode = () => {
   const { asPath, pathname, query } = useRouter();

   const home = asPath === '/';
   const about = asPath === '/about';
   const projects = asPath === '/projects';
   const resume = asPath === '/resume';
   const contact = asPath === '/contact';

   if (home) {
      return 1;
   } else if (about) {
      return 2;
   } else if (projects) {
      return 3;
   } else if (resume) {
      return 4;
   } else if (contact) {
      return 5;
   } else {
      return 6;
   }
};
