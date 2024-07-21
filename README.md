<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Store Api</h3>
</div>

####


<!-- ABOUT THE PROJECT -->
## Sobre o projeto
Esse projeto consiste em um api desenvolvida com o intuito de, gerenciar um sistema de uma loja, podendo cadastrar e logar usuários, cadastrar clientes e produtos, cadastrar as vendas e gerenciar esses dados.


<p align="right">(<a href="#readme-top">De volta ao top</a>)</p>



### Desenvolvido com:
<p align="center">
  <img  src="https://skillicons.dev/icons?i=adonis,typescript,docker,mysql,nodejs" /><br>
</p>

<p align="right">(<a href="#readme-top">De volta ao top</a>)</p>



<!-- GETTING STARTED -->
## Iniciando o Projeto



### Pré-requisitos

É assim que você pode rodar o projeto localmente

Será nescessário o node e npm instalados, abaixo segue como fazer a instalação caso esteja no linux:
* node
  ```sh
  sudo apt install nodejs
  ```

* npm
  ```sh
  sudo apt install npm
  ```

Caso esteja no Mac ou Windows recomendo checar o site oficial e fazer download da mídia de instalação.

  ```sh
  https://nodejs.org/en/download/current
  ```

Você também precisará do docker, já que o banco de dados estará rodando dentro de um conteiner. Esse é o link para a documentação oficial para a intalação do docker.
  ```sh
  https://docs.docker.com/engine/install/
  ```


### Instalação

Abaixo está descrito com rodar o projeto após a instalção das dependências:

1. Clone o repositório
   ```sh
   git clone https://github.com/othonoliveira/Amazon-Scrapper.git
   ```
   ou 
   ```sh
   git clone git@github.com:othonoliveira/Amazon-Scrapper.git
   ```

2. Entre na raiz do projeto
   ```sh
   cd Store-API/
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Inicie o conteiner docker utilizando
   ```sh
   npm run db:start
   ```
5. Rode as migrations e seeders para popular o banco de dados
   ```sh
   npm run db:migrate
   ```
6. Inicie o server da API
   ```sh
   npm run server:start
   ```
7. Após esse processo a aplicação já está rodando em:
   ```sh
   http://localhost:3333
   ```
<p align="right">(<a href="#readme-top">De volta ao top</a>)</p>

### Rotas

Todas as rotas partem de localhost:3333

1. Rota Post /login 

   >Recebe o email e senha pelo body da requisição e retorna o token caso o usuário esteja cadastrado no banco de dados
 
2. Rota Post /signup

   >Recebe o email e senha pelo body da requisição e cadastra os dados caso não esteja cadastrado no banco de dados

3. Rota Get /clientes

   >Retorna todos os clientes cadastrados ordenados por id

4. Rota Get /clientes/:id 

   >Retorna os dados completos do cliente especifícado pelo id

5. Rota Post /clientes

   >Recebe os dados de um novo cliente e adiciona o cliente a base de dados

6. Rota Put /clientes/:id

   >Recebe o id do cliente a ser modificado pelo parametro id e os dados a serem alterados pelo body da requisição e faz a alteração no banco de dados

7. Rota Delete /clientes/:id

   >Remove o cliente especifícado do banco de dados

8. Rota Get /produtos

   > Lista todos os produtos ordenados alfabéticamente por nome, porém com uma gama de informações reduzídas

9. Rota Get /produtos/:id

   >Retorna o produto especifícado pelo id, com todas as suas informações

10. Rota Post /produtos

      >Recebe as informações do produto a ser adicionado ao banco de dados e o adiciona se for possível

11. Rota Put /produtos/:id

      >Recebe o id do produto que deve ser alterado pelo parametro e os dados a serem alterados pelo body da requisição e faz as alterações desejadas

12. Rota Delete /produtos/:id

      >Faz o soft delete do produto especificado pelo id

13. Rota Post /venda

      >Recebe as informações da venda pelo body da requisição e adiciona os dados ao banco de dados


<p align="right">(<a href="#readme-top">De volta ao top</a>)</p>