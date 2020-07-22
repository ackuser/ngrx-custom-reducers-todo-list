import { createAction, props } from '@ngrx/store';

// export const AddSameAgainAndAgain = createAction('[Todo Component] Add Same again and again');
export const Add = createAction('[Todo Component] Add', props<{ text: string }>());
export const Remove = createAction('[Todo Component] Remove', props<{ id: string }>());
export const Toggle = createAction('[Todo Component] Toggle', props<{ id: string }>());