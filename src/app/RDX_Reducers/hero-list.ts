//app/reducers/hero-list.ts
//imports snipped for brevity
import {Hero} from '../hero';
import {HeroActions} from '../RDX-Actions/hero'
import {Action} from '@ngrx/store';

export type HeroListState = Hero[];

const initialState: HeroListState = [];


export default function (state = initialState, action: Action): HeroListState {
    switch (action.type) {
        case HeroActions.LOAD_HEROES_SUCCESS: {
            return action.payload;
        }
        case HeroActions.ADD_HERO_SUCCESS: {
            return [...state, action.payload];
        }
        case HeroActions.SAVE_HERO_SUCCESS: {
            let index = _.findIndex(state, {id: action.payload.id});
            if (index >= 0) {
                return [
                    ...state.slice(0, index),
                    action.payload,
                    ...state.slice(index + 1)
                ];
            }
            return state;
        }
        case HeroActions.DELETE_HERO_SUCCESS: {
            return state.filter(hero => {
                return hero.id !== action.payload.id;
            });
        }
        default: {
            return state;
        }
    }
}