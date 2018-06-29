-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 29/06/2018 às 05:06
-- Versão do servidor: 5.6.38
-- Versão do PHP: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Banco de dados: `cupom_facil`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `cli_dt_nascimento` date DEFAULT NULL,
  `cli_sexo` char(4) DEFAULT NULL,
  `cli_dt_criacao` datetime DEFAULT NULL,
  `cli_dt_ult_alteracao` datetime DEFAULT NULL,
  `est_key` varchar(45) DEFAULT NULL,
  `usu_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `clientes`
--

INSERT INTO `clientes` (`id`, `cli_dt_nascimento`, `cli_sexo`, `cli_dt_criacao`, `cli_dt_ult_alteracao`, `est_key`, `usu_id`) VALUES
(7, '1993-12-25', 'masc', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 1),
(8, '1993-12-25', 'masc', '2017-05-19 07:43:21', '2017-05-19 07:43:21', NULL, 1),
(9, '1993-12-25', 'masc', '2017-05-20 00:56:12', '2017-05-20 00:56:12', NULL, 1),
(10, '1993-12-25', 'masc', '2017-05-20 01:58:53', '2017-05-20 01:58:53', NULL, 2),
(12, '1993-12-25', 'masc', '2017-05-20 03:05:17', '2017-05-20 03:05:17', '4a30af315bfe8af210a2b8af6a379cf1', 2),
(13, '1993-12-25', 'masc', '2017-05-20 03:05:43', '2017-05-20 03:05:43', '4a30af315bfe8af210a2b8af6a379cf1', 1),
(15, '1994-10-07', 'masc', '2017-06-02 03:30:59', '2017-06-02 03:30:59', '4a30af315bfe8af210a2b8af6a379cf1', 1),
(21, '1994-10-07', 'masc', '2017-06-29 22:22:42', '2017-06-29 22:22:42', '4a30af315bfe8af210a2b8af6a379cf1', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `cupons`
--

CREATE TABLE `cupons` (
  `id` int(11) NOT NULL,
  `cup_usado` tinyint(1) DEFAULT NULL,
  `cup_dt_criacao` datetime DEFAULT NULL,
  `cup_dt_ult_alteracao` varchar(45) DEFAULT NULL,
  `cup_ativo` tinyint(1) DEFAULT NULL,
  `cliente_id_cli` int(11) NOT NULL,
  `promocao_id_pro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura para tabela `estabelecimentos`
--

CREATE TABLE `estabelecimentos` (
  `id` int(11) NOT NULL,
  `est_key` varchar(45) DEFAULT NULL,
  `est_token_reset_senha` varchar(45) DEFAULT NULL,
  `est_nome` varchar(70) DEFAULT NULL,
  `est_email` varchar(70) DEFAULT NULL,
  `est_hashsenha` varchar(45) DEFAULT NULL,
  `est_logo` varchar(70) DEFAULT NULL,
  `est_cep` varchar(9) DEFAULT NULL,
  `est_bairro` varchar(45) DEFAULT NULL,
  `est_rua` varchar(45) DEFAULT NULL,
  `est_numero` varchar(45) DEFAULT NULL,
  `est_complemento` varchar(45) DEFAULT NULL,
  `est_dt_criacao` datetime DEFAULT NULL,
  `est_dt_ult_alteracao` datetime DEFAULT NULL,
  `est_ativo` tinyint(1) DEFAULT NULL,
  `usu_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `estabelecimentos`
--

INSERT INTO `estabelecimentos` (`id`, `est_key`, `est_token_reset_senha`, `est_nome`, `est_email`, `est_hashsenha`, `est_logo`, `est_cep`, `est_bairro`, `est_rua`, `est_numero`, `est_complemento`, `est_dt_criacao`, `est_dt_ult_alteracao`, `est_ativo`, `usu_id`) VALUES
(1, '4a30af315bfe8af210a2b8af6a379cf1', NULL, 'Cachaçaria do Zá', 'cachacariadoze@gmail.com', 'lisdbpsaudnsalhbvasdbvsaofbd', NULL, '69097000', 'miralins', 'shot 101', '42', 'próximo ao mercado lagoa', '2017-05-28 00:00:00', '2017-05-28 00:00:00', 1, 1),
(2, 'ljkdla', NULL, 'bar do binda', 'barbinda@gmail.com', 'oinsdlfnsaljdnflksadnflasd', 'http://p', '69777777', 'cidade nova 2', 'camocim', '12', 'quadra304', '2017-05-21 04:36:25', '2017-05-21 04:36:25', 1, 1),
(3, 'teste1', NULL, 'Pizzaria do arnaldo', 'pizzariadoarnaldoa@gmail.com', 'oinsdlfnsaljdnflksadnflasd', 'http://p', '69777777', 'cidade nova 2', 'camocim', '12', 'quadra304', '2017-05-25 16:10:59', '2017-05-25 16:10:59', 1, 2),
(4, 'e24def63876c4ebddc2b4315a847d835', NULL, 'Pizzaria', 'pizzariadatataa@gmail.com', 'uhbscoahbs', 'http://tata.com.br', '69095187', 'cidade nova', 'girua', '2', 'quadra304', '2017-06-29 21:54:31', '2017-06-29 21:54:31', 1, 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `promocoes`
--

CREATE TABLE `promocoes` (
  `id` int(11) NOT NULL,
  `pro_titulo` varchar(45) DEFAULT NULL,
  `pro_regulamento` text,
  `pro_img_fundo` varchar(70) DEFAULT NULL,
  `pro_img_chamada` varchar(70) DEFAULT NULL,
  `pro_validade` datetime DEFAULT NULL,
  `pro_valor` double DEFAULT NULL,
  `pro_qtd_cupom` int(11) DEFAULT NULL,
  `pro_ativo` tinyint(1) DEFAULT NULL,
  `estabelecimento_id_est` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `promocoes`
--

INSERT INTO `promocoes` (`id`, `pro_titulo`, `pro_regulamento`, `pro_img_fundo`, `pro_img_chamada`, `pro_validade`, `pro_valor`, `pro_qtd_cupom`, `pro_ativo`, `estabelecimento_id_est`) VALUES
(1, 'dose unoica', 'lorem ipsom', 'jsd', 'asdasd', '2017-05-31 00:00:00', 25.5, 5, 0, 1),
(2, 'bebidas e comidas a vontade por', 'lorem ipsom', 'jsd', 'asdasd', '2017-10-01 00:00:00', 70.8, 20, 1, 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usu_email` varchar(70) NOT NULL,
  `usu_hashsenha` varchar(45) DEFAULT NULL,
  `usu_token_reset_senha` varchar(45) DEFAULT NULL,
  `usu_nome` varchar(70) NOT NULL,
  `usu_dt_criacao` datetime DEFAULT NULL,
  `usu_dt_ult_alteracao` datetime DEFAULT NULL,
  `usu_ativo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `usu_email`, `usu_hashsenha`, `usu_token_reset_senha`, `usu_nome`, `usu_dt_criacao`, `usu_dt_ult_alteracao`, `usu_ativo`) VALUES
(1, 't@mail.com', 'test', NULL, 't', '2017-07-10 02:58:02', '2017-07-10 02:58:02', 1),
(2, 't2@mail.com', 'test', NULL, 'teste real ', '2017-07-10 02:58:33', '2017-07-10 02:58:33', 1);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `cupons`
--
ALTER TABLE `cupons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cupom_cliente_idx` (`cliente_id_cli`),
  ADD KEY `fk_cupom_promocao1_idx` (`promocao_id_pro`);

--
-- Índices de tabela `estabelecimentos`
--
ALTER TABLE `estabelecimentos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `promocoes`
--
ALTER TABLE `promocoes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_promocao_estabelecimento1_idx` (`estabelecimento_id_est`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de tabela `cupons`
--
ALTER TABLE `cupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `estabelecimentos`
--
ALTER TABLE `estabelecimentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `promocoes`
--
ALTER TABLE `promocoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `cupons`
--
ALTER TABLE `cupons`
  ADD CONSTRAINT `fk_cupom_cliente` FOREIGN KEY (`cliente_id_cli`) REFERENCES `clientes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_cupom_promocao1` FOREIGN KEY (`promocao_id_pro`) REFERENCES `promocoes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Restrições para tabelas `promocoes`
--
ALTER TABLE `promocoes`
  ADD CONSTRAINT `fk_promocao_estabelecimento1` FOREIGN KEY (`estabelecimento_id_est`) REFERENCES `estabelecimentos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
