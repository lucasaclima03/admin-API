import { Injectable } from '@nestjs/common';
import { CreateConteudoDto } from './dto/create-conteudo.dto';
import { UpdateConteudoDto } from './dto/update-conteudo.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class ConteudoService {
  constructor(private prisma: PrismaService) {}

  create(createConteudoDto: CreateConteudoDto) {
    return 'This action adds a new conteudo';
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
    return this.prisma.conteudo.findUnique({ where: { id } });
  }

  update(id: number, updateConteudoDto: UpdateConteudoDto) {
    return `This action updates a #${id} conteudo`;
  }

  remove(id: number) {
    return `This action removes a #${id} conteudo`;
  }
}
