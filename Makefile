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

run:
	python app.py

down-db:
	docker-compose down


.PHONY: help external-network up-db run down-db