import * as Express from 'express';
namespace CrookaServer {
    class Server {
        private app:Express.Application
        init(port) {
            this.app = Express();
            const routes = this.routes;
            const middlewares = this.middlewares;
            this.registerRoutes(routes, this.app);
            this.registerMiddlewares(middlewares, this.app)
            this.app.listen(port, () => {
                console.info(`Server is Listenting on port ${port}`);
            });
        }

        registerRoutes(routes:Array<{
            match: string,
            router: Express.Router,
            method: string
        }>, app: Express.Application) {
            routes.forEach(({match, router, method}) => app[method](match, router));
        }

        registerMiddlewares(middlewares: Array<{
            match?:string,
            handler: Express.RequestHandler
        }>, app: Express.Application) {
            middlewares.forEach(({match, handler}) => {
                const params = [];
                if(match) params.push(match);
                params.push(handler);
                app.use(...params);
            });
        }

        get routes() {
            return require('./routes/index');
        }

        get middlewares() {
            return require('./middlewares/index');
        }
    }
    export const init = (port) => {
        const server = new Server(); 
        server.init(port);
        return server
    }
}

CrookaServer.init(3000);