from collections import deque

n, m = map(int, input().split())
max = 1000000000
dap = set()

queue = deque()
queue.append([n,''])

dap.add(n)
if(m == 0):
    print('-')
elif(n != m):
    while queue:
        x, s = queue.popleft()
        if(x == m):
            print(s)
            exit(0)

        y = x * x
        if(y <= max and y not in dap):
            next = s+'*'
            dap.add(y)
            queue.append([y,next])
        y = x + x
        if(0 <= y <= max and y not in dap):
            next = s +'+'
            dap.add(y)
            queue.append([y,next])
        y = 1
        if(y not in dap):
            next = s +'/'
            dap.add(y)
            queue.append([y,next])
    print(-1)
else: 
    print(0)
