import { Hero } from './../hero';



export abstract class IHeroService{
    abstract update(hero:Hero):Promise<Hero[]>;
    abstract getHeroes(): Promise<Hero[]>;
    abstract getHero(id:number) : Promise<Hero>;
    abstract create(name: string): Promise<Hero>;
    abstract delete(id: number): Promise<void>;
}