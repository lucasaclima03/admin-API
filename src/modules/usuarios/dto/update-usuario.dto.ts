import { PartialType } from '@nestjs/mapped-types';
import { CriarUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CriarUsuarioDto) {}
