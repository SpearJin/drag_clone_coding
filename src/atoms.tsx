import { atom, selector } from 'recoil';

export const toDoState = atom({
  key: 'ttoDo',
  default: ['a', 'b', 'c', 'd', 'e', 'f'],
});
