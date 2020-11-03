import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOngs1604436196404 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //Realizar Alterações
        await queryRunner.createTable(new Table({
            name: 'ongs',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isUnique: true,
                    isPrimary: true,      
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'whatsapp',
                    type: 'varchar',
                },
                {
                    name: 'city',
                    type: 'varchar',
                },
                {
                    name: 'uf',
                    type: 'varchar',
                    length: '2',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //Desfaz alterações
        await queryRunner.dropTable('ongs');
    }

}
