import { useEffect } from 'react';

const usePreventDevTools = () => {
   function handleKeyDown(_event: KeyboardEvent) {
      switch (_event.keyCode) {
         case 123: /*123= F12*/
            break;
         case 73: /*73=I key*/ /*or*/case 74: /*74= J key */
            if (_event.ctrlKey && _event.shiftKey)
               break;
            return true;
         case 85: /* 85=U key*/
            if (_event.ctrlKey)
               break;
            return true;
         default:
            return true;
      }
      _event.preventDefault();
      return false;
   }
   const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
   };
   useEffect(() => {


      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('contextmenu', handleContextMenu);

      return () => {
         document.removeEventListener('keydown', handleKeyDown);
         document.removeEventListener('contextmenu', handleContextMenu);
      }
   }, []);
};

export default usePreventDevTools;


// document.addEventListener('contextmenu', (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
//    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
//    // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
//    if (
//       event.keyCode === 123 ||
//       ctrlShiftKey(e, 'I') ||
//       ctrlShiftKey(e, 'J') ||
//       ctrlShiftKey(e, 'C') ||
//       (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
//    )
//       return false;