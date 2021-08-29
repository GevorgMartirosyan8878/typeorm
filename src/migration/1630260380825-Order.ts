import {MigrationInterface, QueryRunner} from "typeorm";

export class Order1630260380825 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order" (
            "id" integer PRIMARY KEY NOT NULL;
            "product_id" integer NOT NULL;
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
