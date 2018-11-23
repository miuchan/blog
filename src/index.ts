import 'reflect-metadata';
import { createKoaServer } from "routing-controllers";
import { createConnection } from 'typeorm';
import { User } from './entity/User';

createConnection().then(async connection => {

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

    createKoaServer({
        controllers: [`${__dirname}/controllers/*.ts`]
    }).listen(3000);

    console.log('Server running on port 3000');
}).catch(error => console.log(error));
