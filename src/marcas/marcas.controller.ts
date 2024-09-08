import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarcasService } from './marcas.service';

@Controller('marcas')
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @Post()
  create(@Body() createMarcaDto: any) {
    return this.marcasService.createMarca(createMarcaDto);
  }

  @Get()
  findAll() {
    return this.marcasService.findAll();
  }
}
