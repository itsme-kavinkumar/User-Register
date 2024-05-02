# User-Register

This repository contains two projects: UserProjectApi and UserProjectWeb. UserProjectApi serves as the backend API, while UserProjectWeb is the frontend web application.

Backend Project Setup: UserProjectApi

Open the project folder in VS Code.
Open a new command terminal and create a virtual environment using the following command:
py -m venv virtual

Activate the virtual environment: 
cd virtual\Scripts\activate

Install the required packages by running:
pip install -r requirements.txt

Navigate to the UserProjectApi directory:
cd UserProjectApi

Configure your local database in settings.py.
Run the following commands to apply migrations to the database:
py manage.py makemigrations
py manage.py migrate

Start the server by running:
py manage.py runserver

Frontend Project Setup: UserProjectWeb
Open a new command terminal.
If the virtual environment is not already activated, activate it using:
cd virtual\Scriptsactivate


Navigate to the UserProjectWeb directory:
cd UserProjectWeb

Start the web server by running:

py manage.py runserver
