import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as UUIDV4 } from "uuid";

@Entity("users")
export class User {
    @PrimaryColumn()
    id?: string;
    @Column()
    name: string;

    @Column()
    email: string;
    @Column()
    isAdmin: string;
    @Column()
    password: string;
    @Column()
    drive_license: string;
    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = UUIDV4();
        }
    }
}
