(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{284:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("volatile是Java最轻量级的同步机制。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("blockquote",[s("p",[t._v("详情可参考 "),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/mcR8_FHHGA2zb0aW1N02ag?from=groupmessage&isappinstalled=0",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入分析volatile的实现原理"),s("OutboundLink")],1)])]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("线程安全，锁区域内容一次只允许一个线程执行，通过锁机制控制。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),s("p",[t._v("每个类实例对应一把锁，类的两个实例没有这个限制。类实例中所有的synchronized方法共用这一把锁，锁的范围有点大。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),s("p",[t._v("其中的代码执行前必须获得对象 syncObject 锁，可以针对任意代码块，且可以任意指定上锁的对象，故灵活性较高。")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("如果修饰变量标识为常量，运行过程中会将值直接替换到变量这个占位符中（避免根据内存地址再次查找这层消耗）；如果修改方法，方法不允许被覆盖；修饰类，类不允许被继承。")]),t._v(" "),s("p",[t._v("基础类型，如String，不允许修改。")]),t._v(" "),s("p",[t._v("集合，如Map、List，引用地址不允许修改，但可以put、get等操作。")]),t._v(" "),s("p",[t._v("Java8编译会检查，如果是修改常量，会编译失败。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("如果一个对象中的某个属性不希望被序列化，则可以使用transient关键字进行声明。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"java关键字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java关键字","aria-hidden":"true"}},[this._v("#")]),this._v(" Java关键字")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"volatile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#volatile","aria-hidden":"true"}},[this._v("#")]),this._v(" volatile")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("特性：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("可见性。变量读写直接操作主存而不是CPU Cache。当一个线程修改了volatile修饰的变量后，无论是否加锁，其他线程都可以立即看到最新的修改。")])]),this._v(" "),e("li",[e("p",[this._v("禁止指令重排序优化。")])]),this._v(" "),e("li",[e("p",[this._v("保证变量可见性，但无法保证原子性。也就是说非线程安全。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Java内存模型：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/images/Java%E5%85%B3%E9%94%AE%E5%AD%97/volatile.png",alt:"volatile"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"synchronized"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synchronized","aria-hidden":"true"}},[this._v("#")]),this._v(" synchronized")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("当两个并发线程访问同一个对象object中的这个synchronized(this)同步代码块时，一个时间内只能有一个线程得到执行。另一个线程必须等待当前线程执行完这个代码块以后才能执行该代码块。")])]),this._v(" "),e("li",[e("p",[this._v("然而，当一个线程访问object的一个synchronized(this)同步代码块时，另一个线程仍然可以访问该object中的非synchronized(this)同步代码块。")])]),this._v(" "),e("li",[e("p",[this._v("尤其关键的是，当一个线程访问object的一个synchronized(this)同步代码块时，其他线程对object中所有其它synchronized(this)同步代码块的访问将被阻塞。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"同步方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同步方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 同步方法")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"同步块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同步块","aria-hidden":"true"}},[this._v("#")]),this._v(" 同步块")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("syncObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//允许访问控制的代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"final"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#final","aria-hidden":"true"}},[this._v("#")]),this._v(" final")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"static"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#static","aria-hidden":"true"}},[this._v("#")]),this._v(" static")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[t._v("声明属性")]),t._v(" "),s("p",[t._v("为全局属性，放在全局数据区，只分配一次。")])]),t._v(" "),s("li",[s("p",[t._v("声明方法")]),t._v(" "),s("p",[t._v("类方法，可以由类名直接调用。")])]),t._v(" "),s("li",[s("p",[t._v("声明类")]),t._v(" "),s("p",[t._v("内部类可以用static修饰声明该类为静态内部类。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"transient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transient","aria-hidden":"true"}},[this._v("#")]),this._v(" transient")])}],!1,null,null,null);e.default=n.exports}}]);