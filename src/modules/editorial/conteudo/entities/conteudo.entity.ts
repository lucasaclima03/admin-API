import { Conteudo, Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class ConteudoEntity implements Conteudo {
  @ApiProperty()
  id: string;

  @ApiProperty()
  titulo: string;

  @ApiProperty({ required: false, nullable: true })
  chapeu: string | null;

  @ApiProperty({ required: false, nullable: true })
  resumo: string | null;

  @ApiProperty()
  materia: string;

  @ApiProperty({ required: false, nullable: true })
  rascunho: number | null;

  @ApiProperty({ required: false, nullable: true })
  conteudoPublicado: number | null;

  @ApiProperty()
  conteudoAberto: number;

  @ApiProperty()
  categoria: string;

  @ApiProperty()
  disciplina: Prisma.JsonValue;

  @ApiProperty()
  etapa: Prisma.JsonValue;

  @ApiProperty()
  anoLetivo: Prisma.JsonValue;

  @ApiProperty({ required: false, nullable: true })
  seoTitulo: string | null;

  @ApiProperty({ required: false, nullable: true })
  seoDescricao: string | null;

  @ApiProperty({ required: false, nullable: true })
  imagemDestaque: string | null;

  @ApiProperty({ required: false, nullable: true })
  imagemThumbnail: string | null;

  @ApiProperty()
  criadoEm: Date;

  @ApiProperty({ required: false, nullable: true })
  publicadoEm: Date | null;

  @ApiProperty({ required: false, nullable: true })
  atualizadoEm: Date | null;

  @ApiProperty({ required: false, nullable: true })
  idUsuario: string | null;
}
