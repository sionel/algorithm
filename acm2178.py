n, m = map(int, input().split())
array = [list(input()) for _ in range(n)]

array[0][0] = 1
queue = [[0, 0]]
while queue:
    x, y = queue[0][0], queue[0][1]
    del queue[0]

    x1 = x + 1
    y1 = y
    if(0 <= x1 < n and 0 <= y1 < m and array[x1][y1] == '1'):
        queue.append([x1, y1])
        array[x1][y1] = int(array[x][y]) + 1

    x2 = x - 1
    y2 = y
    if(0 <= x2 < n and 0 <= y2 < m and array[x2][y2] == '1'):
        queue.append([x2, y2])
        array[x2][y2] = int(array[x][y]) + 1

    x3 = x
    y3 = y + 1
    if(0 <= x3 < n and 0 <= y3 < m and array[x3][y3] == '1'):
        queue.append([x3, y3])
        array[x3][y3] = int(array[x][y]) + 1

    x4 = x
    y4 = y - 1
    if(0 <= x4 < n and 0 <= y4 < m and array[x4][y4] == '1'):
        queue.append([x4, y4])
        array[x4][y4] = int(array[x][y]) + 1
        
        
print(array[n-1][m-1])

# visited = [[0, 0, 1]]
# count = 0

# while():
#     x, y, come = visited[0]
