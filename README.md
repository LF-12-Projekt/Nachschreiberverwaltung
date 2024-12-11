# Nachschreiberverwaltung
## Aufsetzen des Virtual Environments

Dies ist eine Anleitung zum Aufsetzen des Virtual Environments.

Dies ist vor der weiteren Installation von Flask und Co. auszuführen.

### Step 1 - Create an Environment
im Projekt-directory:

 macOS/Linux             | Windows           | 
-------------------------|-------------------| 
 $ python3 -m venv .venv | \> py -3 -m venv .venv | 

### Step 2 - Activate the environment 
dieses soll immer vor der Arbeit darin aktiviert werden.

 macOS/Linux             | Windows                   | 
-------------------------|---------------------------| 
 $ . .venv/bin/activate | \> .venv\Scripts\activate | 

### Step 3 - Install Flask

$ pip install Flask