import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ApiEffects } from './effect.handlers/api.effect.handler';
import { salesSlice } from './state.handlers/state.handler';
import { SessionEffects } from './effect.handlers/session.effect.handler';

export const salesStoreModules = [
  StoreModule.forFeature(salesSlice),
  EffectsModule.forFeature(ApiEffects),
  EffectsModule.forFeature(SessionEffects),
];
