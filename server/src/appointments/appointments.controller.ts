import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { Appointment } from './appointment.entity';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  getAll(): Promise<Appointment[]> {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<Appointment> {
    return this.appointmentsService.findOne(id);
  }

  @Post()
  create(@Body() appointmentData: Partial<Appointment>): Promise<Appointment> {
    return this.appointmentsService.create(appointmentData);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<Appointment>,
  ): Promise<Appointment> {
    return this.appointmentsService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.appointmentsService.remove(id);
  }
}
