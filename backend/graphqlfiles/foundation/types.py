from graphene_django import DjangoObjectType
from foundation.models import Note


class NoteType(DjangoObjectType):
    class Meta:
        model = Note
        only_fields = (
            'id',
            'title',
            'body',
            'created_at',
        )
        use_connection = True
