import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Pet } from './pet.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number

  @Column({
    nullable: false,
    default: '',
  })
  username: string

  @Column({
    nullable: false,
    default: '',
  })
  password: string

  @OneToOne(() => Pet, (pet) => pet.id)
  @JoinColumn({
    name: 'pet_id',
  })
  petId: Pet
}
