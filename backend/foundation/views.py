from django.http import HttpResponse
from django.template import loader

from django.shortcuts import render

from .models import Question

from django.http import JsonResponse


def my_function(request):
    result = "Hello from Python!"
    data = {
        "message": result
    }
    return JsonResponse(data)


def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'foundation/index.html', context)


# ...
from django.shortcuts import get_object_or_404, render


# ...
def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'foundation/detail.html', {'question': question})


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)
