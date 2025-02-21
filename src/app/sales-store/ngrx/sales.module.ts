import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ApiEffects } from './handlers/api.effect.handler';
import { salesSlot } from './handlers/data.handler';
import { SessionEffects } from './handlers/session.effect.handler';

export const salesStoreModules = [
  StoreModule.forFeature(salesSlot),
  EffectsModule.forFeature(ApiEffects, SessionEffects),
];
