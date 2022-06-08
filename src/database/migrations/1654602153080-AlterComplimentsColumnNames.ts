import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterComplimentsColumnNames1654602153080 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.renameColumn("compliments", "user_send", "user_sender");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        //this looks wrong
        await queryRunner.renameColumn("compliments", "user_sender", "user_send");
    }

}
