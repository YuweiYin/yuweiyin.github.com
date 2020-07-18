(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{328:function(t,s,a){"use strict";a.r(s);var n=a(28),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"algorithm-dynamic-programming-task-scheduling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-dynamic-programming-task-scheduling"}},[t._v("#")]),t._v(" Algorithm - Dynamic Programming - Task Scheduling")]),t._v(" "),a("p",[t._v("By "),a("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YuweiYin"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("任务调度问题 Task Scheduling")]),t._v(" "),a("h3",{attrs:{id:"任务调度问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务调度问题描述"}},[t._v("#")]),t._v(" 任务调度问题描述")]),t._v(" "),a("p",[t._v("单处理器上的"),a("strong",[t._v("单位时间任务")]),t._v("最优调度问题是一个可以用 "),a("strong",[t._v("拟阵")]),t._v(" (Matroid) 来求解的问题。在该问题中，每个任务都有一个"),a("strong",[t._v("截止时间")]),t._v("以及错过截止时间后的"),a("strong",[t._v("惩罚值")]),t._v("。可以将此问题转换为一个矩阵，并用贪心算法求解。")]),t._v(" "),a("p",[a("strong",[t._v("单位时间任务")]),t._v(" 是严格需要一个时间单位来完成的作业，如运行于计算机上的一个程序。给定一个单位时间任务的有限集合 S，对 S 的一个"),a("strong",[t._v("调度")]),t._v("是指 S 的一个排列 (permutation)，它指明了任务执行的顺序。第一个被调度的任务开始于时刻 0，终止于时刻 1，第二个任务开始于时刻 1，终止于时刻 2，依此类推。")]),t._v(" "),a("p",[t._v("单处理器上带"),a("strong",[t._v("截止时间")]),t._v("和"),a("strong",[t._v("惩罚")]),t._v("的"),a("strong",[t._v("单位时间任务")]),t._v("调度问题有如下输入：")]),t._v(" "),a("ul",[a("li",[t._v("n 个单位时间任务的集合 S = {a1, a2, ..., an}")]),t._v(" "),a("li",[t._v("n 个整数 d1, d2, ..., dn 表示任务"),a("strong",[t._v("截止时间")]),t._v("。每个 di 满足 1 <= di <= n，期望任务 ai 在时间 di 之前完成。")]),t._v(" "),a("li",[t._v("n 个非负权重或"),a("strong",[t._v("惩罚")]),t._v(" w1, w2, ..., wn。若任务 ai 在时间 di 之前没有完成，就会受到 wi 的惩罚，如果任务在截止时间前完成，则不会受到惩罚。（这里惩罚为定值，不随时间变化）")])]),t._v(" "),a("p",[t._v("目标是找到 S 的一个调度方案，能"),a("strong",[t._v("最小化总惩罚值")]),t._v("。")]),t._v(" "),a("p",[t._v("考虑一个给定的调度方案。如果方案中一个任务在截止时间后完成，那么称它是"),a("strong",[t._v("延迟的")]),t._v(" (late)，否则 称它是"),a("strong",[t._v("提前的")]),t._v(" (early)。对于任意调度方案，总是可以将其转换为"),a("strong",[t._v("提前优先模式")]),t._v(" (early-first form)，即：将提前的任务都置于延迟的任务之前。因为如果某个提前任务 ai 位于某个延迟任务 aj 之后，那么可以交换两者的位置，此时 ai 仍然是提前的，而 aj 仍然是延迟的。（实际上，能这样做主要是依赖于题目里的惩罚值为定值，延迟的任务不会因为延迟时间变长而增大惩罚值，所以可以让 late 的任务更加 later）")]),t._v(" "),a("p",[t._v("而且，总是可以将一个任意的调度方案转换为"),a("strong",[t._v("规范模式")]),t._v(" (canonical form) —— 提前任务都在延迟任务之前，且提前任务按截止时间单调递增的顺序排序。")]),t._v(" "),a("p",[t._v("这样，寻找最优调度方案的问题 就归结为寻找"),a("strong",[t._v("提前任务子集")]),t._v(" A 的问题。确定 A 之后，可以将 A 中元素按截止时间题赠的顺序排列，然后将延迟任务（差集 S-A）以任意顺序排列在其后，就得到了最优调度方案的规范形式。")]),t._v(" "),a("p",[t._v("对于一个任务集合 A，如果存在一个调度方案，使 A 中所有任务都不延迟，则称 A 是"),a("strong",[t._v("独立的")]),t._v("。显然，一个调度方案的提前任务集合构成一个独立任务集。令 T 表示所有独立任务集 构成的集类。")]),t._v(" "),a("p",[t._v("下面考虑如何确定一个给定集合 A 是否独立的问题。对 t = 0, 1, 2, ..., n，令 Nt(A) 表示 A 中截止时间小于等于 t 的任务数。注意，对任意集合 A 均有 N0(A) = 0。")]),t._v(" "),a("p",[t._v("《CLRS》"),a("strong",[t._v("引理 16.12")]),t._v("：对任意任务集合 A，如下 3 条性质是等价的：")]),t._v(" "),a("ol",[a("li",[t._v("A 是独立的")]),t._v(" "),a("li",[t._v("对 t = 0, 1, 2, ..., n，均有 Nt(A) <= t")]),t._v(" "),a("li",[t._v("如果 A 中任务按截止时间单调递增的顺序调度，那么不会有任务延迟")])]),t._v(" "),a("p",[t._v("利用性质 2，可以设计出一个算法过程，在 O(|A|) 时间内确定一个给定任务集合 A 是否为独立的。")]),t._v(" "),a("p",[t._v("最小化延迟任务的惩罚之和问题 与 最大化提前任务的惩罚之和 是等价的。下面的定理 16.13 可以确保可以用贪心算法求出总惩罚最大的独立任务集 A。")]),t._v(" "),a("p",[t._v("《CLRS》"),a("strong",[t._v("定理 16.13")]),t._v("：如果 S 是一个给定了"),a("strong",[t._v("截止时间")]),t._v("的"),a("strong",[t._v("单位时间任务")]),t._v("集合，T 是所有"),a("strong",[t._v("独立任务集合")]),t._v("的"),a("strong",[t._v("集类")]),t._v("，则对应的系统 (S, T) 是一个"),a("strong",[t._v("拟阵")]),t._v("。")]),t._v(" "),a("p",[t._v("由定理 16.13，可以用贪心算法求出一个最大权重的独立任务集 A，然后可以创建一个最优调度方案，以 A 中任务为提前任务。这个算法是求解单处理器上带截止时间和惩罚的单位时间任务调度问题的一种高效算法。使用贪心算法的运行时间为 O(n^2)，因为算法共进行了 O(n) 次"),a("strong",[t._v("独立性检查")]),t._v("，每次检查花费 O(n) 时间。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/info-technology/algorithm/greedy-algorithm/task-scheduling-1.png",alt:"task-scheduling-1"}})]),t._v(" "),a("h3",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 循环实现 (贪心算法)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 时间复杂度 O(n^2)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 空间复杂度 \\Theta(n)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_task_scheduling_iteration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("task_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务总数")]),t._v("\n    self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimal_punish "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最优总惩罚因子")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 n 个时间槽")]),t._v("\n    neg_inf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x3f3f3f3f")]),t._v("\n    time_slot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("neg_inf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" n\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 依次处理 n 个任务，各任务已经按惩罚因子降序排列了")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        task "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("task_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        is_slot_founded "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当处理任务 aj 时，如果存在不晚于 aj 的截止时间 dj 的空余时间槽，则将 aj 分配到其中最晚的那个槽")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("reversed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deadline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" time_slot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" neg_inf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                is_slot_founded "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n                time_slot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("task_id  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 时间槽占位")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果不存在这样的时间槽，则将 aj 分配到所有空余时间槽最晚的一格中")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" is_slot_founded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimal_punish "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("punish  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此任务必然延迟")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("reversed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" time_slot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" neg_inf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    time_slot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("task_id\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最优任务调度顺序")]),t._v("\n    self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimal_order "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time_slot\n")])])]),a("h3",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("p",[t._v("《CLRS》思考题 16-4（调度问题的变形）提出了一个高效实现的方案。初始时令 n 个时间槽为空，时间槽 i 为单位时间长度，结束于时刻 i。按惩罚值单调递减的顺序处理所有任务。当处理任务 aj 时，如果存在"),a("strong",[t._v("不晚于")]),t._v(" aj 的截止时间 dj 的"),a("strong",[t._v("空余时间槽")]),t._v("，则将 aj 分配到"),a("strong",[t._v("其中最晚")]),t._v("的那个。如果不存在这样的时间槽，则将 aj 分配到所有空余时间槽最晚的一格中。另外，可以结合使用"),a("a",{attrs:{href:"../data_structure/union-find"}},[t._v("快速不相交集合森林")]),t._v("来高效实现此算法。")]),t._v(" "),a("h2",{attrs:{id:"代码范例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码范例"}},[t._v("#")]),t._v(" 代码范例")]),t._v(" "),a("h3",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[t._v("#")]),t._v(" Python")]),t._v(" "),a("p",[t._v("Python 环境：Python 3.7")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/YuweiYin/Code_Play/blob/master/Algorithm-Essence/greedy-algorithm/task-scheduling.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Code Link"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[t._v("Introduction to Algorithm (aka CLRS) Third Edition - Chapter 16")])])])}),[],!1,null,null,null);s.default=r.exports}}]);