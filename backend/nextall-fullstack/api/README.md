# NextAll API

Esta é uma API RESTful desenvolvida com Spring Boot, JPA e Hibernate para gerenciar usuários.

## Tecnologias Utilizadas

*   Java 17
*   Spring Boot 3.x
*   Spring Data JPA
*   Hibernate
*   H2 Database (em memória)
*   Maven

## Estrutura do Projeto

```
nextall-api/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── nextall/
│   │   │           └── nextall_api/
│   │   │               ├── controller/
│   │   │               │   └── UserController.java
│   │   │               ├── model/
│   │   │               │   └── User.java
│   │   │               ├── repository/
│   │   │               │   └── UserRepository.java
│   │   │               ├── service/
│   │   │               │   └── UserService.java
│   │   │               └── NextallApiApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
│       └── java/
│           └── com/
│               └── nextall/
│                   └── nextall_api/
│                       └── NextallApiApplicationTests.java
└── pom.xml
```

## Como Executar

1.  **Pré-requisitos:**
    *   Java Development Kit (JDK) 17
    *   Maven

2.  **Clonar o repositório (se aplicável):**
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd nextall-api
    ```

3.  **Construir o projeto:**
    ```bash
    mvn clean install
    ```

4.  **Executar a aplicação:**
    ```bash
    java -jar target/nextall-api-0.0.1-SNAPSHOT.jar
    ```

A aplicação será iniciada na porta 8080 por padrão.

## Endpoints da API

A entidade principal desta API é `User`.

### User (Usuário)

*   **GET /api/users**
    *   Retorna todos os usuários.
*   **GET /api/users/{id}**
    *   Retorna um usuário pelo ID.
*   **POST /api/users**
    *   Cria um novo usuário.
    *   **Exemplo de Request Body:**
        ```json
        {
            "username": "joao.silva",
            "email": "joao.silva@example.com",
            "password": "senha123"
        }
        ```
*   **PUT /api/users/{id}**
    *   Atualiza um usuário existente pelo ID.
    *   **Exemplo de Request Body:**
        ```json
        {
            "username": "joao.silva.atualizado",
            "email": "joao.silva.atualizado@example.com",
            "password": "nova_senha"
        }
        ```
*   **DELETE /api/users/{id}**
    *   Exclui um usuário pelo ID.

## Console H2 Database

Para acessar o console do H2 Database (somente quando a aplicação estiver em execução):

*   **URL:** `http://localhost:8080/h2-console`
*   **JDBC URL:** `jdbc:h2:mem:nextalldb`
*   **User Name:** `sa`
*   **Password:** (deixe em branco)

## Contato

Para dúvidas ou sugestões, entre em contato com a equipe NextAll.

