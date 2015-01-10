this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["Templates"] = this["MyApp"]["Templates"] || {};

this["MyApp"]["Templates"]["feed"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " ("
    + escapeExpression(((helper = (helper = helpers.unreadCount || (depth0 != null ? depth0.unreadCount : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"unreadCount","hash":{},"data":data}) : helper)))
    + ")";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing, buffer = "<a href=\""
    + escapeExpression(((helper = (helper = helpers.site_url || (depth0 != null ? depth0.site_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"site_url","hash":{},"data":data}) : helper)))
    + "\" class=\"name\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)));
  stack1 = ((helper = (helper = helpers.hasUnreadCount || (depth0 != null ? depth0.hasUnreadCount : depth0)) != null ? helper : helperMissing),(options={"name":"hasUnreadCount","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.hasUnreadCount) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</a>\n";
},"useData":true});



this["MyApp"]["Templates"]["feedItem"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " unread";
  },"3":function(depth0,helpers,partials,data) {
  return " read";
  },"5":function(depth0,helpers,partials,data) {
  return " unstarred";
  },"7":function(depth0,helpers,partials,data) {
  return " starred";
  },"9":function(depth0,helpers,partials,data) {
  return " selected";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, blockHelperMissing=helpers.blockHelperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"feed_item_header";
  stack1 = ((helper = (helper = helpers.read || (depth0 != null ? depth0.read : depth0)) != null ? helper : helperMissing),(options={"name":"read","hash":{},"fn":this.noop,"inverse":this.program(1, data),"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.read) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n	<span class=\"menu_items\">\n		<a class=\"toggleRead";
  stack1 = ((helper = (helper = helpers.read || (depth0 != null ? depth0.read : depth0)) != null ? helper : helperMissing),(options={"name":"read","hash":{},"fn":this.noop,"inverse":this.program(1, data),"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.read) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.read || (depth0 != null ? depth0.read : depth0)) != null ? helper : helperMissing),(options={"name":"read","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.read) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" href=\"javascript:void(0);\" alt=\"toggle read status\"></a>\n		<a class=\"toggleStarred";
  stack1 = ((helper = (helper = helpers.starred || (depth0 != null ? depth0.starred : depth0)) != null ? helper : helperMissing),(options={"name":"starred","hash":{},"fn":this.noop,"inverse":this.program(5, data),"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.starred) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.starred || (depth0 != null ? depth0.starred : depth0)) != null ? helper : helperMissing),(options={"name":"starred","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.starred) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" href=\"javascript:void(0);\" alt=\"toggle starred status\"></a>\n	</span>\n	<h2><a href=\""
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h2>\n</div>\n<div class=\"feed_item_content";
  stack1 = ((helper = (helper = helpers.selected || (depth0 != null ? depth0.selected : depth0)) != null ? helper : helperMissing),(options={"name":"selected","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.selected) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});