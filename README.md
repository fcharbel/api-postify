# Postify
API REST desenvolvida como projeto de conclusão do Programa em Desenvolvimento Web/Cloud AWS da Generation Brasil em parceria com AWS. 
O sistema compreende operações de criação, leitura, atualização e exclusão (CRUD) de usuários, postagens e temas. Os usuários têm a capacidade de visualizar perfis e as postagens associadas, além de poderem acessar todas as postagens disponíveis e aplicar filtros para posts de determinado usuário.


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- **[Express](https://expressjs.com/pt-br/)**
- **[Git](https://git-scm.com/doc)**
-  **[Joi](https://joi.dev/)**
- **[Node.js](https://nodejs.org/en)**
- **[Nodemon](https://nodemon.io/)**
-  **[Node-postgres](https://www.npmjs.com/package/pg)**
- **[Knex](https://knexjs.org/)**
- **[Docker](https://www.docker.com/)**


## 📖 Documentação da API

Esta aplicação foi implementada no Swagger, sendo assim é possível acessá-la através do [link](https://api-postify.onrender.com/api-docs/)


### Cadastro de usuário

Cria um novo usuário com base nos dados descritos abaixo recebidos no body da requisição e retorna as informações do usuário, acrescentando o `id` cadastrado.


    POST /user

##### Endpoint:

    https://api-postify.onrender.com/user

##### Corpo da requisição:

| Parâmetro | Tipo | Descrição|
| ------------ | ------------------------- |------------ |
| `nome`  | `string` | Responsável por armazenar o nome do usuario |
| `email` | `string`| Responsável por armazenar o e-mail do usuario |
| `foto` | `string`| Responsável por armazenar o a imagem do usuario |

---

### Listagem de usuários

    GET /user

Retorna a listagem de todos os usuários cadastrados.


##### Endpoint:

    https://api-postify.onrender.com/user


### Detalhamento do usuário

    GET /user/:id

Retorna os dados e as postagens do usuário de acordo com o `id` presente na requisição.


##### Endpoint:

    https://api-postify.onrender.com/user/:id

--- 

### Alteração do usuário

    PUT /user/:id

Altera os dados do usuário baseado nos dados recebidos no body da requisição.

##### Endpoint:

    https://api-postify.onrender.com/user/:id


##### Corpo da requisição:

| Parâmetro | Tipo | Descrição|
| ------------ | ------------------------- |------------ |
| `nome`  | `string` | Responsável por armazenar o nome do usuario |
| `email` | `string`| Responsável por armazenar o e-mail do usuario |
| `foto` | `string`| Responsável por armazenar o a imagem do usuario |

---

### Deleção de usuário

    DELETE /user/:id

Exclui o usuário com base no `id` recebido como parâmetro de requisição.


##### Endpoint:

    https://api-postify.onrender.com/user/:id

---

### Criação de tema

    POST /theme

Realiza o cadastro de tema para postagens baseado nos dados recebidos no body da requisição.

##### Endpoint:

    https://api-postify.onrender.com/theme
    

##### Corpo da requisição:

| Parâmetro | Tipo | Descrição|
| ------------ | ------------------------- |------------ |
| `descricao`  | `string` | Responsável por armazenar a descrição do tema |

---

### Alteração de tema

    PUT /theme/:id

Altera os dados do tema com base no `id` recebido como parâmetro de requisição e nos dados recebidos no body da requisição.


| Parâmetro | Tipo | Descrição|
| ------------ | ------------------------- |------------ |
| `id`  | `number` | Responsável por armazenar o id do tema|


##### Endpoint:

    https://api-postify.onrender.com/theme/:id
    


##### Corpo da requisição:

| Parâmetro | Tipo | Descrição|
| ------------ | ------------------------- |------------ |
| `descricao`  | `string` | Responsável por armazenar a descrição do tema |

--- 

### Deleção de tema

    DELETE /theme/:id

Exclui o tema com base no `id`  recebido como parâmetro de requisição.


| Parâmetro | Tipo | Descrição|
| ------------ | ------------------------- |------------ |
| `id`  | `number` | Responsável por armazenar o id do tema |


##### Endpoint:

    https://api-postify.onrender.com/theme/:id
  
  ---
  
### Cadastro de postagem

Cria um novo post com base nos dados descritos abaixo recebidos no body da requisição e retorna as informações da postagem, acrescentando o `id` cadastrado.


    POST /post

##### Endpoint:

    https://api-postify.onrender.com/post

##### Corpo da requisição:

| Parâmetro | Tipo | Descrição|
| ------------ | ------------------------- |------------ |
| `titulo`  | `string` | Responsável por armazenar o titulo do post |
| `texto` | `string`| Responsável por armazenar o texto do post  |
| `usuario_id` | `number`| Responsável por armazenar o id do usuário |
| `tema_id` | `number`| Responsável por armazenar o id do tema do post  |

---

### Listagem de posts

    GET /post

Retorna a listagem de todos os posts cadastrados, e caso receba um parâmetro do tipo query  `usuario_id`, realiza a filtragem por usuário.

| Parâmetro query | Tipo | Descrição|
| ------------ | ------------------------- |------------ |
| `usuário_id`  | `number` | Responsável por armazenar o id do usuário baseado na tabela `usuario`  |

##### Endpoint:

    https://api-postify.onrender.com/post
---

### Detalhamento de postagem

    GET /post/:id

Retorna o post com base no `id` recebido como parâmetro de requisição.

| Parâmetro | Tipo | Descrição|
| ------------ | ------------------------- |------------ |
| `id`  | `number` | Responsável por armazenar o id do post |


##### Endpoint:

    https://api-postify.onrender.com/post/:id

---

### Alteração de postagem

    PUT /post/:id

Altera os dados do post com base no `id` recebido como parâmetro de requisição e nos dados recebidos no body da requisição.


| Parâmetro | Tipo | Descrição|
| ------------ | ------------------------- |------------ |
| `id`  | `number` | Responsável por armazenar o id do post |



##### Endpoint:

    https://api-postify.onrender.com/post/:id

##### Corpo da requisição:

| Parâmetro | Tipo | Descrição|
| ------------ | ------------------------- |------------ |
| `titulo`  | `string` | Responsável por armazenar o titulo do post |
| `texto` | `string`| Responsável por armazenar o texto do post  |
| `usuario_id` | `number`| Responsável por armazenar o id do usuário |
| `tema_id` | `number`| Responsável por armazenar o id do tema do post  |

---
### Deleção de postagem

    DELETE /post/:id

Exclui o post com base no `id`  recebido como parâmetro de requisição.


| Parâmetro | Tipo | Descrição|
| ------------ | ------------------------- |------------ |
| `id`  | `number` | Responsável por armazenar o id do post |


##### Endpoint:

    https://api-postify.onrender.com/post/:id
  
--- 

[Fernanda Charbel](https://github.com/fcharbel)💙
