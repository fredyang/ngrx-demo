import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ApiEffects } from './effect.handlers/api.effect.handler';
import { salesSlot } from './state.handlers/state.handler';
import { SessionEffects } from './effect.handlers/session.effect.handler';

export const salesStoreModules = [
  StoreModule.forFeature(salesSlot),
  EffectsModule.forFeature(ApiEffects, SessionEffects),
];
