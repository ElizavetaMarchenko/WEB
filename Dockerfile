FROM python:3.8
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY requirements.txt requirements.txt
RUN apt-get update \
    && python -m pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

COPY . .


