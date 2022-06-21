from collections import deque

for i in range(2, 1000):
  end = i
  visited = [1001 for _ in range(1001)] 

  queue = [[1, 1, 1, True]];
  visited[0] = 0
  while queue:
    position, time, copy, flag = queue[0]
    del queue[0]

    if (position == end):
      a = time;
      break
    
    if (visited[position] <= time and flag):
      continue
    
    visited[position] = time;



    if (position - 1 > 0):
      queue.append([position - 1, time + 1 , copy, True]);

    if (position + copy <= 1000):
      queue.append([position + copy, time + 1, copy, True]);

    if (position != copy and flag):
      queue.append([position, time + 1 , position, False]);





  # end = int(input())
  v = [[False] * (end + 1) for _ in range(end + 1)]
  q = deque()
  q.append([1, 0, 0])
  v[1][0] = True

  while q:
      position, copy, time = q.popleft()

      if position == end:
          b = time
          break

      if position != copy and not v[position][position]:
          v[position][position] = True
          q.append([position, position, time + 1])
      if position + copy <= end and copy != 0 and not v[position + copy][copy]:
          v[position + copy][copy] = True
          q.append([position + copy, copy, time + 1])
      if position != 0 and not v[position - 1][copy]:
          v[position - 1][copy] = True
          q.append([position - 1, copy, time + 1])
          
  if(a!=b):
    print(a)
    print(b)
    print(i)
    break
