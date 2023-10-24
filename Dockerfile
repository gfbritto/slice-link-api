# Use a imagem Node.js como base
FROM node:18

# Crie um diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e o arquivo yarn.lock (se existir)
COPY package.json yarn.lock* ./

# Instale as dependências com o Yarn
RUN yarn

# Copie todo o código-fonte do projeto para o diretório de trabalho
COPY . .

# Compilar o código TypeScript (se você estiver usando TypeScript)
RUN yarn build

# Expõe a porta em que sua aplicação estará em execução
EXPOSE 3000

# Comando para iniciar sua aplicação
CMD [ "yarn", "start" ]