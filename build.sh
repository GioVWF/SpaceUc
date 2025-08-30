#!/bin/bash


.\venv\Scripts\activate
pip install -r requirements.txt
python manage.py collectstatic --noinput