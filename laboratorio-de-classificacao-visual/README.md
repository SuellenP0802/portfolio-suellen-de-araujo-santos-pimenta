# Laboratório de Classificação Visual — Viés em Inteligência Artificial

## 🔗 Sobre o Projeto

Este projeto foi desenvolvido como atividade acadêmica com o objetivo de analisar, na prática, como modelos de Inteligência Artificial podem apresentar comportamentos enviesados quando treinados com conjuntos de dados limitados e estereotipados.

Utilizando o **Teachable Machine (Google)**, foi criado um modelo simples de classificação visual contendo duas categorias:
- **Estereotipo 1 — Liderança Executiva**
- **Estereotipo 2 — Apoio Administrativo**

O experimento teve como foco demonstrar como a seleção inadequada de dados pode fazer com que a IA desenvolva interpretações distorcidas da realidade, reproduzindo associações superficiais e incorretas durante o processo de classificação.

---

## 🎯 Objetivo da Atividade

O principal objetivo da atividade foi compreender:
- como surgem vieses em modelos de IA;
- como dados limitados influenciam decisões automatizadas;
- quais impactos sociais e éticos essas classificações podem gerar;
- e qual a importância da participação humana no processo de treinamento e validação de sistemas inteligentes.

---

## 🧠 Metodologia

O modelo foi treinado utilizando aproximadamente 20 imagens para cada categoria.

### 📌 Estereotipo 1 — Liderança Executiva
Foram utilizadas imagens associadas visualmente à liderança corporativa, contendo:
- roupas formais;
- postura séria;
- ambientes corporativos;
- aparência executiva.

### 📌 Estereotipo 2 — Apoio Administrativo
Foram utilizadas imagens contendo:
- roupas casuais;
- ambientes informais;
- aparência menos formal;
- elementos associados ao trabalho operacional.

Após o treinamento, o modelo foi testado utilizando pessoas, objetos e cenários que não estavam totalmente alinhados com os padrões utilizados no dataset.

---

## ⚠️ Resultados Observados

Durante os testes, o modelo apresentou diversos erros de classificação causados pelo viés dos dados utilizados no treinamento.

### 🔸 Erro 1
Mesmo utilizando roupas casuais, o modelo classificou incorretamente a imagem como pertencente ao “Estereotipo 1”.

### 🔸 Erro 2
Ao alterar parcialmente a vestimenta, o sistema reconheceu parcialmente o padrão esperado, porém sem atingir 100% de confiança.

### 🔸 Erro 3
Quando um computador foi apresentado ao modelo, a classificação apresentou inconsistência, demonstrando que o algoritmo não compreende contexto real.

### 🔸 Erro 4
Ao apontar a câmera para o teto, o modelo classificou o cenário como “Estereotipo 1” com 100% de confiança, evidenciando falhas severas de interpretação.

---

## 🧩 Reflexão Ética

O experimento demonstra que modelos de Inteligência Artificial não compreendem significados sociais ou profissionais de forma real. Eles apenas reproduzem padrões presentes nos dados utilizados durante o treinamento.

Quando os dados são enviesados, o algoritmo passa a associar características superficiais — como roupas, aparência ou objetos — a categorias sociais específicas, gerando classificações injustas e potencialmente discriminatórias.

Além disso, o projeto evidencia a importância da curadoria humana e da diversidade de dados no desenvolvimento responsável de sistemas inteligentes.

---

## 🛠 Tecnologias Utilizadas

- Teachable Machine
- Inteligência Artificial
- Classificação de Imagens
- Machine Learning
- Engenharia de Prompt
- Documentação Técnica

---

## 📚 Aprendizados

Durante o desenvolvimento desta atividade, foi possível compreender:
- o funcionamento básico de modelos de classificação visual;
- como o viés surge em sistemas de IA;
- os impactos sociais de decisões automatizadas;
- e a importância da ética no desenvolvimento tecnológico.

---

## ✅ Conclusão

A atividade demonstrou, de forma prática, como sistemas de Inteligência Artificial podem reproduzir preconceitos e interpretações incorretas quando treinados com conjuntos de dados limitados.

O projeto reforça a necessidade de supervisão humana, diversidade de informações e responsabilidade ética no desenvolvimento de tecnologias baseadas em IA.
