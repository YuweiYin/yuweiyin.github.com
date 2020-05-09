(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{403:function(t,e,n){"use strict";n.r(e);var _=n(28),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"algorithm-sort"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-sort"}},[t._v("#")]),t._v(" Algorithm - Sort")]),t._v(" "),n("p",[t._v("By "),n("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YuweiYin"),n("OutboundLink")],1)]),t._v(" "),n("hr"),t._v(" "),n("ul",[n("li",[n("strong",[t._v("内部排序")]),t._v("：待排序的数据全部存放在内存中，无须访问外存。")]),t._v(" "),n("li",[n("strong",[t._v("外部排序")]),t._v("：待排序的数据的数量庞大，不能一次全部加载入内存，需要在排序过程中访问外存。")])]),t._v(" "),n("p",[n("a",{attrs:{href:"http://data.biancheng.net/out_sort/",target:"_blank",rel:"noopener noreferrer"}},[t._v("常用外部排序算法"),n("OutboundLink")],1),t._v("有 "),n("strong",[t._v("多路归并排序")]),t._v("、"),n("strong",[t._v("胜者树 & 败者树")]),t._v("、"),n("strong",[t._v("置换-选择排序")]),t._v("、"),n("strong",[t._v("最优归并树")]),t._v("（哈夫曼树 Huffman Tree）等，下文主要讨论内部排序算法。")]),t._v(" "),n("h2",{attrs:{id:"基础的内部排序算法概览"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础的内部排序算法概览"}},[t._v("#")]),t._v(" 基础的内部排序算法概览")]),t._v(" "),n("p",[t._v("排序算法的 "),n("a",{attrs:{href:"./sort-base-class"}},[t._v("基类 Sort")]),t._v("。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("排序算法类型")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("算法名称")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("时间-平均情况")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("时间-最好情况")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("时间-最坏情况")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("空间-辅助存储")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("稳定性")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("插入排序")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[n("a",{attrs:{href:"./insertion-sort"}},[t._v("直接插入排序")])])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n^2)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n^2)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(1)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("稳定")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("插入排序")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("希尔排序")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("O(n^1.3)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n^2)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(1)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("不稳定")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("选择排序")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("直接选择排序")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n^2)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n^2)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n^2)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(1)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("不稳定")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("选择排序")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[n("a",{attrs:{href:"./heap-sort"}},[t._v("堆排序")])])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("O(n log n)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n log n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n log n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(1)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("不稳定")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("交换排序")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("冒泡排序")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n^2)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n^2)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(1)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("稳定")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("交换排序")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[n("a",{attrs:{href:"./quick-sort"}},[t._v("快速排序")])])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("O(n log n)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n log n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n^2)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n log n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("不稳定")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("归并排序")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[n("a",{attrs:{href:"./merge-sort"}},[t._v("二路归并排序")])])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("O(n log n)")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n log n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n log n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("稳定")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("线性时间排序")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("桶排序")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("稳定")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("线性时间排序")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("计数排序")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n+k)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n+k)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(n+k)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(k)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("稳定")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("线性时间排序")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[n("strong",[t._v("基数排序")])]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(d(r+n))")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(d(r+n))")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(d(r+n))")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("O(r)")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("稳定")])])])]),t._v(" "),n("ul",[n("li",[t._v("注：\n"),n("ul",[n("li",[t._v("log 均表示"),n("strong",[t._v("以 2 为底")]),t._v("的对数值。")]),t._v(" "),n("li",[t._v("“时间-” 表示时间复杂度")]),t._v(" "),n("li",[t._v("“空间-” 表示空间复杂度。此处仅考虑排序时需要的"),n("strong",[t._v("额外辅助存储空间")]),t._v("。")]),t._v(" "),n("li",[t._v("如果直接使用桶排序，桶的数量即为全部数据量 n。")]),t._v(" "),n("li",[t._v("计数排序：\n"),n("ul",[n("li",[t._v("k 为原始数据的“直径”，即最大数与最小数的差值。这也是计数排序的“桶”数目。")]),t._v(" "),n("li",[t._v("局限一：原始数据必须都要是整数。")]),t._v(" "),n("li",[t._v("局限二：原始数据的“直径”过大时，可能造成很大的空间浪费。")])])]),t._v(" "),n("li",[t._v("基数排序：\n"),n("ul",[n("li",[t._v("n 为关键字的个数，r (radix) 为关键字的基数（常为 10），d 为关键字的长度，d = log_r (number)")]),t._v(" "),n("li",[t._v("例如，数字 128 在基数为 10 的情况下（十进制），长度 d = 3，有个位、十位和百位数字")]),t._v(" "),n("li",[t._v("进行 d 趟排序，每趟对当前位进行桶排序。桶的个数即为 r（基数值）。")])])]),t._v(" "),n("li",[t._v("原址 in-place 归并排序的空间复杂度为 O(1)，但是时间复杂度变成了 O(N^2)，一般不考虑。")])])])]),t._v(" "),n("h2",{attrs:{id:"排序算法类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#排序算法类型"}},[t._v("#")]),t._v(" 排序算法类型")]),t._v(" "),n("h2",{attrs:{id:"时间复杂度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[t._v("#")]),t._v(" 时间复杂度")]),t._v(" "),n("h2",{attrs:{id:"空间复杂度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度"}},[t._v("#")]),t._v(" 空间复杂度")]),t._v(" "),n("h2",{attrs:{id:"排序算法的稳定性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#排序算法的稳定性"}},[t._v("#")]),t._v(" 排序算法的稳定性")]),t._v(" "),n("p",[t._v("某排序算法“稳定”，是指该排序算法不会改变相同 key 值的元素 在原无序状态时的相对位置。")]),t._v(" "),n("p",[t._v("例如：原无序数组 "),n("code",[t._v("origin = [ 4, 2, 2, 3 ]")]),t._v("，各排序算法进行升序排列之后，结果都是 "),n("code",[t._v("res = [ 2, 2, 3, 4 ]")])]),t._v(" "),n("p",[t._v("但是 origin 数组中的两个 2 的相对位置是否在 res 数组中得以保持，就表明算法是否具有稳定性。")]),t._v(" "),n("h3",{attrs:{id:"稳定性的意义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#稳定性的意义"}},[t._v("#")]),t._v(" 稳定性的意义")]),t._v(" "),n("p",[t._v("如果仅仅把 origin 数组中的 2 当成是一个数，其相对位置的变动似乎影响不大。")]),t._v(" "),n("p",[t._v("但如果数组中的每个元素都是一个结构体，排序的依据仅仅是结构体中的某一个 key 值（具有全序关系的量），那么相对位置如果改变，就会导致不同的 res 数组。")]),t._v(" "),n("p",[t._v("例如：原无序数组 "),n("code",[t._v("origin = [ [4, 11], [2, 22], [2, 33], [3, 44] ]")]),t._v("，排序的 key 是各元素（列表）中的首元素")]),t._v(" "),n("p",[t._v("那么如果是稳定排序，结果 "),n("code",[t._v("res = [ [2, 22], [2, 33], [3, 44], [4, 11] ]")])]),t._v(" "),n("p",[t._v("如果是不稳定的排序，结果"),n("strong",[t._v("可能")]),t._v("为 "),n("code",[t._v("res = [ [2, 33], [2, 22], [3, 44], [4, 11] ]")])]),t._v(" "),n("p",[t._v("这就造成了不同的结果，可能影响之后别的操作。")])])}),[],!1,null,null,null);e.default=v.exports}}]);