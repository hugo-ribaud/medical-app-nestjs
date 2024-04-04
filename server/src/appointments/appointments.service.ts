import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
  ) {}

  findAll(): Promise<Appointment[]> {
    return this.appointmentRepository.find();
  }

  findOne(id: number): Promise<Appointment> {
    // Corrected the method call to match TypeORM's expected parameters
    return this.appointmentRepository.findOne({ where: { id: id } });
  }

  async create(appointmentData: Partial<Appointment>): Promise<Appointment> {
    const appointment = this.appointmentRepository.create(appointmentData);
    await this.appointmentRepository.save(appointment);
    return appointment;
  }

  async update(
    id: number,
    updateData: Partial<Appointment>,
  ): Promise<Appointment> {
    await this.appointmentRepository.update(id, updateData);
    return this.appointmentRepository.findOne({ where: { id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.appointmentRepository.delete(id);
  }
}
