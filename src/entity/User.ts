import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Comment } from './Comment'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    avatarUrl: string

    @Column({ default: 'user' })
    role: string

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[]

}
