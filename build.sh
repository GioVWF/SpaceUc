#!/bin/bash

set -e

echo "--- Empezando el script de construcción ---"

echo "Contenido del directorio raíz:"
ls -la

echo "Instalando dependencias de requirements.txt..."
pip install -r requirements.txt

echo "Ejecutando collectstatic..."
python manage.py collectstatic --noinput

echo "--- Script de construcción finalizado exitosamente ---"