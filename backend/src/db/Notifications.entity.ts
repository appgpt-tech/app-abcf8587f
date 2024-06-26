//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Notifications')
export class NotificationsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  notificationId: number;

  @Column('integer', { nullable: true })
  customerId: number;

  @Column('text', { nullable: true })
  type: string;

  @Column('text', { nullable: true })
  message: string;

  @Column('date', { nullable: true })
  dateScheduled: Date;

  @Column('text', { nullable: true })
  status: string;
}
