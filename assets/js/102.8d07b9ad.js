(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{457:function(s,t,e){"use strict";e.r(t);var r=e(28),a=Object(r.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"禁止远程以-root-身份登录服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#禁止远程以-root-身份登录服务器"}},[s._v("#")]),s._v(" 禁止远程以 root 身份登录服务器")]),s._v(" "),e("p",[s._v("2020年04月09日 - "),e("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("YuweiYin"),e("OutboundLink")],1)]),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("出于系统的安全性考虑，允许远程用户以 root 身份登录服务器是比较危险的。因此往往会禁止远程 root 登录，但同时应保留“跳板”用户得以访问服务器，并能够获得足够的权限。")]),s._v(" "),e("h2",{attrs:{id:"_1-新增用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-新增用户"}},[s._v("#")]),s._v(" 1. 新增用户")]),s._v(" "),e("p",[s._v("查看当前所有用户："),e("code",[s._v("# cat /etc/group")])]),s._v(" "),e("p",[s._v("增添新用户："),e("code",[s._v("# adduser admin")])]),s._v(" "),e("p",[s._v("修改用户密码（不要太过简单）："),e("code",[s._v("# passwd admin")])]),s._v(" "),e("h2",{attrs:{id:"_2-赋予新用户-sudo-权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-赋予新用户-sudo-权限"}},[s._v("#")]),s._v(" 2. 赋予新用户 sudo 权限")]),s._v(" "),e("p",[s._v("当用户执行 "),e("code",[s._v("$ sudo command")]),s._v(" 时，系统会寻找 /etc/sudoers 文件，判断该用户是否具备执行 sudo 命令的权限。")]),s._v(" "),e("p",[s._v("修改 /etc/sudoers 文件，添加一行，为新用户 admin 赋予全部权限：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# vim /etc/sudoers\n\n增添 admin  ALL=(ALL)  ALL\n")])])]),e("h2",{attrs:{id:"_3-禁止远程-root-身份登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-禁止远程-root-身份登录"}},[s._v("#")]),s._v(" 3. 禁止远程 root 身份登录")]),s._v(" "),e("p",[s._v("修改 /etc/ssh/sshd_config 文件：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# vim /etc/ssh/sshd_config\n\n找到 PermitRootLogin yes\n改为 PermitRootLogin no\n")])])]),e("p",[s._v("重启 ssh 服务（不同服务器可能重启方式不同）："),e("code",[s._v("# service sshd restart")])]),s._v(" "),e("h2",{attrs:{id:"_4-重启-sshd-服务可能报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-重启-sshd-服务可能报错"}},[s._v("#")]),s._v(" 4. 重启 sshd 服务可能报错")]),s._v(" "),e("p",[s._v("如果"),e("strong",[s._v("报错")]),s._v("："),e("code",[s._v("sshd: unrecognized service")])]),s._v(" "),e("p",[s._v("查看本机 Linux 发行版："),e("code",[s._v("# uname -a")])]),s._v(" "),e("p",[s._v("如果是 Ubuntu，安装 ssh 相关服务："),e("code",[s._v("# sudo apt-get install openssh-client openssh-server")])]),s._v(" "),e("p",[s._v("重启服务："),e("code",[s._v("# service sshd restart")])]),s._v(" "),e("p",[s._v("如果 service 命令仍然无法运行，可考虑直接使用 /etc/init.d 下的 ssh 命令："),e("code",[s._v("# /etc/init.d/ssh restart")])]),s._v(" "),e("h3",{attrs:{id:"至此，设置便成功。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#至此，设置便成功。"}},[s._v("#")]),s._v(" 至此，设置便成功。")]),s._v(" "),e("p",[s._v("如果还试图远程登录 root 用户，无论是否正确输入 root 密码，都会报错："),e("code",[s._v("Permission denied, please try again.")])]),s._v(" "),e("p",[s._v("只需用 admin 账号登录，登录之后使用 "),e("code",[s._v("$ sudo")]),s._v(" 以 root 权限执行命令即可。")]),s._v(" "),e("p",[s._v("或者以 "),e("code",[s._v("$ su")]),s._v(" 命令登录 root 用户（需要输入 root 密码）。")])])}),[],!1,null,null,null);t.default=a.exports}}]);