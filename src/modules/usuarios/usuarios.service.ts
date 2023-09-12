import { Injectable } from '@nestjs/common';
import { CriarUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}
  create(criarUsuarioDto: CriarUsuarioDto) {
    return this.prisma.usuario.create({
      data: criarUsuarioDto,
    });
  }

  findAll() {
    return this.prisma.usuario.findMany();
  }

  findOne(id: string) {
    return this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.usuario.update({
      where: {
        id: id,
      },
      data: updateUsuarioDto,
    });
  }

  remove(id: string) {
    return this.prisma.usuario.delete({
      where: { id },
    });
  }
}
