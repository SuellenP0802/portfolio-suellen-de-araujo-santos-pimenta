# ☕ Sistema de Gestão de Orçamentos - Café Aurora

## 📝 Descrição do Projeto
Este projeto é uma aplicação web robusta desenvolvida na plataforma **Bubble.io**, projetada para otimizar e centralizar o ciclo de vendas de empresas do setor cafeeiro. O foco principal é substituir processos manuais e planilhas por um ambiente digital integrado que gerencia desde o cadastro de clientes até a emissão e acompanhamento de propostas comerciais.

Desenvolvida com base em princípios de **Engenharia de Software**, a plataforma prioriza a governança de workflows, segurança de dados e uma modelagem de banco de dados escalável para garantir agilidade e padronização no atendimento ao cliente.

## 🚀 Principais Funcionalidades
* **Gestão de Clientes:** Registro completo de contatos e vínculos empresariais.
* **Emissão de Orçamentos:** Seleção dinâmica de produtos, definição de quantidades e cálculo automático de valores totais.
* **Controle de Pipeline:** Acompanhamento de status das propostas (Pendente, Aprovado ou Rejeitado) via *Option Sets* para evitar inconsistências.
* **Segurança (Privacy Rules):** Implementação de regras de privacidade onde cada usuário acessa exclusivamente os dados criados por ele.
* **Catálogo de Produtos:** Organização de itens por categorias com filtros inteligentes para facilitar a busca.

## 🛠️ Tecnologias e Arquitetura
* **Plataforma:** Bubble.io (No-code/Low-code).
* **Banco de Dados:** Modelagem relacional estruturada em entidades como `User`, `Cliente`, `Produto`, `Quote` e `QuoteItem`.
* **Lógica de Negócio:** Workflows automatizados para login, cadastro, troca de senha e manipulação de registros.
* **Integração de IA:** Utilizada como aceleradora de desenvolvimento inicial, com revisão manual rigorosa da lógica gerada.

## 📊 Estratégia de Saída (Vendor Lock-in Mitigation)
Para mitigar os riscos de dependência da plataforma, o projeto inclui um plano de migração documentado:
* **Exportação de Dados:** Utilização da Data API nativa do Bubble para extração de registros em formato JSON.
* **Plano de Recriação:** Mapeamento de entidades para migração futura para bancos PostgreSQL/MongoDB e lógica documentada para replicação em React/Node.js.

## 🔧 Como Acessar
O sistema pode ser visualizado e testado através do link oficial do deploy:
👉 [Acesse o Café Aurora](https://sumenta25.bubbleapps.io/version-test)

---
*Este projeto demonstra o poder das ferramentas low-code na criação de soluções empresariais funcionais e seguras em tempo recorde.* 
