import { ApiProperty } from '@nestjs/swagger';
import { JsonObject } from '@prisma/client/runtime/library';

export class CreateConteudoDto {
  @ApiProperty()
  titulo: string;

  @ApiProperty({ required: false })
  chapeu?: string;

  @ApiProperty()
  resumo?: string;

  @ApiProperty()
  materia: string;

  @ApiProperty()
  rascunho?: number;

  @ApiProperty({ default: 0 })
  conteudoPublicado?: number;

  @ApiProperty()
  conteudoAberto: number;

  @ApiProperty()
  categoria: string;

  @ApiProperty()
  disciplina: JsonObject;

  @ApiProperty()
  etapa: JsonObject;

  @ApiProperty()
  anoLetivo: JsonObject;

  @ApiProperty({ required: false })
  seoTitulo?: string;

  @ApiProperty({ required: false })
  seoDescricao?: string;

  @ApiProperty({ required: false })
  imagemDestaque?: string;

  @ApiProperty({ required: false })
  imagemThumbnail?: string;
}
