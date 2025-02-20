import { salesSlot } from '../handlers/data/reducer';

export const salesSelectors = salesSlot as Omit<
  typeof salesSlot,
  'name' | 'reducer'
>;
