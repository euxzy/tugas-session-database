import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Pet {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number

  @Column({
    nullable: false,
    default: '',
  })
  name: string

  @Column({
    nullable: false,
    name: 'img_path',
    default: '',
  })
  imgPath: string
}
