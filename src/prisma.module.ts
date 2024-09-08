import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Torna este módulo global, para não precisar ser importado em cada módulo
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exporta o PrismaService para que outros módulos possam utilizá-lo
})
export class PrismaModule {}
