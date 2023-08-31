-- CreateTable
CREATE TABLE "Conteudo" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "chapeu" TEXT,
    "resumo" TEXT,
    "materia" TEXT NOT NULL,
    "rascunho" INTEGER,
    "conteudoPublicado" INTEGER DEFAULT 0,
    "conteudoAberto" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,
    "disciplina" JSONB NOT NULL,
    "etapa" JSONB NOT NULL,
    "anoLetivo" JSONB NOT NULL,
    "seoTitulo" TEXT,
    "seoDescricao" TEXT,
    "imagemDestaque" TEXT,
    "imagemThumbnail" TEXT,
    "criadoEm" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "publicadoEm" TIMESTAMP(3),
    "atualizadoEm" TIMESTAMP(3),

    CONSTRAINT "Conteudo_pkey" PRIMARY KEY ("id")
);
