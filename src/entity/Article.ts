import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
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
}
