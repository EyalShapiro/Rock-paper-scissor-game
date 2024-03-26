import { IconType } from 'react-icons';
interface ico extends IconType { }
export interface OptionType {
   id: number;
   name: string;
   image: string;
   Jsx_Ico?: ico;
}

export type GetOptionsType = Array<OptionType>
export type choiceType = OptionType | null;