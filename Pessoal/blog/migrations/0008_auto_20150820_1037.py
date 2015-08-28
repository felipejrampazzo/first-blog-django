# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_auto_20150820_1027'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='id',
            field=models.AutoField(primary_key=True, default=1, serialize=False),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]
