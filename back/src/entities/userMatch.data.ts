import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'TFT_Backend', name: 'userMatchData' })
export class userMatchData {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'userName', unique: true, length: 30 })
  username: string;

  @Column('int', { name: 'summonerLevel' })
  summonerlevel: string;

  @Column('int', { name: 'profileIconId' })
  gamecount: number;

  @Column('varchar', { name: 'matchId', unique: true, length: 40 })
  matchid: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
