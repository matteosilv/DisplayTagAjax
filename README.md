DisplayTagAjax
==============

REQUIRES:

1) jQuery <http://www.jquery.com>

2) DisplayTag <http://www.displaytag.org>

3) a url http that returns a rendered displaytag syntax table

jQuery plugin for ajaxifying display tag tables (pagination and ordering via ajax)


USAGE: 

$(document).ready(function() {

div.ajaxifyTable(url,aFunction());

}

div: selector of the div in which inject the ajax displaytable
url: url of the action that generates the table
aFunction: a function to execute after loading table

example

$("#specificDiv").ajaxifyTable("table/details?param=1",function(){

//this way you animate sliding down the ajax loaded table
$("#specificDiv").slideDown("slow");

})


WARNING:

The requestURI attribute in the display table has to be set at the correct action
url example

requestURI="/table/details"


Any question?
Mail to: <matteosilv@gmail.com>