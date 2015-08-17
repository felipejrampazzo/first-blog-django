# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20150802_1247'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ('-created',)},
        ),
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.ImageField(upload_to='templates', default=''),
            preserve_default=False,
        ),
    ]
