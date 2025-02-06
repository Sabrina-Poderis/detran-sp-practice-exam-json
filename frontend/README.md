/detran-sp-practice-exam-frontend
│
├── /public                    # Arquivos estáticos (como imagens, fontes, etc.)
├── /src
│   ├── /assets                # Arquivos de recursos (imagens, ícones, fontes, etc.)
│   ├── /components            # Componentes reutilizáveis
│   │   ├── /Button            # Exemplo de componente específico (Button)
│   │   ├── /Card              # Exemplo de componente específico (Card)
│   │   └── /...               # Outros componentes reutilizáveis
│   ├── /features              # Funcionalidades específicas (Redux slices, lógica)
│   │   ├── /auth              # Exemplo de funcionalidade (autenticação)
│   │   ├── /question-data     # Exemplo de funcionalidade (Banco de questões)
│   │   └── /...               # Outras funcionalidades
│   ├── /hooks                 # Custom hooks
│   ├── /layouts               # Layouts usados em diferentes páginas
│   ├── /pages                 # Páginas do Next.js (cada arquivo .tsx representa uma rota)
│   │   ├── /Home              # Página inicial
│   │   ├── /Login             # Página de login
│   │   └── /...               # Outras páginas
│   ├── /redux                 # Configuração e gerenciamento de estado do Redux
│   │   ├── /store.ts          # Configuração da store
│   │   └── /slices            # Slices para o Redux
│   ├── /services              # Lógica de integração com APIs e serviços
│   ├── /styles                # Arquivos de estilo (como TailwindCSS, ou .css, .scss)
│   ├── /types                 # Tipos TypeScript compartilhados
│   ├── /utils                 # Funções utilitárias
│   └── /App.tsx               # Componente principal da aplicação
│
├── .eslintrc.json              # Configuração do ESLint
├── .gitignore                 # Arquivos e pastas a serem ignorados pelo Git
├── package.json               # Configurações do projeto e dependências
└── tsconfig.json              # Configurações do TypeScript
