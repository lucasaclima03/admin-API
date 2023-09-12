import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CriarUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsuarioEntity } from './entities/usuario.entity';

@Controller('usuarios')
@ApiTags('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @ApiCreatedResponse({
    type: UsuarioEntity,
  })
  async create(@Body() createUsuarioDto: CriarUsuarioDto) {
    return new UsuarioEntity(
      await this.usuariosService.create(createUsuarioDto),
    );
  }

  @Get()
  @ApiOkResponse({
    type: UsuarioEntity,
  })
  async findAll() {
    const usuarios = await this.usuariosService.findAll();
    return usuarios.map((usuario) => new UsuarioEntity(usuario));
  }

  @Get(':id')
  @ApiOkResponse({
    type: UsuarioEntity,
  })
  async findOne(@Param('id') id: string) {
    return new UsuarioEntity(await this.usuariosService.findOne(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return new UsuarioEntity(
      await this.usuariosService.update(id, updateUsuarioDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({
    type: UsuarioEntity,
  })
  async remove(@Param('id') id: string) {
    return new UsuarioEntity(await this.usuariosService.remove(id));
  }
}
