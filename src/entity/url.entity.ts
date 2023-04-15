import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('urls')
export class UrlEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public url_path: string;

  @Column({
    type: 'tinyint',
    width: 4,
    comment: '0:Failure, 1:Success',
  })
  status: number;
}
