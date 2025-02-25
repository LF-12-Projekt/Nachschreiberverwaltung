# Makefile

help:
	@echo "Available targets:"
	@echo "  help                Display this help message."
	@echo "  external-network    Create an external Docker network named 'dcsnetwork'."
	@echo "  up-db               Start the database using docker-compose."
	@echo "  run                 Run the Flask application using Python 3."

external-network:
	docker network create "dcsnetwork"

up-db:
	docker-compose up -d

db-init:
	docker run --rm --net dcsnetwork mariadb:10.6 mysql -h"MakeupExamDB" -P3306 -uroot -e "`cat $$PWD/init*.sql`"

run:
	python controllers.py

down-db:
	docker-compose down



.PHONY: help external-network up-db db-init run down-db