#!/bin/bash
set -e

# Instalar dependencias
pip install -r requirements.txt

# Recolectar estáticos
python manage.py collectstatic --noinput
