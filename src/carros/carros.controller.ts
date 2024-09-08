import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CarrosService } from './carros.service';

@Controller('carros')
export class CarrosController {
  constructor(private readonly carrosService: CarrosService) {}

  @Post()
  create(@Body() createCarroDto: any) {
    return this.carrosService.createCarro(createCarroDto);
  }

  @Get()
  findAll() {
    return this.carrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carrosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCarroDto: any) {
    return this.carrosService.updateCarro(+id, updateCarroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carrosService.deleteCarro(+id);
  }
}
