import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './address';
import { Geo } from './geo';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column()
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  middle_name: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ unique: true })
  email_address: string;

  @Column()
  password: string;

  @Column({ default: false })
  is_email_verified: boolean;

  @Column({ nullable: true })
  international_phone_format: string;

  @Column({ default: false })
  is_whatsapp_no_verified: boolean;

  @Column({ nullable: true })
  ip_address: string;

  @Column({ nullable: true })
  gender: string;

  @Column()
  last_login: Date;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToOne(() => Geo)
  @JoinColumn()
  geo: Geo;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column()
  updated_at: Date;

  @BeforeInsert()
  updateDates() {
    this.updated_at = new Date();
  }

  @BeforeUpdate()
  updateAgain() {
    this.updated_at = new Date();
  }
}
