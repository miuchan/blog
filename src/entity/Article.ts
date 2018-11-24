import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Comment } from './Comment'

@Entity()
export default class Article {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column('text')
    content: string

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[]

    @CreateDateColumn()
    createAt: string

    @UpdateDateColumn()
    updateAt: string
}
