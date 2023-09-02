import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
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
  async findOne(@Param('id') id: string) {
    const conteudo = await this.conteudoService.findOne(id);
    if (!conteudo) {
      throw new NotFoundException(
        `Não foi possivel encontrar conteúdo com o id: ${id}`,
      );
    }

    return conteudo;
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
