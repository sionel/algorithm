// https://programmers.co.kr/learn/courses/30/lessons/92334?language=python3

function solution(id_list, reports, k) {
    let answer = [];
    let reportSet = new Array(...new Set(reports))
    let banned = []
    id_list.forEach(id => {
    });
    const targets = {}
    const data = {}
    id_list.forEach((id) => {
        data[id] = []
        targets[id] = 0
        answer.push(0)
    });

    while (reportSet.length) {
        report = reportSet.pop()
        const [reporter, target] = report.split(' ')
        data[reporter].push(target)
        targets[target]++
        if (targets[target] >= k)
            banned.push(target)
    }
    Object.keys(data).forEach((key, index) => {
        banned.forEach(ban => {
            data[key].indexOf(ban) !== -1 && answer[index]++
        })
    })
    return answer
}

id_list = ["muzi", "frodo", "apeach", "neo"]
report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"]
k = 2

console.log(solution(id_list, report, k));