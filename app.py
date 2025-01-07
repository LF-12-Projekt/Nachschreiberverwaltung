import os

from app import create_app

app = create_app()

if __name__ == '__main__':
    # Host und Port aus Umgebungsvariablen lesen oder Standardwerte verwenden
    host = os.getenv('FLASK_RUN_HOST', '127.0.0.1')
    port = int(os.getenv('FLASK_RUN_PORT', 8080))

    print(f"Server is listening on port: http://{host}:{port}")

    app.run(host=host, port=port, debug=True)

