(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{442:function(t,a,e){"use strict";e.r(a);var o=e(28),r=Object(o.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"yoda-表示法错在哪里"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yoda-表示法错在哪里"}},[t._v("#")]),t._v(" Yoda 表示法错在哪里")]),t._v(" "),e("p",[t._v("2013年04月16日 - "),e("a",{attrs:{href:"http://www.yinwang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("王垠"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.yinwang.org/blog-cn/2013/04/16/yoda-notation",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),e("OutboundLink")],1)]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("在上一篇"),e("a",{attrs:{href:"http://www.yinwang.org/blog-cn/2013/04/15/terminology",target:"_blank",rel:"noopener noreferrer"}},[t._v("博文"),e("OutboundLink")],1),t._v("里，我提到了 Yoda 表示法。")]),t._v(" "),e("h2",{attrs:{id:"yoda-notation（yoda-表示法）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yoda-notation（yoda-表示法）"}},[t._v("#")]),t._v(" Yoda Notation（Yoda 表示法）")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/yinwang/yoda-notation.jpeg",alt:"yoda-notation"}})]),t._v(" "),e("p",[t._v("它的含义是，在 C/C++ 里面使用这样的表达式顺序：")]),t._v(" "),e("p",[e("code",[t._v('if ("blue" == theSky) ...')])]),t._v(" "),e("p",[t._v("这是为了避免意外的写成：")]),t._v(" "),e("p",[e("code",[t._v('if (theSky = "blue") ...')])]),t._v(" "),e("p",[t._v("“Yoda 表示法”的名字来源于《星球大战》的 Yoda 大师。他说话的单词顺序相当奇特，比如：“Backwards it is, yes!”")]),t._v(" "),e("h2",{attrs:{id:"一般认为"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一般认为"}},[t._v("#")]),t._v(" 一般认为")]),t._v(" "),e("blockquote",[e("p",[t._v("使用这个表示法是为了“变通”（workaround） C/C++ 的一个设计抉择：使用 = 来表示赋值，而使用 == 来表示比较。这个设计充分的展现了“先辈的罪”（Sins of our Forefathers）这一词汇的精髓。")])]),t._v(" "),e("h2",{attrs:{id:"我认为"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我认为"}},[t._v("#")]),t._v(" 我认为")]),t._v(" "),e("blockquote",[e("p",[t._v("使用 = 来表示赋值其实并不是真正的错误所在。真正的错误在于 C/C++ 的赋值语句不应该返回一个值。")])]),t._v(" "),e("p",[t._v('也就是说，theSky = "blue" 的所有功能应该只是“赋值”这种“副作用”，副作用不应该具有“值”。即使你牵强附会说它有一个值，它的“值”也应该是 void（随之这个 void 会被类型检查所拒绝，因为它不是 if 所期望的 bool）。所以，一个良好的语言不应该允许你把 theSky = "blue" 放进 if (...) 的“条件”里面。如果你真的要赋值又要判断，它会迫使你把这拆开成两行：')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('theSky = "blue";\nif (theSky) ...\n')])])]),e("p",[t._v("更近一步。if (theSky) 这个写法其实也是一个先辈的罪。theSky 的类型是 string，它不应该可以直接被作为 bool 使用。if (...) 的条件应该必须是一个 bool。 所以这里其实应该写成：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('theSky = "blue";\nif (theSky != NULL) ...\n')])])]),e("p",[t._v("因为赋值语句永远不可能出现在条件的位置，所以之前的那种错误，即使我们使用 = 作为赋值操作符，也完全不可能出现。这样我们也就完全没必要用 Yoda 表示法了。")]),t._v(" "),e("p",[t._v("相反，如果我们只是把 = 换成像 Pascal 的 := 这样的赋值操作符，而保留其它的“特性”（赋值操作会返回值）的话，我们其实还是会遇到同样的问题：")]),t._v(" "),e("p",[e("code",[t._v('if (theSky := "blue") ...')])]),t._v(" "),e("p",[t._v("这里假设你想打 =，却不小心打成了 :=。机会虽然小，但是仍然有可能。而我推荐的解决方案，会让你故意想犯错误都不可能，编译器会拒绝接受你的程序。")]),t._v(" "),e("p",[t._v("所以你看到了，问题的根源其实不在于赋值操作的名字，而是有更深的原因。")])])}),[],!1,null,null,null);a.default=r.exports}}]);