import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarrosModule } from './carros/carros.module';
import { MarcasModule } from './marcas/marcas.module';
import { ProprietariosModule } from './proprietarios/proprietarios.module';
import { PrismaService } from './prisma.service';
import { PrismaModule } from './prisma.module'; 

@Module({
  imports: [CarrosModule, MarcasModule, ProprietariosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService], 
})
export class AppModule {}
