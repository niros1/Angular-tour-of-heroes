import { environment } from './../../environments/environment';
import { HeroActions } from './../RDX_Actions/hero';

import {Hero} from '../hero';
import {Action} from '@ngrx/store';
//import * as _ from 'lodash';



export type HeroListState = Hero[];

const initialState: HeroListState = [];


export default function (state = initialState, action: Action): HeroListState {
    switch (action.type) {
        case HeroActions.LOAD_HEROES_SUCCESS: {
            if(environment.useFakeHttp)
                return action.payload.data;
                
            else
                return action.payload;
            //return action.payload;
        }
        case HeroActions.ADD_HERO_SUCCESS: {
            return [...state, action.payload];
        }
        // case HeroActions.SAVE_HERO_SUCCESS: {
        //     let index = _.findIndex(state, {id: action.payload.id});
        //     if (index >= 0) {
        //         return [
        //             ...state.slice(0, index),
        //             action.payload,
        //             ...state.slice(index + 1)
        //         ];
        //     }
        //     return state;
        // }
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