# SkyTechCodeTest

&#x20;&#x20;

Este é o repositório da aplicação **SkyTechCodeTest**, um backend RESTful desenvolvido com **TypeScript**, **Node.js** e **Express**, testado com **Jest**, conteinerizado via **Docker**, e rodando em **AWS** com **Load Balancer** e **Auto Scaling**.

---

## 🛠️ Tecnologias

- **TypeScript** – Tipagem estática para maior segurança e legibilidade.
- **Node.js** – Ambiente de execução JavaScript no servidor.
- **Express** – Framework rápido e minimalista para APIs REST.
- **Jest** – Testes unitários e de integração.
- **Docker** – Containerização para build e deploy consistentes.
- **AWS** – Infraestrutura escalável:
  - **Elastic Load Balancer (ELB)**
  - **Auto Scaling Group (ASG)**

---

## 📦 Estrutura do Projeto

```
├── src/
   ├── controllers/
   ├── routes/
   ├── services/
   ├── utils/
   ├── clients/
   ├── config/
   ├── tests/
   ├── types/
   ├── constants/
   └── main.ts

```

---

## ⚙️ Como rodar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/MedinoSam/SkyTechCodeTest.git
   cd SkyTechCodeTest
   ```

2. Suba os containers

   ```bash
   sudo docker compose up
   ```

---

## ✅ Testes com Jest

Execute a suíte de testes com:

```bash
npm run test
```

---


## ☁️ Deploy na AWS

A aplicação está configurada para rodar em AWS com:

- **Elastic Load Balancer** para distribuir tráfego entre instâncias.
- **Auto Scaling Group** para ajustar o número de instâncias com base na demanda.
- Container Docker implantado em instâncias EC2 (ou ECS/EKS se aplicável).


---

## 🧹 Endpoints

> ✏️ *Substitua os exemplos abaixo pelos seus endpoints reais.*

- `GET /api/movies` – Lista os filmes parseados.
- `GET /api/movies?Genero=generoName` – Filtra os fimles parseados de acordo com gênero.

---



## 📣 Contribuições

Contribuições são bem-vindas! Basta abrir uma issue ou enviar um pull request com melhorias.

---

### 😋 Contato

**Desenvolvedor:** Samuel Medino da Silva
🔗 (www.linkedin.com/in/samuelmedino)

---

#### 🔖 Referências

- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [Docker](https://www.docker.com/)
- [AWS ELB](https://aws.amazon.com/elasticloadbalancing/)
- [AWS Auto Scaling](https://aws.amazon.com/autoscaling/)

