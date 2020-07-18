(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{325:function(t,e,v){"use strict";v.r(e);var a=v(28),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"algorithm-graph-theory-dag-shortest-path"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-graph-theory-dag-shortest-path"}},[t._v("#")]),t._v(" Algorithm - Graph Theory - DAG Shortest Path")]),t._v(" "),v("p",[t._v("By "),v("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YuweiYin"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),v("p",[t._v("单源最短路径 Single Source Shortest Path")]),t._v(" "),v("p",[t._v("有向无环图 (Directed Acyclic Graph, DAG) 的单源最短路径")]),t._v(" "),v("h3",{attrs:{id:"有向无环图-dag-的单源最短路径"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#有向无环图-dag-的单源最短路径"}},[t._v("#")]),t._v(" 有向无环图 DAG 的单源最短路径")]),t._v(" "),v("p",[t._v("根据结点的"),v("strong",[t._v("拓扑排序")]),t._v("次序来对带(边)权重的有向无环图 G = (V, E) 进行边的松弛操作，可以在 "),v("code",[t._v("\\Theta(|V| + |E|)")]),t._v(" 时间内计算出从单个源结点 s 到所有结点之间的最短路径。在有向无环图中，即便存在权重为负值的边，但由于没有权重为负值的环路（负权环），所以最短路径都是存在的。")]),t._v(" "),v("p",[t._v("算法先对有向无环图进行拓扑排序，下面的伪代码展示了如何对一个有向无环图进行拓扑排序：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("TOPOLOGICAL_SORT(G)\n1  call DFS(G) to compute finishing times v.f for each vertex v\n2  as each vertex is finished, insert it into the front of a linked list\n3  return the linked list of vertices\n")])])]),v("p",[t._v("可以在 "),v("code",[t._v("\\Theta(|V| + |E|)")]),t._v(" 的时间内完成拓扑排序。因为 DFS 需要 "),v("code",[t._v("\\Theta(|V| + |E|)")]),t._v(" 的运行时间。将结点插入到链表最前端所需的时间为 O(1)，而一共只有 "),v("code",[t._v("|V|")]),t._v(" 个结点需要插入。")]),t._v(" "),v("p",[t._v("拓扑排序之后，可以确定结点之间的一个线性次序。如果 DAG 包含从结点 u 到结点 v 的一条路径，则 u 在拓扑排序的次序中位于 v 的前面。只需按照拓扑排序的次序对结点进行一遍处理即可。每次对一个结点进行处理时，从该结点发出的所有边进行松弛操作。")]),t._v(" "),v("p",[t._v("使用如下运行时间为 "),v("code",[t._v("\\Theta(|V|)")]),t._v(" 的算法来对 最短路径估计 和 前驱结点 进行初始化：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("INITIALIZE_SINGLE_SOURCE(G, s)\n1  for each vertex v \\in G.V\n2      v.d = inf\n3      v.p = nil\n4  s.d = 0\n")])])]),v("p",[t._v("在初始化操作结束后，对于所有的结点 v \\in V，有 v.p = nil 和 s.d = 0，以及除 s 外的所有结点 v 有 v.d = inf 无穷（表示不可达）。")]),t._v(" "),v("p",[t._v("对一条边 (u, v) 的松弛过程为：首先测试 是否可以对从 s 到 v 的最短路径进行改善。测试的方法是：将 s->u 的最短路径距离 加上 u->v 的边权重值，前述二者的和 与当前得到的 s->v 的最短路径估计 进行比较，如果前者更小，则更新估计值 v.d 并修改前驱结点 v.p。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("RELAX(u, v, w)\n1  if u.d + w(u, v) < v.d\n2      v.d = u.d + w(u, v)\n3      v.p = u\n")])])]),v("p",[t._v("执行 "),v("code",[t._v("DAG_SHORTEST_PATHS")]),t._v(" 过程求单源最短路径：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("DAG_SHORTEST_PATHS(G, w, s)\n1  topologically sort the vertices of G\n2  INITIALIZE_SINGLE_SOURCE(G, s)\n3  for each vertex u, taken in topologically sorted order\n4      for each vertex v \\in G.Adj[u]\n5          RELAX(u, v, w)\n")])])]),v("p",[t._v("算法流程描述：")]),t._v(" "),v("ol",[v("li",[t._v("在 1 行，进行拓扑排序（一次 DFS）。")]),t._v(" "),v("li",[t._v("在 2 行，对所有结点的 d 值和 p 值进行初始化。")]),t._v(" "),v("li",[t._v("在 3～5 行，外层循环对每个结点 u，内层循环对 u 的每个邻接结点 v 进行松弛操作。")])]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("第 1 行 拓扑排序的时间为 "),v("code",[t._v("\\Theta(|V| + |E|)")]),t._v("，第 2 行初始化过程的时间为 "),v("code",[t._v("\\Theta(|V|)")]),t._v("。3～5 行的外循环执行了 "),v("code",[t._v("|V|")]),t._v(" 次，内外循环合起来 恰好对每条边进行了一次松弛操作，（利用聚合分析）内循环每次对运行时间为 "),v("code",[t._v("\\Theta(1)")]),t._v("。因此本算法的总运行时间为 "),v("code",[t._v("\\Theta(|V| + |E|)")]),t._v("。对于以邻接表表示的图来说，这个时间为线性级。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/img/info-technology/algorithm/graph-theory/shortest-path/dag-shortest-path-1.png",alt:"dag-shortest-path-1"}})]),t._v(" "),v("p",[t._v("下面的定理将证明 "),v("code",[t._v("DAG_SHORTEST_PATHS")]),t._v(" 过程能够正确计算出 从源结点 s 出发的所有的最短路径。")]),t._v(" "),v("p",[t._v("《CLRS》"),v("strong",[t._v("定理 24.5")]),t._v("：如果带(边)权重的有向无环图 G = (V, E) 有一个源结点 s，则在算法 "),v("code",[t._v("DAG_SHORTEST_PATHS")]),t._v(" 终止时，对于所有的结点 v \\in V，有 v.d == d(s, v)，且前驱子图 Gp 是一棵最短路径树。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/img/info-technology/algorithm/graph-theory/shortest-path/dag-shortest-path-2.png",alt:"dag-shortest-path-2"}})]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("算法 "),v("code",[t._v("DAG_SHORTEST_PATHS")]),t._v(" 的一个有趣的应用是在 "),v("strong",[t._v("PERT (Program Evaluation and Review Technique) 图")]),t._v(" 的分析中进行关键路径的判断。PERT 图是一个有向无环图，在这种图中，每条边代表需要进行的工作，边上的权重代表执行该工作所需要的时间。如果边 (u, v) 进入结点 v，边 (v, x) 离开结点 v（从结点 v 发出），则工作 (u, v) 必须在工作 (v, x) 前完成。PERT 图中的一条路径代表的是一个工作执行序列。")]),t._v(" "),v("p",[v("strong",[t._v("关键路径")]),t._v("则是该有向无环图中一条(加权)"),v("strong",[t._v("最长")]),t._v("的路径，该条路径代表执行任何工作序列所需要的最长时间。因此，关键路径上的权重提供的是执行所有工作所需时间的下界。可以使用如下两种办法中的任意一种来找到 PERT 图中的关键路径：")]),t._v(" "),v("ul",[v("li",[t._v("将所有权重变为负数，然后运行 "),v("code",[t._v("DAG_SHORTEST_PATHS")]),t._v("。")]),t._v(" "),v("li",[t._v("运行 "),v("code",[t._v("DAG_SHORTEST_PATHS")]),t._v("，但进行如下修改：\n"),v("ul",[v("li",[t._v("在 "),v("code",[t._v("INITIALIZE_SINGLE_SOURCE")]),t._v(" 的第 2 行将 inf 替换为 -inf")]),t._v(" "),v("li",[t._v("在 "),v("code",[t._v("RELAX")]),t._v(" 过程中将 "),v("code",[t._v("<")]),t._v(" 替换为 "),v("code",[t._v(">")])])])])]),t._v(" "),v("h2",{attrs:{id:"python-代码范例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#python-代码范例"}},[t._v("#")]),t._v(" Python 代码范例")]),t._v(" "),v("p",[t._v("Python 环境：Python 3.7")]),t._v(" "),v("h3",{attrs:{id:"dag-shortest-path"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dag-shortest-path"}},[t._v("#")]),t._v(" DAG Shortest Path")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://github.com/YuweiYin/Code_Play/blob/master/Algorithm-Essence/graph-theory/shortest-path/dag-shortest-path.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Code Link"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),v("ul",[v("li",[t._v("Introduction to Algorithm (aka CLRS) Third Edition - Chapter 24")])])])}),[],!1,null,null,null);e.default=_.exports}}]);