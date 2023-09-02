import { Module } from '@nestjs/common';
import { ConteudoService } from './conteudo.service';
import { ConteudoController } from './conteudo.controller';
import { PrismaModule } from 'src/database/prisma/prisma.module';

@Module({
  controllers: [ConteudoController],
  providers: [ConteudoService],
  imports: [PrismaModule],
})
export class ConteudoModule {}
