(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{228:function(a,e,t){"use strict";t.r(e);var s=t(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"map相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map相关","aria-hidden":"true"}},[a._v("#")]),a._v(" Map相关")]),a._v(" "),t("h2",{attrs:{id:"类图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类图","aria-hidden":"true"}},[a._v("#")]),a._v(" 类图")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/Map%E7%9B%B8%E5%85%B3/Map%E7%B1%BB%E5%9B%BE.png",alt:"Map类图"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/Map%E7%9B%B8%E5%85%B3/Map%E7%9A%84Entry%E7%B1%BB%E5%9B%BE.png",alt:"Map的Entry类图"}})]),a._v(" "),t("p",[a._v('Map用于保存具有"映射关系"的数据，因此Map集合里保存着两组值，一组值用于保存Map里的key，另外一组值用于保存Map里的value。key和value都可以是任何引用类型的数据。Map的key不允许重复，即同一个Map对象的任何两个key通过equals方法比较结果总是返回false。')]),a._v(" "),t("p",[a._v("Map的实现类和子接口中key集的存储形式和Set集合相同（即key不能重复）；Map的实现类和子接口中value集的存储形式和List非常类似（即value可以重复、根据索引进行查找）。")]),a._v(" "),t("h2",{attrs:{id:"map实现类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map实现类","aria-hidden":"true"}},[a._v("#")]),a._v(" Map实现类")]),a._v(" "),t("h3",{attrs:{id:"hashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap","aria-hidden":"true"}},[a._v("#")]),a._v(" HashMap")]),a._v(" "),t("p",[a._v("HashMap保存的key-value对是无序的，判断HashMap中的两个key是否相等的标准是：两个key通过equals()方法比较返回true、同时两个key的hashCode值也必需相等。")]),a._v(" "),t("h3",{attrs:{id:"linkedhashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashmap","aria-hidden":"true"}},[a._v("#")]),a._v(" LinkedHashMap")]),a._v(" "),t("p",[a._v("LinkedHashMap使用双向链表来维护key-value对的次序，该链表负责维护Map的迭代顺序，与key-value对的插入顺序一致。")]),a._v(" "),t("h3",{attrs:{id:"hashtable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashtable","aria-hidden":"true"}},[a._v("#")]),a._v(" HashTable")]),a._v(" "),t("p",[a._v("线程安全的Map实现类。")]),a._v(" "),t("h3",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[a._v("#")]),a._v(" Properties")]),a._v(" "),t("p",[a._v('Properties对象在处理属性文件时特别方便，Properties类可以把Map对象和属性文件关联起来，从而可以把Map对象中的key-value对写入到属性文件中，也可以把属性文件中的"属性名-属性值"加载到Map对象中。')]),a._v(" "),t("h3",{attrs:{id:"treemap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#treemap","aria-hidden":"true"}},[a._v("#")]),a._v(" TreeMap")]),a._v(" "),t("p",[a._v("TreeMap时一个红黑树数据结构，每个key-value对作为红黑树的一个节点。TreeMap存储key-value对时，需要根据key对节点进行排序。TreeMap可以保证所有的key-value对处于有序状态。")]),a._v(" "),t("h3",{attrs:{id:"weakhashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weakhashmap","aria-hidden":"true"}},[a._v("#")]),a._v(" WeakHashMap")]),a._v(" "),t("p",[a._v('WeakHashMap与HashMap的用法基本相似。区别在于，HashMap的key保留了对实际对象的"强引用"，这意味着只要该HashMap对象不被销毁，该HashMap所引用的对象就不会被GC。而WeakHash的key只保留了对实际对象的弱引用，这意味着如果被引用的实际对象没有被其他强引用变量所引用，则这些key所引用的对象可能被GC，当引用的对象被GC之后，WeakHashMap也可能自动删除这些key所对应的key-value对。')]),a._v(" "),t("h3",{attrs:{id:"identityhashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#identityhashmap","aria-hidden":"true"}},[a._v("#")]),a._v(" IdentityHashMap")]),a._v(" "),t("p",[a._v("IdentityHashMap的实现机制与HashMap基本相似，区别在于，在IdentityHashMap中，当且仅当两个key严格相等（key1 == key2）时，IdentityHashMap才认为两个key相等。")]),a._v(" "),t("h3",{attrs:{id:"enummap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enummap","aria-hidden":"true"}},[a._v("#")]),a._v(" EnumMap")]),a._v(" "),t("p",[a._v("EnumMap时一个与枚举类一起使用的Map实现，EnumMap中的所有key都必需是单个枚举类的枚举值。创建EnumMap时必须显式或隐式指定它对应的枚举类。EnumMap根据key的自然顺序（即枚举值在枚举类中的定义顺序）进行排序。")])])}],!1,null,null,null);e.default=r.exports}}]);