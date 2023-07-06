from django.shortcuts import render

# Create your views here.
def index(request):
    switch1=request.POST.get('sw1')
    switch2=request.POST.get('sw2')
    button=request.POST.get('submit')
    print(switch1,switch2)
    with open('func/static/values.txt', 'a') as file:
        file.write(f'Status Of Switch1 is : {switch1}\n')
        file.write(f'Status Of Switch2 is : {switch2}\n')
    return render(request,"index.html")
