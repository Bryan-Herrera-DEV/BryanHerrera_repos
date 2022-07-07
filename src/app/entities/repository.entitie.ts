import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToOne,
  BaseEntity,
} from 'typeorm';

import { Metrics } from './metrics.entitie';
import { Tribe } from './tribe.entitie';

@Entity()
export class Repository extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_repository: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'char', length: 1 })
  state: string;

  @Column({ type: 'timestamp' })
  create_time: Date;

  @Column({ type: 'char', length: 1 })
  status: string;

  @ManyToOne(() => Tribe, (tribe) => tribe.repositories)
  @JoinColumn({ name: 'id_tribe' })
  id_tribe: Tribe;

  @OneToOne(() => Metrics, (metrics) => metrics.id_repository, {
    eager: true,
  })
  metrics: Metrics;
}
