import { ApiProperty } from '@nestjs/swagger';
import { Usuario } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UsuarioEntity implements Usuario {
  constructor(partial: Partial<UsuarioEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  email: string;

  @Exclude()
  senha: string;

  @ApiProperty({ default: 0 })
  admin: number;

  @ApiProperty({ default: 0 })
  autor: number;

  @ApiProperty({ default: 0 })
  autorExterno: number;

  @ApiProperty()
  criadoEm: Date;

  @ApiProperty()
  atualizadoEm: Date;
}
