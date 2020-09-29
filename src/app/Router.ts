'use strict'

import * as express from 'express';
import * as core from "express-serve-static-core";
import Container from "../repository/Container";
import GetAllProvinceController from "../controller/GetAllProvinceController";

export default class Router {
  private _repositoryContainer: Container;
  private readonly _router: core.Router;

  constructor(repositoryContainer: Container) {
    this._repositoryContainer = repositoryContainer;
    this._router = express.Router();
  }
  get routes() {

    this._router.get('', (req, res) => {
        res.status(200).send('Hello!');
    });

    this._router.get('/provinces', (req, res) => {
      (new GetAllProvinceController(this._repositoryContainer.get('Province'))).index(res)
    });

    return this._router;
  }
}