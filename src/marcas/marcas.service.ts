import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MarcasService {
  constructor(private prisma: PrismaService) {}

  async createMarca(data: Prisma.MarcaCreateInput) {
    return this.prisma.marca.create({ data });
  }

  async findAll() {
    return this.prisma.marca.findMany();
  }
}
