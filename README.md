# User-Register :busts_in_silhouette:

Welcome to the User-Register repository! This project is split into two main components:

- **UserProjectApi**: This serves as the backend API, handling all data management and server-side logic.
- **UserProjectWeb**: This is the frontend web application, providing the user interface that interacts with the backend.


## :gear: Backend Project Setup: UserProjectApi

Follow these steps to set up the backend API:

1. **Open the project folder in VS Code.**
2. **Set up a virtual environment:**
   - Open a new command terminal.
   - Create a virtual environment by running:
     ```
     py -m venv virtual
     ```
   - Activate the virtual environment:
     ```
     cd virtual\Scripts\activate
     ```

3. **Install required packages:**
   - Run:
     ```
     pip install -r requirements.txt
     ```
4. **Navigate to the UserProjectApi directory:**
     - Navigate to the `UserProjectApi` directory:
     ```
     cd UserProjectApi
     ```
5. **Configure the database:**
   
   - Configure your local database in `settings.py`.

6. **Apply database migrations:**
   - Run the following commands:
     ```
     py manage.py makemigrations
     py manage.py migrate
     ```

7. **Start the server:**
   - Run:
     ```
     py manage.py runserver
     ```

## :computer: Frontend Project Setup: UserProjectWeb

Set up the frontend application with these steps:

1. **Open a new command terminal.**
2. **Activate the virtual environment (if not already activated):**
cd virtual\Scripts\activate


3. **Navigate to the frontend directory and start the server:**
- Navigate:
  ```
  cd UserProjectWeb
  ```
- Start the server:
  ```
  py manage.py runserver
  ```
