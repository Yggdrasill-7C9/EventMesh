(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{380:function(t,e,r){"use strict";r.r(e);var a=r(42),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"_2-灰度发布"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-灰度发布"}},[t._v("#")]),t._v(" 2.灰度发布")]),t._v(" "),r("p",[t._v("      \n同一个消费组中的消费者实例通常订阅的Topic是相同的。在有新业务上线时，我们希望仅仅在个别实例上进行灰度，验证通过之后再进行全量。DeFiBus提供了灰度发布的能力，同一个消费组中，允许不同消费者实例订阅不同的Topic，只有订阅了某个具体Topic的实例才能够收到这个Topic的消息，同消费组中没有订阅这个Topic的实例不会收到消息。")]),t._v(" "),r("p",[t._v("      \n假设一个消费组有3个消费者实例，上线初期只涉及到Topic1和Topic2。当业务扩展，需要增加Topic3的订阅时，可以先灰度其中一个实例，验证Topic3在灰度实例上执行正常之后，逐步再替换其他实例。在这期间，实例1和实例2不会收到Topic3的消息。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("p",[r("img",{attrs:{src:"/images/features/dark-launch-p1.png",alt:"avater"}})])]),t._v(" "),r("hr"),t._v(" "),r("h4",{attrs:{id:"links"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" Links:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/features/cn/features/1-request-response-call.html"}},[t._v("Request-Reply调用")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/features/cn/features/2-dark-launch.html"}},[t._v("灰度发布")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/features/cn/features/3-circuit-break-mechanism.html"}},[t._v("熔断机制")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/features/cn/features/4-invoke-service-nearby.html"}},[t._v("服务就近")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/features/cn/features/5-multi-active.html"}},[t._v("应用多活")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/features/cn/features/6-dynamic-adjust-queue.html"}},[t._v("动态扩缩队列")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/features/cn/features/8-fault-tolerant.html"}},[t._v("容错机制")])],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);