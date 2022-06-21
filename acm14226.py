end = int(input())
visited = [[1001 for _ in range(1001)] for _ in range(1001)] 

queue = [[1, 1, 1, True]];
visited[0][0] = 0
while queue:
  position, time, copy, flag = queue[0]
  del queue[0]
  
  if (position == end):
    print(time);
    break
  
  if (visited[position][copy] <= time and flag):
    continue
  
  visited[position][copy] = time;
  

  
  if (position - 1 > 0):
    queue.append([position - 1, time + 1 , copy, True]);

  if (position + copy <= 1000):
    queue.append([position + copy, time + 1, copy, True]);
  
  if (position != copy and flag):
    queue.append([position, time + 1 , position, False]);