(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{361:function(e,t,a){"use strict";a.r(t);var s=a(28),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"macosx-搭建本地-apache-网络服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macosx-搭建本地-apache-网络服务器"}},[e._v("#")]),e._v(" MacOSX 搭建本地 Apache 网络服务器")]),e._v(" "),a("p",[e._v("2020年04月18日 - "),a("a",{attrs:{href:"https://yuweiyin.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("YuweiYin"),a("OutboundLink")],1)]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"_1-创建网站目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建网站目录"}},[e._v("#")]),e._v(" 1. 创建网站目录")]),e._v(" "),a("p",[e._v("如果要把网站建在个人 home 目录（即 /Users/username）的 Sites 目录下，则先增加 /Users/username/Sites 目录，并把网站文件（含 index.html 或 index.php 文件等）放入其中。")]),e._v(" "),a("h2",{attrs:{id:"_2-修改-httpd-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改-httpd-配置文件"}},[e._v("#")]),e._v(" 2. 修改 httpd 配置文件")]),e._v(" "),a("p",[e._v("进入 apache2 目录："),a("code",[e._v("$ cd /etc/apache2/")])]),e._v(" "),a("p",[e._v("备份 httpd 配置文件 httpd.conf："),a("code",[e._v("$ sudo cp httpd.conf httpd.conf.bak")])]),e._v(" "),a("p",[e._v("修改配置文件："),a("code",[e._v("$ sudo vim httpd.conf")])]),e._v(" "),a("h3",{attrs:{id:"_2-1-修改服务器根目录-serverroot，注意目录最末尾不加斜线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-修改服务器根目录-serverroot，注意目录最末尾不加斜线"}},[e._v("#")]),e._v(" 2.1. 修改服务器根目录 ServerRoot，注意目录最末尾不加斜线")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('默认为：ServerRoot "/usr"\n修改为：ServerRoot "/Users/username"\n')])])]),a("h3",{attrs:{id:"_2-2-修改文件根目录-documentroot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-修改文件根目录-documentroot"}},[e._v("#")]),e._v(" 2.2. 修改文件根目录 DocumentRoot")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('默认为：\nDocumentRoot "/Library/WebServer/Documents"\n<Directory "/Library/WebServer/Documents">\n修改为：\nDocumentRoot "/Users/username/Sites"\n<Directory "/Users/username/Sites">\n')])])]),a("h3",{attrs:{id:"_2-3-在标签内部，修改-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-在标签内部，修改-options"}},[e._v("#")]),e._v(" 2.3. 在标签内部，修改 Options")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("默认为：Options FollowSymLinks Multiviews\n修改为：Options Indexes FollowSymLinks Multiviews\n")])])]),a("h3",{attrs:{id:"_2-4-去掉一行的注释，使-php-文件生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-去掉一行的注释，使-php-文件生效"}},[e._v("#")]),e._v(" 2.4. 去掉一行的注释，使 PHP 文件生效")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("默认为：#LoadModule php7_module libexec/apache2/libphp7.so\n修改为：LoadModule php7_module libexec/apache2/libphp7.so\n")])])]),a("h3",{attrs:{id:"_2-5-修改-servername-为本地-ip-80-端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-修改-servername-为本地-ip-80-端口"}},[e._v("#")]),e._v(" 2.5. 修改 ServerName 为本地 IP : 80 端口")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("默认为：#ServerName www.example.com:80\n修改为：ServerName 127.0.0.1:80\n或者是：ServerName localhost:80\n")])])]),a("p",[e._v("保存并退出")]),e._v(" "),a("h2",{attrs:{id:"_3-复制-libexec-文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-复制-libexec-文件夹"}},[e._v("#")]),e._v(" 3. 复制 libexec 文件夹")]),e._v(" "),a("p",[e._v("由于修改了服务器目录 ServerRoot，因此原目录下的 libexec 文件夹需要复制到新服务器目录下（配置文件 httpd.conf 中说明了需要 libexec 文件夹下的各种 .so 文件）：")]),e._v(" "),a("p",[a("code",[e._v("$ sudo cp -r /usr/libexec /Users/username/")])]),e._v(" "),a("h2",{attrs:{id:"_4-重启apache服务器："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-重启apache服务器："}},[e._v("#")]),e._v(" 4. 重启Apache服务器：")]),e._v(" "),a("p",[a("code",[e._v("$ sudo apachectl -k restart")])]),e._v(" "),a("h2",{attrs:{id:"_5-在浏览器中输入本地-ip-80-端口，查看-apache-服务器是否正常启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-在浏览器中输入本地-ip-80-端口，查看-apache-服务器是否正常启动"}},[e._v("#")]),e._v(" 5. 在浏览器中输入本地 IP : 80 端口，查看 Apache 服务器是否正常启动")]),e._v(" "),a("ul",[a("li",[e._v("浏览器输入："),a("code",[e._v("http://127.0.0.1:80")])]),e._v(" "),a("li",[e._v("或 者 输入："),a("code",[e._v("http://localhost:80")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);