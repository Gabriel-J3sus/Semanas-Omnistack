import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createEvents1604336244904 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //Realizar Alterações
        await queryRunner.createTable(new Table({
            name: 'events',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'description',
                    type: 'text',
                },
                {
                    name: 'price',
                    type: 'decimal',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //Desfaz alterações
        await queryRunner.dropTable('events');
    }

}
