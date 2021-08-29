import "reflect-metadata";
import { createConnection } from "typeorm";
import { Shop } from "./entity/Shop";
import { Order } from "./entity/Order";
import * as express from "express";
import * as dotenv from "dotenv";
import { shopRouter } from "../controllers/controllers";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

createConnection().then(async connection => {

    const shop = new Shop();
    const order = new Order();

    // const shops = await connection.manager.find(Shop);
    // shop.product = 'watermelon';
    // shop.product_count = '5psc';
    // shop.product_price = 30;
    // await connection.manager.save(shop);


    // here you can setup and run some framework
    app.use(express.json())
    app.use('/shop', shopRouter)
    app.get('/', (req, res) => {
        res.send('hello world!')
    })

    app.listen(port, () => console.log(`http://localhost:${port}`))

}).catch(error => console.log(error));
