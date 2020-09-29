import {Connection} from "typeorm";
import {ProvinceRepository} from "./ProvinceRepository";

export default class Container {
  private readonly _db: Connection;

  constructor(db:Connection) {
    this._db = db;
  }

  get(entityName: string) {
    if (entityName === 'Province') {
      return this._db.getCustomRepository(ProvinceRepository);
    }
    throw new Error('Not repository for entity ' + entityName);
  }
}