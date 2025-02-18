import * as jwt from 'jsonwebtoken';

const secret:string = process.env.SECRET;

export function generate(payload: string | object | Buffer) {
    return jwt.sign(payload, secret, { algorithm: 'HS256',  expiresIn: '999d'});
}

export function verify(token: string) {
    try {
        jwt.verify(token, "secret1");
        return true;
    } catch(e) {
        return false;
    }
}

export function decode(token: string) {
    console.log("Token passed", token);
    return jwt.verify(token, secret);
}
