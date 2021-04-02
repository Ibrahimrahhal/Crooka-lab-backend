import * as Express from 'express';
import SecurityRouter from './security';

module.exports = [{
    router: SecurityRouter
}] as Array<{
    match?:string,
    method?:string,
    router: Express.Router
}>;