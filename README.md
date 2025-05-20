
# Boilerplate API - Express, TypeScript e TypeORM

## Descrição

Boilerplate para API REST com Express, TypeScript e TypeORM. Estrutura modular baseada em princípios de Clean Architecture e DDD simplificado. 
Organização por camadas:

- entities/: modelos do domínio (TypeORM).
- repositories/: abstração de acesso a dados.
- services/: lógica de negócio.
- controllers/: tratamento de requisições.
- routes/: definição das rotas.

Foco em separação de responsabilidades, manutenibilidade e boas práticas.

---

## Como usar

1. Instale as dependências:  
   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente e o banco no arquivo `DataSource.ts`.

3. Inicie a aplicação:  
   ```bash
   npm run dev
   ```

---

## Padrões e Boas Práticas

- Arquitetura modular, com separação clara entre camadas (controller, service, repository).
- Tratamento centralizado de erros.
- Código em TypeScript para tipagem estática e melhor manutenção.
- Repositórios isolam acesso a dados, facilitando testes e manutenção.
