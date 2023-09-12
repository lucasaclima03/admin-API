import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CriarUsuarioDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  senha: string;

  @ApiProperty({ default: 0 })
  @IsNumber()
  admin?: number | null;

  @ApiProperty({ default: 0 })
  @IsNumber()
  autor?: number | null;

  @ApiProperty({ default: 0 })
  @IsNumber()
  autorExterno?: number | null;
}
