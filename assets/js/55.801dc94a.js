(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{326:function(t,v,a){"use strict";a.r(v);var r=a(28),_=Object(r.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"algorithm-graph-theory-dijkstra"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-graph-theory-dijkstra"}},[t._v("#")]),t._v(" Algorithm - Graph Theory - Dijkstra")]),t._v(" "),a("p",[t._v("By "),a("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YuweiYin"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("单源最短路径 Single Source Shortest Path")]),t._v(" "),a("p",[t._v("非负权值加权图的最短路径 - Dijkstra 算法")]),t._v(" "),a("h2",{attrs:{id:"dijkstra-算法设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dijkstra-算法设计"}},[t._v("#")]),t._v(" Dijkstra 算法设计")]),t._v(" "),a("p",[t._v("Dijkstra 算法解决的是"),a("strong",[t._v("带(边)权重的有向图")]),t._v("上的"),a("strong",[t._v("单源最短路径")]),t._v("问题，该算法要求"),a("strong",[t._v("所有边的权重都为非负值")]),t._v("。在下文中，均假定对于所有的边 (u, v) \\in E，都有 w(u, v) >= 0。如果所采用的实现方式合适，Dijkstra 算法的渐近运行时间低于 "),a("a",{attrs:{href:"(./bellman-ford)"}},[t._v("Bellman-Ford 算法")]),t._v("。")]),t._v(" "),a("p",[t._v("Dijkstra 算法属于贪心算法，在运行过程中 维持的关键信息是"),a("strong",[t._v("一组结点集合 S")]),t._v("。从源结点 s 到该集合中的每个结点之间的最短路径已被找到。算法重复从结点集 V-S 中选择(当前)"),a("strong",[t._v("最短路径估计最小")]),t._v("的结点 u 加入到集合 S 中，然后对所有"),a("strong",[t._v("从 u 发出的边")]),t._v("进行"),a("strong",[t._v("松弛")]),t._v("操作。在下面的伪代码中，使用一个最小优先队列 Q 来保存结点集合，每个结点在 Q 中的关键值 key 为其 d 值。d 意为 distance，v.d 是源结点 s 到结点 v 的最短路径估计值。")]),t._v(" "),a("p",[t._v("使用如下运行时间为 "),a("code",[t._v("\\Theta(|V|)")]),t._v(" 的算法来对 最短路径估计 和 前驱结点 进行初始化：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("INITIALIZE_SINGLE_SOURCE(G, s)\n1  for each vertex v \\in G.V\n2      v.d = inf\n3      v.p = nil\n4  s.d = 0\n")])])]),a("p",[t._v("在初始化操作结束后，对于所有的结点 v \\in V，有 v.p = nil 和 s.d = 0，以及除 s 外的所有结点 v 有 v.d = inf 无穷（表示不可达）。")]),t._v(" "),a("p",[t._v("对一条边 (u, v) 的松弛过程为：首先测试 是否可以对从 s 到 v 的最短路径进行改善。测试的方法是：将 s->u 的最短路径距离 加上 u->v 的边权重值，前述二者的和 与当前得到的 s->v 的最短路径估计 进行比较，如果前者更小，则更新估计值 v.d 并修改前驱结点 v.p。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("RELAX(u, v, w)\n1  if u.d + w(u, v) < v.d\n2      v.d = u.d + w(u, v)\n3      v.p = u\n")])])]),a("p",[t._v("执行 Dijkstra 算法求单源最短路径：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("DIJKSTRA(G, w, s)\n1  INITIALIZE_SINGLE_SOURCE(G, s)\n2  S = \\emptyset\n3  Q = G.V\n4  while Q is not empty\n5      u = ExtractMin(Q)\n6      S = S \\cup {u}\n7      for each vertex v \\in G.Adj[u]\n8          RELAX(u, v, w)\n")])])]),a("p",[t._v("算法流程描述：")]),t._v(" "),a("ol",[a("li",[t._v("在 1 行，对所有结点的 d 值和 p 值进行初始化。")]),t._v(" "),a("li",[t._v("在 2 行，将集合 S 初始化为一个空集")]),t._v(" "),a("li",[t._v("在 3 行，对最小优先队列 Q 进行初始化，并将 V 中所有结点入队")]),t._v(" "),a("li",[t._v("在 4～8 行，只要 Q 不空，则继续 while 循环\n"),a("ol",[a("li",[t._v("在 5 行，取出 Q 中最小 d 值的结点 u")]),t._v(" "),a("li",[t._v("在 6 行，把结点 u 加入集合 S 中")]),t._v(" "),a("li",[t._v("在 7～8 行的 for 循环中，对于 u 的每个邻接结点 v，松弛边 (u, v)，并隐含着执行 Q 中元素的降 key 操作。")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/info-technology/algorithm/graph-theory/shortest-path/dijkstra-1.png",alt:"dijkstra-1"}})]),t._v(" "),a("h2",{attrs:{id:"dijkstra-算法的正确性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dijkstra-算法的正确性"}},[t._v("#")]),t._v(" Dijkstra 算法的正确性")]),t._v(" "),a("p",[t._v("因为 Dijkstra 算法总是选择集合 V-S 中“最轻”或“最近”的结点来加入到集合 S 中，该算法使用的是"),a("RouterLink",{attrs:{to:"/article/info-technology/algorithm/greedy-algorithm/"}},[t._v("贪心策略")]),t._v("。下面的定理和推论指出，使用贪心策略的 Dijkstra 算法能够计算出最短路径。证明的关键在于：该算法在每次选择结点 u 加入到集合 S 后，有 u.d == d(s, u)，即达到了与 s 的最短距离。")],1),t._v(" "),a("p",[t._v("《CLRS》"),a("strong",[t._v("定理 24.6")]),t._v("（Dijkstra 算法的正确性）：Dijkstra 算法运行在带权重的有向图 G = (V, E) 时，如果所有权重为非负值，则在算法终止时，对于所有结点 u \\in V，有 u.d == d(s, u)。")]),t._v(" "),a("p",[a("strong",[t._v("证明")]),t._v("：使用此循环不变式：在算法第 4～8 行的 while 语句的每次循环开始前，对每个结点 v \\in S，有 v.d == d(s, v)。")]),t._v(" "),a("p",[t._v("只需证明对于每个结点 u \\in V，当结点 u 被加入到集合 S 时，有 u.d == d(u, v)，一旦证明这点，就可以利用"),a("strong",[t._v("上界性质")]),t._v("来证明该循环不变式 在后续的所有时间内保持成立。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/info-technology/algorithm/graph-theory/shortest-path/dijkstra-2.png",alt:"dijkstra-2"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/info-technology/algorithm/graph-theory/shortest-path/dijkstra-3.png",alt:"dijkstra-3"}})]),t._v(" "),a("p",[t._v("《CLRS》"),a("strong",[t._v("推论 24.7")]),t._v("：如果在带权重的有向图 G = (V, E) 上运行 Dijkstra 算法，其中的权重皆为非负值，源结点为 s，则在算法终止时，前驱子图 Gp 是一棵根结点为 s 的最短路径树。")]),t._v(" "),a("h2",{attrs:{id:"dijkstra-算法分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dijkstra-算法分析"}},[t._v("#")]),t._v(" Dijkstra 算法分析")]),t._v(" "),a("p",[t._v("Dijkstra 算法的运行速度取决于最小优先队列 Q 的具体实现。算法中用到了 "),a("code",[t._v("|V|")]),t._v(" 次 "),a("code",[t._v("insert")]),t._v(" 操作、"),a("code",[t._v("extract_min")]),t._v(" 操作，以及至多 "),a("code",[t._v("|E|")]),t._v(" 次的 "),a("code",[t._v("decrease_key")]),t._v(" 操作。")]),t._v(" "),a("p",[t._v("如果用"),a("strong",[t._v("数组")]),t._v("来维护最小优先队列 Q，先对 "),a("code",[t._v("|V|")]),t._v(" 个结点编号，然后将 v.d 的值存放在数组的第 v 个记录里。这样每次 "),a("code",[t._v("insert")]),t._v(" 和 "),a("code",[t._v("decrease_key")]),t._v(" 操作的执行时间为 O(1)，但每次 "),a("code",[t._v("extract_min")]),t._v(" 操作需要搜索整个数组，耗时为 "),a("code",[t._v("O(|V|)")]),t._v("。因此算法的总运行时间为 "),a("code",[t._v("O(|V|^2 + |E|) = O(|V|^2)")]),t._v("。")]),t._v(" "),a("p",[t._v("如果是稀疏图，特别地，如果 "),a("code",[t._v("|E| = o(|V|^2 / log |V|)")]),t._v("，则可以使用二叉堆来实现最小优先队列，从而改善算法的运行时间。在这种模式下，构建最小二叉堆的成本为 "),a("code",[t._v("O(|V|)")]),t._v("。每次 "),a("code",[t._v("decrease_key")]),t._v(" 操作的执行时间为 "),a("code",[t._v("O(log |V|)")]),t._v("，而至多有 "),a("code",[t._v("|E|")]),t._v(" 次此操作。因此算法的总运行时间为 "),a("code",[t._v("O((|V| + |E|) log |V|)")]),t._v("。若所有结点都可以从源结点到达，则该时间为 "),a("code",[t._v("O(|E| log |V|)")]),t._v("。若稀疏图 "),a("code",[t._v("|E| = o(|V|^2 / log |V|)")]),t._v("，则该时间成本相对于前面数组实现的 "),a("code",[t._v("O(|V|^2)")]),t._v(" 有所改善。")]),t._v(" "),a("p",[t._v("但如果使用 "),a("a",{attrs:{href:"../../data-structure/fibonacci-heap"}},[t._v("斐波那契堆")]),t._v(" 来实现最小优先队列 Q，则可以将 Dijkstra 算法的运行时间改善到 "),a("code",[t._v("O(|E| + |V| log |V|)")]),t._v("。因为如果斐波那契堆有 "),a("code",[t._v("|V|")]),t._v(" 个元素，则 "),a("code",[t._v("extract_min")]),t._v(" 操作的摊还时间为 "),a("code",[t._v("O(log |V|)")]),t._v("，而 "),a("code",[t._v("decrease_key")]),t._v(" 操作的摊还时间仅为 O(1)。在后面的算法具体实现中，即是采用斐波那契堆 Fibonacci Heap 来实现最小优先队列 Q。")]),t._v(" "),a("p",[t._v("从历史的角度上看，斐波那契堆提出的动机就是因为人们观察到 Dijkstra 算法调用的 "),a("code",[t._v("decrease_key")]),t._v(" 操作通常较多，比 "),a("code",[t._v("extract_min")]),t._v(" 操作更多。因此，任何能够将 "),a("code",[t._v("decrease_key")]),t._v(" 操作的摊还代价降低到 "),a("code",[t._v("o(log |V|)")]),t._v(" 而又不增加 "),a("code",[t._v("extract_min")]),t._v(" 操作的摊还代价的方法 都将产生比二叉堆的渐进性能更优的实现。")]),t._v(" "),a("p",[t._v("Dijkstra 算法既类似于 "),a("a",{attrs:{href:"../graph-basis/graph-basis"}},[t._v("广度优先搜索")]),t._v("，也有些类似于计算最小生成树 MST 的 "),a("a",{attrs:{href:"../minimum-spanning-tree/mst-prim"}},[t._v("Prim 算法")]),t._v("（而且二者均适用 Fibonacci Heap 实现最小优先队列）。它与广度优先搜索的类似点在于 集合 S 对应的是广度优先搜索中的黑色结点集合：正如集合 S 中的结点的最短路径权重 已经被计算出来一样，在广度优先搜索中，黑色结点的正确的广度优先距离 也已经被计算出来了。Dijkstra 算法与 Prim 算法的相似之处是，两个算法都使用最小优先队列来寻找给定集合（即 Dijkstra 算法中的 S 集合与 Prim 算法中逐步增长的树）之外的“最轻”结点，将该结点加入到集合里，并对位于集合外面的结点的权重进行调整。")]),t._v(" "),a("h2",{attrs:{id:"python-代码范例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-代码范例"}},[t._v("#")]),t._v(" Python 代码范例")]),t._v(" "),a("p",[t._v("Python 环境：Python 3.7")]),t._v(" "),a("h3",{attrs:{id:"dijkstra-fibonacci-heap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dijkstra-fibonacci-heap"}},[t._v("#")]),t._v(" Dijkstra (Fibonacci Heap)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/YuweiYin/Code_Play/blob/master/Algorithm-Essence/graph-theory/shortest-path/dijkstra.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Code Link"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[t._v("Introduction to Algorithm (aka CLRS) Third Edition - Chapter 24")])])])}),[],!1,null,null,null);v.default=_.exports}}]);