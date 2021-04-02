import Express from 'express';
import { verify } from '../services/token-service';

export default (req: Express.Request, res: Express.Response, next: any) => {
    const token = req.header('Authorization');
    if(token && verify(token)) {
        next();
        return;
    }
    res.sendStatus(400);
    return;
}