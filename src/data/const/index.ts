import { GetOptionsType } from '../../../Types';
import { paperImage, rockImage, scissorsImage, FaRegHandPaper, FaRegHandScissors, FaRegHandRock }
   from '../../Icon';

export const GET_Options: GetOptionsType = [
   { id: 0, name: 'Rock', image: rockImage, Jsx_Ico: FaRegHandRock },
   { id: 1, name: 'Paper', image: paperImage, Jsx_Ico: FaRegHandPaper },
   { id: 2, name: 'Scissors', image: scissorsImage, Jsx_Ico: FaRegHandScissors },
] as const;