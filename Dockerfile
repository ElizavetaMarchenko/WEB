# FROM python:3.8

# RUN apt-get update \
#     && apt-get install -y nodejs \
#     && apt-get install -y npm \
#     && python -m pip install --upgrade pip

# WORKDIR /app
# COPY ./online_store /app

# RUN pip install --no-cache-dir -r requirements.txt

# # RUN npm install
# WORKDIR /app
FROM python:3.8

RUN apt-get update \
    && apt-get install -y nodejs \
    && apt-get install -y npm \
    && python -m pip install --upgrade pip

WORKDIR /app
COPY . .

RUN pip install --no-cache-dir -r requirements.txt
CMD cd /online_store && python manage.py runserver 0.0.0.0:8000