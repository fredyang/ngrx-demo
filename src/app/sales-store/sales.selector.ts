import { salesSlot } from './sales.reducers';

export const salesSelectors = salesSlot as Omit<
  typeof salesSlot,
  'name' | 'reducer'
>;
