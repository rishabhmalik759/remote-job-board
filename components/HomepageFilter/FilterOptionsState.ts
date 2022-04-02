import { atom } from 'jotai';
import { splitAtom } from 'jotai/utils'

export interface IFilterOptions {
  id: string;
  inputLabel: string;
  menuItems: string[];
  withOptions: boolean;
  appliedFilters?: string[];
  appliedFiltersCount: number;
}

export interface IAppliedFilters {
  filterId: string;
  appliedFilters: string[];
}

export const filterOptions: IFilterOptions[] = [
  {
    inputLabel: 'Date Started',
    id: 'date-started',
    appliedFiltersCount: 0,
    menuItems: [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'X Something',
      'Y Something',
      'a',
      'b',
      'c',
      'd',
      'f',
    ],
    withOptions: true,
  },
  {
    inputLabel: 'Date Posted',
    id: 'date-posted',
    appliedFiltersCount: 0,
    menuItems: [
      'Tanya Boyd',
      'Huey Raymond',
      'Qasim Hibbert',
      'Ralph Hubbard',
      'Omar Alexander',
      'X Something',
      'Y Something',
      'a',
      'b',
      'c',
      'd',
      'f',
    ],
    withOptions: false,
  },
  {
    inputLabel: 'Date Created',
    id: 'date-created',
    appliedFiltersCount: 0,
    menuItems: [
      'Oliver Hansen',
      'Ralph Hubbard',
      'Omar Alexander',
      'X Something',
      'Y Something',
      'a',
      'b',
      'c',
      'd',
      'f',
    ],
    withOptions: false,
  },
  {
    inputLabel: 'Date Edited',
    id: 'date-edited',
    appliedFiltersCount: 0,
    menuItems: [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Qasim Hibbert',
      'Y Something',
      'a',
      'b',
      'c',
      'd',
      'f',
    ],
    withOptions: true,
  },
];

export const filterOptionsA = atom<IFilterOptions[]>(filterOptions);
export const filterOptionsAtomsA = splitAtom(filterOptionsA)
export const hideOnScrollWindow = atom(false);
