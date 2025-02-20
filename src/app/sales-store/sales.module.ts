import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ApiEffects } from './sales.api.effects';
import { salesSlot } from './sales.store';
import { SessionEffects } from './sales.session.effects';

export const salesStoreModules = [
  StoreModule.forFeature(salesSlot),
  EffectsModule.forFeature(ApiEffects, SessionEffects),
];
