import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProprietariosService } from './proprietarios.service';

@Controller('proprietarios')
export class ProprietariosController {
  constructor(private readonly proprietariosService: ProprietariosService) {}

  @Post()
  create(@Body() createProprietarioDto: any) {
    return this.proprietariosService.createProprietario(createProprietarioDto);
  }

  @Get()
  findAll() {
    return this.proprietariosService.findAll();
  }
}
