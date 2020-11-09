import { ESuits, EValues } from "@entities";

export type Card = {
  suit: ESuits;
  value: EValues;
};

export const aceOfClubs: Card = {
  suit: ESuits.Clubs,
  value: 11331,
};

export type Test = {
  s: string
}