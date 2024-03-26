
export const getOutcome = (userValue: number, bootValue: number): string => {
   const outcomes: { [key: string]: { [key: number]: string } } = {
      0: { 0: 'Draw', 1: 'boot', 2: 'User' },
      1: { 0: 'User', 1: 'Draw', 2: 'boot' },
      2: { 0: 'boot', 1: 'User', 2: 'Draw' },
   };

   const outComeValue = outcomes[userValue][bootValue].trim();
   return outComeValue === 'User' ? 'You Won!!' : outComeValue === 'boot' ? 'boot Won!!' : 'Match Draw';
};
