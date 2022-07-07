import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
  ManyToOne,
  BaseEntity,
} from 'typeorm';

import { Organization } from './organization.entitie';
import { Repository } from './repository.entitie';

@Entity()
export class Tribe extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_tribe: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'int' })
  status: number;

  @ManyToOne(() => Organization, (organization) => organization.tribes, {
    eager: true,
  })
  @JoinColumn({ name: 'id_organization' })
  id_organization: Organization;

  @OneToMany(() => Repository, (repository) => repository.id_tribe)
  repositories: Repository[];
}
