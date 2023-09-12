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
  async create(@Body() createConteudoDto: CreateConteudoDto) {
    return new ConteudoEntity(
      await this.conteudoService.create(createConteudoDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: ConteudoEntity, isArray: true })
  findAll() {
    return this.conteudoService.findAll();
  }

  @Get('rascunho')
  @ApiOkResponse({ type: ConteudoEntity, isArray: true })
  async buscarRascunhos() {
    const rascunhos = await this.conteudoService.buscarRascunhos();

    return rascunhos.map((rascunho) => new ConteudoEntity(rascunho));
  }

  @Get(':id')
  @ApiOkResponse({ type: ConteudoEntity })
  async findOne(@Param('id') id: string) {
    return new ConteudoEntity(await this.conteudoService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ type: ConteudoEntity })
  async update(
    @Param('id') id: string,
    @Body() updateConteudoDto: UpdateConteudoDto,
  ) {
    return new ConteudoEntity(
      await this.conteudoService.update(id, updateConteudoDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: ConteudoEntity })
  async remove(@Param('id') id: string) {
    return new ConteudoEntity(await this.conteudoService.remove(id));
  }
}
