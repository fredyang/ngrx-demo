import { salesSlot } from './sales.handlers';

export const salesSelectors = salesSlot as Omit<
  typeof salesSlot,
  'name' | 'reducer'
>;
