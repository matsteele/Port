
import collections


def shortestAlternatingPaths(n, red_edges, blue_edges):
    # Step 1: Create a directed graph with colored edges
    graph = [[] for i in range(n)]
    for i, j in red_edges:
        graph[i].append((j, 0))  # 0 corresponds to "red"
    for i, j in blue_edges:
        graph[i].append((j, 1))  # 1 corresponds to "blue"

    # Step 2: Run BFS two times:
    #   - Starting from a red edge
    #   - Starting from a blue edge

    def bfs(start, color):

        queue = collections.deque([(start, color)])
        visited = {(start, color)}
        dist = 0
        while queue:
                level_size = len(queue)
                while level_size:
                    node, color_node = queue.popleft()
                    answer[node] = min(answer[node], dist)
                    for neigh, color_neigh in graph[node]:
                        if (neigh, color_neigh) not in visited and color_neigh == (color_node+1) % 2:
                            visited.add((neigh, color_neigh))
                            queue.append((neigh, color_neigh))
                    level_size -= 1
                dist += 1
    answer = [float('inf')] * n
    bfs(0, 0)
    bfs(0, 1)
    return [val if val != float('inf') else -1 for val in answer]


# print(shortestAlternatingPaths(3, [[0, 1], [1, 2]], []))


graph = {'A': ['B', 'C', 'E'],
         'B': ['A', 'D', 'E'],
         'C': ['A', 'F', 'G'],
         'D': ['B'],
         'E': ['A', 'B', 'D'],
         'F': ['C'],
         'G': ['C']}


def bfs_shortest_path(graph, start, goal):
    # keep track of explored nodes
    explored = []
    # keep track of all the paths to be checked
    queue = [[start]]

    # return path if start is goal
    if start == goal:
        return "That was easy! Start = goal"

    # keeps looping until all possible paths have been checked
    while queue:
        # pop the first path from the queue
        path = queue.pop(0)
        print(path)
        # get the last node from the path
        node = path[-1]
        print(node,"node")
        print("explored", explored,)
        if node not in explored:
            neighbours = graph[node]
            # go through all neighbour nodes, construct a new path and
            # push it into the queue
            for neighbour in neighbours:
                new_path = list(path)
                print(new_path,"np before")
                new_path.append(neighbour)
                print(new_path, "new_path")
                queue.append(new_path) #set new path here
                
                # return path if neighbour is goal
                if neighbour == goal:
                    return new_path

            # mark node as explored
            explored.append(node)

    # in case there's no path between the 2 nodes
    return "So sorry, but a connecting path doesn't exist :("


sPath = bfs_shortest_path(graph, 'G', 'D')

print(sPath)
