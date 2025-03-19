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


## Aufsetzen des Frontends
## Voraussetzungen

Folgende Software muss auf deinem System installiert sein:

- [Node.js](https://nodejs.org/) (empfohlene Version: 22.12.0)
- [Yarn](https://yarnpkg.com/)
- [Angular CLI](https://angular.io/cli)

## Installation

Führe folgende Befehle aus, um das Projekt lokal einzurichten:

```sh
# Abhängigkeiten installieren
yarn install
```

## Entwicklung

Starte die Entwicklungsumgebung mit:

```sh
yarn start
```

Das Projekt wird unter `http://localhost:4200/` verfügbar sein.


# Datenbankverbindung und Initialisierung

## Verbindung zur MariaDB-Datenbank

Um sich mit der MariaDB-Datenbank zu verbinden, verwende folgende URL:

```
jdbc:mariadb://localhost:3306/
```

### Zugangsdaten:
- Benutzername: `root`
- Passwort: *(kein Passwort erforderlich)*

## Initialisierung der Datenbank

Führe die Datei `init.sql` aus, um die Tabellen zu erstellen und mit Testdaten zu befüllen.
