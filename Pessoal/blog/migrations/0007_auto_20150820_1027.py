# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_auto_20150812_2005'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='id',
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(primary_key=True, serialize=False, max_length=100),
        ),
    ]
