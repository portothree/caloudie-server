import {Entity, model, property} from '@loopback/repository';

@model()
export class Food extends Entity {
  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'number',
  })
  carbs?: number;

  @property({
    type: 'number',
  })
  fat?: number;

  @property({
    type: 'number',
  })
  protein?: number;

  constructor(data?: Partial<Food>) {
    super(data);
  }
}

export interface FoodRelations {
  // describe navigational properties here
}

export type FoodWithRelations = Food & FoodRelations;
