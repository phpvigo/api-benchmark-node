import {EntityRepository, Repository} from "typeorm";
import {Province} from "../entity/Province";

@EntityRepository(Province)
export class ProvinceRepository extends Repository<Province>{
    findAll() {
        return super.find({order: { id: "ASC" }}).then(function (data) {
            return data
        });
    }
}