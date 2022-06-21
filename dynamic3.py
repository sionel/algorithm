def solution(m, n, puddles):
    answer = 0
    # water = 0
    route = [[0 for _ in range(m)] for _ in range(n)]
    route[0][0] = 1
    for i in range(0, n):
        for j in range(0, m):
            if(i+j == 0):
                continue
            if([j+1, i+1] in puddles):
                route[i][j] = 0
                # water = j
            elif(i == 0):
                route[0][j] = route[0][j-1]
                # water = 0
            elif(j == 0):
                route[i][0] = route[i-1][0]
                # water = 0
            else:
                route[i][j] = route[i-1][j] + route[i][j-1]
                # water = 0
        answer =  route[i][j] % 1000000007
    return answer


m = 5
n = 5
puddles = [[3, 4]]
print(solution(m, n, puddles))
