(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{300:function(v,_,t){"use strict";t.r(_);var r=t(28),n=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"greedy-algorithm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#greedy-algorithm"}},[v._v("#")]),v._v(" Greedy Algorithm")]),v._v(" "),t("ul",[t("li",[v._v("For source files, please refer to the "),t("a",{attrs:{href:"https://github.com/YuweiYin/Algorithm_YuweiYin",target:"_blank",rel:"noopener noreferrer"}},[v._v("GitHub Repository"),t("OutboundLink")],1),v._v(". (I'd be happy to see more people like this project and give "),t("strong",[v._v("Star")]),v._v(".)")])]),v._v(" "),t("h2",{attrs:{id:"directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#directory"}},[v._v("#")]),v._v(" Directory")]),v._v(" "),t("ul",[t("li",[v._v("贪心算法基础\n"),t("ul",[t("li",[t("a",{attrs:{href:"./activity-select"}},[v._v("活动选择问题")])]),v._v(" "),t("li",[t("a",{attrs:{href:"./huffman"}},[v._v("哈夫曼编码 Huffman")])]),v._v(" "),t("li",[t("a",{attrs:{href:"./task-scheduling"}},[v._v("拟阵及任务调度问题")])])])]),v._v(" "),t("li",[v._v("《CLRS》 Chapter 16 思考题\n"),t("ul",[t("li",[v._v("找零问题")]),v._v(" "),t("li",[v._v("最小平均完成时间调度问题")]),v._v(" "),t("li",[v._v("无环子图")]),v._v(" "),t("li",[v._v("调度问题变形")]),v._v(" "),t("li",[v._v("离线缓存")])])])]),v._v(" "),t("p",[v._v("贪心算法和动态规划最大的不同在于：贪心算法并不是首先寻找子问题的最优解，然后在其中进行选择，而是首先做出一次“贪心”选择（在当前情况/局部 看来最优的选择），然后再求解选出的/剩余的子问题，从而贪心算法不必费心求解所有可能的相关子问题。")]),v._v(" "),t("p",[v._v("对于某些问题，贪心算法能得到最优解；对某些问题，贪心算法不一定得到最优解，但比较可能得到一个较好的解；而有的时候，贪心算法得到的解是很差的。因此需要先对贪心算法的适用场景、问题的"),t("strong",[v._v("贪心性质")]),v._v("进行分析。")]),v._v(" "),t("p",[v._v("贪心算法/贪心策略有许多应用，除了前面提到的基础问题，还应用于：最小生成树 (Minimum Spanning Tree, MST) 算法、单源最短路径的 Dijkstra 算法，以及集合覆盖问题的 Chvatal 贪心启发式算法等。")]),v._v(" "),t("h2",{attrs:{id:"贪心算法原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#贪心算法原理"}},[v._v("#")]),v._v(" 贪心算法原理")]),v._v(" "),t("p",[v._v("贪心算法通过做出一系列选择来求出问题的最优解。在每个决策点，它做出当前情况下的最佳选择。这种启发式策略并不保证总能找到最优解，但对某些问题确实有效，例如"),t("a",{attrs:{href:"./activity-select"}},[v._v("活动选择问题")]),v._v("。")]),v._v(" "),t("p",[v._v("一般可以按如下步骤设计贪心算法：")]),v._v(" "),t("ol",[t("li",[v._v("将最优化问题转化为这样的形式：对当前问题做出一次选择后，"),t("strong",[v._v("只剩下一个")]),v._v("待解决的子问题。")]),v._v(" "),t("li",[v._v("证明做出贪心选择后，原问题总是存在最优解，即贪心选择总是"),t("strong",[v._v("安全")]),v._v("的。（"),t("strong",[v._v("贪心选择性质")]),v._v("）")]),v._v(" "),t("li",[v._v("证明做出贪心选择后，剩余的子问题满足性质：其最优解与贪心选择组合后 即可得到原问题的最优解。（"),t("strong",[v._v("最优子结构性质")]),v._v("）")])]),v._v(" "),t("h3",{attrs:{id:"贪心选择性质"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#贪心选择性质"}},[v._v("#")]),v._v(" 贪心选择性质")]),v._v(" "),t("p",[v._v("第一个关键要素是 "),t("strong",[v._v("贪心选择性质")]),v._v(" (greedy-choice property)：可以通过做出局部最优（贪心）选择来构造全局最优解。")]),v._v(" "),t("p",[v._v("贪心算法进行选择时 可能依赖之前作出的选择，但不依赖任何将来的选择或是子问题的解。因此，与动态规划 先解子问题才能进行第一次选择不同，贪心算法在进行第一次选择之前不求解任何子问题。一个动态规划算法通常是自底向上计算的，而一个贪心算法通常是自顶向下的。通过一次次的贪心选择，逐步将给定问题实例变得更小。")]),v._v(" "),t("p",[v._v("当然，必须证明每个步骤做出贪心选择能生成全局最优解(的一部分)。这种证明通常首先考察某个子问题的最优解，然后用贪心选择替换某个其它选择来修改此解，从而得到一个相似但更小的解。")]),v._v(" "),t("p",[v._v("如果进行贪心选择时不得不考虑众多选择，那么通常意味着可以改进贪心选择策略，使其更为高效。例如，在活动选择问题中，假定已经将活动按结束时间的单调递增顺序排好序，则只需对每个活动处理一次。通过对输入进行预处理或者使用适合的数据结构（通常是"),t("a",{attrs:{href:"../data-structure/heap-priority-queue"}},[v._v("优先队列")]),v._v("），可以使贪心选择更快速，从而得到更高效的算法。")]),v._v(" "),t("h3",{attrs:{id:"最优子结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最优子结构"}},[v._v("#")]),v._v(" 最优子结构")]),v._v(" "),t("p",[v._v("如果一个问题的最优解包含（蕴含）其子问题的最优解，则称子问题具有"),t("strong",[v._v("最优子结构性质")]),v._v("。")]),v._v(" "),t("p",[v._v("此性质是能否应用动态规划和贪心算法的关键要素。不过，当应用贪心算法时，通常使用更为直接的最优子结构。需证明：将子问题的最优解与当前的贪心选择组合在一起就能生成原问题的最优解。（这隐含地对子问题使用了数学归纳法）")]),v._v(" "),t("h3",{attrs:{id:"与动态规划算法的对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与动态规划算法的对比"}},[v._v("#")]),v._v(" 与动态规划算法的对比")]),v._v(" "),t("p",[v._v("在每个贪心算法之下，几乎总有一个更繁琐的动态规划算法。")]),v._v(" "),t("p",[v._v("适合应用动态规划方法求解的最优化问题应该具备两个要素/性质："),t("strong",[v._v("最优子结构")]),v._v("、"),t("strong",[v._v("重叠子问题")]),v._v("。而贪心算法则需要："),t("strong",[v._v("最优子结构")]),v._v("、"),t("strong",[v._v("贪心选择性质")]),v._v("。")]),v._v(" "),t("p",[v._v("以一个经典最优化问题的两个变形来对比二者。")]),v._v(" "),t("p",[t("strong",[v._v("0-1 背包问题")]),v._v(" (0-1 knapsack problem)：现有 n 个商品，第 i 个商品价值 vi 美元、重量 wi 磅，以及有一个最多容纳 W 磅重的背包。问题：需要装下哪些商品，使得背包里的商品总价值最高？（n、vi、wi 和 W 都是正整数）")]),v._v(" "),t("p",[v._v("称这个问题是 0-1 背包问题，是因为对每个商品，"),t("strong",[v._v("要么把它完整装在背包里，要么不装它")]),v._v("，不能够只拿走商品的部分，当然也不能把一个商品拿走多次。")]),v._v(" "),t("p",[t("strong",[v._v("分数背包问题")]),v._v(" (fractional knapsack problem) 中，商品和背包的重量、价值设定是一样的，但是对于每个商品，可以只装下其中的一部分（比如拿走某商品的 1/3，则获得该商品 1/3 的价值）。")]),v._v(" "),t("p",[v._v("可以想象 0-1 背包问题中的商品是不同大小的金锭，而分数背包问题中的商品是一堆金砂、银砂、珠宝。")]),v._v(" "),t("p",[v._v("这两个问题都具有最优子结构性质，但是可以用贪心算法求解分数背包问题（动态规划也可以，但是会比贪心算法繁琐），而不能用贪心算法求 0-1 背包问题（如果希望得到最优解）。")]),v._v(" "),t("p",[v._v("对于分数背包问题，先求出每个商品的每磅价值 vi/wi，遵循贪心策略，尽可能多地拿走当前每磅价值最高的商品，直至背包装满。因此这个贪心算法的耗时也就是排序时间 O(n log n)。")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info-technology/algorithm/greedy-algorithm/greedy-1.png",alt:"greedy-1"}})]),v._v(" "),t("h2",{attrs:{id:"拟阵和贪心算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拟阵和贪心算法"}},[v._v("#")]),v._v(" 拟阵和贪心算法")]),v._v(" "),t("p",[v._v("下文会介绍一种与贪心算法相关的漂亮的理论。该理论描述了很多贪心方法生成最优解的情形，它涉及一种称为 "),t("strong",[v._v("拟阵")]),v._v(" Matroid 的组合结构。虽然这种理论不能涵盖贪心方法使用的所有情况，例如 "),t("a",{attrs:{href:"./activity-select"}},[v._v("活动选择问题")]),v._v(" 和 "),t("a",{attrs:{href:"./huffman"}},[v._v("哈夫曼编码 Huffman")]),v._v(" 问题。但它确实涵盖了很多有实际意义的情况。而且，这种理论的扩展还覆盖了其它很多应用。")]),v._v(" "),t("h3",{attrs:{id:"拟阵-matroid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拟阵-matroid"}},[v._v("#")]),v._v(" 拟阵 Matroid")]),v._v(" "),t("p",[v._v("一个"),t("strong",[v._v("拟阵")]),v._v("就一个满足如下条件的"),t("strong",[v._v("序偶")]),v._v(" M = (S, T)：")]),v._v(" "),t("ol",[t("li",[v._v("S 是一个"),t("strong",[v._v("有限集")]),v._v("。")]),v._v(" "),t("li",[v._v("T 是 S 的"),t("strong",[v._v("子集的一个非空族")]),v._v("（或者说 T 是 S 的幂集的一个非空子集），这些子集称为 S 的"),t("strong",[v._v("独立子集")]),v._v("，使得如果 $ B \\in T $ 且 $ A \\subseteq B $，则 $ A \\in T $。如果 T 满足此性质，则称 T 为"),t("strong",[v._v("遗传的")]),v._v("。（空集必然属于 T ）")]),v._v(" "),t("li",[v._v("若 $ A \\in T $、$ B \\in T $ 且集合的秩 $ |A| < |B| $，那么存在某个元素 $ x \\in B - A $，使得 $ A \\cup {x} \\in T $，则称拟阵 M = (S, T) 满足"),t("strong",[v._v("交换性质")]),v._v("。")])]),v._v(" "),t("ul",[t("li",[v._v("进一步解释遗传性：\n"),t("ul",[t("li",[v._v("对于 T 中的任何元素(也是集合) B 而言，B 的任何子集也都属于 T。")])])]),v._v(" "),t("li",[v._v("进一步解释交换性：\n"),t("ul",[t("li",[v._v("以下讨论均假设前提 $ A \\in T $、$ B \\in T $ 且集合的秩 $ |A| < |B| $ 成立")]),v._v(" "),t("li",[v._v("如果集合 A 是 B 的真子集，那么根据遗传性，B 的所有子集都属于 T，故交换性质是显然满足的。")]),v._v(" "),t("li",[v._v("如果集合 A 与集合 B 没有交集，由于不存在元素 x 属于差集 $ B-A = \\emptyset $，所以交换性的前提不成立，因此不影响交换性质的判断。")]),v._v(" "),t("li",[v._v("如果集合 A 与集合 B 有交集，但互不为真子集，故要考察属于 B 却不属于 A 的某个元素 x\n"),t("ul",[t("li",[v._v("记集合 C 为 A 并 {x}，那么是无法通过遗传性断定 C 属于 T 的。如果属于，那么就称拟阵 M 满足交换性质；如果差集 B-A 的任何元素 x 并上集合 A 都不属于 T，那么拟阵不具有交换性质。")]),v._v(" "),t("li",[v._v("交换性的“交换”就是指该元素 x 的可交换性，x 在集合 B 里当然是属于集合 T 的（根据遗传性），x 如果“交换给”集合 A，如果具有交换性，A 并 {x} 也会属于 T。")])])])])])]),v._v(" "),t("p",[v._v("“拟阵”一词最早是由 Hassler Whitney 提出的。他当时在研究"),t("strong",[v._v("矩阵拟阵")]),v._v("，其中 S 是一个给定矩阵的所有行，而行之间的独立性质与通常意义上的线性无关性质是等价的。《CLRS》练习 16.4-2：给定某个域（如实数域 R）上的 m x n 矩阵 T。那么 (S, T) 是一个拟阵，其中 S 是 T 的列的集合，且 $ A \\in T $ 当且仅当 A 中的列是线性无关的。")]),v._v(" "),t("p",[v._v("另一个拟阵的例子是"),t("strong",[v._v("图拟阵")]),v._v(" (graphic matroid) MG = (SG, TG)，它定义在一个给定的无向图 G = (V, E) 之上：")]),v._v(" "),t("ol",[t("li",[v._v("SG 定义为 E，即 G 的边集。")]),v._v(" "),t("li",[v._v("如果 A 是 E 的子集，则 $ A \\in TG $ 当且仅当 A 是无圈的。\n"),t("ul",[t("li",[v._v("即：一组边 A 是独立的 当且仅当 子图 GA = (V, A) 形成一个森林。")])])])]),v._v(" "),t("p",[v._v("图拟阵 MG 与最小生成树问题是紧密相关的。")]),v._v(" "),t("p",[v._v("《CLRS》"),t("strong",[v._v("定理 16.5")]),v._v("：如果 G = (V, E) 是一个无向图，则 MG = (SG, TG) 是一个拟阵。")]),v._v(" "),t("p",[v._v("给定一个拟阵 M = (S, T)，如果对一个集合 $ A \\in T $ 和一个不属于 A 的元素 x，将 x 加入 A 会保持独立性质，则称 x 是 A 的一个"),t("strong",[v._v("扩展")]),v._v("。即：如果集合 A 并 {x} 属于 T，则元素 x 是 A 的一个扩展。")]),v._v(" "),t("p",[v._v("以图拟阵 MG 为例，如果 A 是一个边独立集，那么边 e 是 A 的一个扩展 当且仅当 e 不在 A 中、且将 e 加入 A 后不会形成圈。")]),v._v(" "),t("p",[v._v("对拟阵 M 中的一个独立子集 A，如果它不存在扩展，则称它是"),t("strong",[v._v("最大的")]),v._v("。即，如果 A 不包含于任何更大的 M 的独立子集中，则 A 是最大的(实则为“极大的”)。")]),v._v(" "),t("p",[v._v("《CLRS》"),t("strong",[v._v("定理 16.6")]),v._v("：拟阵中所有最大(极大)独立子集都具有相同大小。")]),v._v(" "),t("p",[v._v("作为定理 16.6 的一个示例，考虑一个连通无向图 G 的图拟阵 MG。MG 的每个最大独立子集必定是一棵边数为 "),t("code",[v._v("|V| - 1")]),v._v("、连接了 G 的所有顶点的自由树。这样一棵树不是唯一的，但都被称为 G 的"),t("strong",[v._v("最大生成树")]),v._v("。")]),v._v(" "),t("p",[v._v("如果一个拟阵 M = (S, T) 关联一个"),t("strong",[v._v("权重函数")]),v._v(" w，为"),t("strong",[v._v("每个元素")]),v._v(" $ x \\in S $ 赋予一个"),t("strong",[v._v("大于 0 的权重")]),v._v(" w(x)，则称 M 是"),t("strong",[v._v("加权的")]),v._v("。通过求和，可将权重函数 w 扩展到 S 的任意子集 A：$ w(A) = \\sum_{x \\in A} w(x) $")]),v._v(" "),t("p",[v._v("例如，如果令 w(e) 表示图拟阵 MG 中边 e 的权重，那么 w(A) 就表示边集 A 中所有边的权重之和。")]),v._v(" "),t("h3",{attrs:{id:"加权拟阵上的贪心算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加权拟阵上的贪心算法"}},[v._v("#")]),v._v(" 加权拟阵上的贪心算法")]),v._v(" "),t("p",[v._v("很多可以用贪心算法得到最优解的问题 都可以形式化为 在一个"),t("strong",[v._v("加权拟阵")]),v._v("中寻找"),t("strong",[v._v("最大权重独立子集")]),v._v("的问题。")]),v._v(" "),t("p",[v._v("即，给定一个加权拟阵 M = (S, T)，希望寻找独立集 $ A \\in T $ 使得 w(A) 最大。称这种独立且具有最大可能权重的子集为拟阵的"),t("strong",[v._v("最优子集")]),v._v("。由于任何元素 $ x \\in S $ 的权重 w(x) 都是正的，则最优子集必然是最大独立子集 —— 它总是有助于使 A 尽可能大。")]),v._v(" "),t("p",[v._v("如下给出适用于任何加权拟阵的算法伪代码。该算法接受一个"),t("strong",[v._v("加权拟阵")]),v._v(" M = (S, T) 及其关联的"),t("strong",[v._v("正加权函数")]),v._v(" w 作为输入，返回最优子集 A。该算法是一个贪心算法，它按权重单调递减的顺序考虑 S 集合中的每个元素 x，如果 A 并 {x} 是独立的，就立即将 x 加入到累积集合 A 中。")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("GREEDY(M, w)\n1     A = \\emptyset\n2     sort M.S into monotonically decreasing order by weight w\n3     for each x \\in M.S, taken in monotonically decreasing order by weight w(x)\n4         if A \\cup {x} \\in M.T\n5             A = A \\cup {x}\n6     return A\n")])])]),t("p",[v._v("算法第 4 行检查加入 x 后 A 是否保持独立集性质，若是，则在第 5 行将 x 加入 A，否则“丢弃”x，考虑下一个高权重的元素。")]),v._v(" "),t("p",[v._v("GREEDY 算法的运行时间分析：令 n 表示 S 集合的秩 $ |S| $。排序阶段花费时间为 O(n log n)，第 4 行严格执行了 n 次，每次处理 S 的一个元素。第 4 行每执行一次需检查一个集合 $ A \\cup {x} $ 是否独立。如果每次检查花费时间为 O(f(n))，则 GREEDY 算法的总运行时间为 O(n log n + n f(n))。")]),v._v(" "),t("p",[v._v("《CLRS》"),t("strong",[v._v("引理 16.7")]),v._v("（拟阵具有贪心选择性质）：假定 M = (S, T) 是一个加权拟阵，加权函数为 w，且 S 已按权重单调递减顺序排序。令 x 是 S 中第一个满足 {x} 独立的元素（如果存在）。如果存在这样的 x，那么存在 S 的一个最优子集 A 包含 x。")]),v._v(" "),t("p",[v._v("《CLRS》"),t("strong",[v._v("引理 16.8")]),v._v("：令 M = (S, T) 是一个拟阵。如果 x 是 S 中的一个元素，而且是 S 的某个独立子集 A 的一个扩展，则 x 也是空集的一个扩展。")]),v._v(" "),t("p",[v._v("引理 16.8 表明：如果一个元素在初始时不是最优的选择，那么在随后也不会被选入到最优集合中。")]),v._v(" "),t("p",[v._v("《CLRS》"),t("strong",[v._v("推论 16.9")]),v._v("：令 M = (S, T) 是一个拟阵。如果 x 是 S 中的一个元素，且它不是空集的一个扩展，那么它也不是 S 的任何独立子集 A 的扩展。")]),v._v(" "),t("p",[v._v("推论 16.9 表明：任何元素，如果首次不能用于构造独立集，则之后永远也不可能被用于构造/扩展独立集了。")]),v._v(" "),t("p",[v._v("因此，GREEDY 算法跳过那些不是空集到扩展的起始元素，不会导致错误的结果（非最优解），因为那些元素之后也不会再被用到。")]),v._v(" "),t("p",[v._v("《CLRS》"),t("strong",[v._v("引理 16.10")]),v._v("（拟阵具有最优子结构性质）：令 M = (S, T) 是一个加权拟阵。x 是 S 中第一个被 GREEDY 算法选出的元素，则接下来寻找一个包含 x 的最大权重独立子集的问题 可以归结为寻找加权拟阵 M' = (S', T') 的一个最大权重独立子集的问题，其中：")]),v._v(" "),t("ul",[t("li",[v._v("S' = {y \\in S: {x, y} \\in T}")]),v._v(" "),t("li",[v._v("T' = {B \\subseteq S-{x}: B \\cup {x} \\in T}")])]),v._v(" "),t("p",[v._v("M' 的权重函数就是 M 的权重函数（计算权重的方式不变），但定义域只局限于 S' 中的元素。或者称 M' 为 M 在元素 x 上的 "),t("strong",[v._v("收缩")]),v._v(" (contraction)。")]),v._v(" "),t("p",[v._v("《CLRS》"),t("strong",[v._v("定理 16.11")]),v._v("（拟阵上贪心算法的正确性）：若 M = (S, T) 是一个加权拟阵，权重函数是 w，那么 GREEDY(M, w) 返回一个最优子集。")])])}),[],!1,null,null,null);_.default=n.exports}}]);