(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{319:function(t,v,_){"use strict";_.r(v);var r=_(28),a=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"algorithm-graph-theory"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-graph-theory"}},[t._v("#")]),t._v(" Algorithm - Graph Theory")]),t._v(" "),_("p",[t._v("By "),_("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YuweiYin"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("strong",[t._v("Minimum Spanning Tree")])]),t._v(" "),_("h2",{attrs:{id:"目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),_("ul",[_("li",[t._v("最小生成树 MST\n"),_("ul",[_("li",[_("a",{attrs:{href:"./mst-prim"}},[t._v("Prim 算法")])]),t._v(" "),_("li",[_("a",{attrs:{href:"./mst-kruskal"}},[t._v("Kruskal 算法")])]),t._v(" "),_("li",[t._v("Sollin 算法")]),t._v(" "),_("li",[t._v("次优最小生成树")]),t._v(" "),_("li",[t._v("第 k 小生成树")]),t._v(" "),_("li",[t._v("瓶颈生成树")]),t._v(" "),_("li",[t._v("最优比例生成树")]),t._v(" "),_("li",[t._v("最小树形图")]),t._v(" "),_("li",[t._v("最小度限制生成树")]),t._v(" "),_("li",[t._v("平面点的欧几里德最小生成树")]),t._v(" "),_("li",[t._v("平面点的曼哈顿最小生成树")]),t._v(" "),_("li",[t._v("最小平衡生成树")])])])]),t._v(" "),_("h2",{attrs:{id:"最小生成树-mst"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最小生成树-mst"}},[t._v("#")]),t._v(" 最小生成树 MST")]),t._v(" "),_("p",[t._v("最小生成树 (Minimum Spanning Tree, MST)")]),t._v(" "),_("h3",{attrs:{id:"mst-问题引入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mst-问题引入"}},[t._v("#")]),t._v(" MST 问题引入")]),t._v(" "),_("p",[t._v("在电子电路设计中，常常需要将多个组件的针脚连接在一起。要连接 n 个针脚，可以使用 n-1 根连线。每根连线连接两个针脚。目标是让所使用的连线长度最短。")]),t._v(" "),_("p",[t._v("可以将上述布线问题用一个带边权的连通无向图 G = (V, E) 来表示，这里 V 是针脚的集合，E 是针脚之间的可能连接。并且对于每条边 (u, v) \\in E，为其赋予权重 w(u, v) 作为连接针脚 u 和针脚 v 的代价（也就是连线的长度）。目标是找到一个无环子集 $ T \\subseteq E $，既能够将所有的结点(针脚)连接起来，又具有最小的权重，即求和 $ w(T) = \\sum_{(u, v) \\in T} w(u, v) $ 的值最小。")]),t._v(" "),_("p",[t._v("由于 T 是无环的，并且连通所有的结点，因此 T 必然是一棵树，被称为(图 G 的)"),_("strong",[t._v("生成树")]),t._v("。如果 w(T) 是最小(极小)的，那么这棵树是一棵"),_("strong",[t._v("最小生成树")]),t._v("，可能不唯一。")]),t._v(" "),_("p",[_("img",{attrs:{src:"/img/info-technology/algorithm/graph-theory/minimum-spanning-tree/mst-1.png",alt:"mst-1"}})]),t._v(" "),_("p",[t._v("解决最小生成树问题的两种常用算法为：Kruskal 算法和 Prim 算法。如果使用普通的"),_("a",{attrs:{href:"../../data-structure/heap-priority-queue"}},[t._v("二叉堆")]),t._v("，那么可以将这两个算法的时间复杂度限制在 "),_("code",[t._v("O(|E| log |V|)")]),t._v(" 的数量级内。如果使用"),_("a",{attrs:{href:"../../data-structure/fibonacci-heap"}},[t._v("斐波那契堆")]),t._v("，Prim 算法的运行时间将改善为 "),_("code",[t._v("O(|E| + |V| log |V|)")]),t._v("，此运行时间在结点数 "),_("code",[t._v("|V|")]),t._v(" 远远小于边数 "),_("code",[t._v("|E|")]),t._v(" 的情况下较好（即稠密图）。")]),t._v(" "),_("p",[t._v("这两种算法都是"),_("RouterLink",{attrs:{to:"/article/info-technology/algorithm/greedy-algorithm/"}},[t._v("贪心算法")]),t._v("。贪心算法的每一步都要在多个可能的选择中选择当前最优的一个，这种策略并不一定保证在所有问题中都能获得最优解，但是对于 MST 问题来说，可以证明：某些贪心策略确实能够找到一棵总权重 w(T) 最小的生成树。")],1),t._v(" "),_("h3",{attrs:{id:"最小生成树的形成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最小生成树的形成"}},[t._v("#")]),t._v(" 最小生成树的形成")]),t._v(" "),_("p",[t._v("假定一个连通无向图 G(V, E) 和权重函数 "),_("code",[t._v("w: E->R")]),t._v("，希望找出图 G 的一棵最小生成树。贪心策略在每个时刻生长 MST 的一条边，并在整个策略的实施过程中，管理一个遵守下述循环不变式的边集合 A：")]),t._v(" "),_("p",[t._v("在每遍循环之前，A 是某棵最小生成树的一个子集。")]),t._v(" "),_("p",[t._v("在每一步，需要做的是选择一条边 (u, v)，将其加入到集合 A 中，使得 A 不违反循环不变式，即 $ A \\cup {(u, v)} $ 也是某棵最小生成树的子集。由于可以安全地将这种边加入到集合 A 而不会破坏 A 的循环不变式，因此称这样的边为集合 A 的"),_("strong",[t._v("安全边")]),t._v("。如下伪代码给出了一个通用的模式：")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("GENERIC_MST(G, w)\n1  A = \\emptyset\n2  while A does not form a spanning tree\n3      find an edge(u, v) that is safe for A\n4      A = A \\cup {(u, v)}\n5  return A\n")])])]),_("p",[t._v("此算法的关键之处（贪心选择性质）是第 3 行能够“安全”地选择一条边加入。因此需要有辨认安全边的规则，引出此规则前，给出一些定义。无向图 G = (V, E) 的一个"),_("strong",[t._v("切割")]),t._v(" (S, V-S) 是集合 V 的一个划分，如果一条边 (u, v) \\in E 的一个端点位于集合 S，而另一个端点位于集合 V-S，则称该条边"),_("strong",[t._v("横跨")]),t._v("切割 (S, V-S)。如果集合 A 中不存在横跨该切割的边，则称该切割"),_("strong",[t._v("尊重")]),t._v("集合 A。")]),t._v(" "),_("p",[t._v("在横跨一个切割的所有边中，权重最小的边称为"),_("strong",[t._v("轻量级边")]),t._v("。轻量级边可能不是唯一的，一般而言，如果一条边是满足某个性质的所有边中权重最小的，则称该条边是满足给定性质的一条轻量级边。")]),t._v(" "),_("p",[_("img",{attrs:{src:"/img/info-technology/algorithm/graph-theory/minimum-spanning-tree/mst-2.png",alt:"mst-2"}})]),t._v(" "),_("p",[t._v("用来辨认安全边的规则由下面的定理给出：")]),t._v(" "),_("p",[t._v("《CLRS》"),_("strong",[t._v("定理 23.1")]),t._v("：设 G = (V, E) 是一个在边集 E 上定义了实数值权重函数 w 的连通无向图。设集合 A 为 E 的一个子集，且 A 包括在图 G 的某棵最小生成树中，设 (S, V-S) 是图 G 中尊重集合 A 的任意一个切割，又设 (u, v) 是横跨切割 (S, V-S) 的一条轻量级边。那么边 (u, v) 对于集合 A 是安全的。")]),t._v(" "),_("p",[_("img",{attrs:{src:"/img/info-technology/algorithm/graph-theory/minimum-spanning-tree/mst-3.png",alt:"mst-3"}})]),t._v(" "),_("p",[t._v("定理 23.1 表明，随着算法 "),_("code",[t._v("GENERIC_MST")]),t._v(" 的推进，集合 A 总是保持在无环状态。在算法执行的任意时刻，图 GA = (V, A) 是一个森林，GA 中的每个连通分量则是一棵树。而且由于 $ A \\cup {(u, v)} $ 必须是无环的，所有对于集合 A 为安全的边 (u, v) 所连接的是 GA 中不同的连通分量。")]),t._v(" "),_("p",[t._v("算法 "),_("code",[t._v("GENERIC_MST")]),t._v(" 的第 2～4 行的 while 循环总共执行 "),_("code",[t._v("|V| - 1")]),t._v(" 次，因为每遍循环的都要找出 "),_("code",[t._v("|V| - 1")]),t._v(" 条边中的一条。在初始时，当 A 为空集时，GA 中有 "),_("code",[t._v("|V|")]),t._v(" 棵树，每遍循环将树的数量减少 1 棵。当整个森林仅包含一棵树时，该算法就终止。")]),t._v(" "),_("p",[t._v("《CLRS》"),_("strong",[t._v("推论 23.2")]),t._v("：设 G = (V, E) 是一个连通无向图，并有定义在边集合 E 上的实数值权重函数 w。设集合 A 为 E 的一个子集，且该子集包括在 G 的某棵最小生成树里，并设 C = (VC, EC) 为森林 GA = (V, A) 中的一个连通分量(树)。如果边 (u, v) 是连接 C 和 GA 中某个其它连通分量的一条轻量级边，则边 (u, v) 对于集合 A 是安全的。")]),t._v(" "),_("ul",[_("li",[t._v("在 Kruskal 算法中，集合 A 是一个森林，其结点就是给定图的结点。每个加入到集合 A 中的安全边 永远是"),_("strong",[t._v("权重最小")]),t._v("的"),_("strong",[t._v("连接两个不同分量的边")]),t._v("。")]),t._v(" "),_("li",[t._v("在 Prim 算法中，集合 A 则是一棵树。每次加入到 A 中的安全边永远是"),_("strong",[t._v("连接 A 和 A 之外某个结点")]),t._v("的边中 "),_("strong",[t._v("权重最小的边")]),t._v("。")])]),t._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),_("ul",[_("li",[t._v("Introduction to Algorithm (aka CLRS) Third Edition - Chapter 23")])])])}),[],!1,null,null,null);v.default=a.exports}}]);