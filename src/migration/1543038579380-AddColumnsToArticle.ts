import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnsToArticle1543038579380 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumns('article', [new TableColumn({
            name: 'createAt',
            type: 'timestamp',
        }), new TableColumn({
            name: 'updateAt',
            type: 'timestamp',
        })])
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumns('article', [new TableColumn({
            name: 'createAt',
            type: 'timestamp',
        }), new TableColumn({
            name: 'updateAt',
            type: 'timestamp',
        })])
    }

}
