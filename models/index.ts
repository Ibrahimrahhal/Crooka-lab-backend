import { Sequelize } from 'sequelize';

namespace Database {
    class databaseController {
        init() {
            const sequelize = new Sequelize('database', 'username', 'password', {
                host: 'localhost',
                dialect: 'mysql'
            });
        }
    }
}