(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{178:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("webhook请求提交的数据参考"),s("a",{attrs:{href:"http://git.mydoc.io/?t=154711",target:"_blank",rel:"noopener noreferrer"}},[t._v("码云平台帮助文档"),s("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("Jenkins需要安装以下插件：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("Jenkins需要配置以下全局工具：")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("填写Gitee代码仓库地址，选择需要构建的分支。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),s("p",[t._v("构建分三步：构建前执行脚本；maven构建；构建后执行脚本。")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),s("p",[t._v("构建完成后，将生成的Jar包和DockerFile进行归档。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"使用gitee-jenkins-docker完成前后端分离项目的ci-cd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用gitee-jenkins-docker完成前后端分离项目的ci-cd","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用Gitee+Jenkins+Docker完成前后端分离项目的CI/CD")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"/2018/04/10/%E4%BD%BF%E7%94%A8GitHub%E5%92%8CJenkins%E8%87%AA%E5%8A%A8%E6%9E%84%E5%BB%BA%E5%B9%B6%E9%83%A8%E7%BD%B2%E9%9D%99%E6%80%81%E9%A1%B5%E9%9D%A2"}},[this._v("使用GitHub和Jenkins自动构建并部署静态页面")]),this._v("一文介绍了CI/CD的简单实践。本文通过Gitee+Jenkins+Docker的例子对CI/CD做进一步的探索。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"gitee-webhook配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitee-webhook配置","aria-hidden":"true"}},[this._v("#")]),this._v(" Gitee Webhook配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/Webhook%E9%85%8D%E7%BD%AE.png",alt:"Webhook配置"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("URL的格式为 "),e("code",[this._v("http://[username]:[password或者jenkins的api_token]@www.yupaits.com:8080/generic-webhook-trigger/invoke")]),this._v(" 。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"jenkins插件安装、环境配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins插件安装、环境配置","aria-hidden":"true"}},[this._v("#")]),this._v(" Jenkins插件安装、环境配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"必需插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#必需插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 必需插件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Generic Webhook Trigger Plugin")]),this._v(" "),e("li",[this._v("Git Plugin")]),this._v(" "),e("li",[this._v("NodeJS Plugin")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"全局环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局环境")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("JDK")]),this._v(" "),e("li",[this._v("Git")]),this._v(" "),e("li",[this._v("Maven")]),this._v(" "),e("li",[this._v("NodeJS")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"jenkins任务配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins任务配置","aria-hidden":"true"}},[this._v("#")]),this._v(" Jenkins任务配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"general"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#general","aria-hidden":"true"}},[this._v("#")]),this._v(" General")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-General.png",alt:"任务配置-General"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"源码管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 源码管理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-%E6%BA%90%E7%A0%81%E7%AE%A1%E7%90%86.png",alt:"任务配置-源码管理"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"构建触发器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建触发器","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建触发器")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-%E6%9E%84%E5%BB%BA%E8%A7%A6%E5%8F%91%E5%99%A8.png",alt:"任务配置-构建触发器"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-%E6%9E%84%E5%BB%BA%E8%A7%A6%E5%8F%91%E5%99%A81.png",alt:"任务配置-构建触发器1"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("配置触发器参数和触发过滤条件。这里选择了分支名称和项目名称作为构建时的过滤条件。"),s("code",[t._v("Expression")]),t._v("里的"),s("code",[t._v("$")]),t._v("是webhook请求中的请求体JSON数据对象，而"),s("code",[t._v("Variable")]),t._v("中的ref则是Jenkins触发器的变量名，在"),s("code",[t._v("Optional filter")]),t._v("中可以通过"),s("code",[t._v("$ref")]),t._v("来引用该变量。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"构建环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建环境")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-%E6%9E%84%E5%BB%BA%E7%8E%AF%E5%A2%83.png",alt:"任务配置-构建环境"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("由于"),s("code",[t._v("Todo-Tomato")]),t._v("项目里有基于"),s("code",[t._v("vue-loader")]),t._v("的前端SPA，所以构建时需要"),s("code",[t._v("nodejs")]),t._v("和"),s("code",[t._v("npm")]),t._v("环境。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-%E6%9E%84%E5%BB%BA.png",alt:"任务配置-构建"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("构建前脚本：停止相关docker容器；安装npm依赖；npm构建；dist文件夹移入后台Spring Boot项目的resources/public资源文件目录下。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\ndocker stop todo-tomato\n"),s("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" /var/lib/jenkins/workspace/TodoTomato/todo-tomato-web\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n"),s("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/todo-tomato-server/src/main/resources/public\n"),s("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf "),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/todo-tomato-server/src/main/resources/public/**\n"),s("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" -rf dist/** "),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/todo-tomato-server/src/main/resources/public\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("构建后脚本：将构建生成的Jar包和DockerFile移入目标文件夹；停止相关docker容器并删除相关docker镜像；构建docker镜像；运行基于docker镜像的容器。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /var/lib/jenkins/workspace/TodoTomato/todo-tomato-server/target/docker\n"),s("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" /var/lib/jenkins/workspace/TodoTomato/todo-tomato-server/target\n"),s("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" -f todo-tomato-server-*.jar docker\n"),s("span",{attrs:{class:"token function"}},[t._v("cp")]),t._v(" -f "),s("span",{attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/src/main/docker/DockerFile docker\n"),s("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" docker\ndocker stop todo-tomato\ndocker "),s("span",{attrs:{class:"token function"}},[t._v("rm")]),t._v(" todo-tomato\ndocker rmi yupaits/todo-tomato:latest\ndocker build -f DockerFile -t yupaits/todo-tomato:latest "),s("span",{attrs:{class:"token keyword"}},[t._v(".")]),t._v("\ndocker run -d -p 6060:6060 --restart always --name todo-tomato -v /root/todo-tomato/logs:/root/logs yupaits/todo-tomato:latest\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"构建后操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建后操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建后操作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/%E4%BD%BF%E7%94%A8Gitee-Jenkins-Docker%E5%AE%8C%E6%88%90%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB%E9%A1%B9%E7%9B%AE%E7%9A%84CI-CD/%E4%BB%BB%E5%8A%A1%E9%85%8D%E7%BD%AE-%E6%9E%84%E5%BB%BA%E5%90%8E%E6%93%8D%E4%BD%9C.png",alt:"任务配置-构建后操作"}})])}],!1,null,null,null);a.options.__file="7.md";e.default=a.exports}}]);