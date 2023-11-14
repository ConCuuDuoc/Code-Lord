FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM python:3.10-slim
WORKDIR /app/Django

COPY ./Django .
RUN sudo apt install libpq-dev
COPY requirement.txt .
# Install Django and other Python dependencies
RUN pip install -r requirement.txt
EXPOSE 8000
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]