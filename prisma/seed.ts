import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.conteudo.upsert({
    where: {
      titulo: 'Utilização de inteligencia artificial nas salas de aula',
    },
    update: {},
    create: {
      titulo: 'Utilização de inteligencia artificial nas salas de aula',
      materia:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      anoLetivo: '1º ano',
      categoria: 'Reportagem',
      conteudoPublicado: 1,
      conteudoAberto: 1,
      etapa: 'Anos Iniciais do Ensino Fundamental',
      disciplina: 'Português',
    },
  });

  const post2 = await prisma.conteudo.upsert({
    where: {
      titulo: 'Como lidar com turmas com diferentes níveis de aprendizagem',
    },
    update: {},
    create: {
      titulo: 'Como lidar com turmas com diferentes níveis de aprendizagem',
      materia:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      anoLetivo: '2º ano',
      categoria: 'Reportagem',
      conteudoAberto: 1,
      conteudoPublicado: 1,
      etapa: 'Anos Iniciais do Ensino Fundamental',
      disciplina: 'Português',
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
