//1. Tabela de Alunos
CREATE TABLE Alunos (
    id_aluno INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    turma VARCHAR(20) NOT NULL
);

// 2. Tabela de Bibliotecárias
CREATE TABLE Bibliotecarias (
    id_bibliotecaria INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

//3. Tabela de Livros
CREATE TABLE Livros (
    id_livro INT IDENTITY(1,1) PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    editora VARCHAR(80),
    quantidade INT NOT NULL DEFAULT 1,
    categoria VARCHAR(50) NOT NULL
);
// 4. Tabela de Agendamentos
CREATE TABLE Agendamentos (
    id_agendamento INT IDENTITY(1,1) PRIMARY KEY,
    id_aluno INT NOT NULL,
    id_livro INT NOT NULL,
    data_agendamento DATE NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'Pendente', -- Ex: Pendente, Confirmado, Cancelado
    CONSTRAINT FK_Agendamentos_Alunos FOREIGN KEY (id_aluno) REFERENCES Alunos(id_aluno),
    CONSTRAINT FK_Agendamentos_Livros FOREIGN KEY (id_livro) REFERENCES Livros(id_livro)
);

// 5. Tabela de Empréstimos
CREATE TABLE Emprestimos (
    id_emprestimo INT IDENTITY(1,1) PRIMARY KEY,
    id_aluno INT NOT NULL,
    id_livro INT NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_devolucao_prevista DATE NOT NULL,
    data_devolucao DATE NULL, -- Pode ser NULL enquanto o livro não for devolvido
    status VARCHAR(20) NOT NULL DEFAULT 'Ativo', -- Ex: Ativo, Devolvido, Atrasado
    CONSTRAINT FK_Emprestimos_Alunos FOREIGN KEY (id_aluno) REFERENCES Alunos(id_aluno),
    CONSTRAINT FK_Emprestimos_Livros FOREIGN KEY (id_livro) REFERENCES Livros(id_livro)
);

// 6. Tabela de Logs de Auditoria
CREATE TABLE Logs (
    id_log INT IDENTITY(1,1) PRIMARY KEY,
    id_aluno INT NULL, -- NULL caso a ação venha do sistema ou de uma bibliotecária
    acao VARCHAR(100) NOT NULL,
    data_hora DATETIME NOT NULL DEFAULT GETDATE(),
    descricao VARCHAR(255)
);