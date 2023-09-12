import { Injectable } from '@nestjs/common';
import { CreateConteudoDto } from './dto/create-conteudo.dto';
import { UpdateConteudoDto } from './dto/update-conteudo.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class ConteudoService {
  constructor(private prisma: PrismaService) {}

  create(createConteudoDto: CreateConteudoDto) {
    return this.prisma.conteudo.create({
      data: createConteudoDto,
    });
  }

  findAll() {
    return this.prisma.conteudo.findMany({
      where: {
        conteudoPublicado: 1,
      },
    });
  }

  buscarRascunhos() {
    return this.prisma.conteudo.findMany({
      where: {
        conteudoPublicado: 0,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.conteudo.findUnique({
      where: { id },
      include: {
        usuario: true,
      },
    });
  }

  update(id: string, updateConteudoDto: UpdateConteudoDto) {
    return this.prisma.conteudo.update({
      where: { id },
      data: updateConteudoDto,
    });
  }

  remove(id: string) {
    return this.prisma.conteudo.delete({
      where: { id },
    });
  }
}
