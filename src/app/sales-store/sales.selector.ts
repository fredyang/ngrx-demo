import { salesSlot } from './sales.store';

export const salesSelectors = salesSlot as Omit<
  typeof salesSlot,
  'name' | 'reducer'
>;
