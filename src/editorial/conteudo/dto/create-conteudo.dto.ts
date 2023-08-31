import { ApiProperty } from '@nestjs/swagger';

export class CreateConteudoDto {
  @ApiProperty()
  titulo: string;

  @ApiProperty({ required: false })
  chapeu?: string;

  @ApiProperty()
  resumo: string;

  @ApiProperty()
  materia: string;

  @ApiProperty()
  rascunho: string;

  @ApiProperty({ default: 0 })
  conteudoPublicado: number;

  @ApiProperty()
  conteudoAberto: number;

  @ApiProperty()
  categoria: string;

  @ApiProperty()
  disciplina: JSON;

  @ApiProperty()
  etapa: JSON;

  @ApiProperty()
  anoLetivo: JSON;

  @ApiProperty({ required: false })
  seoTitulo: string;

  @ApiProperty({ required: false })
  seoDescricao: string;

  @ApiProperty({ required: false })
  imagemDestaque: string;

  @ApiProperty({ required: false })
  imagemThumbnail: string;
}
