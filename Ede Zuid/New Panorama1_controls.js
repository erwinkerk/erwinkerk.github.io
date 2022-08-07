PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"actions": [
        {
            "func": "function(a){ var d = this.viewer.get('map'); if (d&&!d.collapsing){ d.collapsing = !0;  if (!d.visible){   d.viewer.action('hideGallery'); d.setVisible(true); d.style = 'opacity: 1.0;'; d.updateStyles();   var o = d.viewer.get('thumbnailGallery');   if (!!o&&o.align == d.align){ d.height = o.height; d.updateSize(); }   var dh = Math.min(Math.max(this.viewer.height()*0.6, 96), this.viewer.height() - 96);   d.tween({ 'time': 0.3, 'transition' : 'easeInOutSine', 'height' : dh, 'onUpdate' : function(a){ a.updateSize(); }, 'onComplete' : function(a){ a.collapsing = !1; a.height = dh; a.updateSize(); a.center(); } }); } else { d.style = 'opacity: 0.0;'; d.updateStyles(); d.tween({ 'time': 0.3, 'transition' : 'easeInOutSine', 'height' : 0, 'onUpdate' : function(a){ a.updateSize(); }, 'onComplete' : function(a){ a.collapsing = !1; a.height = 0; a.updateSize(); a.setVisible(false); } }); }}}",
            "id": "toggleMap"
        },
        {
            "func": "function(delay){ var d=this.viewer.get('map'); if (d&&d.visible&&!d.collapsing){  d.collapsing = !0; d.updateStyles();  d.tween({'time': 0.5, 'delay': delay, 'transition': 'easeInOutSine', 'height': 0, 'onUpdate': function(a){ a.updateSize();  },'onComplete': function(a){ a.collapsing = !1; a.height = 0; a.updateSize(); a.setVisible(false); }});}}",
            "id": "hideMap"
        },
        {
            "func": "function(){ var map = this.get('map'); if (map && map.visible){  var h = Math.min(Math.max(this.viewer.height()*0.6, 96),this.viewer.height()-96);  map.height = h; map.updateSize();}}",
            "id": "resizeMap"
        },
        {
            "func": "function(){ if (!this.viewer.fullEquirectangular()) return; this.viewer.panTo(this.viewer.getView().pan,0,100,1.0,0,'easeInOutSine',true); this.tween({'time': 1.0, 'lp': 0.0, 'transition': 'easeInOutSine', 'onInit' : function(a,dstParams){ a.lp=a.viewer.fisheyeDistortion(); }, 'onUpdate': function(a){ a.viewer.setFisheyeDistortion(a.lp);}}); }",
            "id": "leaveLittlePlanet"
        },
        {
            "func": "function(){ if (!this.viewer.fullEquirectangular()) return; this.viewer.panTo(this.viewer.getView().pan+90,90,150,1.0,0,'easeInOutSine',true); this.tween({'time': 1.0, 'lp': 1.0, 'transition': 'easeInOutSine', 'onInit' : function(a,dstParams){ a.lp=a.viewer.fisheyeDistortion(); }, 'onUpdate': function(a){ a.viewer.setFisheyeDistortion(a.lp);}}); }",
            "id": "enterLittlePlanet"
        },
        {
            "func": "function(a){ var id = this.viewer.currentMBId; if (!!id&&(a.id!=id)){this.viewer.action('hideMessage');} if (a.id!=id){ var s=this.viewer.get('globalData'); if (s&&s.messageBoxStyle){ a.style = s.messageBoxStyle; }this.viewer.currentMBId=null; if (!this.viewer.isVRModeEnabled()){ this.viewer.add('textbox',a); this.viewer.currentMBId=a.id; } } }",
            "id": "showMessage"
        },
        {
            "func": "function(){ if (this.viewer.currentMBId) this.viewer.remove(this.viewer.currentMBId); this.viewer.currentMBId=null; }",
            "id": "hideMessage"
        },
        {
            "func": "function(a){ var id = this.viewer.currentMBId; if (a.id!=id){ this.viewer.action('showMessage',a); } else { this.viewer.action('hideMessage'); } }",
            "id": "toggleMessage"
        }
    ],
"button": [
        {
            "align": "leftbottom",
            "height": 28,
            "id": "showTbButton",
            "onclick": "function(){ var tb = this.get('toolbar'); if (tb.running) return; tb.running = true; tb.tween({'time': 0.75, 'yoff': 10,'onInit': function(a){ a.setVisible(true); a.style = 'opacity: 1.0;'; a.updateStyles(); }, 'onUpdate': function(a){ a.updateAlign(); } });this.tween({ 'time': 0.75, 'yoff' : -52,'onInit': function(a){ a.style = 'opacity: 0.0;'; a.updateStyles(); }, 'onUpdate' : function(a) { a.updateAlign(); }, 'onComplete': function(a){ a.setVisible(false);  tb.running = false; }}); }",
            "oninit": "function(){ this.setVisible(false);}",
            "skin": "shadow(3,0,0,rgba(0,0,0,1));comp(1);copy(defaultSkin,128,192,64,64,0,4,24,24)",
            "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,192,64,64,0,4,24,24)",
            "style": " border-radius: 50%; border: white solid 2px; box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); background-color: rgba(255,255,255,0.0); transition: background-color 100ms; transition: opacity 0.75s;",
            "styleactive": " background-color: rgba(255,255,255,0.66);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); transition: opacity 0.75s;",
            "stylehover": " background-color: rgba(255,255,255,0.33);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); transition: opacity 0.75s;",
            "width": 28,
            "xoff": 8,
            "yoff": -52
        }
    ],
"buttonBox": [
        {
            "align": "bottom",
            "button": [
                {
                    "align": "left",
                    "id": "hideTbButton",
                    "index": 1,
                    "onclick": "function(){ var tb = this.get('toolbar'); if (tb.running) return; tb.running = true; this.viewer.action('hideMap');tb.tween({'time': 0.75, 'yoff': -70, 'onInit': function(a){ a.style = 'opacity: 0.0;'; a.updateStyles(); }, 'onUpdate': function(a){ a.updateAlign(); },'onComplete': function(a){ a.setVisible(false); tb.running = false; } });var ops=false; this.get('showTbButton').tween({ 'time': 0.75, 'yoff' : 8, 'onInit': function(a){ a.setVisible(true); }, 'onUpdate' : function(a) { if (!ops){a.style = 'opacity: 1.0;'; a.updateStyles(); ops=true;} a.updateAlign(); } }); }",
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,192,64,64,5,5,24,24);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,192,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,192,64,64,5,5,24,24);",
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "left",
                    "id": "mapbutton",
                    "index": 3,
                    "onclick": "function(){ this.viewer.action('toggleMap'); }",
                    "oninit": "function(){var m = this.viewer.map(); if (!!m){ this.setVisible(true);}}",
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,448,64,64,5,5,24,24);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,448,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,448,64,64,5,5,24,24);",
                    "visible": false,
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "id": "infobutton",
                    "index": 5,
                    "onclick": "function(){ var d=this.viewer.get('localData'); d&&(d=d.infoTextBox); if(!d){ var d=this.viewer.get('globalData'); d&&(d=d.infoTextBox); } if (!!d){this.viewer.action('toggleMessage',d);} }",
                    "onscenechanged": "function(){ var d=this.viewer.get('localData'); var g=this.viewer.get('globalData'); var o=d&&d.infoTextBox||g&&g.infoTextBox; this.setVisible(!!o); }",
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,0,64,64,5,5,24,24);shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,0,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,0,64,64,5,5,24,24);",
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 7,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,64,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,64,64,64,5,5,24,24);",
                    "type": 1,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 8,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,64,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,64,64,64,5,5,24,24);",
                    "type": 2,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 9,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,64,64,64,5,5,24,24)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,64,64,64,5,5,24,24);",
                    "type": 3,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 10,
                    "priority": 0,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,64,64,64,5,5,24,24)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,64,64,64,5,5,24,24);",
                    "type": 4,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 11,
                    "priority": 2,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,128,64,64,5,5,24,24)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,128,64,64,5,5,24,24);",
                    "type": 5,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "center",
                    "index": 12,
                    "priority": 2,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,128,64,64,5,5,24,24)",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,128,64,64,5,5,24,24);",
                    "type": 6,
                    "xoff": 0,
                    "yoff": 0
                },
                {
                    "align": "right",
                    "id": "audiobutton",
                    "index": 17,
                    "onclick": "function(){ var o = this.get('gAudio'); if (!o) o = this.get('lAudio'); if (!!o){ o.isPlaying()?o.pause():o.play(); }   }",
                    "onscenechanged": "function(){ var o = this.get('gAudio')||this.get('lAudio'); this.setVisible(!!o); }",
                    "pauseskin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,256,64,64,5,5,24,24);",
                    "pauseskinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,256,64,64,5,5,24,24);",
                    "playskin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,256,64,64,5,5,24,24);",
                    "playskinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,64,256,64,64,5,5,24,24);",
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,256,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,0,256,64,64,5,5,24,24);",
                    "xoff": 8,
                    "yoff": 0
                },
                {
                    "align": "right",
                    "id": "fullscreenButton",
                    "index": 16,
                    "onclick": "function(){ this.viewer.toggleFullscreen();  } ",
                    "oninit": "function(){ if (!this.viewer.fullscreenSupported()) this.viewer.remove('fullscreenButton');  } ",
                    "priority": 3,
                    "skin": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,0,64,64,5,5,24,24);",
                    "skinactive": "shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,192,0,64,64,5,5,24,24);",
                    "xoff": 8,
                    "yoff": 0
                }
            ],
            "buttonheight": 34,
            "buttonstyle": "border-radius: 50%; border: white solid 2px; box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1); background-color: rgba(255,255,255,0.0); transition: background-color 100ms;",
            "buttonstyleactive": "background-color: rgba(255,255,255,0.66);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1);",
            "buttonstylehover": "background-color: rgba(255,255,255,0.33);box-shadow: 0px 0px 1px 1px rgba(0,0,0,1), inset 0px 0px 1px 1px rgba(0,0,0,1);",
            "buttonwidth": 34,
            "height": "48px",
            "hidestyle": "",
            "id": "toolbar",
            "mapElement": {
                "align": "lefttop",
                "apikey": "AIzaSyDwceI_reKmVW2wPuKIaxXS-41dwCWlxmI",
                "contentstyle": "position: absolute; left: 4px; right: 4px; bottom: 4px; top: 4px; display: inline; overflow: hidden; border-radius: 2px; box-shadow: rgba(0, 0, 0, 1) 0px 0px 1px 1px;",
                "gmapstype": "hybrid",
                "gmarker": "{ url: 'pap_marker_redorange.png', scaledSize: new google.maps.Size(30,48), anchor: new google.maps.Point(15, 42) }",
                "gmarkeractive": "{ url: 'pap_marker_lima.png', scaledSize: new google.maps.Size(30,48), anchor: new google.maps.Point(15, 42) }",
                "height": "0px",
                "id": "map",
                "onmarkerclick": "function(){ this.viewer.action('hideMap',0.3); }",
                "radar": {
                    "radarcontext": "function(c){ c.lineWidth = 1; if (!this.fillStyle){ var w = c.canvas.width/2; this.fillStyle=c.createRadialGradient(w,w,0,w,w,w); this.fillStyle.addColorStop(0,'rgba(255,255,255,0.5)');this.fillStyle.addColorStop(1,'rgba(255,255,255,0.1)');} c.fillStyle = this.fillStyle; if (!this.strokeStyle){ var w = c.canvas.width/2; this.strokeStyle=c.createRadialGradient(w,w,0,w,w,w); this.strokeStyle.addColorStop(0,'#ccc');this.strokeStyle.addColorStop(1,'rgba(192,192,192,0.7)');} c.strokeStyle = this.strokeStyle;  }",
                    "radius": 0.99,
                    "width": 256
                },
                "style": "opacity: 0; transition: opacity 0.5s",
                "type": "gmap",
                "typecontrols": true,
                "visible": false,
                "zoom": 18,
                "zoomcontrols": true
            },
            "spacing": 8,
            "style": "max-width: 100%;background: rgba(0,0,0,0.0); opacity: 1.0; transition: opacity 0.75s;",
            "visible": true,
            "width": "540px",
            "yoff": 10
        }
    ],
"contextmenu": {
        "id": "menu",
        "items": [
            {
                "id": "fullscreenItem",
                "onclick": "function(){ this.viewer.toggleFullscreen(); }",
                "oninit": "function(){ this.caption = this.viewer.tr('Fullscreen'); if (!this.viewer.fullscreenSupported()) this.visible = false;  } "
            },
            {
                "caption": "-"
            },
            {
                "id": "normalView",
                "onclick": "function(){  if (this.viewer.fisheyeDistortion()!=0.0){ this.viewer.action('leaveLittlePlanet'); } }",
                "oninit": "function(){  this.caption = this.viewer.tr('Normal View'); }"
            },
            {
                "id": "littlePlanetView",
                "onclick": "function(){ if (this.viewer.fisheyeDistortion()!=1.0){ this.viewer.action('enterLittlePlanet'); } }",
                "oninit": "function(){  this.caption = this.viewer.tr('LittlePlanet View'); }"
            },
            {
                "caption": "-"
            },
            {
                "onclick": "function(){ window.open('http://www.tshsoft.com','_blank'); }",
                "oninit": "function(){  this.caption = this.viewer.tr('About PanoramaStudio...'); }"
            }
        ],
        "onshow": "function(){ var view1 = this.getItem('normalView'); if (view1){ view1.visible = (this.viewer.webglAvailable && this.viewer.fullEquirectangular()) ? true : false; } var view2 = this.getItem('littlePlanetView'); if (view2){ view2.visible = (this.viewer.webglAvailable && this.viewer.fullEquirectangular())?true:false; }  this.update(); }",
        "style": "background-color: rgba(255,255,255,0.8); box-shadow: 4px 4px 4px rgba(0,0,0,0.5); border-radius: 3px;"
    },
"events": {
        "id": "mainEvents",
        "onexit": "function(){  var d=this.viewer.get('localData'); if (!!d&&d.infoTextBox){ this.viewer.action('hideMessage'); }}",
        "ongyroscopeavailable": "function(available){ this.viewer.gyroAvailable = available; var o = this.get('gyrobutton'); if(!!o){ o.setVisible(available&&this.viewer.panoType()==0); } } ",
        "ongyroscopetoggle": "function(enabled){ this.viewer.action('updateGyroButton'); }",
        "oninit": "function(){ var g = this.viewer.gallery(); this.viewer.hasGallery = ((!!g) && g.length>1);  }",
        "onplay": "function(){ var o = this.get('playbutton'); if (!!o){ o.sbackup = o.skin; o.sabackup = o.skinactive; o.skin = 'shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,0,64,64,5,5,24,24)'; o.skinactive = 'shadow(3,0,0,rgba(0,0,0,1));copy(defaultSkin,128,0,64,64,5,5,24,24)'; o.updateSkins(); } } ",
        "onresize": "function(){ this.viewer.action('resizeMap');  }",
        "onscenechanged": "function(){}",
        "onstartaudio": "function(senderId){ if (senderId=='gAudio'||senderId=='lAudio'){var o = this.get('audiobutton'); if (!!o){ o.skin = o.playskin; o.skinhover = o.playskinhover; o.skinactive = o.playskinactive; o.updateSkins(); }} } ",
        "onstop": "function(){ var o = this.get('playbutton'); if (!!o){ o.skin = o.sbackup; o.skinactive = o.sabackup; o.updateSkins(); } } ",
        "onstopaudio": "function(senderId){ if (senderId=='gAudio'||senderId=='lAudio'){var o = this.get('audiobutton'); if (!!o){ o.skin = o.pauseskin; o.skinhover = o.pauseskinhover; o.skinactive = o.pauseskinactive; o.updateSkins(); }} } ",
        "onuseswebgl": "function(available){ this.viewer.webglAvailable = available; if (available){ var vr = this.get('vrButton'); vr&&vr.setVisible(true); } } "
    },
"settings": {
        "safeareamargin": "-8 -8 -8 -8"
    },
"translate": {
        "de": {
            "About PanoramaStudio...": "&Uuml;ber PanoramaStudio...",
            "Fullscreen": "Vollbild",
            "LittlePlanet View": "LittlePlanet-Ansicht",
            "Normal View": "Normale Ansicht"
        }
    }
}
}