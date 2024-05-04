import { useEffect } from "react";

function isProductionEnvironment() {
  const portListDev: Array<number | string> = [
    3000, 3001, 3002, 5173, 5174, 8080,
  ] as const;
  return !portListDev.some((port) => window.location.href.includes(`http://localhost:${port}`)
  );
}

const usePreventDevTools = async () => {
  useEffect(() => {

    const handleKeyDown = (_event: KeyboardEvent) => {
      if (!isProductionEnvironment) return; // Exit if not in production environment
      switch (_event.keyCode) {
        case 123 /*123= F12*/:
          break;
        case 73:
        /*73=I key*/ /*or*/ case 74 /*74= J key */:
          if (_event.ctrlKey && _event.shiftKey) break;
          return true;
        case 85 /* 85=U key*/:
          if (_event.ctrlKey) break;
          return true;
        default:
          return true;
      }

      _event.preventDefault();
      return false;
    };

    const handleContextMenu = (event: MouseEvent) => {
      if (!isProductionEnvironment) return; // Exit if not in production environment
      event.preventDefault();
    };

    if (isProductionEnvironment()) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("contextmenu", handleContextMenu);
    }

    return () => {
      if (isProductionEnvironment()) {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("contextmenu", handleContextMenu);
      }
    };
  }, []);
};

export default usePreventDevTools;
