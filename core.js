var  chebox_node1=document.getElementById("check1")
var  chebox_node2=document.getElementById("check2")
//多个链接显示
var links=document.getElementById("links")
//form
//一键搜索列表
var search_list=[]
  var action_node=document.getElementById("search")
//  alert(action_node)
    var  to_search_string=""
    var input_node=document.getElementById("my_input");
    console.log(input_node)
   // alert(input_node)
    var action=""
    var action_taptap="https://www.taptap.com/search/"
    var action_17173="http://newgame.17173.com/game-list.html?tab=all&keyword="
   // role="search" method="get"
    var action_4399="http://so2.4399.com/search/search.php?k="
    var action_need_add_4399="?k="
    //steam
   var  action_steam="https://store.steampowered.com/search/?term="
    var action_itch_io="https://itch.io/search?q="
    //国内独立游戏网站
    var action_india="https://indienova.com/search/all/"
    //3dm
    var action_3dm="https://www.3dmgame.com/"
    //花瓣网
    var action_hua_ban="https://huaban.com/search/?q="
    //懒设计
    var action_lazy_design="https://www.fotor.com.cn/templates/?query="
    //涂鸦王国
    var action_scratch_kingdom="https://gracg.com/search/index_new?key="
    //ui中国
    var action_ui_chian="https://s.ui.cn/index.html?keywords="
    //设计癖
   var action_design_pi="http://www.shejipi.com/?s="
   //var
   var action_cn_gal="https://www.cngal.org/search?keyword="
  //动漫之家
  var action_animation_home="https://manhua.dmzj.com/tags/search.shtml?s="
    //国内方块游戏平台
    var action_block="http://store.cubejoy.com/html/en/store/searchgoods/websearch.html?search="
//检查是否被选中
var  action_ren_ming_wang="http://search.people.com.cn/cnpeople/search.do"
//今日头条
var action_jing_ri_tou_tiao="https://www.toutiao.com/search/?keyword="
//通用
function tap_check(id)
{
    //console.log(id)
   
    var current_checkbox=document.getElementById(id)
console.log(id+":"+current_checkbox.checked)
if(current_checkbox.checked==true &&id=="4399")
{
     action=action_4399
    console.log("4399")
     action_node.action=action_4399+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="cnGal")
{
     action=action_cn_gal
    console.log("4399")
     action_node.action=action_cn_gal+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="人民网")
{
     action=action_ren_ming_wang
    console.log("4399")
     action_node.action=action_ren_ming_wang
     console.log(action_node.action)
     action_node.method="post"
     
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="今日头条")
{
     action=action_jing_ri_tou_tiao
     action_node.action=action+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="恋爱游戏网")
{
     action="https://www.lianaiyx.com/e/search/result/?searchid=69099"
     action_node.action=action+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="borwroll")
{
     action="https://bowlroll.net/file/keyword/"
     action_node.action=action+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="17173")
{
     action=action_17173
    console.log("17173")
     action_node.action=action_17173+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="花瓣网")
{
     action=action_hua_ban
    console.log("花瓣网")
     action_node.action=action+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="懒设计")
{
     action=action_lazy_design
    console.log("懒设计")
     action_node.action=action+action_lazy_design
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="涂鸦王国")
{
     action=action_scratch_kingdom
    console.log("懒设计")
     action_node.action=action+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="ui中国")
{
     action=action_ui_chian
    console.log("ui")
     action_node.action=action+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="设计癖")
{
     action=action_design_pi
    console.log(toString(id))
     action_node.action=action+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="动漫之家")
{
     action=action_animation_home
    console.log(toString(id))
     action_node.action=action+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="check_steam")
{
    action=action_steam
    console.log("steam")
     action_node.action=action_steam+to_search_string
     console.log(action_node.action)
    search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="check2")
{
    action=action_taptap
    console.log("taptap")
     action_node.action=action_taptap+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="indian")
{
    action=action_india
    console.log("indian独立游戏")
     action_node.action=action_india+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
    
}
if(current_checkbox.checked==true &&id=="itch_io")
{
    action=action_itch_io
    console.log("itch.io")
     action_node.action=action_itch_io+to_search_string
     console.log(action_node.action)
     search_list.push(action_node.action)
}
if(current_checkbox.checked==true &&id=="block")
{
    action=action_block
    console.log("block")
     action_node.action=action_block+to_search_string
     console.log(action_node.action)
        search_list.push(action_node.action)
}
//console.log(chebox_node2.checked)
//console.log(id+":"+checked)

/*if(chebox_node2.checked==true)
{
    action=action_taptap
    console.log("4399")
     action_node.action=action_taptap+to_search_string
     console.log(action_node.action)
     console.log(id)
}*/
/*else
{
    action_node.action="404.html"
}*/
}
   function usr_input()
    {
    //onforminput
  //  to_search_string=input_node.value
   to_search_string=input_node.value
    console.log("input")
    console.log(input_node)
    //alert(to_search_string)
    console.log(to_search_string)
    action_node.action=action+to_search_string
      console.log(action_node.action)
   }
   //一键搜索
   function one_click_search()
   {
       var name=""
       console.log(search_list)
      // var i=0
    for(i=0;i<search_list.length;i+=1)
    {
        name=Math.random(0,100)
        console.log(name)
        window.open(search_list[i],"_blank")
        var current_a=document.createElement("a")
        current_a.target="_blank"
        var currrent_br=document.createElement("br")
        current_a.innerHTML=search_list[i]
        current_a.href=search_list[i]
       links.appendChild(current_a)
       links.appendChild(currrent_br)
       //document.write(search_list[i])
       // setTimeout(1)
       
    }        
       
   }
    function search()
    {
   // alert(action_node.action)
    console.log("search!")
          console.log(action_node.action)
          window.open(action_node.action,"_blank")
    }