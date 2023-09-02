import { JsonObject } from '@prisma/client/runtime/library';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  title: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ required: false })
  description?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  body: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}

export class CreateConteudoDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  @ApiProperty()
  titulo: string;

  @IsString()
  @MaxLength(50)
  @ApiProperty({ required: false })
  chapeu?: string;

  @IsString()
  @IsOptional()
  @MaxLength(250)
  @ApiProperty()
  resumo?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  materia: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  rascunho?: number;

  @IsNumber()
  @ApiProperty({ default: 0 })
  conteudoPublicado?: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  conteudoAberto: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  categoria: string;

  @IsObject()
  @IsNotEmpty()
  @ApiProperty()
  disciplina: JsonObject;

  @IsObject()
  @IsNotEmpty()
  @ApiProperty()
  etapa: JsonObject;

  @IsObject()
  @IsNotEmpty()
  @ApiProperty()
  anoLetivo: JsonObject;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  seoTitulo?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  seoDescricao?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  imagemDestaque?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  imagemThumbnail?: string;
}
