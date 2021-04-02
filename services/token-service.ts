import jwt from 'jsonwebtoken';

const secret:string = process.env.SECRET;

export function generate(payload: string | object | Buffer) {
    return jwt.sign(payload, secret, { algorithm: 'HS256',  expiresIn: '999d'});
}

export function verify(token: string) {
    try {
        jwt.verify(token, secret);
        return true;
    } catch(e) {
        return false;
    }
}

export function decode(token: string) {
    return jwt.verify(token, secret);
}