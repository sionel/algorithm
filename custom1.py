# 3 3
# 1 2 3
# 4 5 6
# 7 8 9

# 3 5
# 1 2 3
# 4 5 6
# 7 8 9
# 10 11 12
# 13 14 15

col, row = map(int, input().split()) 
a = [] 
for i in range(row): 
  a.append(list(input().split()))
dap = [[-1 for _ in range(row)] for _ in range(col)]

for c in range(col):
    for r in range(row):
        Rr = row-1-r
        dap[c][r] = a[Rr][c]

print(dap)
