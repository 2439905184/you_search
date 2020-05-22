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
    //steam
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
//通用
function tap_check(id,checked)
{
    //console.log(id)
    var current_checkbox=document.getElementById(id)
console.log(id+":"+current_checkbox.checked)
if(current_checkbox.checked==true &&id=="check_steam")
{
    action=action_steam
    console.log("steam")
     action_node.action=action_steam+to_search_string
     console.log(action_node.action)
    
}
if(current_checkbox.checked==true &&id=="check2")
{
    action=action_taptap
    console.log("steam")
     action_node.action=action_taptap+to_search_string
     console.log(action_node.action)
    
}
if(current_checkbox.checked==true &&id=="indian")
{
    action=action_india
    console.log("indian独立游戏")
     action_node.action=action_india+to_search_string
     console.log(action_node.action)
    
}
if(current_checkbox.checked==true &&id=="itch_io")
{
    action=action_itch_io
    console.log("itch.io")
     action_node.action=action_itch_io+to_search_string
     console.log(action_node.action)
     
    
}
if(current_checkbox.checked==true &&id=="block")
{
    action=action_block
    console.log("block")
     action_node.action=action_block+to_search_string
     console.log(action_node.action)
    
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
    function search()
    {
   // alert(action_node.action)
    console.log("search!")
          console.log(action_node.action)
          window.open(action_node.action,"_blank")
    }