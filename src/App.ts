import express from 'express'
import bodyParser from 'body-parser'
import parameters from './app/Parameters'
import Router from './app/Router'
import Container from './repository/Container'

export default class App {
    private router: Router

    constructor (container: Container) {
        this.router = new Router(container)
    }

    public start (): void {
        const app: express.Application = express()
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*')
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
            next()
        })
        app.use('/', (this.router.routes))
        app.listen(parameters.server.port, parameters.server.hostname, () => {
            console.log(`App running on http://${parameters.server.hostname}:${parameters.server.port}!`)
        })
    }
}