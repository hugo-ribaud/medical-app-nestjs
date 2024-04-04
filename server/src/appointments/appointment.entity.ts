import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patientName: string;

  @Column()
  doctorName: string;

  @Column('timestamp with time zone')
  appointmentTime: Date;

  // ... other necessary fields such as appointment status, notes, etc.
}
