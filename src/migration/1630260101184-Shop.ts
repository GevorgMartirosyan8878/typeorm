import {MigrationInterface, QueryRunner} from "typeorm";

export class Shop1630260101184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "shop" (
                "id" integer PRIMARY KEY NOT NULL
                "product" integer NOT NULL
                "product_count" varchar NOT NULL
                "product_price" varchar NOT NULL           
            )`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "shop"`)
    }

}
