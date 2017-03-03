//app/reducers/index.ts
//imports snipped for brevity

import heroListReducer, * as fromHeroList from './hero-list';
import heroReducer, * as fromHero from './hero';

export interface AppState {
    heroes: fromHeroList.HeroListState;
    hero: fromHero.HeroState;
};

export default compose(combineReducers)({
    heroes: heroListReducer,
    hero: heroReducer
});