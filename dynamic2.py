def solution(triangle):
    answer = 0

    pre = [0]
    next = []

    for i in range(0, len(triangle)):
        distances = triangle[i]
        for j in range(0, len(distances)):
            distance = distances[j]
            
            if(j == 0):
                next.append(pre[0] + distance)
            elif(j == len(distances)-1):
                next.append(pre[j-1] + distance)
            else:
                next.append(max(pre[j-1] + distance, pre[j] + distance))
        # print(next)
        pre = next
        print(pre)
        next = []
        

    return max(pre)


triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]
# triangle = [[1,1], [1,1,1], [1,1,1], [1,1]]
print(solution(triangle))