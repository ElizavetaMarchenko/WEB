# WEB
online store <br />
Для того чтобы заработало приложение в python нужно устаночить окружающую среду venv в корневую папку online_store. Командой: python -m venv venv <br />
Также нужно установить django в venv командой: pip install Django <br />
Также нужно установить djangorestframework в venv командой: pip install djangorestframework <br />
Также нужно установить django-cors-headers в venv командой: pip install django-cors-headers <br />
Также нужно скачать node.js на компьютер, чтобы была возмжность пользоваться npm  <br />
Также нужно установить axios в \online_store\frontend командой:  npm install axios <br />
<<<<<<< HEAD
=======
Также нужно установить async в \online_store\frontend командой:  npm install async <br />
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
<br />
Чтобы собрать приложение:<br />
0. Активировать venv командой: venv/scripts/activate
1. В командной строке(cmd) компьютера в директории ..\online_store\frontend ввести команду: npm run build <br />
<<<<<<< HEAD
2. В PyCharm в директории \online_store ввести команду: python manage.py  collectstatic для переноса статических элементов фронтенда в static папку проекта Django <br />
=======
2. В PyCharm в директории \online_store ввести команду: python manage.py  collect static (для переноса статических элементов фронтенда в static папку проекта Django <br />
>>>>>>> da8e633f6001102a99971fb2d33165b9f186bfff
3. В PyCharm в директории \online_store ввести команду: python manage.py runserver <br />
Нажимать на появившуюся ссылку не обязательно<br />
4. В командной строке(cmd) компьютера в директории ..\online_store\frontend ввести команду: npm start <br />
<br />
Данные действия нужно выполнять при каждом изменении файлов <br />
Если файлы не изменялись, то переходим сразу к 3 пункту. <br />
0 шаг выполнять, если был выход из виртуального окружения venv
