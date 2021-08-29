import { getRepository, getConnection } from "typeorm";
import { Shop } from "../src/entity/Shop";


export const services = {

    index (){
        return new Promise((resolve, reject) => {
            const getShop = getRepository(Shop);
            const shop = getShop.find({select: ["product", "product_count", "product_price"]});
            resolve(shop)
        })
    },

    geById(param) {
        return new Promise(async (resolve, reject) => {
            resolve(
                await getRepository(Shop)
                    .createQueryBuilder()
                    .where("id = :id", { id: param })
                    .getOne()
            )
        })
    },

    create(data) {
        const getShop = getRepository(Shop);
            getShop.insert({
                product: data.product,
                product_price: data.product_price,
                product_count: data.product_count
            })
        return 'done'
    },

    update(data, param) {

        return new Promise(async (resolve, reject) => {
            resolve(
                getConnection()
                    .createQueryBuilder()
                    .update(Shop)
                    .set({
                        product: data.product,
                        product_price: data.product_price,
                        product_count: data.product_count
                    })
                    .where("id = :id", {id: param})
                    .execute()
            )
        })
    },

    remove(param) {
        return new Promise(async (resolve, reject) => {
            resolve(
                await getConnection()
                    .createQueryBuilder()
                    .delete()
                    .from(Shop)
                    .where("id = :id", {id: param})
                    .execute()
            )
        })
    }
}