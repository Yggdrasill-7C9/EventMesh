(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{367:function(e,t,r){"use strict";r.r(t);var s=r(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"_4-服务就近"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-服务就近"}},[e._v("#")]),e._v(" 4.服务就近")]),e._v(" "),r("p",[e._v("      \n为了保证高可用，服务的部署通常分布在多个机房、区域。我们希望服务之间能够就近调用，减少跨机房跨区域网络访问的时延问题。对此，DeFiBus在Broker和客户端上都增加了区域的属性来标识实例属于哪个区域。对于Producer，消息会优先发往同区域内的Broker集群上；对于Consumer，则优先监听同区域内的Queue；当一个区域内没有Consumer实例监听时，则由其他区域的Consumer实例跨区域监听。")]),e._v(" "),r("h3",{attrs:{id:"就近发送"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#就近发送"}},[e._v("#")]),e._v(" 就近发送")]),e._v(" "),r("p",[e._v("      \n在创建Producer时，通过设置"),r("code",[e._v('DeFiBusClientConfig.setClusterPrefix("your region")')]),e._v("来标识Producer实例所在的区域。Producer在每次发送消息会先选则一个Queue来作为发送的目标队列。当启用就近发送时，Producer优先选择与自己同区域内的Queue，当本区域内没有可用Queue时，则选择其他区域的Queue。\n")]),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"/images/features/invoke_nearby-p1.png",width:"600"}})]),r("p"),e._v(" "),r("h3",{attrs:{id:"就近监听"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#就近监听"}},[e._v("#")]),e._v(" 就近监听")]),e._v(" "),r("p",[e._v("      \n就近监听指的是Consumer在做负载均衡分配Queue的时候，每个区域内的Queue只由该区域内的Consumer监听和消费，当且仅当一个区域内没有订阅该Topic的Consumer时，由其他区域订阅了该Topic的Consumer跨区域监听和消费这些Queue。虽然Consumer是在同区域内就近消费，但仍通过心跳维持跨区域的连接，以保证能够随时跨区域接管消费。")]),e._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"/images/features/subscribe-nearby-p1.png",width:"600"}})]),e._v(" "),r("hr"),e._v(" "),r("h4",{attrs:{id:"links"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" Links:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/cn/features/cn/features/1-request-response-call.html"}},[e._v("Request-Reply调用")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/cn/features/cn/features/2-dark-launch.html"}},[e._v("灰度发布")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/cn/features/cn/features/3-circuit-break-mechanism.html"}},[e._v("熔断机制")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/cn/features/cn/features/4-invoke-service-nearby.html"}},[e._v("服务就近")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/cn/features/cn/features/5-multi-active.html"}},[e._v("应用多活")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/cn/features/cn/features/6-dynamic-adjust-queue.html"}},[e._v("动态扩缩队列")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/cn/features/cn/features/8-fault-tolerant.html"}},[e._v("容错机制")])],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);