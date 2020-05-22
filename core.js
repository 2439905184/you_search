var  chebox_node1=document.getElementById("check1")
var  chebox_node2=document.getElementById("check2")
//form

  var action_node=document.getElementById("search")
//  alert(action_node)
    var  to_search_string=""
    var input_node=document.getElementById("my_input");
    console.log(input_node)
   // alert(input_node)
    var  form=""
    var action=""
    var action_taptap="https://www.taptap.com/search/"
   // role="search" method="get"
    var action_4399="http://so2.4399.com/search/search.php?k="
    var action_need_add_4399="?k="
   var  action_steam="https://store.steampowered.com/search/?term="
    var action_itch_io="https://itch.io/search?q="
    //国内独立游戏网站
    var action_india="https://indienova.com/search/all/"
    //国内方块游戏平台
    var action_block="http://store.cubejoy.com/html/en/store/searchgoods/websearch.html?search="
//检查是否被选中
function m_check()
{

console.log(chebox_node1.checked)
if(chebox_node1.checked==true)
{
    action=action_4399
    console.log("4399")
     action_node.action=action_4399+to_search_string
     console.log(action_node.action)
}
}   
function tap_check()
{

console.log(chebox_node2.checked)
if(chebox_node2.checked==true)
{
    action=action_taptap
    console.log("4399")
     action_node.action=action_taptap+to_search_string
     console.log(action_node.action)
}
else
{
    action_node.action="404.html"
}
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
    function search()
    {
   // alert(action_node.action)
    console.log("search!")
          console.log(action_node.action)
    }