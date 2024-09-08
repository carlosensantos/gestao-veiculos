import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CarrosService {
  constructor(private prisma: PrismaService) {}

  async createCarro(data: Prisma.CarroCreateInput) {
    return this.prisma.carro.create({ data });
  }

  async findAll() {
    return this.prisma.carro.findMany();
  }

  async findOne(id: number) {
    return this.prisma.carro.findUnique({ where: { id } });
  }

  async updateCarro(id: number, data: Prisma.CarroUpdateInput) {
    return this.prisma.carro.update({ where: { id }, data });
  }

  async deleteCarro(id: number) {
    return this.prisma.carro.delete({ where: { id } });
  }
}
