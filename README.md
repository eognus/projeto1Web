# Trabalho 1 de Programação Avançada para Web
## Turma: CC5Mb
## Aluno: Hugo Araujo Corona

Das diferenças entre o projeto atual e o projeto base(exemplo),  foi criado em sequencia:

#### 1. Rota Category
A rota category implementea todos métodos da rota 'category' requisitados. Para este fim, também exste uma function que verifica a existencia de categoria quando a rota for chamada com método POST usando o erro ALREADY_EXISTS, status 412.

#### 2. Rota Register
Rota criada Rota Category '/register' para registro de usuários.

#### 3. Função de Autorização
Função de autorização authUser criada para implementar a requisição do atributo 'isAdmin' no modelo de user.  Foi criado um erro para ela 403 USER_UNAUTHORIZED e ela foi passada em todas rotas de categorias e produtos tipo POST, DELETE e PUT para autorização de usuário.

#### 4. Teste de Rota Unauthorized
Foi criado um teste para uma rota não autorizada de '/category' de Bad Request.

Para testar o projeto é preciso criar um ou mais usuários no banco de dados usado com a propriedade isAdmin com valor true e fazer uso das rotas privadas de categorias e produtos. Se deslogado ou com um usuário sem o atributo isAdmin com valor true, só será possível acessar essas rotas com o método GET.
