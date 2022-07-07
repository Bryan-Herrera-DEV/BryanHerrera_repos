import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Tribe } from './tribe.entitie';

@Entity()
export class Organization extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_organization: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'int' })
  status: number;

  @OneToMany(() => Tribe, (tribe) => tribe.id_organization)
  tribes: Tribe[];
}
