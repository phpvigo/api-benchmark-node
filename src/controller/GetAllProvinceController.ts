import {ProvinceRepository} from "../repository/ProvinceRepository";
import { Response } from 'express'

export default class GetAllProvinceController {

    private _repository: ProvinceRepository;

    constructor(repository: ProvinceRepository) {
        this._repository = repository;
    }

    index(res: Response) {
        this._repository.findAll()
            .then(data => {
                res.status(200).send({data});
            })
            .catch(reason => res.status(400).send(reason));
    }
}