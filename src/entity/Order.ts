import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { Shop } from "./Shop";

@Entity()
export class Order {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @ManyToOne(() => Shop, shop => shop.product)
    products_id: number;
}
