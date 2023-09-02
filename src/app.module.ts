import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConteudoModule } from './modules/editorial/conteudo/conteudo.module';
import { PrismaModule } from './database/prisma/prisma.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';

@Module({
  imports: [ConteudoModule, PrismaModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
