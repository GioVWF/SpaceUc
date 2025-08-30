"""
WSGI config for SpaceUC project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'SpaceUC.settings')

if not os.environ.get('DEBUG', '').lower() == 'true':
    import django
    django.setup()
    from django.core.management import call_command
    call_command('collectstatic', '--noinput', verbosity=0)


application = get_wsgi_application()

app = application

