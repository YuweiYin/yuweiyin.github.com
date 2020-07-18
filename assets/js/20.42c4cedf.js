(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{296:function(t,s,a){"use strict";a.r(s);var n=a(28),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"algorithm-data-structure-lowest-common-ancestor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-data-structure-lowest-common-ancestor"}},[t._v("#")]),t._v(" Algorithm - Data Structure - Lowest Common Ancestor")]),t._v(" "),a("p",[t._v("By "),a("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YuweiYin"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("最近公共祖先 (Lowest Common Ancestor, LCA)")]),t._v(" "),a("h2",{attrs:{id:"场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),a("p",[t._v("LCA(T, u, v) 问题的目标是求一棵树 T 上两结点 u 和 v 的最近公共祖先 a。")]),t._v(" "),a("ul",[a("li",[t._v("“"),a("strong",[t._v("最近")]),t._v("”意味着结点 a 在树 T 中的深度尽量大。")]),t._v(" "),a("li",[t._v("结点 x 的“"),a("strong",[t._v("祖先")]),t._v("”包括了 x 结点自身，以及 x 的父结点、x 的父结点的父结点、...、树根结点。")])]),t._v(" "),a("p",[t._v("LCA 查询的重要应用：一旦找到了树中两结点 u, v 的最近公共祖先 a，那么 u->v 的"),a("strong",[t._v("最短路径")]),t._v("便是 u->a->v 路径。")]),t._v(" "),a("h2",{attrs:{id:"场景分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景分析"}},[t._v("#")]),t._v(" 场景分析")]),t._v(" "),a("h3",{attrs:{id:"朴素-lca-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#朴素-lca-算法"}},[t._v("#")]),t._v(" 朴素 LCA 算法")]),t._v(" "),a("ol",[a("li",[t._v("先求出树上每个结点的深度。")]),t._v(" "),a("li",[t._v("对于查询 LCA(u, v)，用两个指针 p1、p2 指向 u、v。")]),t._v(" "),a("li",[t._v("将 p1、p2 中深度较大的结点不断指向其父结点，直到 p1、p2 所指结点的深度相同。")]),t._v(" "),a("li",[t._v("之后 p1、p2 同步向上移动，直到 p1==p2，即二者指向同一结点，该结点就是目标 LCA(u, v)。")])]),t._v(" "),a("h3",{attrs:{id:"lca-向-rmq-转化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lca-向-rmq-转化"}},[t._v("#")]),t._v(" LCA 向 RMQ 转化")]),t._v(" "),a("p",[t._v("LCA 问题可以转化为 "),a("a",{attrs:{href:"./range-min-max-query"}},[t._v("RMQ 区间最值查询")]),t._v(" 问题。利用 RMQ 中的 Sparse Table 处理 Euler Tour（后文会详述），通过时间复杂度 O(n log n) 的预处理，LCA 查询可以达到 O(1) 的时间复杂度。")]),t._v(" "),a("h3",{attrs:{id:"lca-的-tarjan-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lca-的-tarjan-算法"}},[t._v("#")]),t._v(" LCA 的 Tarjan 算法")]),t._v(" "),a("p",[t._v("LCA 的 Tarjan 算法是一种利用 "),a("a",{attrs:{href:"./union-find"}},[t._v("Union Find 并查集")]),t._v(" 的离线算法，能够在一次 DFS 过程中完成所有 query。")]),t._v(" "),a("p",[t._v("时间复杂度为 O(n + q) ，q 为 query 的次数。")]),t._v(" "),a("h2",{attrs:{id:"设计-细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计-细节"}},[t._v("#")]),t._v(" 设计 & 细节")]),t._v(" "),a("p",[t._v("以下图的树为例，结点内部的数字为结点值/结点 key，结点左边的数字为结点的前序遍历序号：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/info-technology/algorithm/data-structure/lca-1.png",alt:"lca-1"}})]),t._v(" "),a("h3",{attrs:{id:"遍历构造工具数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遍历构造工具数组"}},[t._v("#")]),t._v(" 遍历构造工具数组")]),t._v(" "),a("p",[t._v("先对树 T 进行深度优先遍历 DFS（前序遍历），同时记录此遍历路径。如果"),a("strong",[t._v("不记录重复的结点")]),t._v("，那么就是普通的前序遍历序列 Preorder Traversal（"),a("strong",[t._v("下文简称 PT")]),t._v("）。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("PT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("PT 有个特性：树中任意两结点 u, v，如果 u 是 v 的祖先，那么 u 的 key 在序列 PT 中的下标索引一定小于 v。（反之则不一定）")]),t._v(" "),a("p",[t._v("PT 是从 index 到结点 key 的映射，PT 数组的长度为树结点总数目，可以得出其逆映射（"),a("strong",[t._v("记为 PTR")]),t._v("）为：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("PTR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("注意：如果以上述列表形式表达 PTR，那么其总长度应该为树结点 key 的最大值，如果处理的 key 并不连续，那么将会有很多空值、浪费空间。因此考虑用如下字典方式表达 PTR 映射：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("PTR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("如果"),a("strong",[t._v("要记录重复的结点")]),t._v("，则序列称为称为 Euler Tour（"),a("strong",[t._v("下文简称 ET")]),t._v("）。这里的 ET 只记录结点对应于 PT 序列中的下标（即图中结点左侧的数字）。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("ET "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("另外还需要一个与 PT 等长的"),a("strong",[t._v("数组 First")]),t._v(" 用于映射，记录 ET 中 "),a("code",[t._v("range(len(PT))")]),t._v(" 这些下标数字 在 ET 中首次出现的位置：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("First "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("前述列表的构造，时间复杂度均为 O(n)，n 为树结点总数目。")]),t._v(" "),a("p",[t._v("最后，对 ET 数组构建 Sparse Table，方便进行 RMQ 查询任意子区间的最小值。时间复杂度 O(n log n)。")]),t._v(" "),a("h3",{attrs:{id:"查询-lca"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询-lca"}},[t._v("#")]),t._v(" 查询 LCA")]),t._v(" "),a("p",[t._v("利用前述数组/列表 即可在常数时间计算任两个结点 u, v 的 LCA(u, v)，以 LCA(3, 8) 为例。")]),t._v(" "),a("p",[t._v("注意：输入给 LCA 算法的参数代表了结点的 key（即图中结点内部的数字），可通过 PTR 转换为 PT 中的下标。")]),t._v(" "),a("ol",[a("li",[t._v("先利用 PTR 字典，将结点 key 为 3 和 8 "),a("strong",[t._v("映射")]),t._v("为 PT 对应的下标。\n"),a("ul",[a("li",[t._v("即 PTR[3] = 5 和 PTR[8] = 7")])])]),t._v(" "),a("li",[t._v("随后利用 First 数组，在 ET 中找到"),a("strong",[t._v("第一次出现")]),t._v(" 5 和第一次出现 7 的位置。\n"),a("ul",[a("li",[t._v("即 First[5] = 7 和 First[7] = 12")])])]),t._v(" "),a("li",[t._v("利用 RMQ 算法求 ET 中 index=7 到 index=12 的"),a("strong",[t._v("闭区间中的最小值")]),t._v("。\n"),a("ul",[a("li",[t._v("此闭区间为 [ 5, 4, 6, 4, 1, 7 ]，其最小值即为目标 LCA 结点在 PT 中的下标 1")])])]),t._v(" "),a("li",[t._v("最后利用 PT 数组，将前序遍历序列的下标映射为结点 key\n"),a("ul",[a("li",[t._v("即 PT[1] = 5")])])])]),t._v(" "),a("p",[t._v("这四个步骤的时间复杂度均为 O(1)，因此查询 LCA 的总时间复杂度为 O(1)。")]),t._v(" "),a("h3",{attrs:{id:"lca-rmq-效率分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lca-rmq-效率分析"}},[t._v("#")]),t._v(" LCA & RMQ 效率分析")]),t._v(" "),a("p",[t._v("由于 LCA 查询利用了 RMQ 算法，因此也继承了一些 RMQ 算法的缺点。")]),t._v(" "),a("p",[t._v("RMQ 算法的主要缺点在于构造 Sparse Table 的处理时间较长，为 O(n log n) 时间复杂度，因此如果用于构造 Sparse Table 的原数组经常变化（每次变化都需要重建 ST），则 RMQ 算法效率不高。")]),t._v(" "),a("p",[t._v("因此，这里我们需要观察 LCA 查询中，什么情况会导致重建 Sparse Table。")]),t._v(" "),a("p",[t._v("Sparse Table 只依赖于 ET 数组，而只要树结构不变（没有结点/边的增删），ET 数组就不会变。因此：将某结点 x 替换为另一个结点 y 不会改变 ET，也不会使得 ST 重建。（会使得 PT 和 PTR 改变，而 ET 和 First 不变。）")]),t._v(" "),a("p",[t._v("因此，只要"),a("strong",[t._v("树结构不频繁变动")]),t._v("，利用 RMQ 算法的 LCA 查询就会很高效 O(1)。")]),t._v(" "),a("h2",{attrs:{id:"代码范例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码范例"}},[t._v("#")]),t._v(" 代码范例")]),t._v(" "),a("h3",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[t._v("#")]),t._v(" Python")]),t._v(" "),a("p",[t._v("Python 环境：Python 3.7")]),t._v(" "),a("ul",[a("li",[t._v("注：\n"),a("ul",[a("li",[t._v("采用邻接表来存储，因为多叉树是一种较为稀疏的图结构。Vertex 类为顶点结构体，AdjacencyList 为图结构体。")]),t._v(" "),a("li",[t._v("其中 SparseTableRMQ 类的写法与 "),a("a",{attrs:{href:"./range-min-max-query"}},[t._v("RMQ 区间最值查询")]),t._v(" 文章中的代码相同。")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/YuweiYin/Code_Play/blob/master/Algorithm-Essence/data-structure/lowest-common-ancestor.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Code Link"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=HeeyUZmaZg0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Youtube - Lowest Common Ancestor Tutorial"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);