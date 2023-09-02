import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConteudoService } from './conteudo.service';
import { CreateConteudoDto } from './dto/create-conteudo.dto';
import { UpdateConteudoDto } from './dto/update-conteudo.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ConteudoEntity } from './entities/conteudo.entity';

@Controller('conteudo')
@ApiTags('conteudo')
export class ConteudoController {
  constructor(private readonly conteudoService: ConteudoService) {}

  @Post()
  @ApiCreatedResponse({ type: ConteudoEntity })
  create(@Body() createConteudoDto: CreateConteudoDto) {
    return this.conteudoService.create(createConteudoDto);
  }

  @Get()
  @ApiOkResponse({ type: ConteudoEntity, isArray: true })
  findAll() {
    return this.conteudoService.findAll();
  }

  @Get('rascunho')
  @ApiOkResponse({ type: ConteudoEntity, isArray: true })
  buscarRascunhos() {
    return this.conteudoService.buscarRascunhos();
  }

  @Get(':id')
  @ApiOkResponse({ type: ConteudoEntity })
  findOne(@Param('id') id: string) {
    return this.conteudoService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ConteudoEntity })
  update(
    @Param('id') id: string,
    @Body() updateConteudoDto: UpdateConteudoDto,
  ) {
    return this.conteudoService.update(id, updateConteudoDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ConteudoEntity })
  remove(@Param('id') id: string) {
    return this.conteudoService.remove(id);
  }
}
