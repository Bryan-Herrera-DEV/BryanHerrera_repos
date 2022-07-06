import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

import { Metrics } from './metrics.entitie';
import { Tribe } from './tribe.entitie';

@Entity()
export class Repository {
  @PrimaryGeneratedColumn()
  id_repository: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'char', length: 1 })
  state: string;

  @Column({ type: 'timestamp' })
  create_time: number;

  @Column({ type: 'char', length: 1 })
  status: string;

  @ManyToOne(() => Tribe, (tribe) => tribe.repositories)
  @JoinColumn({ name: 'id_tribe' })
  tribe: Tribe;

  @OneToOne(() => Metrics, (metrics) => metrics.id_repository, {
    eager: true,
  })
  metrics: Metrics;
}
