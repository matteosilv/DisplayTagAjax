DisplayTagAjax
==============

jQuery plugin for ajaxifying display tag tables (pagination and ordering via ajax)

Copyright (C) 2014 Matteo Silvestri (matteosilv@gmail.com)
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

REQUIRES:

1) jQuery <http://www.jquery.com>

2) DisplayTag <http://www.displaytag.org>

3) a url http that returns a rendered displaytag syntax table

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
