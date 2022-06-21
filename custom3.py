# 3 3
# 0 1 3
# 2 4 6
# 5 7 8

#  5  3
#  0  1  5  6 11
#  2  4  7 10 12
#  3  8  9 13 14

col, row = map(int, input().split())
dap = [[0 for _ in range(col)] for _ in range(row)]
Cr = 0
count = 0
rflag = True
for roop in range(col+row-1):
    if(roop >= col):
        if(rflag):
            for c in range(roop-col+1,row,1):
                if(Cr <= row):
                    dap[c][roop-c] = count
                    count += 1
        else:
            for c in range(roop-col+1,row,1):
                if(Cr <= row):
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
    rflag = not rflag
print(dap)

