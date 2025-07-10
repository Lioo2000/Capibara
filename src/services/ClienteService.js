import config from '../config/config.js'
import knex from 'knex'
export default class ClienteService{
    constructor(){
        this.knex = knex(config)
    }
    async obtenerClientes(){
        const clientes = await this.knex().select('*').from('clientes')
        return Object.values(JSON.parse(JSON.stringify(clientes)))
    }
}