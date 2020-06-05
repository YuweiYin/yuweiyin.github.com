(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{492:function(v,_,t){"use strict";t.r(_);var i=t(28),r=Object(i.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"introduction-to-computer-science"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-computer-science"}},[v._v("#")]),v._v(" Introduction to Computer Science")]),v._v(" "),t("p",[t("strong",[v._v("第 1 讲 - 计算机如何思考")])]),v._v(" "),t("p",[v._v("By "),t("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[v._v("YuweiYin"),t("OutboundLink")],1)]),v._v(" "),t("h2",{attrs:{id:"目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[v._v("#")]),v._v(" 目录")]),v._v(" "),t("ul",[t("li",[v._v("1.1 "),t("a",{attrs:{href:"#1-1"}},[v._v("计算机系统及其基本功能")])]),v._v(" "),t("li",[v._v("1.2 "),t("a",{attrs:{href:"#1-2"}},[v._v("数据和指令的概念")])]),v._v(" "),t("li",[v._v("1.3 "),t("a",{attrs:{href:"#1-3"}},[v._v("CPU的工作原理")])]),v._v(" "),t("li",[v._v("1.4 "),t("a",{attrs:{href:"#1-4"}},[v._v("程序和算法的概念")])]),v._v(" "),t("li",[v._v("1.5 "),t("a",{attrs:{href:"#1-5"}},[v._v("人工智能的概念")])])]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"引言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[v._v("#")]),v._v(" 引言")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info-technology/computer-science/introduction-to-cs/1-1-Kasparov-vs-deep-blue.png",alt:"Kasparov-vs-deep-blue"}})]),v._v(" "),t("p",[v._v("1996 年 2 月 10 日，超级电脑深蓝首次挑战国际象棋世界冠军卡斯帕罗夫，但以 2-4 落败。比赛在 2 月 17 日结束。")]),v._v(" "),t("p",[v._v("其后研究小组把深蓝加以改良，1997 年 5 月再度挑战卡斯帕罗夫，比赛在 5 月 11 日结束，最终深蓝电脑以 3.5–2.5 击败卡斯帕罗夫，成为首个在标准比赛时限内击败国际象棋世界冠军的电脑系统。IBM 在比赛后宣布深蓝退役。")]),v._v(" "),t("p",[v._v("计算机怎样下棋？")]),v._v(" "),t("ul",[t("li",[v._v("明白下棋的规则（存储指令集/程序）")]),v._v(" "),t("li",[v._v("表示棋盘和棋子（数据）")]),v._v(" "),t("li",[v._v("知道对方的走棋（输入）")]),v._v(" "),t("li",[v._v("算出我方的对策（数据处理）")]),v._v(" "),t("li",[v._v("告知别人我方如何走棋（输出）")]),v._v(" "),t("li",[v._v("记住棋局（存储数据）")])]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"1-1"}},[v._v("1.1 计算机系统及其基本功能")]),v._v(" "),t("h3",{attrs:{id:"计算机的基本功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机的基本功能"}},[v._v("#")]),v._v(" 计算机的基本功能")]),v._v(" "),t("ul",[t("li",[v._v("什么是计算机？\n"),t("ul",[t("li",[v._v("一种在"),t("strong",[v._v("存储指令集")]),v._v("的控制下，接受"),t("strong",[v._v("输入")]),v._v("，"),t("strong",[v._v("处理")]),v._v("数据、"),t("strong",[v._v("存储")]),v._v("数据，并产生"),t("strong",[v._v("输出")]),v._v("的多用途设备。")])])])]),v._v(" "),t("h3",{attrs:{id:"计算机系统的基本构成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机系统的基本构成"}},[v._v("#")]),v._v(" 计算机系统的基本构成")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info-technology/computer-science/introduction-to-cs/1-1-computer-system.png",alt:"1-1-computer-system"}})]),v._v(" "),t("h3",{attrs:{id:"计算机的数据输入设备（键盘）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机的数据输入设备（键盘）"}},[v._v("#")]),v._v(" 计算机的数据输入设备（键盘）")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info-technology/computer-science/introduction-to-cs/1-1-input-device-keyboard.png",alt:"1-1-input-device-keyboard"}})]),v._v(" "),t("h3",{attrs:{id:"计算机的数据输入设备（鼠标）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机的数据输入设备（鼠标）"}},[v._v("#")]),v._v(" 计算机的数据输入设备（鼠标）")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info-technology/computer-science/introduction-to-cs/1-1-input-device-mouse.png",alt:"1-1-input-device-mouse"}})]),v._v(" "),t("h3",{attrs:{id:"计算机的数据输入设备（其它）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机的数据输入设备（其它）"}},[v._v("#")]),v._v(" 计算机的数据输入设备（其它）")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info-technology/computer-science/introduction-to-cs/1-1-input-device-other.png",alt:"1-1-input-device-other"}})]),v._v(" "),t("h3",{attrs:{id:"计算机的输出设备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机的输出设备"}},[v._v("#")]),v._v(" 计算机的输出设备")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info-technology/computer-science/introduction-to-cs/1-1-output-device.png",alt:"1-1-output-device"}})]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"1-2"}},[v._v("1.2 数据和指令的概念")]),v._v(" "),t("h3",{attrs:{id:"数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[v._v("#")]),v._v(" 数据")]),v._v(" "),t("ul",[t("li",[v._v("什么是数据？\n"),t("ul",[t("li",[v._v("那些能够表示某些事实、对象和思想的符号。")])])])]),v._v(" "),t("h3",{attrs:{id:"数据的输入与输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据的输入与输出"}},[v._v("#")]),v._v(" 数据的输入与输出")]),v._v(" "),t("ul",[t("li",[v._v("什么是输入？\n"),t("ul",[t("li",[v._v("送入计算机系统的一切数据。")])])]),v._v(" "),t("li",[v._v("什么是输出？\n"),t("ul",[t("li",[v._v("计算机产生出的结果。")])])])]),v._v(" "),t("h3",{attrs:{id:"数据的处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据的处理"}},[v._v("#")]),v._v(" 数据的处理")]),v._v(" "),t("ul",[t("li",[v._v("什么是数据处理？\n"),t("ul",[t("li",[v._v("对输入的数据进行加工处理（组合、变换、映射...）。")])])])]),v._v(" "),t("h3",{attrs:{id:"数据的存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据的存储"}},[v._v("#")]),v._v(" 数据的存储")]),v._v(" "),t("ul",[t("li",[v._v("什么是数据存储？\n"),t("ul",[t("li",[v._v("将数据保存起来，以便进行加工处理。")])])]),v._v(" "),t("li",[v._v("数据保存的地点：\n"),t("ul",[t("li",[v._v("内存（类比于人的大脑）")]),v._v(" "),t("li",[v._v("外存（存储器上的文件）（类比于记事本）")])])])]),v._v(" "),t("h3",{attrs:{id:"指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[v._v("#")]),v._v(" 指令")]),v._v(" "),t("ul",[t("li",[v._v("什么是指令？\n"),t("ul",[t("li",[v._v("计算机的一系列执行步骤。")])])]),v._v(" "),t("li",[v._v("指令也称为程序或软件。")])]),v._v(" "),t("h3",{attrs:{id:"指令在计算机内的表示形式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令在计算机内的表示形式"}},[v._v("#")]),v._v(" 指令在计算机内的表示形式")]),v._v(" "),t("ul",[t("li",[v._v("例如：\n"),t("ul",[t("li",[v._v("0100010000100...")]),v._v(" "),t("li",[v._v("1001001000100...")])])]),v._v(" "),t("li",[v._v("因为微处理器是由"),t("strong",[v._v("门电路")]),v._v("组成的，也称开关电路，擅长表示"),t("strong",[v._v("两种状态")]),v._v("：\n"),t("ul",[t("li",[v._v("开 - 0")]),v._v(" "),t("li",[v._v("关 - 1")])])])]),v._v(" "),t("h3",{attrs:{id:"指令和数据在外观上有差别吗？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令和数据在外观上有差别吗？"}},[v._v("#")]),v._v(" 指令和数据在外观上有差别吗？")]),v._v(" "),t("ul",[t("li",[v._v("微处理器既需要读指令，也需要读数据。")]),v._v(" "),t("li",[v._v("指令和数据从"),t("strong",[v._v("外观上没有差别")]),v._v("，需要根据"),t("strong",[v._v("当前的状态")]),v._v("和"),t("strong",[v._v("数据的内容")]),v._v("判断是指令还是数据，以及何种指令。")]),v._v(" "),t("li",[v._v('例如："00000100" 既代表指令 "加"，也代表数据 "4"。')]),v._v(" "),t("li",[v._v("这类计算机称为“冯·诺依曼结构”也称“普林斯顿结构”。即将程序指令和数据放在同一个存储器的不同物理位置。")])]),v._v(" "),t("h3",{attrs:{id:"指令集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令集"}},[v._v("#")]),v._v(" 指令集")]),v._v(" "),t("ul",[t("li",[v._v("什么是指令集？\n"),t("ul",[t("li",[v._v("每一种微处理器对应的一套预设指令，可以指挥微处理器完成所有的任务。")]),v._v(" "),t("li",[v._v("一个复杂的任务可以用一系列基本的指令完成。")]),v._v(" "),t("li",[v._v("微处理器的指令都是二进制（0,1）形式的，也称机器指令。")]),v._v(" "),t("li",[v._v("复杂的任务可以用人们易懂的高级语言编写的程序表示。")]),v._v(" "),t("li",[v._v("高级语言程序需要“翻译”（编译或解释）成微处理器可以理解的机器指令。")])])])]),v._v(" "),t("h3",{attrs:{id:"执行指令的中央处理器（cpu）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行指令的中央处理器（cpu）"}},[v._v("#")]),v._v(" 执行指令的中央处理器（CPU）")]),v._v(" "),t("ul",[t("li",[v._v("什么是 CPU？\n"),t("ul",[t("li",[v._v("计算机中"),t("strong",[v._v("处理数据")]),v._v("的"),t("strong",[v._v("集成电路")]),v._v("（计算机的大脑）。")])])]),v._v(" "),t("li",[v._v("现代计算机的 CPU 一般称为微处理器。")]),v._v(" "),t("li",[v._v("微处理器有类似人的大脑的作用：\n"),t("ul",[t("li",[v._v("思考（执行指令）")]),v._v(" "),t("li",[v._v("记忆（记住指令和数据）")])])]),v._v(" "),t("li",[v._v("注：计算机把大脑的记忆分为两个部分：\n"),t("ul",[t("li",[v._v("微处理器中的寄存器 register 和高速缓存 cache")]),v._v(" "),t("li",[v._v("内存 memory 的数据")])])])]),v._v(" "),t("h3",{attrs:{id:"john-von-neumann-冯·诺依曼"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#john-von-neumann-冯·诺依曼"}},[v._v("#")]),v._v(" John von Neumann 冯·诺依曼")]),v._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/John_von_Neumann",target:"_blank",rel:"noopener noreferrer"}},[v._v("John von Neumann"),t("OutboundLink")],1),v._v(" "),t("ul",[t("li",[v._v("冯·诺依曼1903年出生，1921年至1925年他先后在柏林和苏黎世学习化学，1926年获得苏黎世化学工程文凭和布达佩斯数学博士证书。1930年他以客座讲师身份到美国普林斯顿大学讲学，次年应聘为普林斯顿大学教授。")]),v._v(" "),t("li",[v._v("冯·诺依曼对 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/ENIAC",target:"_blank",rel:"noopener noreferrer"}},[v._v("ENIAC 机"),t("OutboundLink")],1),v._v(" (Electronic Numerical Integrator and Computer)不足之处进行认真分析，并讨论全新的存储程序的通用计算机方案。当军方要求比 ENIAC 性能更好的计算机时，他便提出 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/EDVAC",target:"_blank",rel:"noopener noreferrer"}},[v._v("EDVAC（埃德瓦克）方案"),t("OutboundLink")],1),v._v(" (Electronic Discrete Variable Automatic Computer)。")]),v._v(" "),t("li",[v._v("1946年6月冯·诺依曼与戈德斯坦（H.Goldstine）等发表了《电子计算机装置逻辑结构初探》的论文，成为 EDVAC 的设计基础。1952年完成了 EDVAC 机的建造工作，并投入运行，用于核武器的理论计算。")])])]),v._v(" "),t("li",[v._v("EDVAC 是电子离散变量计算机的缩写。它的主要改进有两点：\n"),t("ul",[t("li",[v._v("改进一：为了充分发挥电子元件的高速性能而采用了二进制；")]),v._v(" "),t("li",[v._v("改进二：把指令和数据都存储起来，让机器能自动地执行程序。")]),v._v(" "),t("li",[v._v("由于它利用水银延时线作主存，用磁鼓作辅存，其运算速度比 ENIAC 提高了 240 倍。")])])])]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"1-3"}},[v._v("1.3 CPU的工作原理")]),v._v(" "),t("h3",{attrs:{id:"冯·诺伊曼体系结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#冯·诺伊曼体系结构"}},[v._v("#")]),v._v(" 冯·诺伊曼体系结构")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info-technology/computer-science/introduction-to-cs/1-3-von-neumann-architecture.png",alt:"1-3-von-neumann-architecture"}})]),v._v(" "),t("h3",{attrs:{id:"cpu-工作方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cpu-工作方式"}},[v._v("#")]),v._v(" CPU 工作方式")]),v._v(" "),t("ul",[t("li",[v._v("CPU 是如何工作的？\n"),t("ul",[t("li",[v._v("CPU 是按"),t("strong",[v._v("节拍")]),v._v("（"),t("strong",[v._v("时钟周期")]),v._v("）工作的。")]),v._v(" "),t("li",[v._v("例如：\n"),t("ul",[t("li",[v._v("第 1 个节拍：发送指令地址到存储器")]),v._v(" "),t("li",[v._v("第 2 个节拍：取出存储器中的指令给控制器")]),v._v(" "),t("li",[v._v("第 3 个节拍：控制器解释指令码")]),v._v(" "),t("li",[v._v("第 4 个节拍：依据指令码控制相关动作执行")])])])])]),v._v(" "),t("li",[v._v("什么是"),t("strong",[v._v("机器周期")]),v._v("？\n"),t("ul",[t("li",[v._v("CPU 执行一条标准指令的时间。")]),v._v(" "),t("li",[v._v("举例：1GHz CPU：1 秒内执行 10 亿个周期，约 2.5 亿条指令。")])])])]),v._v(" "),t("h3",{attrs:{id:"时钟周期与机器周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时钟周期与机器周期"}},[v._v("#")]),v._v(" 时钟周期与机器周期")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info-technology/computer-science/introduction-to-cs/1-3-clock-cycle.png",alt:"1-3-clock-cycle"}})]),v._v(" "),t("ul",[t("li",[v._v("CPU 怎么知道每个节拍做什么？\n"),t("ul",[t("li",[v._v("通过"),t("strong",[v._v("控制器")]),v._v("和"),t("strong",[v._v("指令")]),v._v("控制")]),v._v(" "),t("li",[v._v("例如：\n"),t("ul",[t("li",[v._v("第 1 步：读取第1个数据")]),v._v(" "),t("li",[v._v("第 2 步：读取第2个数据")]),v._v(" "),t("li",[v._v("第 3 步：把两个数据相乘")]),v._v(" "),t("li",[v._v("第 4 步：把乘积保存起来")])])])])])]),v._v(" "),t("h3",{attrs:{id:"计算机如何读取指令？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机如何读取指令？"}},[v._v("#")]),v._v(" 计算机如何读取指令？")]),v._v(" "),t("ul",[t("li",[v._v("指令和数据放在内存里。")]),v._v(" "),t("li",[v._v("有一个指针（程序计数器 PC）指向第 1 条指令的存放地址。")]),v._v(" "),t("li",[v._v("CPU 根据这个指针，从相应的地址中取出指令。")]),v._v(" "),t("li",[v._v("每执行完一个指令，指针会自动加 1，指向下一条指令的地址。")]),v._v(" "),t("li",[v._v("如此不断循环，直到指令结束。")])]),v._v(" "),t("h3",{attrs:{id:"指令的执行过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令的执行过程"}},[v._v("#")]),v._v(" 指令的执行过程")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info-technology/computer-science/introduction-to-cs/1-3-instruction-process.png",alt:"1-3-instruction-process"}})]),v._v(" "),t("ol",[t("li",[v._v("启动"),t("strong",[v._v("控制器")]),v._v("工作")]),v._v(" "),t("li",[v._v("发送第 1 条"),t("strong",[v._v("指令地址")])]),v._v(" "),t("li",[v._v("取出指令（"),t("strong",[v._v("取指")]),v._v("）并分析指令（"),t("strong",[v._v("译指")]),v._v("）")]),v._v(" "),t("li",[t("strong",[v._v("执行指令")]),v._v("：发送操作数 x 所在地址")]),v._v(" "),t("li",[v._v("执行指令：取出操作数 x")]),v._v(" "),t("li",[v._v("发送下一条指令地址")]),v._v(" "),t("li",[v._v("取出指令并分析指令")]),v._v(" "),t("li",[v._v("执行指令：发送操作数 a 所在地址")]),v._v(" "),t("li",[v._v("执行指令：取出操作数 a")]),v._v(" "),t("li",[v._v("执行指令：通知运算器计算 a 乘 x")]),v._v(" "),t("li",[v._v("继续后续指令的取指、译指、执行指令...")])]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"1-4"}},[v._v("1.4 程序和算法的概念")]),v._v(" "),t("h3",{attrs:{id:"计算机程序的相关概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机程序的相关概念"}},[v._v("#")]),v._v(" 计算机程序的相关概念")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("程序")]),v._v("：计算机执行的命令集合")]),v._v(" "),t("li",[t("strong",[v._v("代码")]),v._v("：构成程序的语句集合")]),v._v(" "),t("li",[t("strong",[v._v("源代码")]),v._v("：高级语言写成的代码")]),v._v(" "),t("li",[t("strong",[v._v("目标代码")]),v._v("：源代码经过编译后得到的机器指令集合")]),v._v(" "),t("li",[t("strong",[v._v("程序设计")]),v._v("（编程）：编写程序")]),v._v(" "),t("li",[t("strong",[v._v("编程语言")]),v._v("：程序遵循的关键字和语法规范")]),v._v(" "),t("li",[t("strong",[v._v("高级语言")]),v._v("：人类易于理解的编程语言")]),v._v(" "),t("li",[t("strong",[v._v("机器语言")]),v._v("：计算机可理解的机器指令")]),v._v(" "),t("li",[t("strong",[v._v("计算机软件")]),v._v("：完成各种任务的计算机程序的总称")]),v._v(" "),t("li",[t("strong",[v._v("计算机硬件")]),v._v("：组成计算机的电路和器件的总称")])]),v._v(" "),t("h3",{attrs:{id:"编译：源程序转换成目标程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译：源程序转换成目标程序"}},[v._v("#")]),v._v(" 编译：源程序转换成目标程序")]),v._v(" "),t("p",[t("img",{attrs:{src:"/img/info-technology/computer-science/introduction-to-cs/1-4-complier.png",alt:"1-4-complier"}})]),v._v(" "),t("h3",{attrs:{id:"算法的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算法的概念"}},[v._v("#")]),v._v(" 算法的概念")]),v._v(" "),t("ul",[t("li",[v._v("什么是算法？\n"),t("ul",[t("li",[v._v("解决某个问题的具体步骤。")])])]),v._v(" "),t("li",[v._v("举例：如何计算 1 + 2 + 3 + ... + 9 ?\n"),t("ul",[t("li",[v._v("算法1：((((1 + 2) + 3) + 4) + 5) + ...")]),v._v(" "),t("li",[v._v("算法2：(1 + 9) + (2 + 8) + (3 + 7) + ...")])])]),v._v(" "),t("li",[v._v("算法的关键\n"),t("ul",[t("li",[v._v("正确性")]),v._v(" "),t("li",[v._v("有效性（空间和时间）")])])])]),v._v(" "),t("h3",{attrs:{id:"分析下棋程序有什么问题？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析下棋程序有什么问题？"}},[v._v("#")]),v._v(" 分析下棋程序有什么问题？")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("对每个棋子\n    针对棋盘上的每个位置\n        是否允许落子？\n            如果允许，判断是否有危险？\n                如果有危险，换下一个位置；\n                如果没有危险，确定我方走棋位置，输出，结束。\n        如果不允许，换下一个位置，继续判断。\n如果尚未走棋，换下一个棋子继续判断\n结束\n")])])]),t("ul",[t("li",[t("strong",[v._v("问题 1")]),v._v("：走出的棋虽然是“合法”的，但"),t("strong",[v._v("不是最优")]),v._v("的。\n"),t("ul",[t("li",[v._v("如何使算法变得智能？")]),v._v(" "),t("li",[v._v("如何计算续着？\n"),t("ul",[t("li",[v._v("半个回合：1600 个局面")]),v._v(" "),t("li",[v._v("2 个回合：250 万个局面")]),v._v(" "),t("li",[v._v("3 个回合：41 亿个局面")]),v._v(" "),t("li",[v._v("40 个回合：10^128")]),v._v(" "),t("li",[v._v("深蓝：Alpha-beta 算法，计算 10 亿个局面/秒")])])])])]),v._v(" "),t("li",[t("strong",[v._v("问题 2")]),v._v("：没有加入人类的经验（"),t("strong",[v._v("先验知识")]),v._v("）\n"),t("ul",[t("li",[v._v("知识库\n"),t("ul",[t("li",[v._v("开棋局：通常情况下，一个程序所弈的前 15 至 20 步都来自开局库，然后才真正进入到程序“思考”阶段。")]),v._v(" "),t("li",[v._v("残棋局：Ken Thompson 80 年代期间制作了 4 子和 5 子的残局库，被“深蓝” 使用。")])])])])])]),v._v(" "),t("hr"),v._v(" "),t("h2",{attrs:{id:"1-5"}},[v._v("1.5 人工智能的概念")]),v._v(" "),t("h3",{attrs:{id:"人工智能概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#人工智能概述"}},[v._v("#")]),v._v(" 人工智能概述")]),v._v(" "),t("ul",[t("li",[v._v("什么是人工智能？\n"),t("ul",[t("li",[v._v("计算机具有智能或利用计算机实现智能的理论、方法和技术。")])])]),v._v(" "),t("li",[v._v("阿兰·图灵提出了一种称作"),t("strong",[v._v("图灵试验")]),v._v("的方法，用于测试机器是不是具备人类智能：\n"),t("ul",[t("li",[v._v("被测试的有一个人，另一个是声称自己有人类智力的机器。测试时，测试人与被测试人是分开的，测试人只有通过一些装置（如键盘）向被测试人问一些问题，这些问题随便是什么问题都可以。问过一些问题后，如果测试人能够正确地分出谁是人谁是机器，那机器就没有通过图灵测试，如果测试人没有分出谁是机器谁是人，那这个机器就是有人类智能的。")])])])]),v._v(" "),t("h3",{attrs:{id:"中文屋子问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中文屋子问题"}},[v._v("#")]),v._v(" 中文屋子问题")]),v._v(" "),t("ul",[t("li",[v._v("智能的体现是"),t("strong",[v._v("理解")]),v._v("，但什么是“理解”？")]),v._v(" "),t("li",[v._v("如果一个系统通过了图灵测试，那么它是否真正理解了问题？")]),v._v(" "),t("li",[v._v("美国哲学家希尔勒提出否定意见\n"),t("ul",[t("li",[v._v("希尔勒认为：系统按照事先编好的字典和规则去理解故事和回答问题，并不是真正理解了故事。")]),v._v(" "),t("li",[t("strong",[v._v("希尔勒的中文屋子")]),v._v("：一个完全不懂中文的人在一个屋子里，人们向他提供一些字典和规则，然后通过窗口用中文向他提出一些问题，他可以通过查字典和运用规则来回答这些问题。希尔勒认为：即便是正确回答了问题，但他还是不懂中文，也就是说，他还是不懂这些中文问题，只是机械地运用字典和规则来回答问题。")])])])]),v._v(" "),t("h3",{attrs:{id:"人工智能的例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#人工智能的例子"}},[v._v("#")]),v._v(" 人工智能的例子")]),v._v(" "),t("ul",[t("li",[v._v("一个笑话（英俄翻译）：\n"),t("ul",[t("li",[v._v("The spirit is willing but the flesh is week.（心有余而力不足）")]),v._v(" "),t("li",[v._v("English -> Russian -> English：")]),v._v(" "),t("li",[v._v("The vodka is strong but meat is rotten.（伏特加酒虽然很浓，但肉是腐烂的）")])])]),v._v(" "),t("li",[v._v("出现这样的错误的原因：\n"),t("ul",[t("li",[v._v("Spirit：\n"),t("ul",[t("li",[v._v("1）精神")]),v._v(" "),t("li",[v._v("2）烈性酒")])])])])]),v._v(" "),t("li",[v._v("结论：\n"),t("ul",[t("li",[v._v("必须理解才能翻译，而理解需要知识")])])]),v._v(" "),t("li",[v._v("知识的重要性\n"),t("ul",[t("li",[v._v("一台机器是否具有智能，并不是简单的通过图灵测试就能说明问题，而是应该使机器真正像人一样能够思考出问题的解决方案，拥有人类一样的智能。")]),v._v(" "),t("li",[v._v("知识就是力量 —— 培根")]),v._v(" "),t("li",[v._v("知识蕴涵着力量 —— 费根鲍姆")])])])]),v._v(" "),t("h3",{attrs:{id:"人工智能的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#人工智能的应用"}},[v._v("#")]),v._v(" 人工智能的应用")]),v._v(" "),t("ul",[t("li",[v._v("机器博弈")]),v._v(" "),t("li",[v._v("机器证明 / 推理")]),v._v(" "),t("li",[v._v("专家系统")]),v._v(" "),t("li",[v._v("数据挖掘与知识发现")]),v._v(" "),t("li",[v._v("自然语言理解")]),v._v(" "),t("li",[v._v("模式识别")]),v._v(" "),t("li",[v._v("图像处理")]),v._v(" "),t("li",[v._v("语言系统")]),v._v(" "),t("li",[v._v("机器人")])])])}),[],!1,null,null,null);_.default=r.exports}}]);