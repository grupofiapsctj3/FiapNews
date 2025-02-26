# Documentação da API FIAP News Backend e Fronted



# Backend

## Tecnologias Utilizadas

- Node.js com Express 
- MongoDB com Mongoose
- Multer para upload de arquivos
- Axios para comunicação com a API Filestack
- Dotenv para variáveis de ambiente

## Instalação

1. Clone o repositório

```sh
	 git clone https://github.com/grupofiapsctj3/FiapNews
	 cd fiapnews_backend
```

2. Instale as dependências:

Consulte em detalhes e vesões do package.json 
Observação importante: alguns elementos só funcionan corretamente com o nodejs 18, versõe posteriores não estão 100% estaveis

```sh
 npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`: (subi o .env no git para facilitar)

```env
	FILESTACK_API_KEY=A1pydpPXtQbqMvKewD3Giz
	DB_CONNECTION_STRING=mongodb+srv://admin:102030@crudllivraria.vbgwpxv.mongodb.net/?retryWrites=true&w=majority&appName=CRUDLlivraria
```

4. Inicie o servidor:

```sh
	npm run dev
```

## Endpoints

### 1. Imagens

#### Upload de Imagem

`POST /images/upload`

- **Descrição**: Faz o upload de uma imagem para o Filestack e retorna a URL.
- **Parâmetros**:
  - `file` (form-data): Arquivo de imagem
- **Resposta**:

```json
{
  "success": true,
  "imageUrl": "https://url-da-imagem"
}
```

#### Salvar Metadados da Imagem

`POST /images`

- **Descrição**: Salva os metadados da imagem no banco de dados.
- **Body**:

```json
{
  "imageUrl": "https://url-da-imagem",
  "caption": "Legenda da imagem",
  "description": "Descrição da imagem"
}
```

- **Resposta**:

```json
{
  "success": true,
  "message": "Imagem salva com sucesso!"
}
```

#### Buscar Todas as Imagens

`GET /images`

- **Descrição**: Retorna a lista de imagens salvas.
- **Resposta**:

```json
[
  {
    "_id": "id_da_imagem",
    "imageUrl": "https://url-da-imagem",
    "caption": "Legenda",
    "description": "Descrição",
    "createdAt": "data"
  }
]
```

### 2. Notícias em Vídeo

#### Buscar Todas as Notícias em Vídeo 

`GET /videos`

- **Descrição**: Retorna todas as notícias em vídeo.

#### Buscar Notícia em Vídeo por ID

`GET /videos/:id`

- **Descrição**: Retorna uma única notícia em vídeo pelo ID.

#### Adicionar Notícia em Vídeo

`POST /videos`

- **Descrição**: Adiciona uma nova notícia em vídeo.
- **Body**:

```json
{
  "type": "Categoria",
  "date": "2025-02-26",
  "title": "Título",
  "summary": "Resumo da notícia",
  "urlVideo": "https://url-do-video"
}
```

### 3. Notícias em Texto

#### Buscar Todas as Notícias (não é utilizada pela pagina, mas está disponivel como API)

`GET /news`

- **Descrição**: Retorna todas as notícias em texto.

#### Buscar Notícia por ID

`GET /news/:id`

- **Descrição**: Retorna uma única notícia pelo ID.

#### Buscar Notícias Paginadas

`GET /news/:type/:skip/:limit`

- **Descrição**: Retorna notícias paginadas por tipo.

#### Adicionar Notícia

`POST /news`

- **Descrição**: Adiciona uma nova notícia em texto.
- **Body**:

```json
{
  "type": "Categoria",
  "date": "2025-02-26",
  "title": "Título",
  "briefTitle": "Título curto",
  "subTitle": "Subtítulo",
  "briefSubTitle": "Subtítulo curto",
  "summary": "Resumo da notícia",
  "news": "Conteúdo completo da notícia"
}
```

# Fronted

## Tecnologias Utilizadas
- **React.js**
- **React Router DOM** para gerenciamento de rotas
- **Styled Components** para estilização
- **Axios** para requisições HTTP
- **React Quill** para edição de texto rico
- **Swiper.js** para carrosséis

## Estrutura do Projeto

```
/src
  |-- assets
  |-- components/
  |    |-- Cards/
  |    |-- ColimnistSection
  |    |-- Footer/
  |    |-- Navbar/
  |    |-- MainContainerHome/
  |    |-- ImageUpload/
  |    |-- ImageGallery/
  |    |-- SwiperSlide/
  |-- pages/
  |    |-- Home/
  |    |-- News/
  |    |-- Video/
  |    |-- VideoRegistration/
  |    |-- Registration/
  |    |-- Error/
  |-- Globals/
  |-- App.jsx
  |-- main.jsx
```

## Principais Arquivos

### `App.jsx`
O arquivo `App.jsx` define a estrutura principal do frontend, carregando a Navbar, o Footer e gerenciando o espaço para renderização das páginas via `Outlet`.

- Define uma função para calcular a largura da scrollbar e aplica dinamicamente como uma variável CSS.

### `main.jsx`

- Configura o React Router DOM, criando as rotas para as páginas do site.
- Define uma estrutura de erro com um componente dedicado.

### `pages/Home/Home.jsx`
A página inicial exibe os conteúdos principais do site:
- `ColumnistsContainer`: Seção de colunistas.
- `MainContainerHome`: Seção principal com carrosséis e destaques.
- `SwiperSlide`: Exibe as 4 últimas notícias

### `pages/News/news.jsx`
Responsável por exibir uma notícia específica:
- Obtém o `id` da notícia via `useParams()`.
- Faz uma requisição `GET` ao backend para obter os dados.
- Renderiza título, subtítulo, data e conteúdo da notícia.

### `pages/Registration/newsRegistration.jsx`
Formulário para cadastro de notícias:
- Utiliza `ReactQuill` para edição do conteúdo da notícia.
- Permite upload de imagens com `ImageUpload`.
- Envia os dados via `axios` para o backend.

## Dependências Principais
O arquivo `package.json` lista as dependências principais do projeto, incluindo bibliotecas para gestão de estado, estilização e manipulação de conteúdo.

## Como Rodar o Projeto
1. Instale as dependências:,

	Consulte em detalhes e vesões do package.json 
	Observação importante: alguns elementos só funcionan corretamente com o nodejs 18, versõe posteriores não estão 100% estaveis

   ```sh
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
3. Acesse `http://localhost:5173/` no navegador.
