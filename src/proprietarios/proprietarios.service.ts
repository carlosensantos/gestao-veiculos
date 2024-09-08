import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProprietariosService {
  constructor(private prisma: PrismaService) {}

  async createProprietario(data: Prisma.ProprietarioCreateInput) {
    return this.prisma.proprietario.create({ data });
  }

  async findAll() {
    return this.prisma.proprietario.findMany();
  }
}
