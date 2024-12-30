# 🖼️ **Image Gallery**

**Descrição**:  
A **Image Gallery** é um projeto desenvolvido com **React** para criar uma galeria de imagens interativa e animada. O design foi feito no **Figma** e a aplicação utiliza o **React Router** para navegação, o **Framer Motion** para animações suaves, e consome a Unsplash Image API para exibir e manipular as imagens.

**Protótipo no Figma**:  
[Link para o protótipo no Figma](https://www.figma.com/design/VqeU0kOCtVtchpup6PaA7u/DelTech-Test?node-id=0-1&t=niyhi682DCULWRMB-1)


**Deploy no Vercel**:
[Link do projeto finalizado](https://deltest-frontend.vercel.app/)

---

## 🚀 Funcionalidades

- 🌟 **Exibição de imagens**: Exibe imagens dinâmicas em uma galeria.
- 🔍 **Busca por imagens**: Permite buscar imagens digitando em um campo de entrada (input).
- ⚡ **Responsividade**: O layout é adaptável para diferentes tamanhos de tela (desktop, tablet, mobile).
- 🎨 **Limite de resultados**: A cada consulta, até 20 imagens são exibidas.
- ⭐ **Favoritar imagens**: É possível favoritar imagens ao clicar em um ícone de favorito.
- 💖 **Visualizar imagens favoritas**: Uma seção separada para exibir as imagens que foram marcadas como favoritas.
- ❌ **Remover imagens de favoritas**: As imagens podem ser removidas da lista de favoritas a qualquer momento.
- 📡 **Consumo de API**: O sistema consome uma API para visualização e manipulação de imagens.
  
---

## 🛠️ Tecnologias

- **React**: A biblioteca JavaScript usada para construir a interface do projeto.
- **React Router**: Utilizado para navegação entre as diferentes páginas da galeria.
- **Framer Motion**: Biblioteca para animações e transições fluidas nos componentes.
- **Axios ou Fetch API**: Para consumir uma API externa de imagens.
- **CSS (ou Styled Components)**: Responsividade e estilo da aplicação.
- **Figma**: Ferramenta usada para criar o design e protótipo da interface.

---

## 📋 Como Rodar o Projeto

### Pré-requisitos

Antes de rodar o projeto, você precisa ter o [Node.js](https://nodejs.org/) instalado em sua máquina, pois ele é necessário para rodar o **npm** (Node Package Manager), que é utilizado para instalar as dependências do projeto.

### Passos para Rodar o Projeto

1. **Instale o Node.js**:
   
   - Verifique se o Node.js está instalado rodando o comando:
   
     ```bash
     node -v
     ```

   - Caso não tenha o Node.js instalado, você pode baixá-lo e instalá-lo [aqui](https://nodejs.org/).

2. **Clone o repositório**:


   ```bash
   git clone https://github.com/rafasp97/deltest-frontend.git
   ```

   
3. **Instale as dependências**:
   

   - Execute o comando para instalar todas as dependências do projeto, incluindo o React Router e o Framer Motion, caso já estejam no arquivo package.json:

   
   ```bash
   npm install
   ```


   - **Nota**: Se o React Router, Framer Motion e o Axios não estiverem listados nas dependências do projeto, você pode instalar separadamente com os seguintes comandos:

     
   ```bash
   npm install react-router-dom
   ```


   ```bash
   npm install framer-motion
   ```


   ```bash
   npm install axios
   ```


5. **Inicie o projeto**:


   ```bash
   npm start
   ```
   
