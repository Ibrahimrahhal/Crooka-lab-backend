import * as Express from 'express';
module.exports = [] as Array<{
    match?:string,
    method?:string,
    router: Express.Router
}>;