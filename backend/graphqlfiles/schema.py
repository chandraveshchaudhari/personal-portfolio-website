from graphene import Argument, Field, ID, ObjectType, Schema
from graphene_django.filter import DjangoFilterConnectionField
from foundation.models import Note
from .foundation.filters import NoteFilter
from .foundation.mutations import NoteCreate, NoteDelete
from .foundation.types import NoteType


class Query(ObjectType):
    notes = DjangoFilterConnectionField(NoteType, filterset_class=NoteFilter)
    note = Field(NoteType, id=Argument(ID, required=True))

    def resolve_notes(root, info, **kwargs):
        return Note.objects.all()

    def resolve_note(root, info, **kwargs):
        return Note.objects.get(id=kwargs.get('id'))


class Mutation(ObjectType):
    note_create = NoteCreate.Field()
    note_delete = NoteDelete.Field()


schema = Schema(query=Query, mutation=Mutation)
