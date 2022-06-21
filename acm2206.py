from collections import deque

n, m = map(int, input().split())
array = [list(input()) for _ in range(n)]
dap = [ [[-1]*2 for _ in range(m)] for _ in range(n)]

queue = deque()
queue.append([0,0,0])

dap[0][0][0] = 1

movex = [1,-1,0,0]
movey = [0,0,-1,1]
flag = False
oneTime = True
while queue:
    x, y, wall = queue.popleft()
    if(x == n-1 and y == m-1):
        print(dap[x][y][wall])
        flag = True
        break
    
    for i in range(0, 4):
        mx = x + movex[i]
        my = y + movey[i]
        if((0 <= mx < n) and (0 <= my < m) and dap[mx][my][wall] == -1):
            if(array[mx][my] == '0'):
                queue.append([mx, my, wall])
                dap[mx][my][wall] = dap[x][y][wall] + 1    
            elif(array[mx][my] == '1' and wall == 0):
                queue.append([mx, my, 1])
                dap[mx][my][1] = dap[x][y][wall] + 1

if(flag == False):
    print(-1)