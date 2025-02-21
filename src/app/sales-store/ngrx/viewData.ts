import { salesSlot } from './handlers/data.handler';

export const salesSelectors = salesSlot as Omit<
  typeof salesSlot,
  'name' | 'reducer'
>;
