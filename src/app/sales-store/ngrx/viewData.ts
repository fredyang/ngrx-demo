import { salesSlice } from './state.handlers/state.handler';

export const salesViewData = salesSlice as Omit<
  typeof salesSlice,
  'name' | 'reducer'
>;
