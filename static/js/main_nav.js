/**
 * Created by wt on 2015/8/9.
 */
a_title = $("#nav_item_finding_title")
form_search = $("#nav_item_form_search")

a_find_task = $("#nav_item_find_task")
a_find_task.click(function(){
    a_title.text("任务")
    form_search.attr("action","/tasks")
})

a_find_team = $("#nav_item_find_team")
a_find_team.click(function(){
    a_title.text("团队")
    form_search.attr("action","/teams")
})