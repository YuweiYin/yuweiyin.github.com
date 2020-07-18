(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{356:function(t,s,n){"use strict";n.r(s);var a=n(28),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"algorithm-sort-sort"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#algorithm-sort-sort"}},[t._v("#")]),t._v(" Algorithm - Sort - Sort")]),t._v(" "),n("p",[t._v("By "),n("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YuweiYin"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),n("p",[t._v("排序算法 (Sort)")]),t._v(" "),n("h3",{attrs:{id:"python"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[t._v("#")]),t._v(" Python")]),t._v(" "),n("p",[t._v("Python 环境：Python 3.7")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/YuweiYin/Code_Play/blob/master/Algorithm-Essence/sort/sort.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Code Link"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -*- coding:utf-8 -*-")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""=================================================\n@Project : algorithm/sort\n@File    : sort.py\n@Author  : YuweiYin\n@Date    : 2020-05-07\n=================================================="""')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n"),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n排序 Sort\n"""')]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 元素结构体 key-value 键值对")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Element")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (必备) 键 key。按 key 排序，因此 key 必须具有全序关系（常为整数）")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (可选) 值 value。可为任意对象")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 排序算法的基类")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构造待排序数组")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 时间复杂度 O(n)、空间复杂度 O(n)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 参数 ele_list 是 Element 元素结构体的列表，该结构体中必须要有一个 key 属性用于排序")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 参数 key 是一个字符串，表示如何取得 ele_list 中各元素的 key")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 参数 val 是一个字符串，表示如何取得 ele_list 中各元素的 val")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过 getattr(object, name[, default]) 函数取对象属性。默认值设置为 None")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ele_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'val'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ele_list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ele_list\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key_name\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val_name\n\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("verify_key_val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保 ele_list 中每个元素都有 key_name 属性和 val_name 属性")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果某元素没有这两个属性，则将之从 ele_list 中剔除出去")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("verify_key_val")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        new_ele_list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ele "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ele_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                new_ele_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ele_list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new_ele_list\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取元素列表")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_ele_list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ele_list\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取元素中 key 的列表")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_key_list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        key_list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ele "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ele_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                key_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("getattr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" key_list\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取元素中 val 的列表")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_val_list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        val_list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ele "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ele_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("hasattr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                val_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("getattr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val_list\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改待排序数组")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("update_ele_list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_ele_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ele_list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new_ele_list\n        self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("verify_key_val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清除不含指定 key、val 的元素")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改 key 属性名称")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("update_key_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_key_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_key_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new_key_name\n            self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("verify_key_val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清除不含指定 key、val 的元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改 val 属性名称")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("update_val_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" new_val_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_val_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new_val_name\n            self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("verify_key_val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清除不含指定 key、val 的元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行排序 (待重载)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_sort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reverse"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 键值对列表")]),t._v("\n    kv_list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("900")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Element 元素列表(待排序)")]),t._v("\n    node_list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kv_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kv_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" kv "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" kv_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                node_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" kv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    _sort "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Sort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_sort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_key_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [3, 1, 2, 8, 7, 9, 3]")]),t._v("\n\n    start "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("process_time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    _sort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("do_sort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reverse"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    end "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("process_time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_sort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_key_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [3, 1, 2, 8, 7, 9, 3]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Running Time: %.5f ms'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("end "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    sorted_ele_list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _sort"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_ele_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sorted_ele_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sorted_ele_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ele "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" sorted_ele_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("isinstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Element"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key:'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\tval:'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ele"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),n("ul",[n("li",[t._v("Introduction to Algorithm (aka CLRS) Third Edition")])])])}),[],!1,null,null,null);s.default=e.exports}}]);