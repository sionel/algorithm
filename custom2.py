# 3 3
# 0 1 3
# 2 4 6
# 5 7 8

#  5  3
#  0  1  3  6  9
#  2  4  7 10 12
#  5  8 11 13 14
col, row = map(int, input().split())
dap = [[0 for _ in range(col)] for _ in range(row)]
Cr = 0
count = 0
for roop in range(col+row-1):
    if(roop >= col):
        for c in range(roop-col+1,row,1):
            dap[c][roop-c] = count
            count += 1
    else:
        for c in range(roop+1):
            Cr += 1
            if(Cr <= row):
                # print(c , ' ' , roop - c)
                dap[c][roop-c] = count
                count += 1
    Cr = 0
print(dap)
