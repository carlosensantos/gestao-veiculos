import { Module } from '@nestjs/common';
import { ProprietariosService } from './proprietarios.service';
import { ProprietariosController } from './proprietarios.controller';

@Module({
  providers: [ProprietariosService],
  controllers: [ProprietariosController]
})
export class ProprietariosModule {}
