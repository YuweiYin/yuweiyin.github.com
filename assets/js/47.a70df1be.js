(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{316:function(t,r,a){"use strict";a.r(r);var e=a(28),v=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"algorithm-graph-theory-mst-kruskal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-graph-theory-mst-kruskal"}},[t._v("#")]),t._v(" Algorithm - Graph Theory - MST Kruskal")]),t._v(" "),a("p",[t._v("By "),a("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YuweiYin"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("最小生成树 (Minimum Spanning Tree, MST) - Kruskal 算法")]),t._v(" "),a("p",[t._v("如下伪代码是生成 MST 的一个通用模式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GENERIC_MST(G, w)\n1  A = \\emptyset\n2  while A does not form a spanning tree\n3      find an edge(u, v) that is safe for A\n4      A = A \\cup {(u, v)}\n5  return A\n")])])]),a("h2",{attrs:{id:"kruskal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kruskal"}},[t._v("#")]),t._v(" Kruskal")]),t._v(" "),a("p",[t._v("在 Kruskal 算法中，集合 A 是一个森林，其结点就是给定图的结点。每个加入到集合 A 中的安全边 永远是"),a("strong",[t._v("权重最小")]),t._v("的"),a("strong",[t._v("连接两个不同分量的边")]),t._v("。")]),t._v(" "),a("p",[t._v("Kruskal 算法找到安全边的策略是：在所有连接森林中两棵不同树的边里面，找到权重最小的边 (u, v)。设 C1 和 C2 为边 (u, v) 所连接的两棵树，由于此边一定是连接 C1 和其它某棵树的一条轻量级边，(u, v) 是 C1 的一条安全边。很显然，Kruskal 算法属于贪心算法。")]),t._v(" "),a("p",[t._v("Kruskal 算法的实现与计算连通分量的算法类似，需要使用一个不相交集合数据结构（如"),a("a",{attrs:{href:"../../data-structure/union-find"}},[t._v("并查集")]),t._v("）来维护几个互不相交的顶点集合，每个集合代表当前森林中的一棵树。"),a("code",[t._v("FIND_SET(u)")]),t._v(" 操作用于返回包含元素 u 的集合的代表元素。可以通过测试 "),a("code",[t._v("FIND_SET(u)")]),t._v(" 是否等于 "),a("code",[t._v("FIND_SET(v)")]),t._v(" 来判断顶点 u 和顶点 v 是否属于同一个集合(同一棵树)。"),a("code",[t._v("UNION(u, v)")]),t._v(" 过程用于将两个集合合并。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("MST_KRUSKAL(G, w)\n1  A = \\emptyset\n2  for each vertex v \\in G.V\n3      MAKE_SET(v)\n4  sort the edges of G.E into nondecreasing order by weight\n5  for each edge (u, v) \\in G.E, taken in nondecreasing order by weight\n6      if FIND_SET(u) != FIND_SET(v)\n7          A = A \\cup {(u, v)}\n8          UNION(u, v)\n9  return A\n")])])]),a("p",[t._v("算法流程描述：")]),t._v(" "),a("ol",[a("li",[t._v("在 1～3 行，将集合 A 初始化为一个空集合，并创建 "),a("code",[t._v("|V|")]),t._v(" 棵树（不相交集合），每棵树仅包含一个结点。")]),t._v(" "),a("li",[t._v("在 4 行，把边集合 E 中的所有边都按照权重的"),a("strong",[t._v("非降序")]),t._v("排序。")]),t._v(" "),a("li",[t._v("在 5～8 行的 for 循环中，按权重非降序地选取边 (u, v)\n"),a("ol",[a("li",[t._v("在 6 行，检查边 (u, v) 的两个端点 u 和 v 是否属于同一个集合(同一棵树)，如果不属于同一集合，则 (u, v) 是安全边；如果二者属于同一个集合，则不能加入此边，否则会形成环路，不符合树的定义。")]),t._v(" "),a("li",[t._v("在 7 行，将安全边 (u, v) 加入集合 A")]),t._v(" "),a("li",[t._v("在 8 行，把安全边的两个端点合并到同一个集合(同一棵树)中")])])]),t._v(" "),a("li",[t._v("在 9 行，返回集合(树) A")])]),t._v(" "),a("p",[t._v("对于图 G = (V, E)，Kruskal 算法的运行时间依赖于不相交集合数据结构的实现方式。如果使用增加了按秩合并和路径压缩功能的 "),a("a",{attrs:{href:"../../data-structure/union-find"}},[t._v("并查集")]),t._v("，则可以达到渐近最快。在此实现模式下，算法第 1 行初始化时间为 O(1)，第 2～3 行进行 "),a("code",[t._v("|V|")]),t._v(" 次 "),a("code",[t._v("MAKE_SET")]),t._v(" 操作创建不相交集合，第 4 行对边进行排序的时间为 "),a("code",[t._v("O(|E| log |E|)")]),t._v("，而算法第 5～8 行的 for 循环执行 "),a("code",[t._v("O(|E|)")]),t._v(" 个 "),a("code",[t._v("FIND_SET")]),t._v(" 和 "),a("code",[t._v("UNION")]),t._v(" 操作，记不相交集合的运行时间为 "),a("code",[t._v("a(|V|)")]),t._v("，则整个算法的总运行时间为 "),a("code",[t._v("O((|V|+|E|) a(|V|))")]),t._v("。这里 a 是增长速度极慢的 Ackermann 函数。")]),t._v(" "),a("p",[t._v("由于假定图 G 是连通的，因此有 "),a("code",[t._v("|E| >= |V| - 1")]),t._v("，所以不相交集合操作的时间代价为 "),a("code",[t._v("O(|E| a(|V|))")]),t._v("。而且，由于 "),a("code",[t._v("a(|V|) = O(log |V|) = O(log |E|)")]),t._v("，所以 Kruskal 算法的总运行时间可以表达为 "),a("code",[t._v("O(|E| log |E|)")]),t._v("。另外，又由于 "),a("code",[t._v("|E| < |V|^2")]),t._v("，则有 "),a("code",[t._v("log |E| = O(log |V|)")]),t._v("，因此可以将 Kruskal 算法的总运行时间表达为 "),a("code",[t._v("O(|E| log |V|)")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/info-technology/algorithm/graph-theory/minimum-spanning-tree/mst-kruskal-1.png",alt:"mst-kruskal-1"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/info-technology/algorithm/graph-theory/minimum-spanning-tree/mst-kruskal-2.png",alt:"mst-kruskal-2"}})]),t._v(" "),a("h2",{attrs:{id:"python-代码范例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-代码范例"}},[t._v("#")]),t._v(" Python 代码范例")]),t._v(" "),a("p",[t._v("Python 环境：Python 3.7")]),t._v(" "),a("h3",{attrs:{id:"mst-kruskal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mst-kruskal"}},[t._v("#")]),t._v(" MST Kruskal")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/YuweiYin/Code_Play/blob/master/Algorithm-Essence/graph-theory/minimum-spanning-tree/mst-kruskal.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Code Link"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[t._v("Introduction to Algorithm (aka CLRS) Third Edition - Chapter 23")])])])}),[],!1,null,null,null);r.default=v.exports}}]);