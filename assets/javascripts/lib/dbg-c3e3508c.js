(function(){var t,e,n=this,i=n.console||null,o=function(){},r=["log","error","warn","info","count","debug","profileEnd","trace","dir","dirxml","assert","time","profile","timeEnd","group","groupEnd"],s={enable:function(t){n.dbg=i?i:s},disable:function(){n.dbg=s}};for(e=0;e<r.length;e++)t=r[e],s[t]=o,i&&!i[t]&&(i[t]=o);i&&(i.disable=s.disable,i.enable=s.enable),s.enable()}).call(this);