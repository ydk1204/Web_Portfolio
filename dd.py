game = ['3', '6', '9']

j = int(input())
count = 0

for i in range(1, j+1) :
    for s in str(i) :
        print(s)
        if s in game :
            count = count + 1

print(count)
