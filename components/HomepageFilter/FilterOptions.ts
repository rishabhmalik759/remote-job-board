
export interface IFilterOptions {
  inputLabel: string;
  id: string;
  menuItems: string[];
  withOptions: boolean;
}

export const filterOptions: IFilterOptions[] = [
  {
    inputLabel: 'Date Started',
    id: 'date-posted',
    menuItems: ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander', 'X Something', 'Y Something', 'a', 'b', 'c','d','f'],
    withOptions: true
  },
  {
    inputLabel: 'Date Posted',
    id: 'date-posted',
    menuItems: ['Tanya Boyd', 'Huey Raymond', 'Qasim Hibbert', 'Ralph Hubbard', 'Omar Alexander', 'X Something', 'Y Something', 'a', 'b', 'c','d','f'],
    withOptions: false
  },
  {
    inputLabel: 'Date Posted',
    id: 'date-posted',
    menuItems: ['Oliver Hansen', 'Qasim Hibbert', 'Qasim Hibbert', 'Ralph Hubbard', 'Omar Alexander', 'X Something', 'Y Something', 'a', 'b', 'c','d','f'],
    withOptions: false
  },
  {
    inputLabel: 'Date Posted',
    id: 'date-posted',
    menuItems: ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Qasim Hibbert', 'Qasim Hibbert', 'Qasim Hibbert', 'Y Something', 'a', 'b', 'c','d','f'],
    withOptions: true
  },
];