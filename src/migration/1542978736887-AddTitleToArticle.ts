import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddTitleToArticle1542978736887 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn('article', new TableColumn({
            name: 'title',
            type: 'varchar',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn('article', 'title')
    }

}
