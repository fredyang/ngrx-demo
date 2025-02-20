import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { salesSlot } from './handlers/data/reducer';
import { SessionEffects } from './handlers/effects/session.effects';
import { ApiEffects } from './handlers/effects/api.effects';

export const salesStoreModules = [
  StoreModule.forFeature(salesSlot),
  EffectsModule.forFeature(ApiEffects, SessionEffects),
];
