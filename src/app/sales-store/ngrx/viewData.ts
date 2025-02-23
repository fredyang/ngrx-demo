import { salesSlot } from './state.handlers/state.handler';

export const salesViewData = salesSlot as Omit<
  typeof salesSlot,
  'name' | 'reducer'
>;
