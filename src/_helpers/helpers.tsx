export const getLocationName = (num: number) => {
   switch (num) {
      case 1:
         return 'Hello, There';
      case 2:
         return 'About Me';
      case 3:
         return 'Projects';
      case 4:
         return 'Resume';
      case 5:
         return 'Contact';
      default:
         return '';
   }
};

export const footerLabel = (num: number) => {
   switch (num) {
      case 1:
         return '';
      case 2:
         return 'Continue To Projects';
      case 3:
         return 'Continue to Resume';
      case 4:
         return 'Are you convinced to contact me now ?';
      case 5:
         return 'Go back home.';
      default:
         return '';
   }
};

export const footerLink = (num: number) => {
   switch (num) {
      case 1:
         return '/about';
      case 2:
         return '/projects';
      case 3:
         return '/resume';
      case 4:
         return '/contact';
      case 5:
         return '/';
      default:
         return '';
   }
};
