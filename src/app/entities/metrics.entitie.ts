import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Repository } from './repository.entitie';

@Entity()
export class Metrics {
  @PrimaryGeneratedColumn()
  @OneToOne(() => Repository)
  @JoinColumn({ name: 'id_repository' })
  id_repository: number;

  @Column({ type: 'double precision' })
  coverage: number;

  @Column({ type: 'int' })
  bugs: number;

  @Column({ type: 'int' })
  vulnerabilities: number;

  @Column({ type: 'int' })
  hotspot: number;

  @Column({ type: 'int' })
  code_smells: number;
}
