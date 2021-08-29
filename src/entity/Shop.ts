import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Order} from "./Order";

@Entity()
export class Shop {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    @OneToMany(() => Order, order => order.products_id)
    product: string;

    @Column()
    product_price: number;

    @Column()
    product_count: string;
}
