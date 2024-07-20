USE loja;

-- Inserir dados na tabela usuarios
INSERT INTO usuarios (email, senha) VALUES
('joao.silva@example.com', 'senha123'),
('maria.oliveira@example.com', 'senha456');

-- Inserir dados na tabela clientes
INSERT INTO clientes (nome, cpf) VALUES
('João da Silva', '123.456.789-00'),
('Maria de Oliveira', '987.654.321-00');

-- Inserir dados na tabela enderecos
INSERT INTO enderecos (cliente_id, logradouro, numero, complemento, bairro, cidade, estado, cep) VALUES
(1, 'Av. Paulista', '1000', 'Apt 101', 'Bela Vista', 'São Paulo', 'SP', '01310-000'),
(1, 'Rua Augusta', '500', NULL, 'Consolação', 'São Paulo', 'SP', '01305-000'),
(2, 'Av. Atlântica', '2000', 'Apt 202', 'Copacabana', 'Rio de Janeiro', 'RJ', '22021-001');

-- Inserir dados na tabela telefones
INSERT INTO telefones (cliente_id, numero) VALUES
(1, '(11) 91234-5678'),
(1, '(11) 99876-5432'),
(2, '(21) 92345-6789');

-- Inserir dados na tabela produtos
INSERT INTO produtos (nome, descricao, preco, estoque) VALUES
('Cafeteira Elétrica', 'Cafeteira elétrica de 10 xícaras', 99.90, 50),
('Smartphone XYZ', 'Smartphone com 128GB de memória', 1999.90, 30),
('Fone de Ouvido Bluetooth', 'Fone de ouvido sem fio com microfone', 150.00, 75);

-- Inserir dados na tabela vendas
INSERT INTO vendas (cliente_id, produto_id, quantidade, preco_unitario, preco_total, data_hora) VALUES
(1, 1, 1, 99.90, 99.90, '2024-07-18 10:00:00'),
(1, 2, 1, 1999.90, 1999.90, '2024-07-18 11:00:00'),
(2, 3, 2, 150.00, 300.00, '2024-07-18 12:00:00');
