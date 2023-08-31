import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConteudoModule } from './editorial/conteudo/conteudo.module';
import { PrismaModule } from './database/prisma/prisma.module';

@Module({
  imports: [ConteudoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
