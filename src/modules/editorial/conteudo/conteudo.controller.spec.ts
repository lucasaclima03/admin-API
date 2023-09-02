import { Test, TestingModule } from '@nestjs/testing';
import { ConteudoController } from './conteudo.controller';
import { ConteudoService } from './conteudo.service';

describe('ConteudoController', () => {
  let controller: ConteudoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConteudoController],
      providers: [ConteudoService],
    }).compile();

    controller = module.get<ConteudoController>(ConteudoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
