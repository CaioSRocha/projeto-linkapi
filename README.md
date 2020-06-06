# Projeto LinkApi

Neste projeto, vamos realizar a integração entre duas plataformas, exportar os pedidos de vendas concluídas registradas no [Pipedrive](https://www.pipedrive.com/) e importa-los para o [Bling](https://www.bling.com.br/).

## Pré Requisitos

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/pt-br/download/package-manager/)
- [Postman](https://www.postman.com/)
- Criação de conta no Bling
- [Obter Apikey](https://ajuda.bling.com.br/hc/pt-br/articles/360046937853-Introdu%C3%A7%C3%A3o-para-a-API-do-Bling-para-desenvolvedores-) para o Bling
- Criação de conta no Pipedrive
- [Obter Apikey](https://pipedrive.readme.io/docs/how-to-find-the-api-token) para o Pipedrive
- Criação de conta no Atlas MongoDB

## Configuração do Ambiente

Clone este repositório em sua máquina, execute o comando abaixo no terminal:

```
$ git clone git@github.com:CaioSRocha/projeto-linkapi.git
```

Em seguida, navegue até o diretório do projeto e carregue todas as dependências do projeto:

```
$ cd projeto-linkapi.git
$ npm install
```

## Arquivos de Configuração

No diretório do projeto, temos o arquivo .env onde as Api Keys devem ser registradas para o consumo da aplicação, nele também deve ser registrada a connection string de conexão com o mongodb e os endpoints das APIs.<br>

Edite as referências do arquivo conforme exemplo:

```
DBCONNECT=<sua_connection_string_mongodb>
TOKEN_PIPEDRIVE=<sua_apikey_pipedrive>
TOKEN_BLING=<sua_apikey_bling>
```

É importante definir o nome de uma collection em sua connection string, que será criada no passo seguinte.

## Iniciando Servidor de Integração

Para iniciar o servidor, digite o comando abaixo no terminal, no diretório do projeto:

```
$ nodemon server.js
```

A collection definida no passo anterior, será criada no MongoDB.

## Populando Dados

É necessário registrar ao menos um cliente no Pipedrive, registrar também alguns ganhos, assim teremos dados disponíveis para a integração.

## Consumindo Endpoints

No Postman, envie a requisição abaixo em um método POST, para atualizar o MongoDB com os dados do Pipedrive:

```
htttp://localhost:8080/api/v1/create
```

Em seguida, a requisção abaixo em um método POST, para importar os dados do MongoDB para o Bling:

```
htttp://localhost:8080/api/v1/deals
```

## Visualizando Resultado Final

Ainda no Postman, envie a requisição abaixo em um método GET para visualizar os ganhos importados na integração:

```
htttp://localhost:8080/api/v1/deals
```