import * as Express from 'express';
import SecurityRouter from './security';

module.exports = [{
    handler: SecurityRouter
}] as Array<{
    match?:string,
    handler: Express.RequestHandler
}>;