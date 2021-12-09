import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'TFT_Backend', name: 'Rank' })
export class Rank {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'userName', unique: true, length: 30 })
  username: string;

  @Column('int', { name: 'leaguePoint' })
  leaguepoint: number;

  @Column('int', { name: 'gameCount' })
  gamecount: number;

  @Column('double', { name: 'winRate' })
  winrate: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
