# https://programmers.co.kr/learn/courses/30/lessons/92334?language=python3

from array import array


def solution(id_list: array, reports: array, k: int):
    answer = []
    id_list.sort()
    reports.sort()
    print(reports)
    preReporter = ''
    preTarget = ''
    arr = [[0 for j in range(len(id_list))] for i in range(len(id_list))]
    
    while(len(reports)):
        report = reports.pop()
        reporter, target = report.split(' ')
        if(preReporter == reporter & preTarget == target):
            continue
        
        print(target)

        preReporter = reporter
        preTarget = target

    return answer


id_list = ["muzi", "frodo", "apeach", "neo"]
report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"]
k = 2
result = [2, 1, 1, 0]

print(solution(id_list, report, k))
