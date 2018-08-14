(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{198:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"快速搭建微服务-配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速搭建微服务-配置中心","aria-hidden":"true"}},[s._v("#")]),s._v(" 快速搭建微服务-配置中心")]),s._v(" "),a("p",[s._v("配置中心是用来为分布式系统中的基础设施和微服务应用提供集中化的外部配置支持，分为服务端和客户端两个部分。配置中心的服务端是一个独立的微服务应用，用来连接配置仓库并为客户端提供获取配置信息的接口。配置中心的客户端可以是微服务架构中的各个微服务应用或基础服务，客户端在启动的时候调用服务端接口获取并加载配置信息。Spring Cloud Config实现的配置中心默认采用Git仓库来存储配置信息。本文简单介绍如何在微服务架构中使用Spring Cloud Config作为配置中心。")]),s._v(" "),a("h2",{attrs:{id:"配置仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置仓库","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置仓库")]),s._v(" "),a("p",[s._v("在Git代码托管平台上创建一个新的仓库/项目，并将配置文件上传至Git仓库的根目录下。")]),s._v(" "),a("p",[s._v("配置文件的命名格式为："),a("code",[s._v("[serviceId]-[profile].yml")])]),s._v(" "),a("p",[s._v("当profile为 “default” 默认配置时，可以忽略。")]),s._v(" "),a("p",[s._v("配置文件的格式可以是yml，也可以是properties，推荐可读性更好的yml格式。配置文件的内容填写相应的微服务的外部配置信息，例如 "),a("code",[s._v("api-gateway")]),s._v(" 网关服务的配置文件 "),a("strong",[s._v("api-gateway.yml")]),s._v(" 中配置了jwt的相关参数和不同客户端的jwt过期及刷新时间，限流的开关、开启限流的内存阈值、需要限流的服务名及每秒限制的请求数，跨域相关配置。具体配置信息如下：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[s._v("jwt")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("secret")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" yupaits\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("auth-header-name")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Authorization\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("expired-config")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("PC_WEB")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("expired-in-seconds")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1800")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("refresh-ttl-seconds")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("864000")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("MOBILE_H5")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("expired-in-seconds")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("refresh-ttl-seconds")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("MOBILE_APP")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("expired-in-seconds")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("refresh-ttl-seconds")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("MOBILE_WECHAT")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("expired-in-seconds")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("refresh-ttl-seconds")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("TEST")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("expired-in-seconds")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("10")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("refresh-ttl-seconds")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("30")]),s._v("\n\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("rate-limit")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("enabled")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("memory-size-kb")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("300000")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("limits")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("service-order")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("300")]),s._v("\n\n"),a("span",{attrs:{class:"token key atrule"}},[s._v("cors")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("origins")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"*"')]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("methods")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" GET"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" POST"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" PUT"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" DELETE"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" PATCH\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("max-age")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("600")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("allowed-headers")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Origin"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" X"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Requested"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("With"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Content"),a("span",{attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Type"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Accept"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Authorization\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("exposed-headers")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Authorization\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h2",{attrs:{id:"服务端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端","aria-hidden":"true"}},[s._v("#")]),s._v(" 服务端")]),s._v(" "),a("ul",[a("li",[s._v("Maven依赖")])]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.cloud"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-config-server"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("配置信息")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("config")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{attrs:{class:"token key atrule"}},[s._v("git")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),a("span",{attrs:{class:"token key atrule"}},[s._v("uri")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//gitee.com/"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("git仓库路径"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          "),a("span",{attrs:{class:"token key atrule"}},[s._v("username")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("git仓库访问用户名"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n          "),a("span",{attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("git仓库访问密码"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端","aria-hidden":"true"}},[s._v("#")]),s._v(" 客户端")]),s._v(" "),a("ul",[a("li",[s._v("Maven依赖")])]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.cloud"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-cloud-starter-config"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("配置信息")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[s._v("cloud")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[s._v("config")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("uri")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//localhost"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token number"}},[s._v("9000    ")]),a("span",{attrs:{class:"token comment"}},[s._v("# 配置中心服务端的访问URL")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("profile")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" default              "),a("span",{attrs:{class:"token comment"}},[s._v("# 配置类型 default为默认配置")]),s._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[s._v("label")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master                 "),a("span",{attrs:{class:"token comment"}},[s._v("# 配置中心Git仓库分支")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("因为从配置中心加载的配置要先于 "),a("code",[s._v("application.yml")]),s._v(" 并且 "),a("code",[s._v("bootstrap.yml")]),s._v(" 的配置加载会先于 "),a("code",[s._v("application.yml")]),s._v("，所以客户端中的配置中心的相关配置需要写在 "),a("code",[s._v("bootstrap.yml")]),s._v(" 文件中。")])])}],!1,null,null,null);e.options.__file="7.md";t.default=e.exports}}]);