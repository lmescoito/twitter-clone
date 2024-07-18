# Use a imagem oficial do Python 3.12
FROM python:3.11.9

# Impede que o Python faça buffering, permitindo que os logs sejam exibidos em tempo real
ENV PYTHONUNBUFFERED=1

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo de requisitos para o contêiner
COPY requirements.txt /app/


# Instala as dependências do projeto
RUN pip install --no-cache-dir -r requirements.txt

# Copia todo o código do projeto para o contêiner
COPY . /app/

# Expõe a porta que o Django usará para servir a aplicação
EXPOSE 8000


# Comando padrão para rodar a aplicação
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
