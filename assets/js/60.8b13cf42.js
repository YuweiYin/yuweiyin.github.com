(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{462:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"algorithm-dynamic-programming-huffman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-dynamic-programming-huffman"}},[t._v("#")]),t._v(" Algorithm - Dynamic Programming - Huffman")]),t._v(" "),a("p",[t._v("By "),a("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YuweiYin"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("哈夫曼编码 Huffman")]),t._v(" "),a("h3",{attrs:{id:"哈夫曼编码引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈夫曼编码引入"}},[t._v("#")]),t._v(" 哈夫曼编码引入")]),t._v(" "),a("p",[t._v("哈夫曼编码可以很有效地"),a("strong",[t._v("压缩数据")]),t._v("：通常可以节省 20%～90% 的空间，具体压缩率依赖于数据的特性。")]),t._v(" "),a("p",[t._v("可以将待压缩数据看作字符序列，根据"),a("strong",[t._v("每个字符的出现频率")]),t._v("，哈夫曼贪心算法构造出"),a("strong",[t._v("字符的最优二进制表示")]),t._v("。")]),t._v(" "),a("p",[t._v("假定希望压缩一个含有 10 万个字符的数据文件，下图给出了此文件中所出现的字符和它们的出现频率。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/info-technology/algorithm/greedy-algorithm/huffman-1.png",alt:"huffman-1"}})]),t._v(" "),a("p",[t._v("有许多方法可以表示这个文件的信息。这里考虑用"),a("strong",[t._v("二进制字符编码")]),t._v("（此后简称"),a("strong",[t._v("编码")]),t._v("），每个字符用一个唯一的二进制串表示，称为"),a("strong",[t._v("码字")]),t._v("。对于上述文件，如果使用定长编码，需要用 3 位来表示 6 个字符，这样需要 30 万个二进制位来编码文件。")]),t._v(" "),a("p",[t._v("如果使用"),a("strong",[t._v("变长编码")]),t._v(" (variable-length code) 可以达到比定长编码低得多的空间占用。其思想是赋予高频字符 短码字，赋予低频字符 长码字。")]),t._v(" "),a("h3",{attrs:{id:"前缀码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前缀码"}},[t._v("#")]),t._v(" 前缀码")]),t._v(" "),a("p",[t._v("这里考虑"),a("strong",[t._v("前缀码")]),t._v(" (prefix code)，即没有任何码字是其它码字的前缀。可以证明，与任何字符编码相比，前缀码可以保证达到最优数据压缩率。")]),t._v(" "),a("p",[t._v("任何二进制字符码的编码过程都很简单，只要将表示每个字符的码字连接起来即可完成文件的压缩。例如前面图片中的变长前缀码，可以将 3 个字符的单词 abc 编码为 0·101·100 = 0101100，这里符号“·”是表示连结操作。")]),t._v(" "),a("p",[t._v("前缀码的作用是简化编码过程。由于没有码字是其它码字的前缀，编码文件的开始码字是"),a("strong",[t._v("无歧义")]),t._v("的。因此可以根据固定的规则去识别，先识别出"),a("strong",[t._v("开始码字")]),t._v("，将其转换回原字符，然后对编码文件剩余部分重复这种解码过程。")]),t._v(" "),a("p",[t._v("解码过程需要前缀码的一种方便的表示形式，以便可以容易地截取开始码字。可以用一种 "),a("strong",[t._v("左 0 右 1")]),t._v(" 的二叉树来表达。每个叶结点标记了一个"),a("strong",[t._v("字符及其出现的频率")]),t._v("，每个内部结点标记了其子树中叶结点的"),a("strong",[t._v("频率之和")]),t._v("。前缀码中的二进制 0 意味着“转向左孩子”，二进制 1 意味着“转向右孩子”，直至叶结点（存储对应的原字符），完成当前识别/解码。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/info-technology/algorithm/greedy-algorithm/huffman-2.png",alt:"huffman-2"}})]),t._v(" "),a("p",[t._v("文件的最优编码方案总是对应一棵 "),a("strong",[t._v("满二叉树")]),t._v(" (full binary tree)，即每个非叶结点都有两个孩子结点。前文给出的定长编码实例不是最优的，因为它的二叉树表示 并非满二叉树（如上图 (a) 所示）。设有 "),a("code",[t._v("|C|")]),t._v(" 个叶结点，每个叶结点对应字母表中的一个字符，由于最优前缀码对应的树是满二叉树，因此恰有 "),a("code",[t._v("|C| - 1")]),t._v(" 个内部结点。")]),t._v(" "),a("p",[t._v("给定一棵对应前缀码的树 T，可以很容易地计算出编码一个文件需要多少个二进制位。对于字母表 C 中的每个字符 c，令属性 c.freq 表示 c 在文件中出现的频率，令 dT(c) 表示 c 对应的叶结点在树中的深度。注意到，dT(c) 也是字符 c 的码字的长度。")]),t._v(" "),a("p",[t._v("则编码文件需要 $ B(T) = \\sum_{c \\in C} c.freq * dT(c) $ 个二进制位。此处将 B(T) 定义为 T 的代价。目标是最小化此代价值。")]),t._v(" "),a("p",[t._v("哈夫曼编码树的思想与 "),a("a",{attrs:{href:"../dynamic-programming/optimal-binary-search-tree"}},[t._v("最优二叉搜索树")]),t._v(" 有相似之处。不过二者的目的不同。在实际应用中，可以同时使用两者：对一个长文本，根据"),a("strong",[t._v("字符出现频率")]),t._v(" 用哈夫曼编码每个字符 达到压缩存储功能，根据"),a("strong",[t._v("单词出现频率")]),t._v(" 用最优二叉搜索树 达到快速查词功能。")]),t._v(" "),a("h3",{attrs:{id:"构造哈夫曼编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造哈夫曼编码"}},[t._v("#")]),t._v(" 构造哈夫曼编码")]),t._v(" "),a("p",[t._v("Huffman 设计了一个贪心算法来构造"),a("strong",[t._v("最优前缀码")]),t._v("，被称为哈夫曼编码 (Huffman code)。")]),t._v(" "),a("p",[t._v("它的正确性证明依赖于"),a("strong",[t._v("贪心选择性质")]),t._v("和"),a("strong",[t._v("最优子结构")]),t._v("。这里先设计算法， 再回过头来分析其贪心性质。")]),t._v(" "),a("p",[t._v("假定 C 是一个含有 n 个字符的集合，而其中每个字符 $ c \\in C $ 都是一个对象，其属性 c.freq 给出了字符的出现频率。算法"),a("strong",[t._v("自底向上")]),t._v("地构造出对应最优编码的二叉树 T。它从 "),a("code",[t._v("|C|")]),t._v(" 个叶结点开始，执行 "),a("code",[t._v("|C| - 1")]),t._v(" 个“结点合并”操作创建出最终的二叉树。算法使用一个以属性 freq 为关键字的 "),a("a",{attrs:{href:"../data-structure/heap-priority-queue"}},[t._v("最小优先队列")]),t._v(" Q，每次将当前最低频率的字符合并。当合并两个对象时，得到的一个新对象（内部结点），其 freq 属性值为其左右孩子的 freq 属性之和。")]),t._v(" "),a("p",[a("strong",[t._v("字符结构体")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 字符结构体(哈夫曼树结点)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" freq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ch        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本字符未经编码的值")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("freq "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" freq    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本字符出现的频率")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 左孩子")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 右孩子")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 父结点")]),t._v("\n")])])]),a("p",[a("strong",[t._v("类构造函数、用最小二叉堆构建最小优先队列")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Huffman")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" char_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("char_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("char_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保 char_list 中每个元素都是 Character 结构体")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 并通过 char_list 构造用于最小优先队列的 Element 结构体数组")]),t._v("\n        ele_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ch "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" char_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            ele_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("freq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c_num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 含有的原字符总数")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h_root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 哈夫曼树的根结点")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("heap "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Heap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建立最小优先队列(最小二叉堆)")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prefix_code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据哈夫曼树 左 0 右 1 解析每个字符的前缀码")]),t._v("\n")])])]),a("p",[a("strong",[t._v("构造哈夫曼树")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 哈夫曼编码 Huffman Code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回：哈夫曼树的根结点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("huffman_code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自顶向下递归实现 (贪心算法) \\Theta(n)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# self._huffman_code_recursive(0, n)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 循环实现 (贪心算法) \\Theta(n)")]),t._v("\n    self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_huffman_code_iteration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h_root\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 循环实现 (贪心算法)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 时间复杂度 \\Theta(n)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 空间复杂度 \\Theta(1)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_huffman_code_iteration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 字符表 char_list 的长度")]),t._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c_num\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# n 个字符，则需要处理 n-1 次合并操作，产生 n-1 个内部结点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建新结点 (内部结点)")]),t._v("\n        new_char "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取出两个最小元素 Element，其 val 为 Character 结构体")]),t._v("\n        left_ele "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("heap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract_min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        right_ele "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("heap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract_min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left_ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right_ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left_ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right_ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 链接父子结点指针")]),t._v("\n        new_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left_ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val\n        new_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" right_ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val\n        left_ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new_char\n        right_ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new_char\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新结点的 freq 属性为其左右孩子 freq 之和")]),t._v("\n        new_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("freq "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" left_ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("freq "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" right_ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("freq\n        new_ele "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("new_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("freq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("new_char"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将新结点封装为 Element 对象，并插入最小优先队列中")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("heap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("min_heap_insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最小优先队列中最后唯一剩下的结点就是树根")]),t._v("\n    h_root_ele "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("heap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract_min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h_root_ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h_root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" h_root_ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val\n")])])]),a("h3",{attrs:{id:"根据哈夫曼树构造各个字符的前缀码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据哈夫曼树构造各个字符的前缀码"}},[t._v("#")]),t._v(" 根据哈夫曼树构造各个字符的前缀码")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据哈夫曼树 左 0 右 1 解析每个字符的前缀码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_prefix_code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h_root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_set_prefix_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h_root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prefix_code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 深度优先搜索，叶结点是具体字符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_set_prefix_code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 有左孩子则往左搜索")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_set_prefix_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 有右孩子则往右搜索")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_set_prefix_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        prefix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 叶结点，写入前缀码")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prefix_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"哈夫曼算法分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈夫曼算法分析"}},[t._v("#")]),t._v(" 哈夫曼算法分析")]),t._v(" "),a("p",[t._v("如果用"),a("a",{attrs:{href:"../data-structure/heap-priority-queue"}},[t._v("最小二叉堆")]),t._v("实现最小优先队列，对一个 n 个字符的集合 C，建立优先队列的时间为 O(n)。循环总次数为 n-1，每个堆操作需要 O(log n) 的时间，所以循环的总时间为 O(n log n)。因此，处理一个 n 个字符的集合，Huffman 的总运行时间为 O(n log n)。如果将最小二叉堆换为 "),a("a",{attrs:{href:"(../data-structure/van-emde-boas-tree)"}},[t._v("van Emde Boas 树")]),t._v("，则可以将运行时间减少为 O(n log log n)。")]),t._v(" "),a("p",[t._v("现分析哈夫曼算法这样一个贪心算法的正确性，要证明确定最优前缀码的问题具有"),a("strong",[t._v("贪心选择")]),t._v("和"),a("strong",[t._v("最优子结构")]),t._v("性质。下面的引理证明问题具有贪心选择性质：")]),t._v(" "),a("p",[t._v("《CLRS》"),a("strong",[t._v("引理 16.2")]),t._v("：令 C 为一个字母表，其中每个字符 $ c \\in C $ 都有一个频率 c.freq。令 x 和 y 是 C 中频率最低的两个字符。那么存在 C 的一个最优前缀码，x 和 y 的码字长度相同，且只有最后一个二进制位不同。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/info-technology/algorithm/greedy-algorithm/huffman-3.png",alt:"huffman-3"}})]),t._v(" "),a("p",[t._v("引理 16.2 说明，不失一般性，通过合并来构造最优树的过程，可以从合并出现频率最低的两个字符这样一个贪心选择开始。")]),t._v(" "),a("p",[t._v("《CLRS》"),a("strong",[t._v("引理 16.3")]),t._v("：令 C 为一个给定的字母表，其中每个字符 $ c \\in C $ 都定义了一个频率 c.freq。令 x 和 y 是 C 中频率最低的两个字符。令 C' 为 C 去掉字符 x 和 y，加入一个新字符 z 后得到的字母表，即 $ C' = C - {x, y} \\cup {z} $。类似于集合 C，也为 C' 定义频率属性 freq，不用之处只是 "),a("code",[t._v("z.freq = x.freq + y.freq")]),t._v("。令 T' 为字母表 C' 的任意一个最优前缀码对应的编码树。于是可以将 T' 中叶结点 z 替换为一个以 x 和 y 为孩子的内部结点，得到树 T，而 T 表示字母表 C 的一个最优前缀码。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/info-technology/algorithm/greedy-algorithm/huffman-4.png",alt:"huffman-4"}})]),t._v(" "),a("p",[t._v("引理 16.3 证明了构造最优前缀码的问题具有最优子结构性质。")]),t._v(" "),a("p",[t._v("《CLRS》"),a("strong",[t._v("定理 16.4")]),t._v("：Huffman 算法会生成一个最优前缀码。")]),t._v(" "),a("p",[t._v("但是 Huffman 编码"),a("strong",[t._v("更适合于字符出现频率相差比较明显的场景")]),t._v("。《CLRS》练习 16.3-8：假定一个数据文件由 8 位字符组成，其中所有 256 个字符出现的频率大致相同：最高频率不超过最低频率的 2 倍。在此情况下，哈夫曼编码并不比 8 位固定长度编码更高效。")]),t._v(" "),a("h2",{attrs:{id:"代码范例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码范例"}},[t._v("#")]),t._v(" 代码范例")]),t._v(" "),a("h3",{attrs:{id:"python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[t._v("#")]),t._v(" Python")]),t._v(" "),a("p",[t._v("Python 环境：Python 3.7")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/YuweiYin/Code_Play/blob/master/Algorithm-Essence/greedy-algorithm/huffman.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Code Link"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[t._v("Introduction to Algorithm (aka CLRS) Third Edition - Chapter 16")])])])}),[],!1,null,null,null);s.default=e.exports}}]);