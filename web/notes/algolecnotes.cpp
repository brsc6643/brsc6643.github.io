#include <limits.h>

def dijkstra(g, s):
    for v in g.vertices:
        v.distance = INT_MAX
    s.distance = 0
    toexplore = PriorityQueue([s], sortkey = lambda v: v.distance)

    while not toexplore.isempty():
        v = toexplore.popmin()
        // v.distance is the true shortest distance from s to v
        // v is never put back into toexplore
        for (w, edgecost) in v.neighbors:
            if dist_w < w.distance:
                w.distance = dist_w
                if w in toexplore:
                    toexplore.decreasekey(w)
                else:
                    toexplore.push(w)
