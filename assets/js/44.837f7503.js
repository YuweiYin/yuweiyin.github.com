(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{305:function(_,t,v){"use strict";v.r(t);var r=v(28),a=Object(r.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"algorithm-graph-theory"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-graph-theory"}},[_._v("#")]),_._v(" Algorithm - Graph Theory")]),_._v(" "),v("p",[_._v("By "),v("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[_._v("YuweiYin"),v("OutboundLink")],1)]),_._v(" "),v("p",[v("strong",[_._v("Minimum Spanning Tree")])]),_._v(" "),v("h2",{attrs:{id:"目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[_._v("#")]),_._v(" 目录")]),_._v(" "),v("ul",[v("li",[_._v("最小生成树 MST\n"),v("ul",[v("li",[v("a",{attrs:{href:"./mst-prim"}},[_._v("Prim 算法")])]),_._v(" "),v("li",[v("a",{attrs:{href:"./mst-kruskal"}},[_._v("Kruskal 算法")])]),_._v(" "),v("li",[_._v("Sollin 算法")]),_._v(" "),v("li",[_._v("次优最小生成树")]),_._v(" "),v("li",[_._v("第 k 小生成树")]),_._v(" "),v("li",[_._v("瓶颈生成树")]),_._v(" "),v("li",[_._v("最优比例生成树")]),_._v(" "),v("li",[_._v("最小树形图")]),_._v(" "),v("li",[_._v("最小度限制生成树")]),_._v(" "),v("li",[_._v("平面点的欧几里德最小生成树")]),_._v(" "),v("li",[_._v("平面点的曼哈顿最小生成树")]),_._v(" "),v("li",[_._v("最小平衡生成树")])])])]),_._v(" "),v("h2",{attrs:{id:"最小生成树-mst"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最小生成树-mst"}},[_._v("#")]),_._v(" 最小生成树 MST")]),_._v(" "),v("p",[_._v("最小生成树 (Minimum Spanning Tree, MST)")]),_._v(" "),v("h3",{attrs:{id:"mst-问题引入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mst-问题引入"}},[_._v("#")]),_._v(" MST 问题引入")]),_._v(" "),v("p",[_._v("在电子电路设计中，常常需要将多个组件的针脚连接在一起。要连接 n 个针脚，可以使用 n-1 根连线。每根连线连接两个针脚。目标是让所使用的连线长度最短。")]),_._v(" "),v("p",[_._v("可以将上述布线问题用一个带边权的连通无向图 G = (V, E) 来表示，这里 V 是针脚的集合，E 是针脚之间的可能连接。并且对于每条边 (u, v) \\in E，为其赋予权重 w(u, v) 作为连接针脚 u 和针脚 v 的代价（也就是连线的长度）。目标是找到一个无环子集 $ T \\subseteq E $，既能够将所有的结点(针脚)连接起来，又具有最小的权重，即求和 $ w(T) = \\sum_{(u, v) \\in T} w(u, v) $ 的值最小。")]),_._v(" "),v("p",[_._v("由于 T 是无环的，并且连通所有的结点，因此 T 必然是一棵树，被称为(图 G 的)"),v("strong",[_._v("生成树")]),_._v("。如果 w(T) 是最小(极小)的，那么这棵树是一棵"),v("strong",[_._v("最小生成树")]),_._v("，可能不唯一。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/img/info_technology/algorithm/graph_theory/minimum_spanning_tree/mst-1.png",alt:"mst-1"}})]),_._v(" "),v("p",[_._v("解决最小生成树问题的两种常用算法为：Kruskal 算法和 Prim 算法。如果使用普通的"),v("a",{attrs:{href:"../../data_structure/heap-priority-queue"}},[_._v("二叉堆")]),_._v("，那么可以将这两个算法的时间复杂度限制在 "),v("code",[_._v("O(|E| log |V|)")]),_._v(" 的数量级内。如果使用"),v("a",{attrs:{href:"../../data_structure/fibonacci-heap"}},[_._v("斐波那契堆")]),_._v("，Prim 算法的运行时间将改善为 "),v("code",[_._v("O(|E| + |V| log |V|)")]),_._v("，此运行时间在结点数 "),v("code",[_._v("|V|")]),_._v(" 远远小于边数 "),v("code",[_._v("|E|")]),_._v(" 的情况下较好（即稠密图）。")]),_._v(" "),v("p",[_._v("这两种算法都是"),v("RouterLink",{attrs:{to:"/article/info_technology/algorithm/greedy_algorithm/"}},[_._v("贪心算法")]),_._v("。贪心算法的每一步都要在多个可能的选择中选择当前最优的一个，这种策略并不一定保证在所有问题中都能获得最优解，但是对于 MST 问题来说，可以证明：某些贪心策略确实能够找到一棵总权重 w(T) 最小的生成树。")],1),_._v(" "),v("h3",{attrs:{id:"最小生成树的形成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#最小生成树的形成"}},[_._v("#")]),_._v(" 最小生成树的形成")]),_._v(" "),v("p",[_._v("假定一个连通无向图 G(V, E) 和权重函数 "),v("code",[_._v("w: E->R")]),_._v("，希望找出图 G 的一棵最小生成树。贪心策略在每个时刻生长 MST 的一条边，并在整个策略的实施过程中，管理一个遵守下述循环不变式的边集合 A：")]),_._v(" "),v("p",[_._v("在每遍循环之前，A 是某棵最小生成树的一个子集。")]),_._v(" "),v("p",[_._v("在每一步，需要做的是选择一条边 (u, v)，将其加入到集合 A 中，使得 A 不违反循环不变式，即 $ A \\cup {(u, v)} $ 也是某棵最小生成树的子集。由于可以安全地将这种边加入到集合 A 而不会破坏 A 的循环不变式，因此称这样的边为集合 A 的"),v("strong",[_._v("安全边")]),_._v("。如下伪代码给出了一个通用的模式：")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("GENERIC_MST(G, w)\n1  A = \\emptyset\n2  while A does not form a spanning tree\n3      find an edge(u, v) that is safe for A\n4      A = A \\cup {(u, v)}\n5  return A\n")])])]),v("p",[_._v("此算法的关键之处（贪心选择性质）是第 3 行能够“安全”地选择一条边加入。因此需要有辨认安全边的规则，引出此规则前，给出一些定义。无向图 G = (V, E) 的一个"),v("strong",[_._v("切割")]),_._v(" (S, V-S) 是集合 V 的一个划分，如果一条边 (u, v) \\in E 的一个端点位于集合 S，而另一个端点位于集合 V-S，则称该条边"),v("strong",[_._v("横跨")]),_._v("切割 (S, V-S)。如果集合 A 中不存在横跨该切割的边，则称该切割"),v("strong",[_._v("尊重")]),_._v("集合 A。")]),_._v(" "),v("p",[_._v("在横跨一个切割的所有边中，权重最小的边称为"),v("strong",[_._v("轻量级边")]),_._v("。轻量级边可能不是唯一的，一般而言，如果一条边是满足某个性质的所有边中权重最小的，则称该条边是满足给定性质的一条轻量级边。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/img/info_technology/algorithm/graph_theory/minimum_spanning_tree/mst-2.png",alt:"mst-2"}})]),_._v(" "),v("p",[_._v("用来辨认安全边的规则由下面的定理给出：")]),_._v(" "),v("p",[_._v("《CLRS》"),v("strong",[_._v("定理 23.1")]),_._v("：设 G = (V, E) 是一个在边集 E 上定义了实数值权重函数 w 的连通无向图。设集合 A 为 E 的一个子集，且 A 包括在图 G 的某棵最小生成树中，设 (S, V-S) 是图 G 中尊重集合 A 的任意一个切割，又设 (u, v) 是横跨切割 (S, V-S) 的一条轻量级边。那么边 (u, v) 对于集合 A 是安全的。")]),_._v(" "),v("p",[v("img",{attrs:{src:"/img/info_technology/algorithm/graph_theory/minimum_spanning_tree/mst-3.png",alt:"mst-3"}})]),_._v(" "),v("p",[_._v("定理 23.1 表明，随着算法 "),v("code",[_._v("GENERIC_MST")]),_._v(" 的推进，集合 A 总是保持在无环状态。在算法执行的任意时刻，图 GA = (V, A) 是一个森林，GA 中的每个连通分量则是一棵树。而且由于 $ A \\cup {(u, v)} $ 必须是无环的，所有对于集合 A 为安全的边 (u, v) 所连接的是 GA 中不同的连通分量。")]),_._v(" "),v("p",[_._v("算法 "),v("code",[_._v("GENERIC_MST")]),_._v(" 的第 2～4 行的 while 循环总共执行 "),v("code",[_._v("|V| - 1")]),_._v(" 次，因为每遍循环的都要找出 "),v("code",[_._v("|V| - 1")]),_._v(" 条边中的一条。在初始时，当 A 为空集时，GA 中有 "),v("code",[_._v("|V|")]),_._v(" 棵树，每遍循环将树的数量减少 1 棵。当整个森林仅包含一棵树时，该算法就终止。")]),_._v(" "),v("p",[_._v("《CLRS》"),v("strong",[_._v("推论 23.2")]),_._v("：设 G = (V, E) 是一个连通无向图，并有定义在边集合 E 上的实数值权重函数 w。设集合 A 为 E 的一个子集，且该子集包括在 G 的某棵最小生成树里，并设 C = (VC, EC) 为森林 GA = (V, A) 中的一个连通分量(树)。如果边 (u, v) 是连接 C 和 GA 中某个其它连通分量的一条轻量级边，则边 (u, v) 对于集合 A 是安全的。")]),_._v(" "),v("ul",[v("li",[_._v("在 Kruskal 算法中，集合 A 是一个森林，其结点就是给定图的结点。每个加入到集合 A 中的安全边 永远是"),v("strong",[_._v("权重最小")]),_._v("的"),v("strong",[_._v("连接两个不同分量的边")]),_._v("。")]),_._v(" "),v("li",[_._v("在 Prim 算法中，集合 A 则是一棵树。每次加入到 A 中的安全边永远是"),v("strong",[_._v("连接 A 和 A 之外某个结点")]),_._v("的边中 "),v("strong",[_._v("权重最小的边")]),_._v("。")])]),_._v(" "),v("h2",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[_._v("#")]),_._v(" 参考资料")]),_._v(" "),v("ul",[v("li",[_._v("Introduction to Algorithm (aka CLRS) Third Edition - Chapter 23")])])])}),[],!1,null,null,null);t.default=a.exports}}]);