# Detran SP Practice Exam

> 🚧 Projeto em desenvolvimento!

A aplicação **Detran SP Practice Exam** foi desenvolvida com o objetivo de simular a prova teórica do Detran. Ela permite que os usuários pratiquem questões oficiais e testem seus conhecimentos sobre **legislação de trânsito**, **direção defensiva**, **primeiros socorros** e **mecânica básica**.

O sistema oferece uma experiência similar à prova oficial, ajudando candidatos a se prepararem de maneira eficaz para o exame teórico do Detran de São Paulo.

## ⚖️ Aviso Legal
Este projeto é uma iniciativa particular e não possui qualquer vínculo oficial com o **Detran ** ou qualquer outro órgão governamental. As questões utilizadas foram obtidas a partir de fontes de domínio público disponíveis no site oficial do Detran-SP ([link para referência](https://www.detran.sp.gov.br/detran-prova/simulado_questoes/questoes.htm)).

⚠️ Importante: Embora as perguntas e respostas tenham sido extraídas de fontes oficiais, **não garantimos a precisão, atualização ou correção das respostas**. O objetivo deste sistema é **auxiliar ** nos estudos, mas ele não substitui materiais oficiais, cursos ou simulados diretamente aplicados pelo Detran.

Os usuários são encorajados a consultar fontes oficiais para garantir que possuem as informações mais atualizadas e corretas antes de realizar o exame teórico.

---

## 📝 Funcionalidades

- **Questões Oficiais**: Questões extraídas diretamente do conteúdo oficial de provas teóricas.
- **Simulação de Prova**: Simula a prova teórica do Detran, permitindo que os usuários testem seus conhecimentos.
- **Categorias de Conhecimento**:
  - Legislação de Trânsito
  - Direção Defensiva
  - Primeiros Socorros
  - Mecânica Básica
- **Feedback de Resultados**: Ao final da prova, o usuário recebe um feedback detalhado sobre seu desempenho.
- **Experiência Similar à Prova Oficial**: A aplicação replica as condições da prova real para proporcionar uma preparação eficaz.

---

## 🛠 Tecnologias Utilizadas

- **Frontend**: React com TypeScript, Next.js, TailwindCSS
- **Backend**: Node.js, Express, MongoDB
- **Gerenciador de Estado**: Redux
- **Formatação e Linting**: ESLint, Prettier
- **Versionamento de Release**: Standard Version

---

## 📦 Instalação

### Passo 1: Instalar Dependências

Para começar, instale todas as dependências do projeto:

```bash
yarn install:all`
```

Este comando instala as dependências tanto para o frontend quanto para o backend.

## 🚀 Scripts
`start:frontend`: Inicia o servidor do frontend.
`start:backend`: Inicia o servidor do backend.
`install:all`: Instala as dependências de ambos os projetos, frontend e backend.
`release`: Gera uma nova versão usando o standard-version para versionamento semântico.

## 🔧 Configuração
Configuração de Aliases de Pasta
Para garantir uma estrutura modular e de fácil manutenção, o projeto foi configurado com aliases de pasta, permitindo importar componentes, funções e módulos com facilidade. Veja um exemplo de importação usando os aliases configurados:

```typescript
import Button from '@components/Button';
import { setQuestions } from '@redux/slices/examSlice';
```

### 💡 Como Contribuir
Se você quiser contribuir com este projeto, sinta-se à vontade para abrir um pull request ou reportar problemas através das issues.

Passos para contribuir:

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (git checkout -b minha-feature).
3. Faça suas modificações e commit (git commit -am 'Adiciona nova feature').
4. Envie para o repositório remoto (git push origin minha-feature).
5. Abra um Pull Request.

## 🧑‍💻 Desenvolvedora
Feito com 💙 por Zabrina.

## Licença
Este projeto é de código aberto e licenciado sob a licença MIT.