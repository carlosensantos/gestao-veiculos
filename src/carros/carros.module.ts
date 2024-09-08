import { Module } from '@nestjs/common';
import { CarrosService } from './carros.service';
import { CarrosController } from './carros.controller';

@Module({
  providers: [CarrosService],
  controllers: [CarrosController]
})
export class CarrosModule {}
