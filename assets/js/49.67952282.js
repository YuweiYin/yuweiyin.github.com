(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{501:function(v,_,t){"use strict";t.r(_);var s=t(28),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"algorithm-graph-theory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-graph-theory"}},[v._v("#")]),v._v(" Algorithm - Graph Theory")]),v._v(" "),t("p",[v._v("By "),t("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[v._v("YuweiYin"),t("OutboundLink")],1)]),v._v(" "),t("p",[t("strong",[v._v("Shortest Path")])]),v._v(" "),t("h2",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[v._v("#")]),v._v(" 目录")]),v._v(" "),t("ul",[t("li",[v._v("最短路径\n"),t("ul",[t("li",[v._v("单源最短路径\n"),t("ul",[t("li",[t("a",{attrs:{href:"./dag-shortest-path"}},[v._v("有向无环图 DAG 的最短路径")]),v._v(" - (利用 DFS & 拓扑排序)")]),v._v(" "),t("li",[v._v("非负权值加权图的最短路径 - "),t("a",{attrs:{href:"./dijkstra"}},[v._v("Dijkstra 算法")]),v._v(" (使用 "),t("a",{attrs:{href:"../../data_structure/fibonacci-heap"}},[v._v("Fibonacci Heap")]),v._v(" 优化)")]),v._v(" "),t("li",[v._v("含负权值加权图的最短路径 - "),t("a",{attrs:{href:"./bellman-ford"}},[v._v("Bellman-Ford 算法")]),v._v(" (也用于负权环的检测)")]),v._v(" "),t("li",[v._v("含负权值加权图的最短路径 - SPFA 算法 (在稠密图中 SPFA 效率不如 BF)")])])]),v._v(" "),t("li",[v._v("全源最短路径\n"),t("ul",[t("li",[v._v("Floyd-Warshall 算法")]),v._v(" "),t("li",[v._v("Johnson 算法")])])]),v._v(" "),t("li",[v._v("次短路径")]),v._v(" "),t("li",[v._v("第 k 短路径")]),v._v(" "),t("li",[v._v("线性规划 & 差分约束系统 (Bellman-Ford 算法的应用之一)")]),v._v(" "),t("li",[v._v("平面点对的最短路径")]),v._v(" "),t("li",[v._v("双标准限制最短路径")])])])]),v._v(" "),t("h2",{attrs:{id:"单源最短路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单源最短路径"}},[v._v("#")]),v._v(" 单源最短路径")]),v._v(" "),t("p",[v._v("目标：给定图 G = (V, E) 中的某个"),t("strong",[v._v("源顶点 s")]),v._v("，求出 s 到图中所有其它顶点的**(带权)最短路径**。如果无向图不连通/有向图不单向连通，则可能存在某些顶点不可达，则标记到此顶点的最短路径不存在，且最短路长度为 inf 无穷。")]),v._v(" "),t("p",[v._v("此图往往是**(边)带权重"),t("strong",[v._v("的，即会有一个权重函数 w: E -> R，将边集 E 中的每条边映射为一个")]),v._v("实数值权重(可能为负值)"),t("strong",[v._v("。图中的一条路径 "),t("code",[v._v("p = <v0, v1, ..., vk>")]),v._v(" 的")]),v._v("权重 w(p)** 是构成该路径的"),t("strong",[v._v("所有边的权重之和")]),v._v("：$ w(p) = \\sum_{i=1}^{k} w(v_{i-1}, v_{i}) $")]),v._v(" "),t("p",[v._v("定义从结点 u 到结点 v 的"),t("strong",[v._v("最短路径权重")]),v._v(" d(u, v) 如下：")]),v._v(" "),t("ul",[t("li",[v._v("如果存在一条从结点 u 到结点 v 的路径(即 u 可达 v)，则 d(u, v) = min{w(p): u 通过 p 到达 v}")]),v._v(" "),t("li",[v._v("否则 d(u, v) = inf 无穷")])]),v._v(" "),t("p",[v._v("从结点 u 到 结点 v 的"),t("strong",[v._v("最短路径")]),v._v("则定义为任何一条权重为 w(p) = d(u, v) 的从 u 到 v 的路径 p，可能不唯一。")]),v._v(" "),t("p",[t("a",{attrs:{href:"../graph_basis/graph-basis"}},[v._v("广度优先搜索 BFS")]),v._v(" 就是一个可用于求取最短路径的算法，但是该算法只能用于无权重的图（即每条边的权重都相同）。")]),v._v(" "),t("h3",{attrs:{id:"最短路径的几个变体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最短路径的几个变体"}},[v._v("#")]),v._v(" 最短路径的几个变体")]),v._v(" "),t("p",[v._v("单源最短路径问题可以用来解决许多其它问题，包括如下几个最短路径的变体问题：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("单目的地最短路径问题")]),v._v("：找到从每个结点 v 到"),t("strong",[v._v("给定目的地")]),v._v("结点 t 的最短路径。如果将图的每条边方向翻转过来，这个问题可以被转换为从 t 出发的单源最短路径问题。")]),v._v(" "),t("li",[t("strong",[v._v("单结点对最短路径问题")]),v._v("：找到从"),t("strong",[v._v("给定结点")]),v._v(" u 到"),t("strong",[v._v("给定结点")]),v._v(" v 的最短路径。如果解决了针对从 u 出发的单源最短路径问题，那么也就解决了此问题。\n"),t("ul",[t("li",[v._v("而且，在该问题的所有已知算法中，最坏情况下的渐近运行时间 都和 最好的单源最短路径算法 一样。")])])]),v._v(" "),t("li",[t("strong",[v._v("所有结点对最短路径问题")]),v._v("：对于"),t("strong",[v._v("每对结点")]),v._v(" u 和结点 v，找到从结点 u 到 v 到最短路径。\n"),t("ul",[t("li",[v._v("虽然可以针对每个结点都运行一遍单源最短路径算法，但通常可以更快地解决此问题。（可以想见，多次调用单源最短路径算法，却不去利用之前的调用过程的信息，是不够高效的。）")])])])]),v._v(" "),t("h3",{attrs:{id:"最短路径的最优子结构性质"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最短路径的最优子结构性质"}},[v._v("#")]),v._v(" 最短路径的最优子结构性质")]),v._v(" "),t("p",[v._v("最短路径算法通常依赖最短路径的一个重要性质："),t("strong",[v._v("两个结点之间的一条最短路径 包含着其它的最短路径")]),v._v("。")]),v._v(" "),t("p",[v._v("最优子结构性质是使用 动态规划 或 贪心算法 的一个重要标志。Dijkstra 单源最短路径算法就是一个贪心算法，而 Floyd-Warshall 全源最短路径算法则是一个动态规划算法。")]),v._v(" "),t("p",[v._v("《CLRS》"),t("strong",[v._v("引理 24.1")]),v._v("（最短路径的子路径也是最短路径）：给定"),t("strong",[v._v("带权重的有向图")]),v._v(" G = (V, E) 和权重函数 w: E -> R。设 "),t("code",[v._v("p = <v0, v1, ..., vk>")]),v._v(" 为从结点 v0 到结点 vk 的"),t("strong",[v._v("一条最短路径")]),v._v("，并且对于任意的 i 和 j (0 <= i <= j <= k) 而言，设 "),t("code",[v._v("pij = <vi, ..., vj>")]),v._v(" 为路径 p 中从结点 vi 到结点 vj 的"),t("strong",[v._v("子路径")]),v._v("。那么 pij 是从结点 vi 到 vj 的"),t("strong",[v._v("一条最短路径")]),v._v("。")]),v._v(" "),t("p",[v._v("上述引理可以很容易地由“剪切-粘贴法”证明。")]),v._v(" "),t("h3",{attrs:{id:"负权重的边"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#负权重的边"}},[v._v("#")]),v._v(" 负权重的边")]),v._v(" "),t("p",[v._v("某些单源最短路径问题可能包括 "),t("strong",[v._v("权重为负值的边")]),v._v("。但如果图 G = (V, E) "),t("strong",[v._v("不包含")]),v._v("从源结点 s 可以到达的 总权重为负值的环路("),t("strong",[v._v("负权环")]),v._v(")，那么对于所有的结点 v \\in V，最短路径权重 d(s, v) 都可由权重函数 w 映射而得，即便取值为负数也可以。")]),v._v(" "),t("p",[v._v("但如果图 G 包含从 s 可达的负权环，那么最短路径的权重无定义。因为只需不断地经过此环路，路径的总权重值就会不断减少，而实数集又不是良序集，所以权重会一直减少、没有尽头。因此，如果从源结点 s 到结点 v 的某条路径中存在负权环，则往往定义 d(s, v) = -inf 负无穷。")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info_technology/algorithm/graph_theory/shortest_path/shortest-path-1.png",alt:"shortest-path-1"}})]),v._v(" "),t("p",[v._v("某些最短路径算法（如 Dijkstra 算法）假设输入图的所有边权重为"),t("strong",[v._v("非负值")]),v._v("，这在某些场景下是合理的，例如 表达道路交通的图往往所有边权都为非负值。")]),v._v(" "),t("p",[v._v("另外一些算法（如 Bellman-Ford 算法）"),t("strong",[v._v("允许")]),v._v("输入图中包含"),t("strong",[v._v("负权重值的边")]),v._v("。只要"),t("strong",[v._v("不存在从源结点可达的负权环")]),v._v("，就可以生成正确的答案。另外，在通常情况下，如果存在负权环，Bellman-Ford 算法可以"),t("strong",[v._v("检测并报告其存在")]),v._v("。")]),v._v(" "),t("h3",{attrs:{id:"环路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环路"}},[v._v("#")]),v._v(" 环路")]),v._v(" "),t("p",[v._v("一条最短最短路径可以包含环路吗？前面已说明最短路径不能包含负权环。而很显然，最短路径也不会包含 总权重为正值的环路，因为删除此环路能够获得更短的路径。至于 总权重为 0 的环路，既可以保留，也可以删除，但通常的做法都是将其删除。")]),v._v(" "),t("p",[v._v("因此，可以说最短路径是没有环路的，都是简单路径。由于图 G = (V, E) 中的任意无环路径最多包含 "),t("code",[v._v("|V|")]),v._v(" 个不同结点 以及 "),t("code",[v._v("|V| - 1")]),v._v(" 条边（构成图 G 的一棵生成树 MST），所以在求解最短路径时 可以聚焦于至多包含 "),t("code",[v._v("|V| - 1")]),v._v(" 条边的最短(简单)路径上。")]),v._v(" "),t("h3",{attrs:{id:"最短路径的表示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最短路径的表示"}},[v._v("#")]),v._v(" 最短路径的表示")]),v._v(" "),t("p",[v._v("通常情况下，不但希望计算出最短路径的总权重值(最优值)，也希望获得该最短路径上的所有结点序列(最优解)。")]),v._v(" "),t("p",[v._v("对最短路径的表示与 "),t("a",{attrs:{href:"../graph_basis/graph-basis"}},[v._v("广度优先搜索 BFS")]),v._v(" 中的广度优先搜索树类似。给定图 G = (V, E)，对于每个结点 v，维护一个前驱结点 v.p。该前驱结点可能是另一个结点，或者是默认值 nil 空。在算法结束时，将从某个结点 v 开始的前驱结点链 反转过来，就是从源结点 s 到 v 的一条最短路径。")]),v._v(" "),t("p",[v._v("因此，算法结束时，给定结点 v 且 v.p != nil，用广度优先搜索算法中打印广度优先树的 "),t("code",[v._v("PRINT_PATH(G, s, v)")]),v._v(" 函数就可以打印出从结点 s 到结点 v 的一条最短路径。")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('PRINT_PATH(G, s, v)\n1  if v == s\n2      print s\n3  elif v.p == nil\n4      print "no path from" s "to" v "exists"\n5  else\n6      PRINT_PATH(G, s, v.p)\n7      print v\n')])])]),t("p",[v._v("但是在运行最短路径算法的过程中，p 值并不一定能给出最短路径。如在 BFS 中一样，感兴趣的是由 p 值所诱导的"),t("strong",[v._v("前驱子图")]),v._v(" Gp = (Vp, Ep)。其中：")]),v._v(" "),t("ul",[t("li",[v._v("结点集 $ Vp = { v \\in V: v.p != nil } \\cup { s } $，即所有前驱结点不为 nil 的结点 以及源结点 s。")]),v._v(" "),t("li",[v._v("边集 $ Ep = { (v.p, v) \\in E: v \\in Vp - { s } } $，即由 Vp 中结点的 p 值所诱导的边的集合。")])]),v._v(" "),t("p",[v._v("单源最短路径路径算法生成的 p 值具有如下性质：在算法终止时，Gp 是一棵“最短路径树”。非形式化地说，最短路径树是一棵有根结点的树，该树包括了从源结点 s 到其每个可达结点 的一条最短路径。一棵最短路径树与广度优先树很相似，但是它所包括的最短路径是由边的权重之和定义的，而不是边的条数。")]),v._v(" "),t("p",[v._v("更精确地说，设 G = (V, E) 是一条(边)带权重的有向图，其权重函数为 w: E -> R，假定 G 中不包含从 s 可达的负权环（因此 图中所有最短路径都有定义）。一棵根结点为 s 的最短路径树是一个有向子图 G' = (V', E')，这里 $ V' \\subseteq V $ 且 $ E' \\subseteq E $，满足如下 3 条性质：")]),v._v(" "),t("ol",[t("li",[v._v("V' 是图 G 中从源结点 s 可以到达的所有结点的集合。")]),v._v(" "),t("li",[v._v("G' 形成一棵根结点为 s 的树。")]),v._v(" "),t("li",[v._v("对于所有的结点 v \\in V'，图 G' 中从结点 s 到结点 v 的"),t("strong",[v._v("唯一简单路径")]),v._v(" 是图 G 中从结点 s 到结点 v 的"),t("strong",[v._v("一条最短路径")]),v._v("。")])]),v._v(" "),t("p",[v._v("最短路径不是唯一的，最短路径树也不是唯一的。这里的“最”实际上也是“极”的含义。")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info_technology/algorithm/graph_theory/shortest_path/shortest-path-2.png",alt:"shortest-path-2"}})]),v._v(" "),t("h3",{attrs:{id:"松弛操作-relaxation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#松弛操作-relaxation"}},[v._v("#")]),v._v(" 松弛操作 Relaxation")]),v._v(" "),t("p",[v._v("求取(带边权)最短路径的算法往往需要用到 "),t("strong",[v._v("松弛")]),v._v(" (relaxation) 技术。对于每个结点 v，维持一个属性 v.d (这里的 d 是 distance 之意)，用于记录从源结点 s 到结点 v 的"),t("strong",[v._v("最短路径权重 的上界")]),v._v("。称 v.d 为 s 到 v 到"),t("strong",[v._v("最短路径估计")]),v._v("，据此来决定如何选取/扩展最短路径。")]),v._v(" "),t("p",[v._v("使用如下运行时间为 "),t("code",[v._v("\\Theta(|V|)")]),v._v(" 的算法来对 最短路径估计 和 前驱结点 进行初始化：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("INITIALIZE_SINGLE_SOURCE(G, s)\n1  for each vertex v \\in G.V\n2      v.d = inf\n3      v.p = nil\n4  s.d = 0\n")])])]),t("p",[v._v("在初始化操作结束后，对于所有的结点 v \\in V，有 v.p = nil 和 s.d = 0，以及除 s 外的所有结点 v 有 v.d = inf 无穷（表示不可达）。")]),v._v(" "),t("p",[v._v("对一条边 (u, v) 的松弛过程为：首先测试 是否可以对从 s 到 v 的最短路径进行改善。测试的方法是：将 s->u 的最短路径距离 加上 u->v 的边权重值，前述二者的和 与当前得到的 s->v 的最短路径估计 进行比较，如果前者更小，则更新估计值 v.d 并修改前驱结点 v.p。")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("RELAX(u, v, w)\n1  if u.d + w(u, v) < v.d\n2      v.d = u.d + w(u, v)\n3      v.p = u\n")])])]),t("p",[v._v("因此，松弛操作只可能让 v.d 越来越小（若 v != s 则 v.d 初始值为 inf），其值越小，在选择最短路径时越有可能被考虑。（注：这里的“可能”不是可能性、概率的意思，只是一种情态表达）")]),v._v(" "),t("p",[v._v("减小 v.d 似乎是一种“缩紧”的作用，而非“松弛”，但松弛之名由来如下：一个松弛操作的结果可以看作是对限制条件 v.d <= u.d + w(u, v) 的放松。一开始 v.d 是 inf 无穷，必然打破了此限制条件，所以来自此限制条件的“压力”很大。而随着 v.d 逐渐变小，此限制条件逐渐容易满足。（根据三角不等式，该限制条件在 u.d == d(s, u) 和 v.d == d(s, v) 必须成立）")]),v._v(" "),t("p",[v._v("松弛是唯一导致 最短路径估计 和 前驱结点 发生变化的操作。不同的最短路径算法之间的不同之处是 对每对边进行松弛的次数 和 松弛边的次序 有所不同。Dijkstra 算法 和用于有向无环图的最短路径算法 对每条边仅松弛一次。而 Bellman-Ford 算法则对每条边松弛 "),t("code",[v._v("|V| - 1")]),v._v(" 次。")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info_technology/algorithm/graph_theory/shortest_path/shortest-path-3.png",alt:"shortest-path-3"}})]),v._v(" "),t("h3",{attrs:{id:"最短路径和松弛操作的性质"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最短路径和松弛操作的性质"}},[v._v("#")]),v._v(" 最短路径和松弛操作的性质")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("三角不等式性质")]),v._v("（引理 24.10）：对于任何边 (u, v) \\in E，有 d(s, v) <= d(s, u) + w(u, v)")]),v._v(" "),t("li",[t("strong",[v._v("上界性质")]),v._v("（引理 24.11）：对于所有的结点 v \\in V，总有 v.d >= d(s, v)。一旦 v.d 的取值降至 d(s, v)，其值不会再发生变化。（其实称为“下界性质”也合理）")]),v._v(" "),t("li",[t("strong",[v._v("非路径性质")]),v._v("（引理 24.12）：如果从结点 s 到结点 v 之间不存在路径，则总是有 v.d = d(s, v) = inf 无穷。")]),v._v(" "),t("li",[t("strong",[v._v("收敛性质")]),v._v("（引理 24.14）：对于某些结点 u, v \\in V，如果 "),t("code",[v._v("s -~-> u->v")]),v._v(" 是图 G 中的一条最短路径，并且在对边 (u, v) 进行松弛前的任意时间有 u.d == d(s, u)，则在之后的所有时间有 v.d = d(s, v)，\n"),t("ul",[t("li",[v._v("即：从 u “扩展”到 v 后，就已经找到了从 s 到 v 的最短路了。")])])]),v._v(" "),t("li",[t("strong",[v._v("路径松弛性质")]),v._v("（引理 24.15）：如果 "),t("code",[v._v("p = <v0, v1, ..., vk>")]),v._v(" 是从源结点 s = v0 到结点 vk 的一条最短路径，并且对 p 中的边所进行松弛的次序为 (v0, v1), (v1, v2), ..., (v_{k-1}, v_{k})，则 vk.d = d(s, vk)。意味着结点 vk 找到了最短路。\n"),t("ul",[t("li",[v._v("该性质的成立 与任何其它的松弛操作无关，即便别的松弛操作 与上述松弛序列 是穿插着进行的。只要前述松弛序列 是整个算法过程中的松弛序列 的"),t("strong",[v._v("子序列")]),v._v(" 即可。")])])]),v._v(" "),t("li",[t("strong",[v._v("前驱子图性质")]),v._v("（引理 24.17）：对于所有的结点 v \\in V，一旦 v.d == d(s, v)，则前驱子图是一棵根结点为 s 的最短路径树。")])]),v._v(" "),t("h3",{attrs:{id:"最短路径性质的证明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最短路径性质的证明"}},[v._v("#")]),v._v(" 最短路径性质的证明")]),v._v(" "),t("h3",{attrs:{id:"单源最短路径算法概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单源最短路径算法概述"}},[v._v("#")]),v._v(" 单源最短路径算法概述")]),v._v(" "),t("ul",[t("li",[v._v("Bellman-Ford 算法 解决的是一般情况下的单源最短路径问题，其中"),t("strong",[v._v("边的权重可以为负值")]),v._v("。\n"),t("ul",[t("li",[v._v("BF 算法思路非常简单明了，并且还能够侦测是否存在 从源结点 s 可达的"),t("strong",[v._v("负权环")]),v._v("。")])])]),v._v(" "),t("li",[v._v("有向无环图 DAG 中计算单源最短路径的线性时间算法")]),v._v(" "),t("li",[v._v("Dijkstra 算法 的时间复杂度低于 BF 算法，但是要求"),t("strong",[v._v("所有边的权重均为非负值")]),v._v("。")]),v._v(" "),t("li",[v._v("Bellman-Ford 算法的应用之一：线性规划 & 差分约束系统")])]),v._v(" "),t("h2",{attrs:{id:"全源最短路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全源最短路径"}},[v._v("#")]),v._v(" 全源最短路径")]),v._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),t("ul",[t("li",[v._v("Introduction to Algorithm (aka CLRS) Third Edition - Chapter 24")])])])}),[],!1,null,null,null);_.default=a.exports}}]);