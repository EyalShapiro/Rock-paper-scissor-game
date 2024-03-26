import { useEffect } from 'react';

const usePreventDevTools = () => {
   useEffect(() => {

      const handleKeyDown = (e: KeyboardEvent) => {

         switch (e.keyCode) {
            case 123: // F12
               e.preventDefault();
               return false;
            case 73: // I
               if (e.ctrlKey && e.shiftKey) {
                  e.preventDefault();
                  return false;
               }
               break;
            case 74: // J
               if (e.ctrlKey && e.shiftKey) {
                  e.preventDefault();
                  return false;
               }
               break;
            case 85: // U
               if (e.ctrlKey) {
                  e.preventDefault();
                  return false;
               }
               break;
            default:
               break;
         }
      }
      const handleContextMenu = (e: MouseEvent) => {
         e.preventDefault();
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('contextmenu', handleContextMenu);

      return () => {
         document.removeEventListener('keydown', handleKeyDown);
         document.removeEventListener('contextmenu', handleContextMenu);
      };
   }, []);
};

export default usePreventDevTools;