/*
v.3.1
滴滴橙心果园脚本,支持自动浇水及部分任务
手动抓包获取token,手机在boxjs里填写
boxjs订阅地址:https://gitee.com/passerby-b/javascript/raw/master/JD/passerby-b.boxjs.json
docker环境变量名:DD_TOKEN,多账号换行或英文逗号(,)隔开

[task_local]
10 0,8,12,18 * * * https://raw.githubusercontent.com/passerby-b/didi_fruit/main/dd_fruit.js

*/

let token = process.env.DD_TOKEN;//nodejs填写此处
// const $ = new Env("滴滴橙心果园");
eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([9acdf-hj-mo-qs-zA-WYZ]|[12]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1b $=I API("dd_fruit");c f=\'\',10=\'\',11=\'\',1k=\'\';!(m()=>{q($.R.1l){q(12.R.13){q(12.R.13.1m(\',\')>-1){S=12.R.13.1c(\',\')}Y q(12.R.13.1m(\'\\n\')>-1){S=12.R.13.1c(\'\\n\')}Y{S=[12.R.13]}};10=require(\'./1n\')}Y{c 16=$.read(\'#ddtoken\');q(!!16){q(16.1m(\',\')>-1){S=16.1c(\',\')}Y{S.push(16)}}}1d(c i=0;i<S.T;i++){11=\'\',f=\'\';h.j(\'\\r\\n★★★★★开始执行第\'+(i+1)+\'个账号,共\'+S.T+\'个账号★★★★★\');f=S[i];c 1K=a 1o(0);q(1K!=0){q($.R.1l)a 10.1n(\'第\'+(i+1)+\'个账号f过期\',\'请去滴滴出行1L抓取1M!\');$.10(\'第\'+(i+1)+\'个账号f过期\',\'\',\'请去滴滴出行1L抓取1M!\');continue}a $.v(x);a 1p();a $.v(x);a 1q();a $.v(x);a 1r();a $.v(x);a 1N();a $.v(x);a 1s();a $.v(x);a 1O();a $.v(x);a 1t();a $.v(x);a 1u();a $.v(x);a 1v();a $.v(x);a 1e();a $.v(x);a 1P();a $.v(x);a 1w();a $.v(x);a 1s();a $.v(x);a 1o(1);a $.v(x)}h.j(\'\\n【互助码】:\'+1k)})().J(m(e)=>{h.j(\'\',\'❌失败! 原因:\'+e+\'!\',\'\')}).finally(()=>{$.done()});m K 1p(){L I P(m d=>{M{c g=y(\'s://k.A.t/B/k/N/1p?C=D-rEu%2FjKAxnKts%2B2CvwnseopBOVRDVJ5zyycnFvy1pVRDU%2B1KmSn79p%2Bayk4tU%2BPCwYjj5S8IukJoX2wNqzCpEopeWlvfm%2B2cOwgycp8qQl4fl%2B2DpPsRBuzHpk4q\',\'{"E":1,"f":"\'+f+\'"}\');$.u.H(g).w(l=>{c 9=F.G(l.p);h.j(\'\\n【连续签到】:\'+9.O);d()})}J(o){h.j(\'\\n【连续签到】:\'+o);d()}})}m K 1q(){L I P(m d=>{M{c g=y(\'s://k.A.t/B/k/N/1q?C=D-zTPAzOQP%2BLz1u0D1s7hWtSRw6S88zCy6quUln6iv6S87uGJei7MqtSvQL5z7unD8W3qSqwtoLMi6Ss%2BDrRwksLziMwJLu0bKsyTttwJyM5J%2Bu0CLnKYhm5svL5w\',\'{"E":1,"f":"\'+f+\'"}\');c z=1,1x=0;do{1x++;h.j(\'\\n**********开始执行第\'+1x+\'次抽奖**********\');a $.u.H(g).w(l=>{c 9=F.G(l.p);z=9.z;q(9.z==0){h.j(\'\\n【抽奖】:\'+9.O)}Y{h.j(\'\\n【抽奖】:\'+9.O)}});a $.v(1z)}1A(z==0);d()}J(o){h.j(\'\\n【抽奖】:\'+o);d()}})}m K 1s(){L I P(m d=>{M{c g=y(\'s://k.A.t/B/k/N/watering?C=D-Qu9qYTzgDM7Ml%2FDfmZL2V2WCaTyJ%2FlyalT6e%2F1XFaTyKlhJ2XIkAUPodA67KlADcjM2LXZm9ALcHte%2B%2BkwFdVIQLBxR2l%2Fb0nPdDUZ8AB6R3l%2FCAs5Bah2nFA65\',\'{"E":1,"f":"\'+f+\'"}\');c z=1,1B=0;do{1B++;h.j(\'\\n**********开始执行第\'+1B+\'次浇水**********\');a $.u.H(g).w(l=>{c 9=F.G(l.p);z=9.z;q(9.z==0){h.j(\'\\n【浇水】:\'+9.O+\',剩余\'+9.9.1Q+\'滴水,今天已浇水\'+9.9.water_times+\'次\')}Y{h.j(\'\\n【浇水】:\'+9.O)}});a $.v(1z)}1A(z==0);d()}J(o){h.j(\'\\n【浇水】:\'+o);d()}})}m K 1t(){L I P(m d=>{M{c z=0;do{c g=y(\'s://k.A.t/B/k/N/1t?C=D-5kyGrUHwozHE%2BKKUAXuzxAIPw8ODJNmUDtjjPa9ow8OC%2BJCSa03Wxq2zTpHC%2BvKWFDnQy%2FBuTyFB2o0uACWsxFIwYQd4%2By4VdstkPFIYYpHF3Nbhdgznxe6XTpw\',\'{"count":1,"E":1,"f":"\'+f+\'"}\');a $.u.H(g).w(l=>{c 9=F.G(l.p);z=9.z;h.j(\'\\n【施肥】:\'+9.O)});a $.v(x)}1A(z==0);d()}J(o){h.j(\'\\n【施肥】:\'+o);d()}})}m K 1r(){L I P(m d=>{M{c g=y(\'s://k.A.t/B/k/N/1r?C=D-1R\',\'{"E":1,"f":"\'+f+\'"}\');$.u.H(g).w(l=>{c 9=F.G(l.p);1k+=9.9.1C+\',\';d()})}J(o){h.j(\'\\n【互助码】:\'+o);d()}})}m K 1u(){L I P(m d=>{M{c g=y(\'s://k.A.t/B/k/N/1u?C=D-1R\',\'{"inter_type":2,"E":1,"f":"\'+f+\'"}\');$.u.H(g).w(l=>{c 9=F.G(l.p);h.j(\'\\n【摸狗】:\'+9.O);d()})}J(o){h.j(\'\\n【摸狗】:\'+o);d()}})}m K 1v(){L I P(m d=>{M{c g=y(\'s://k.A.t/B/k/N/1v?C=D-2iAt3F2cDhk9E%2F5L0rAD0rYGaadgBlrKGVMfb%2FBBaadfEheDdBUDGBH9ArkfEA5IAFI%2BFa9dA%2FZebe9e0keg0rLHBBBEE%2FM6ErEAGaZEBrB0E%2F63adabchaBArk\',\'{"E":1,"f":"\'+f+\'"}\');$.u.H(g).w(l=>{c 9=F.G(l.p);h.j(\'\\n【赶蚂蚱】:\'+9.O);d()})}J(o){h.j(\'\\n【赶蚂蚱】:\'+o);d()}})}m K 1N(){L I P(m d=>{M{q(I Date().getHours()==8){c g=y(\'s://k.A.t/B/k/N/recExtWater?C=D-9cN1eDeETfeXBKhhM9uvHXAazmlqENLn%2BEDT6mMfzmlrBJYz6qQYI0E0oGerBvhlIU0kJg5Dog1sgoxPNe4SHXA8pWqjBKqrMAJvIglcpGq%2FBK%2FW1l8P5n6foGd\',\'{"E":1,"f":"\'+f+\'"}\');$.u.H(g).w(l=>{c 9=F.G(l.p);h.j(\'\\n【领取x水滴】:\'+9.O);d()})}Y{d()}}J(o){h.j(\'\\n【领取x水滴】:\'+o);d()}})}m K 1e(){L I P(m d=>{M{c g=y(\'s://k.A.t/B/k/N/1e?C=D-1S%1T%1U%1V%1W\',\'{"E":1,"1X":1,"f":"\'+f+\'"}\');a $.u.H(g).w(l=>{c 9=F.G(l.p);h.j(\'\\n【浇水奖励】:\'+9.O)});g=y(\'s://k.A.t/B/k/N/1e?C=D-1S%1T%1U%1V%1W\',\'{"E":1,"1X":2,"f":"\'+f+\'"}\');a $.u.H(g).w(l=>{c 9=F.G(l.p);h.j(\'\\n【浇水奖励】:\'+9.O)});d()}J(o){h.j(\'\\n【浇水奖励】:\'+o);d()}})}m K 1O(){L I P(m d=>{M{c g=y(\'s://k.A.t/B/k/1D/1f?E=1&1E=24&f=\'+f+\'&C=D-CHzVEnXwsC5zpLdk7Rv62tsP%2FswYQIPh68i9LCzo%2FswZpM6Z%2Bv4F1jmzrb5Zpwdj4zmI4towtDauZP1p54tDLGWzqCITpw6W8oQgLDQxkCSZpL1%2FJRKFLctQqb9\',\'\');a $.u.1f(g).w(m l=>{c 9=F.G(l.p);1d(c i=0;i<9.9.1Y.T;i++){1b Q=9.9.1Y[i];q(Q.U==2||Q.U==3||Q.U==7||Q.U==8||Q.U==19||Q.U==20){g=y(\'s://k.A.t/B/k/1D/update?C=D-%1Z%21%22\',\'{"E":1,"23":\'+Q.U+\',"1E":24,"f":"\'+f+\'"}\');a $.u.H(g).w(17=>{c 9=F.G(17.p);h.j(17.p);q(9.z==0){h.j(\'\\n【完成任务】:\'+Q.V+\'->\'+9.O)}});a $.v(1z)}g=y(\'s://k.A.t/B/k/1D/award?C=D-%1Z%21%22\',\'{"E":1,"23":\'+Q.U+\',"1E":24,"f":"\'+f+\'"}\');a $.u.H(g).w(17=>{c 9=F.G(17.p);q(9.z==0){h.j(\'\\n【领取任务奖励】:\'+Q.V+\'->\'+9.O)}})};d()})}J(o){h.j(\'\\n【领取任务奖励】:\'+o);d()}})}m K 1P(){L I P(m d=>{c 1g=1h.25(1h.26()*(3-1)+1);c Z="",V="";M{c 1i=[],W=\'\';a $.u.1f({1a:\'s://gitee.t/passerby-b/javascript/raw/master/test/ddcode.js\'}).w(l=>{W=l.p});M{a $.u.1f({1a:\'u://107.172.97.176:8080/queryDidiCode\'}).w(l=>{W+=l.p})}J(o){}q(!!W){W=W.substr(0,W.T-1);1i=W.1c(\',\')}c 27=1i[1h.25(1h.26()*(1i.T-1)+0)];q(1g==1){Z="101";V="每日助力"}q(1g==2){Z="104";V="化肥助力"}q(1g==3){Z="106";V="进果园助力"}c g=y(\'s://k.A.t/B/k/N/28?C=D-BBvPDgBTVDqs46kY5bRH8j1YntAV71Iy7fm5Ks2zntAU45xmLi8I8c9oWcqU4Tkw1miF5DLpUbTXMYYq5Co5JDVYiGrn4xEv5Xy46G1PjGkw46VPHizM6GdnXWS\',\'{"E":1,"Z":\'+Z+\',"1C":"\'+27+\'","29":false,"f":"\'+f+\'"}\');a $.u.H(g).w(l=>{c 9=F.G(l.p);h.j(\'\\n【\'+V+\'】:\'+9.9.assist_status);d()})}J(o){h.j(\'\\n【\'+V+\'】:\'+o);d()}})}c 14=0;m K 1w(){L I P(m d=>{M{c g=y(\'s://k.A.t/B/k/N/dailyReward?C=D-2Y%2F94V8v4aYaoiAIEvAiGB3oIh1fRnxLGpxVc90PIh1gojIEdKd%2F0rNY1BYgoCANA%2BZwEhfw19ldYgLb0yVUGBJq2rMFoia3ERkj0hzS2BMGoiB6a7rrbagP1BY\',\'{"1F":140749163,"E":1,"f":"\'+f+\'"}\');a $.u.H(g).w(m l=>{c 9=F.G(l.p);14=9.9.14.T;1d(c i=0;i<9.9.14.T;i++){1b Q=9.9.14[i];g=y(\'s://k.A.t/B/k/N/1w?C=D-Pvs4yx88TSQajRp7kOizqZfJzLJfmob1mSpomH0MzLJgjQW9UHGvsZN5owQgj4p3%2FLRnrPf3pxXdVNtGnxWvnZy4pL8EioRDrObvnwJ1pIjDjNWMqMuxmIG6p5O\',\'{"1F":\'+Q.1F+\',"E":1,"f":"\'+f+\'"}\');a $.u.H(g).w(l=>{c 2a=F.G(l.p);h.j(\'\\n【领取助力奖励】:\'+2a.O);d()})};d()})}J(o){h.j(\'\\n【领取助力奖励】:\'+o);d()}})}m K 1o(2b){L I P(m d=>{M{c g=y(\'s://k.A.t/B/k/N/28?C=D-OZXU0M%2BosbseRw9lmQvA4Z7v%2FiCboZTonoQa%2BYgw%2FiCcRx2WVJDE4I7TrCscRL9ShNoH12GkqDp9x25%2Fk%2BpD4SCTqbmJzPBzq3f94ZNRqgicP2LRmupF3Pgvqsq\',\'{"E":1,"Z":0,"1C":"","29":true,"f":"\'+f+\'"}\');a $.u.H(g).w(m l=>{c 9=F.G(l.p);q(9.z==0){c 1G=\'\';1d(c i=0;i<9.9.2c.T;i++){1b 1H=9.9.2c[i];q(1H.2d==9.9.1I.2d)1G=1H.name}11=9.9.interacts[0].f_nick;c 1j=1G+\':\'+9.9.1I.tree_progress+\'%,剩余\'+9.9.1I.1Q+\'滴水,助力:\'+14+\'/4\';h.j(\'\\n滴滴果园【\'+11+\'】:\'+1j);q(2b==1){q($.R.1l)a 10.1n(\'\\n滴滴果园【\'+11+\'】\',1j);$.10(\'\\n滴滴果园【\'+11+\'】\',\'\',1j)}}d(9.z)})}J(o){h.j(\'\\n【果树信息】:\'+o);d()}})}K y(1a,p){c g={1a:1a,headers:{\'User-Agent\':\'Mozilla/5.0 (2e; CPU 2e OS 14_1 2g Mac OS X) AppleWebKit/605.1.15 (KHTML, 2g Gecko) Mobile/15E148 didi.passenger/6.1.18 FusionKit/1.2.20 OffMode/0\',\'Referer\':\'s://2h.2i.t.cn/\',\'Origin\':\'s://2h.2i.t.cn\',\'Connection\':\'keep-alive\',\'2j-Language\':\'zh-cn\',\'2j\':\'2k/2l, text/plain, */*\',\'Content-Type\':\'2k/2l;charset=utf-8\'},p:p};L g}',[],146,'|||||||||data|await||let|resolve||token|option|console||log|game|response|async||error|body|if||https|com|http|wait|then|1000|urlTask|errno|xiaojukeji|api|wsgsig|dd03|platform|JSON|parse|post|new|catch|function|return|try|plant|errmsg|Promise|item|env|tokens|length|id|title|codestr||else|assist_type|notify|nickName|process|DD_TOKEN|assist_record||tokenStr|response2|||url|const|split|for|dailyBox|get|randFunc|Math|scodes|msg|shareCodes|isNode|indexOf|sendNotify|treeInfo|sign|lottery|assistInfo|water|fertilizer|dogInteract|killWorm|recDailyReward|lotteryCount||2000|while|waterCount|encode_uid|mission|game_id|assist_pid|fname|element|tree_info||userNo|APP|TOKEN|recExtWater1000|tasklist|zhuLi|pack_water|jrYPupTTF6oZ4BnNTskNXKUYgxNy7EJISml5i3lzgxNz4AyByb5IWRwoGMoz4hnKQfhFVvUP0StwMUvgpgOaXySm0HiuNrXHpbLIXvrw0Mmz2hvIpiw9WyYQcYY|Y8ZLkZb6HJ4ftGsmVLrSPM4H3QvaWD8|2FXHkZwLJ|2B3Qv9t0RYlS6SOxD7K349tmsirO|2FqRT44KRfcltooVwxTO1K3KJpcsjmjh5OYO1fMKzDHtjjXVLLuxT|2B3K3d|box_id|missions|2FosIP8J||2BP2fUXQm9oTQhkvD3vZmtspKgpZpwrQb6vZmsXRz8x6GPl44LQIfsX3meP2RVmKDKQH4rh|2BuISHQhlKgdQSNUWpsaTOuPkoDMzIGuXpQgS6Whrvf8Q51|mission_id||round|random|scode|enter|is_old_player|data2|step|trees_cfg|tree_id|iPhone||like|fine|diditaxi|Accept|application|json'.split('|'),0,{}))

/*********************************** API *************************************/
function ENV() { const e = "undefined" != typeof $task, t = "undefined" != typeof $loon, s = "undefined" != typeof $httpClient && !t, i = "function" == typeof require && "undefined" != typeof $jsbox; return { isQX: e, isLoon: t, isSurge: s, isNode: "function" == typeof require && !i, isJSBox: i, isRequest: "undefined" != typeof $request, isScriptable: "undefined" != typeof importModule } } function HTTP(e = { baseURL: "" }) { const { isQX: t, isLoon: s, isSurge: i, isScriptable: n, isNode: o } = ENV(), r = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/; const u = {}; return ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "PATCH"].forEach(l => u[l.toLowerCase()] = (u => (function (u, l) { l = "string" == typeof l ? { url: l } : l; const h = e.baseURL; h && !r.test(l.url || "") && (l.url = h ? h + l.url : l.url); const a = (l = { ...e, ...l }).timeout, c = { onRequest: () => { }, onResponse: e => e, onTimeout: () => { }, ...l.events }; let f, d; if (c.onRequest(u, l), t) f = $task.fetch({ method: u, ...l }); else if (s || i || o) f = new Promise((e, t) => { (o ? require("request") : $httpClient)[u.toLowerCase()](l, (s, i, n) => { s ? t(s) : e({ statusCode: i.status || i.statusCode, headers: i.headers, body: n }) }) }); else if (n) { const e = new Request(l.url); e.method = u, e.headers = l.headers, e.body = l.body, f = new Promise((t, s) => { e.loadString().then(s => { t({ statusCode: e.response.statusCode, headers: e.response.headers, body: s }) }).catch(e => s(e)) }) } const p = a ? new Promise((e, t) => { d = setTimeout(() => (c.onTimeout(), t(`${u} URL: ${l.url} exceeds the timeout ${a} ms`)), a) }) : null; return (p ? Promise.race([p, f]).then(e => (clearTimeout(d), e)) : f).then(e => c.onResponse(e)) })(l, u))), u } function API(e = "untitled", t = !1) { const { isQX: s, isLoon: i, isSurge: n, isNode: o, isJSBox: r, isScriptable: u } = ENV(); return new class { constructor(e, t) { this.name = e, this.debug = t, this.http = HTTP(), this.env = ENV(), this.node = (() => { if (o) { return { fs: require("fs") } } return null })(), this.initCache(); Promise.prototype.delay = function (e) { return this.then(function (t) { return ((e, t) => new Promise(function (s) { setTimeout(s.bind(null, t), e) }))(e, t) }) } } initCache() { if (s && (this.cache = JSON.parse($prefs.valueForKey(this.name) || "{}")), (i || n) && (this.cache = JSON.parse($persistentStore.read(this.name) || "{}")), o) { let e = "root.json"; this.node.fs.existsSync(e) || this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.root = {}, e = `${this.name}.json`, this.node.fs.existsSync(e) ? this.cache = JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)) : (this.node.fs.writeFileSync(e, JSON.stringify({}), { flag: "wx" }, e => console.log(e)), this.cache = {}) } } persistCache() { const e = JSON.stringify(this.cache, null, 2); s && $prefs.setValueForKey(e, this.name), (i || n) && $persistentStore.write(e, this.name), o && (this.node.fs.writeFileSync(`${this.name}.json`, e, { flag: "w" }, e => console.log(e)), this.node.fs.writeFileSync("root.json", JSON.stringify(this.root, null, 2), { flag: "w" }, e => console.log(e))) } write(e, t) { if (this.log(`SET ${t}`), -1 !== t.indexOf("#")) { if (t = t.substr(1), n || i) return $persistentStore.write(e, t); if (s) return $prefs.setValueForKey(e, t); o && (this.root[t] = e) } else this.cache[t] = e; this.persistCache() } read(e) { return this.log(`READ ${e}`), -1 === e.indexOf("#") ? this.cache[e] : (e = e.substr(1), n || i ? $persistentStore.read(e) : s ? $prefs.valueForKey(e) : o ? this.root[e] : void 0) } delete(e) { if (this.log(`DELETE ${e}`), -1 !== e.indexOf("#")) { if (e = e.substr(1), n || i) return $persistentStore.write(null, e); if (s) return $prefs.removeValueForKey(e); o && delete this.root[e] } else delete this.cache[e]; this.persistCache() } notify(e, t = "", l = "", h = {}) { const a = h["open-url"], c = h["media-url"]; if (s && $notify(e, t, l, h), n && $notification.post(e, t, l + `${c ? "\n多媒体:" + c : ""}`, { url: a }), i) { let s = {}; a && (s.openUrl = a), c && (s.mediaUrl = c), "{}" === JSON.stringify(s) ? $notification.post(e, t, l) : $notification.post(e, t, l, s) } if (o || u) { const s = l + (a ? `\n点击跳转: ${a}` : "") + (c ? `\n多媒体: ${c}` : ""); if (r) { require("push").schedule({ title: e, body: (t ? t + "\n" : "") + s }) } else console.log(`${e}\n${t}\n${s}\n\n`) } } log(e) { this.debug && console.log(`[${this.name}] LOG: ${this.stringify(e)}`) } info(e) { console.log(`[${this.name}] INFO: ${this.stringify(e)}`) } error(e) { console.log(`[${this.name}] ERROR: ${this.stringify(e)}`) } wait(e) { return new Promise(t => setTimeout(t, e)) } done(e = {}) { console.log('done!'); s || i || n ? $done(e) : o && !r && "undefined" != typeof $context && ($context.headers = e.headers, $context.statusCode = e.statusCode, $context.body = e.body) } stringify(e) { if ("string" == typeof e || e instanceof String) return e; try { return JSON.stringify(e, null, 2) } catch (e) { return "[object Object]" } } }(e, t) }
/*****************************************************************************/

