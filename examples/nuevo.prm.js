var cdn=cdnurl;var rel_videos=[{thumb:cdn+'/media/surf_thumb.jpg',url:'//www.nuevodevel.com/nuevo/demo/surf',title:'Surfing is beatiful',duration:'04:12'},{thumb:cdn+'/media/big_buck_thumb.jpg',url:'//www.nuevodevel.com/nuevo/demo/big_buck',title:'Big Buck Bunny', duration:'02:17'},{thumb:cdn+'/media/animals_thumb.jpg',url:'//www.nuevodevel.com/nuevo/demo/animals',title: 'Animals are amazing!', duration:'03:03'},{thumb:cdn+'/media/freeride_thumb.jpg',url:'//www.nuevodevel.com/nuevo/demo/freeride',title:'Free Ride',duration: '05:50'},{thumb:cdn+'/media/australia_thumb.jpg',url:'//www.nuevodevel.com/nuevo/demo/australia',title:'Welcome to Australia',duration:'02:29'}, {thumb:cdn+'/media/fit_thumb.jpg',url:'//www.nuevodevel.com/nuevo/demo/fit',title: 'Fitness keeps you younger and healthy',duration:'01:33'},{thumb:cdn+'/media/alaska_thumb.jpg',url:'//www.nuevodevel.com/nuevo/demo/alaska',title:'The beauty of Alasca',duration: '02:54'},{thumb:cdn+'/media/cymaticjazz_thumb.jpg',url:'//www.nuevodevel.com/nuevo/demo/cymaticjazz',title:'LG Cymatic Jazz Demo',duration:'02:35'},{thumb:cdn+'/media/serenity_thumb.jpg',url:'//www.nuevodevel.com/nuevo/demo/serenity',title:'Serenity Movie Trailer',duration:'02:13'},{thumb:cdn+'/media/newyorkcity_thumb.jpg',url:'//www.nuevodevel.com/nuevo/demo/newyorkcity',title:'New York City 4K',duration:'01:07'},{thumb:cdn+'/media/thailand_thumb.jpg',url:'//www.nuevodevel.com/nuevo/demo/thailand',title:'Thailand Retrospective',duration:'02:06'},{thumb:cdn+'/media/people_thumb.jpg',url:'//www.nuevodevel.com/nuevo/demo/people',title:'People activity grows',duration:'01:13'}];

(function(root, factory) {
  if (typeof window !== 'undefined' && window.videojs) {
    factory(window.videojs);
  } else if (typeof define === 'function' && define.amd) {
    define('nuevo', ['video.js'], function (module) {
      return factory(module.default || module);
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    var videojs = require('video.js');
    module.exports = factory(videojs.default || videojs);
  }
}(this, function (videojs) {

  var browser = videojs.browser;
  function lint(e) {return(e);}

  if (browser.IS_ANDROID) {
		videojs.options.html5.nativeAudioTracks = false;
		videojs.options.html5.nativeTextTracks = false;
  }

	try{videojs.options.vhs.overrideNative = true; }catch(e){lint(e)}
	//try{videojs.options.hls.overrideNative = true; }catch(e){lint(e)}


  function setSkin(skin) {
    var pc = "progressControl",
      pt = "playToggle",
      ld = "liveDisplay",
      sl = "seekToLive",
      ct = "currentTimeDisplay",
      td = "timeDivider",
      dd = "durationDisplay",
      ccs = "customControlSpacer",
      vp = "volumePanel",
      cb = "chaptersButton",
      db = "descriptionsButton",
      sb = "subsCapsButton",
      ab = "audioTrackButton",
      pi = "pictureInPictureToggle",
      ft = "fullscreenToggle";
    var car = null;
    if (skin === "treso") {
      car = {children: [pc, pt, ld, sl, ct, dd, vp, ccs, cb, db, sb, ab, pi, ft]};
    } else if (skin === "chrome") {
      car = {children: [pt, ld, sl, ct, td, dd, ccs, pc, vp, cb, db, sb, ab, pi, ft]
      };
    } else if (skin === "party") {
      car = {
        children: [pt, ld, sl, pc, ct, td, dd, ccs, vp, cb, db, sb, ab, pi, ft]
      };
    } else if (skin === "roundal" || skin === "pinko") {
      car = {
        volumePanel: { inline: false, vertical: true },
        children: [pt, ld, sl, ct, pc, td, dd, ccs, vp, cb, db, sb, ab, pi, ft]
      };
    } else if (skin === "shaka") {
      car = {
		  volumePanel: { inline: false, vertical: true },
        children: [pt, ld, sl, ct, td, dd, pc, ccs, vp, cb, db, sb, ab, pi, ft]
      };
    } else if (skin === "flow") {
      car = {
        children: [pt, ld, sl, ct, td, dd, pc, ccs, vp, cb, db, sb, ab, pi, ft]
      };
    } else if (skin === "jwlike") {
      car = {
        volumePanel: { inline: false, vertical: true },
        children: [pc, pt, ld, sl, vp, ct, td, dd, ccs, cb, db, sb, ab, pi, ft]
      };
    } else if (skin === "mockup") {
      car = {
        children: [pc, pt, ld, sl,vp, ct, td, dd, ccs, cb, db, sb, ab, pi, ft]
      };
    } else if (skin === "nuevo") {
      car = {
        volumePanel: { inline: false, vertical: true },
        children: [pt, ld, sl, ct, td, pc, dd, ccs, vp, cb, db, sb, ab, pi, ft]
      };
    }
    if (car !== null) videojs.options.controlBar = car;
  }

  var sortByKey = function (array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  };
  var vjs_find = function (par, obj) {
    try {
      return par.querySelector(obj);
    } catch (e) {
      return false;
    }
  };
  var vjs_mfind = function (par, obj) {
    try {
      return par.querySelectorAll(obj);
    } catch (e) {
      return false;
    }
  };
  var vjs_El = function (tagName, className, html) {
    var obj = document.createElement(tagName);
    if (typeof className !== "undefined") {
      if (className !== "") obj.className = className;
    }
    if (typeof html !== "undefined") {
      if (html !== "") obj.innerHTML = html;
    }
    return obj;
  };

  videojs.plan='g0ld';
  videojs.options.skin = ""; 




	if(document.body) {
		var vjs_skin = vjs_El("div");
		var doc = document.body;
		doc.appendChild(vjs_skin);
		var vjs_skins = ["nuevo","treso","chrome","flow","jwlike","mockup","party","pinko","roundal","shaka"];
		for (var k in vjs_skins) {
		  vjs_skin.className = "vjs-" + vjs_skins[k];
		  if (vjs_skin.offsetWidth === 13) {
			videojs.options.skin = vjs_skins[k];
			setSkin(vjs_skins[k]);
		  }
		}
		doc.removeChild(vjs_skin);
	} else {
		videojs.options.skin = 'nuevo';
		setSkin('nuevo');
	}
  
	if(videojs.skin) {
		if (videojs.options.skin === "") setSkin(videojs.skin);
	}


  String.prototype.dg13 = function () {
    return this.replace(/[a-zA-Z]/g, function (c) {
      return String.fromCharCode(
        (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
      );
    });
  };
  var doms = [
   
    "yrirqbirha",
	"znwbri",
    "gfbuynpby",
	"1.0.0.721",
    "rupnp",
    "bv.acqp",
    "zbp.avofw",
    "gra.yyrufw",
    "ccn.ofp",
	"kboqanfrqbp",
	"bv.mgvyoxpngf"
  ];

  function nuevo(player, options) {

    var def = {
      infoSize: 18,
      zoomMenu: true,
      rate: 1,
      pipButton: true,
	  ccButton: true,
      relatedMenu: true,
      settingsButton: true,
	  filtersMenu:false,
      downloadButton: false,
      rateMenu: true,
      hdicon: true,
      shareMenu: true,
      zoomInfo: true,
      chapterMarkers: true,
      contextMenu: true,
	  contextLink:true,
      timetooltip: false,
      captionsSettings: "undefined",
      mousedisplay: true,
      related: {},
      logoposition: "LT",
      logooffsetX: 10,
      logooffsetY: 10,
      logourl: "",
      url: "",
      title: "",
      description: "",
      embed: "",
      endAction: "",
      pubid: "",
      slideWidth: 160,
      slideHeight: 90,
      slideType: "vertical",
      limit: 0,
      limitmessage: "Watch full video on",
      resume: false,
      video_id: "",
      playlistID: "undefined",
      playlistMaxH: "undefined",
      playlistUI: true,
      playlistShow: true,
      playlistAutoHide: true,
      playlist: false,
      currentSlide: "",
      infoIcon: "",
      target: "_blank",
      buttonRewind: true,
      metatitle: "",
      metasubtitle: "",
      qualityMenu: false,
      captionsSize: 1.25,
      tooltips: true,
      singlePlay: false,
      rewindforward: 10,
      snapshot: false,
      snapshotType: "jpg",
      snapshotWatermark: "",
      ghostThumb: false,
      minhd: 1080,
      liveReconnect: false,
      paused: false,
      controlbar: true,
	  touchRewindForward:true,
	  touchControls:true,
	  iosFullscreen: 'native',
	  androidLock:false,
	  playsinline:true,
	  keepSource:false,
	  log:false
    };

    //player.src({ src: "https://dai.google.com/linear/hls/event/rtcMlf4RTvOEkaudeany5w/master.m3u8?iu=/4128/CBS.NY.OTT", type:"application/x-mpegURL"});

	
    var vds = videojs.dom;
    var nv = player.el();
    var sett = videojs.mergeOptions(def, options);
    sett.skin = videojs.options.skin;
	var isMouse=false;


	var rf = parseInt(sett.rewindforward,10);
	if(rf<1) rf=10;if(rf>90) rf=90; 
	sett.rewindforward=rf;

	var supportsPassive = false;
	var opts = Object.defineProperty({}, 'passive', {
		get: function() { supportsPassive = true;return true; }
	});

	window.addEventListener("testPassive", null, opts);
	window.removeEventListener("testPassive", null, opts);


	document.addEventListener("pointermove",mousedetect);
		
	  function getPageX(e) {
		    return e.touches[0].pageX || null;
			//var pagex=null;
			//try{pagex = e.changedTouches[0].pageX;}catch(e){lint(e)} 
			//try{pagex= e.touches[0].clientX;}catch(e){lint(e)}
			//return pagex;
	  }

	function mousedetect(e) {

		if (e.pointerType !== 'mouse') return;
		isMouse=true;
		nv.classList.remove("vjs-touch-inactive");
		nv.classList.remove("vjs-touch-active");
		touchSwitch(false);
	}
	window.addEventListener("touchstart",touchdetect,supportsPassive ? { passive: false } : false);

	function touchdetect() {

		nv.classList.remove("vjs-has-mouse");
		touchSwitch(true);
	}

	player.on("dispose", function () {
		window.removeEventListener("touchstart",touchdetect);
		document.removeEventListener("pointermove",mousedetect);
		player.$(".vjs-tech").removeEventListener('touchstart', techtouch);
	})

	function touchSwitch(touch) {
		   var rw = vjs_find(nv,'.vjs-rewind-control'); 
		   var fw = vjs_find(nv,'.vjs-forward-control'); 
		   var zm = vjs_find(nv,'.vjs-extend-zoom');
		   var rl = vjs_find(nv,'.vjs-related');
		   var gr = vjs_find(nv,'.vjs-grid');
		   var ap=null,an=null;
		   
		   if(gr) {
			   ap=vjs_find(gr,'.vjs-arrow-prev');
			   an=vjs_find(gr,'.vjs-arrow-next');
		   }

		if(touch) {
			
		   nv.classList.remove("vjs-has-mouse");
		   if(rw) vds.addClass(rw,'vjs-hidden');
		   if(fw) vds.addClass(fw,'vjs-hidden');
		   if(zm) vds.addClass(zm,'vjs-hidden');
		   if(rl) vds.addClass(rl,'vjs-scroll');
		   if(ap) {
			   vds.addClass(ap,'vjs-hidden');
		   }
		   if(an) vds.addClass(an,'vjs-hidden');
		   
		} else {
			
		   nv.classList.add("vjs-has-mouse");
		   if(rw) vds.removeClass(rw,'vjs-hidden');
		   if(fw) vds.removeClass(fw,'vjs-hidden');
		   if(zm) vds.removeClass(zm,'vjs-hidden');
		   if(rl) vds.removeClass(rl,'vjs-scroll');
		   if(ap) vds.removeClass(ap,'vjs-hidden');
		   if(an) vds.removeClass(an,'vjs-hidden');
		}
	}
    
    var hasMouse = function () {

	  if(isMouse) return true;
      if (matchMedia("(pointer:fine)").matches) {
        touchSwitch(true);
        return true;
      }
	  return false;

    };

    hasMouse();

	if (sett.log === false) videojs.log.level("off");

    var vjs_relpage = 0,vjs_relpages = 0,num_slide = 0, res_num = 0;
    var currentZoom = 1;
    var slide_el, s_thumb, slide_img, s_thumb_dur, resize_ob;

    player.shadowSlide = sett.ghostThumb;

    var dsp = ">vid/<deretsiger ton tcudorP>'ncl-sjv'=ssalc vid<";
    var firstplay = false,sameData=false,isDisposed = false;
    var tech = player.$(".vjs-tech");
	if(sett.playsinline) tech.setAttribute("playsinline","true");
	if(player.autoplay())  tech.setAttribute("preload","true");

    var vjs_dim = [];
    var share_win, rel_win, filter_win, qualityButton, settingButton, settingControl;

    var bigPlay = vjs_find(nv, ".vjs-big-play-button");
	var holder = vjs_find(nv, ".vjs-progress-holder");
    var spinner = vjs_find(nv, ".vjs-loading-spinner");
    var controlbar = vjs_find(nv, ".vjs-control-bar");
	var poster = vjs_find(nv,'.vjs-poster');
    if (videojs.dispose !== true) {
      nv.innerHTML = dsp.split("").reverse().join("");
      return;
    }
    player.qualities = [];
    player.qualityIndex = -1;

	if ( sett.iosFullscreen==='pseudo' && videojs.browser.IS_IOS && videojs.browser.IOS_VERSION > 9 &&
		!player.el_.ownerDocument.querySelector('.bc-iframe')) {
		player.tech_.el_.setAttribute('playsinline', 'playsinline');
		player.tech_.supportsFullScreen = function() {
			return false;
		};
    }


	player.on("fullscreenchange", function () {

		if (videojs.browser.IS_ANDROID && sett.androidLock) {
			if(typeof window !== "undefined")  {
				if (player.isFullscreen()) {
						window.screen.orientation.lock("landscape-primary");
					} else {
						window.screen.orientation.lock("any");
				}
			}
		}
	});
	function tapEvent(_el) {
		var touchStartTime,drag=false,firstTouch=null;
			 
		_el.addEventListener('touchstart', function (e) {
		
			touchStartTime= window.performance.now();
			drag=false;
			firstTouch = {
				pageX: e.touches[0].pageX,pageY: e.touches[0].pageY
			};
							
			e.target.addEventListener('touchmove', functionMove, false);
			e.target.addEventListener('touchend', functionEnd, false); 
			e.target.addEventListener('touchcancel', functionCancel, false); 
							
		},supportsPassive ? { passive: false } : false);

		function functionMove(e) {
			var xdiff = e.touches[0].pageX - firstTouch.pageX;
			var ydiff = e.touches[0].pageY - firstTouch.pageY;
			var touchDistance = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
			if (touchDistance > 200) { drag=true; }
		}
		function functionCancel() {
			drag=false;
		}
			
		function functionEnd(e) {

			firstTouch=null;
			if ( window.performance.now()-touchStartTime<200  && drag!==true)
			{
				e.preventDefault();
				_el.dispatchEvent(new Event('tap'));
				e.target.removeEventListener('touchmove', functionMove);
				e.target.removeEventListener('touchend', functionEnd);
				e.target.removeEventListener('touchend', functionCancel);
									
			}
		 }
	}

	
	//poster.onclick=bigPlay.onclick=function() {
		//vds.addClass(bigPlay,'vjs-hidden');
	//}

	if(sett.touchControls) {
		var bigPause = player.addChild('button', {
		'el':vds.createEl('button', { className:  'vjs-big-button vjs-b-p-b'}, { 'type':'button', 'title': player.localize('Pause'), 'aria-disabled': 'false' } )
		});
		nv.insertBefore(bigPause.el_, bigPlay);
		bigPause.el_.addEventListener('touchend',function(e) { 
			e.stopImmediatePropagation();touchtimeout();
			if (player.paused()) player.play(); else player.pause();
		});
		
		bigPlay.ontouchend = poster.ontouchend = function() {
			if(firstplay!==true) {
				vds.addClass(nv,'vjs-touch-inactive');
			}
		}
	}

	if(sett.touchRewindForward && sett.touchControls) {

		var bigRewind = player.addChild('button', {
		'el':vds.createEl('button', { className:  'vjs-big-button vjs-b-r-b'}, { 'type':'button', 'title': player.localize('Rewind'), 'aria-disabled': 'false' } )
		});
		bigRewind.el_.innerHTML='<span>'+sett.rewindforward+'</span>';
		nv.insertBefore(bigRewind.el_, bigPlay);
		var bigForward = player.addChild('button', {
		'el':vds.createEl('button', { className:  'vjs-big-button vjs-b-f-b'}, { 'type':'button', 'title': player.localize('Forward'), 'aria-disabled': 'false' } )
		});
		bigForward.el_.innerHTML='<span>'+sett.rewindforward+'</span>';
		nv.insertBefore(bigForward.el_, bigPlay);
		bigForward.el_.ontouchend = function(e) {
			e.stopPropagation();touchtimeout();player.forward();
		}
		bigRewind.el_.ontouchend = function(e) {
			 e.stopPropagation();touchtimeout();player.rewind();
		}
	}
	var clickTimeout=player.options_.inactivityTimeout;
	var mobileTimeout = 4000;
	if(player.options_.inactivityTouchTimeout) mobileTimeout = player.options_.inactivityTouchTimeout;

	function touchIn() {
		vds.removeClass(nv,'vjs-touch-inactive');
		vds.addClass(nv,'vjs-touch-active');
		vds.removeClass(nv,'vjs-user-inactive');
		vds.addClass(nv,'vjs-user-active');

		touchtimeout();
	}
	function touchOut() {
		clearTimeout(player.touchtimer);
		vds.removeClass(nv,'vjs-touch-active');
		vds.addClass(nv,'vjs-touch-inactive');
		vds.removeClass(nv,'vjs-user-active');
		vds.addClass(nv,'vjs-user-inactive');
	}
	function touchtimeout() {
		clearTimeout(player.touchtimer);
		player.touchtimer = setTimeout(touchOut,mobileTimeout);	
	}

	controlbar.ontouchstart = controlbar.ontouchmove = function() {
		touchtimeout();
	}

    player.$(".vjs-tech").addEventListener('touchstart', techtouch,supportsPassive ? { passive: false } : false);
	player.on('chromecastConnected', function() {
		 player.$(".vjs-tech").removeEventListener('touchstart', techtouch);
	});
	player.on('chromecastDisconnected', function() {
		setTimeout(function() {
			player.$(".vjs-tech").addEventListener('touchstart', techtouch,supportsPassive ? { passive: false } : false);
		},200);
	});	

	function techtouch(e) {
	   e.stopImmediatePropagation();
	   if(vds.hasClass(nv,'vjs-user-active')) {
				touchOut();
	   } else {
			player.options_.inactivityTimeout=mobileTimeout;
			touchIn();	
	   }
	}

    player.setQuality = function (level, toggle) {
      if (player.qualities.length) {
        if (typeof toggle === "boolean") {
          player.qualities[level].enabled = toggle;
          if (player.tech_.vhs) {
            var rps = player.tech_.vhs.representations();
            rps[level].enabled(toggle);
          }
        }
      }
    };

    if (sett.controlbar !== true) {
      vds.addClass(nv, "vjs-controls-none");

    }


    //player.src({ src: "https://dai.google.com/linear/hls/event/rtcMlf4RTvOEkaudeany5w/master.m3u8?iu=/4128/CBS.NY.OTT", type:"application/x-mpegURL"});

    //if (sett.errordisplay !== true) {
      //var err = vjs_find(nv, ".vjs-error-display");
      //if(err) vds.addClass(err, "abs-hidden");
    //}

    player.video_id = function () {
	
      var srcs = player.currentSources();
      for (var i = 0; i < srcs.length; i++) {
        if (typeof srcs[i].video_id !== "undefined") {
          sett.video_id = srcs[i].video_id;
          break;
        }
      }
      return sett.video_id || "";
    };
    player.video_title = function () {
      var srcs = player.currentSources();
      for (var i = 0; i < srcs.length; i++) {
        if (typeof srcs[i].title !== "undefined") {
          sett.title = srcs[i].title;
          break;
        }
      }
      return sett.title || "";
    };

	player.textTracksStyle = function(newset) {
			
			var tts = player.textTrackSettings;
			var os = tts.getValues();
			var cs = player.captionsSettings;


			tts.setDefaults();

			var ftSet=[];

			for (const [key] of Object.entries(os)) {
				if(newset[key]) ftSet[key]=newset[key]; else ftSet[key]=os[key];
			}


			for (const [key] of Object.entries(cs)) {
				if(newset[key]) ftSet[key]=newset[key]; 
			}


			for (const [key] of Object.entries(newset)) {
			   ftSet[key]=newset[key];
			}

			player.captionsSettings =ftSet;


			tts.setValues(player.captionsSettings);
			

			

			tts.updateDisplay();

	  }


	  player.captionsSettings = {
				
				backgroundOpacity: "0",
				edgeStyle: "raised"
	  };

	player.textTracksStyle(player.captionsSettings);

	if(sett.ccButton!==true) var cc = vjs_find(controlbar,'.vjs-subs-caps-button'); if(cc) vds.addClass(cc,'vjs-abs-hidden');



    player.forward = function () {
      var d = player.duration();
      var c = player.currentTime();
      if (d > 0) {
        var newdur = c + sett.rewindforward;
        if (newdur > d) player.currentTime(d);
        else player.currentTime(newdur);
      }
	  player.trigger('forward',{oldTime:c,newTime:newdur});
    };
    player.rewind = function () {
      if (player.duration() > 0) {
		var c = player.currentTime();
        var newdur = player.currentTime() - sett.rewindforward;
        if (newdur < 0) newdur = 0;
        player.currentTime(newdur);
		 player.trigger('rewind',{oldTime:c,newTime:newdur});
      }
    };
    player.related = function () {
      if (
        sett.settingsButton &&
        sett.related.length > 1 &&
        sett.relatedMenu &&
        player.seeking() !== true
      ) {
        showhide_popup(share_win,false);
		showhide_popup(filter_win,false);
		vds.removeClass(vjs_find(nv, ".vjs-menu-settings"), "vjs-lock-showing");
		showhide_popup(rel_win,true);
		
        calculate_related();
		player.trigger('related');
        player.pause();
      }
    };
    player.snapshot = function () {
      var video = nv.querySelector("video");

      var w = video.videoWidth,h = video.videoHeight,ratio = h / w;
	  var snap = document.getElementById("snap");
      if (snap) {
        snap.parentNode.removeChild(snap);
      }
      var canvas = document.createElement("canvas");
      canvas.id = "snap";
      canvas.style.position = "absolute";
      canvas.style.left = "-10000px";
      canvas.style.top = "0";
      document.body.appendChild(canvas);
      var context = canvas.getContext("2d");
      if (  browser.IS_ANDROID || browser.IS_IPAD || browser.IS_IPHONE ||  browser.IS_IPOD) {
        if (w > 640) {
          h = parseInt(640 * ratio, 10);
          w = 640;
        }
      }
      canvas.width = w;
      canvas.height = h;
      context.fillRect(0, 0, w, h);
      context.drawImage(video, 0, 0, w, h);

      if (sett.snapshotWatermark !== "") {
        if (sett.snapshotWatermark.length > 2) {
          var text = sett.snapshotWatermark;
          if (w < 641) context.font = "16px verdana";
          else context.font = "24px verdana";
          var textWidth = context.measureText(text).width;
          context.globalAlpha = 0.5;
          context.fillStyle = "white";
          context.fillText(text, w - textWidth - 10, h - 20);
          context.fillStyle = "black";
          context.fillText(text, w - textWidth - 10 + 2, h - 20 + 2);
        }
      }

      var dataURL;
      var fname = "snapshot.jpg";
	  dataURL = canvas.toDataURL("image/jpeg", 0.9);
      if (sett.snapshotType === "png") {
        fname = "snapshot.png";
        dataURL = canvas.toDataURL("image/png");
      }
      var a = document.createElement("a");
      a.href = dataURL;
      a.download = fname;
      document.body.appendChild(a);

      setTimeout(function () {
        a.click();
      }, 200);
    };

	function showhide_popup(win,show) {
		if(win) {
			if(show) {
				vds.removeClass(win,'vjs-hidden'); 
				win.setAttribute('aria-hidden','false');
			} else {
				vds.addClass(win,'vjs-hidden');
				win.setAttribute('aria-hidden','true');
			}
		}
	}

	player.on('filters', function(){
		showhide_popup(share_win,false);
		showhide_popup(rel_win,false);
		touchOut();
	});
    player.share = function () {
      if (sett.settingsButton && sett.shareMenu && player.seeking() !== true) {

		showhide_popup(rel_win,false);
		showhide_popup(filter_win,false);
		vds.removeClass(vjs_find(nv, ".vjs-menu-settings"), "vjs-lock-showing");
		player.trigger('share');

        var uri = sett.url || "N/A"
        var embed = sett.embed || "N/A";
        vjs_find(nv, ".embed-code").value = embed;
        vjs_find(nv, ".perma").value = uri;
        showhide_popup(share_win,true);
        player.pause();
      }
    };



    if (sett.contextMenu !== true && sett.contextMenu!=='default') {
      nv.addEventListener(
        "contextmenu",
        function (e) {
          e.preventDefault();
        },
        false
      );
    }


	var spc = vjs_find(nv, ".vjs-custom-control-spacer");
	if(spc) spc.innerHTML = "";

    var bigReplay = player.addChild("button", {
      el: vds.createEl(
        "button",
        { className: "vjs-replay-button" },
        {
          type: "button",
          title: player.localize("Replay"),
          "aria-disabled": "false"
        }
      )
    });
    nv.insertBefore(bigReplay.el_, bigPlay);


    bigReplay.el_.onclick = bigReplay.el_.ontouchstart= function (e) {
      
	   e.stopImmediatePropagation();
	   player.currentTime(0);player.play();
    };



	//is_pip = false;
    var pip = vjs_find(nv, ".vjs-picture-in-picture-control");


    if (sett.pipButton !== true) {
      tech.disablePictureInPicture = true;
    }


	var last_el = player.controlBar.el().lastChild;
	if( (document.pictureInPictureEnabled && sett.pipButton) || pip) {
		last_el = player.controlBar.getChild("pictureInPictureToggle").el_
	}
	


    var quaButton = player.controlBar.addChild("button", {
      el: vds.createEl(
        "div",
        {
          className:
            "vjs-quality-button vjs-menu-button vjs-control vjs-button vjs-hidden"
        },
        { role: "button", "aria-haspopup": "true", "aria-expanded": "false" }
      )
    });

    var setButton = player.controlBar.addChild("button", {
      el: vds.createEl("div", {
        className: "vjs-control vjs-button vjs-cog-menu-button vjs-hidden"
      })
    });

    controlbar.insertBefore(quaButton.el_, last_el );
    controlbar.insertBefore(setButton.el_, last_el);

    settingControl = setButton.el_;

    if (sett.snapshot) {
      var snapButton = player.controlBar.addChild("button", {
        el: vds.createEl(
          "button",
          { className: "vjs-snap-control vjs-control vjs-button" },
          { type: "button" }
        )
      });
      snapButton.el_.innerHTML =
        '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
        player.localize("Snapshot") +
        "</span>";
      player.controlBar.el_.insertBefore(snapButton.el_, setButton.el_);
      snapButton.el_.onclick = snapButton.el_.ontouchstart = function (e) {

		 e.stopImmediatePropagation();
		 player.snapshot();
      };
    }

    if (sett.controlbar) {
      var backbar = vds.createEl("div", { className: "vjs-background-bar" });
     nv.insertBefore(backbar, controlbar);
    }

    qualityButton = quaButton.el_;
    var quaInner =
      '<span class="quality-span vjs-no-pointer"></span><span class="vjs-control-text" aria-live="polite">' +
      player.localize("Quality") +
      '</span><div class="vjs-menu"><ul class="vjs-menu-content vjs-qlist" role="menu"></ul></div>';
    qualityButton.innerHTML = quaInner;

    if (sett.buttonForward) {
      if (sett.buttonRewind) setupRewind(true);
      var cls = "vjs-forward-control";

      var forwardButton = player.controlBar.addChild("button", {
        el: vds.createEl(
          "button",
          { className: cls + " vjs-control vjs-button" },
          {
            title: player.localize("Forward"),
            type: "button",
            "aria-disabled": "false"
          }
        )
      });
      forwardButton.el_.innerHTML =
        '<span class="num">'+sett.rewindforward+'</span><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
        player.localize("Forward") +
        "</span>";
	
      if (sett.skin === "party" && sett.buttonRewind)
        player.controlBar.el_.insertBefore(
          forwardButton.el_,
          vjs_find(nv, ".vjs-rewind-control").nextSibling
        );
      else
        player.controlBar.el_.insertBefore(
          forwardButton.el_,
          player.controlBar.getChild("playToggle").el_.nextSibling
        );
      forwardButton.el_.onclick = forwardButton.el_.ontouchstart = function () {
		 
        player.forward();
      };
    } else {
      if (sett.buttonRewind) setupRewind();
    }

    function setupRewind(first) {
      var cls = "vjs-rewind-control";
      if (first) cls = "vjs-rewind-control vjs-rewind-first";
      var rewindButton = player.controlBar.addChild("button", {
        el: vds.createEl(
          "button",
          { className: cls + " vjs-control vjs-button" },
          {
            title: player.localize("Rewind"),
            type: "button",
            "aria-disabled": "false"
          }
        )
      });
      rewindButton.el_.innerHTML =
        '<span class="num">'+sett.rewindforward+'</span><span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
        player.localize("Rewind") +
        "</span>";
      if (first) {
        if (sett.skin === "party")
          controlbar.insertBefore(
            rewindButton.el_,
            player.controlBar.getChild("playToggle").el_.nextSibling
          );
        else
          controlbar.insertBefore(
            rewindButton.el_,
            player.controlBar.getChild("playToggle").el_
          );
      } else player.controlBar.el_.insertBefore(rewindButton.el_, player.controlBar.getChild("playToggle").el_.nextSibling);
      rewindButton.el_.onclick = rewindButton.el_.ontouchstart = function() {
		 
        player.rewind();
      };
    }

	

    var adLabel = vds.createEl("div", { className: "vjs-vast-label" });
    adLabel.innerHTML = player.localize("Advertisement");
    var ch = "playToggle";
    if (sett.skin === "party") ch = "progressControl";
    if (sett.skin === "treso") ch = "volumePanel";

    controlbar.insertBefore(
      adLabel,
      player.controlBar.getChild(ch).el_.nextSibling
    );

    if (sett.theaterButton) {
      var theaterBtn = player.controlBar.addChild("button", {
        el: vds.createEl(
          "div",
          {
            className:
              "vjs-control vjs-button vjs-control-button vjs-mode-control"
          },
          { "aria-live": "polite", "aria-disabled": "false" }
        )
      });
      theaterBtn.el_.innerHTML =
        '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
        player.localize("Theater mode") +
        "</span>";
      controlbar.insertBefore(
        theaterBtn.el_,
        player.controlBar.getChild("fullscreenToggle").el_
      );
		var el = theaterBtn.el_;
	  if(sett.theaterButton==='large') vds.addClass(el, "vjs-mode");

      theaterBtn.el_.onclick = theaterBtn.el_.ontouchstart = function (e) {
 
		e.stopPropagation();
		
        var el = theaterBtn.el_;
        if (vds.hasClass(el, "vjs-mode")) {
          vds.removeClass(el, "vjs-mode");
          player.trigger("mode", "normal");
        } else {
          vds.addClass(el, "vjs-mode");
          player.trigger("mode", "large");
        }
      };
    }

    var cogMenu = vjs_El("div", "vjs-menu-settings");

    var settingsMenu = vjs_El("div", "vjs-menu-div vjs-settings-div");

    cogMenu.appendChild(settingsMenu);

    var settingsHome = vjs_El("div", "vjs-submenu vjs-settings-home");

    settingsMenu.appendChild(settingsHome);

    var ulmenu = vjs_El("ul", "vjs-menu-content vjs-settings-list");

    settingsHome.appendChild(ulmenu);

    settingButton = vds.createEl(
      "button",
      { className: "vjs-cog-button vjs-menu-button vjs-button" },
      {
        "aria-live": "polite",
        "aria-disabled": "false",
        "aria-expanded": "false"
      }
    );
    settingButton.innerHTML =
      '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-hd vjs-hidden">HD</span><span class="vjs-control-text" aria-live="polite">' +
      player.localize("Settings") +
      "</span>";

    settingControl.appendChild(settingButton);
    settingControl.appendChild(cogMenu);

    if (sett.downloadButton) {
      var down_button = player.controlBar.addChild("button", {
        el: videojs.dom.createEl(
          "button",
          {
            className: "vjs-download-control vjs-control vjs-button",
            title: player.localize("Download")
          },
          { type: "button", "aria-disabled": "false" }
        )
      });
      controlbar.insertBefore(
        down_button.el_,
        player.controlBar.getChild("fullscreenToggle").el_
      );
      down_button.el_.innerHTML =
        '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' +
        player.localize("Download") +
        "</span>";

      down_button.el_.onclick = down_button.el_.ontouchstart = function (e) {
		
		e.stopPropagation();
        var video_id = player.video_id();
        player.trigger("downloadVideo", {
          source: player.currentSrc(),
          id: video_id
        });
      };
    }

    media_screen();


    function releaseButton(btn) {

      try {
        if (player.isDisposed()) return;
      } catch (e) {lint(e);}
      if (isDisposed) return;

	  if (vds.hasClass(btn, "vjs-cast")) return false;

       if (btn === "") btn = vjs_find(nv, ".vjs-play-control");
      var cs = btn.className;


      if (typeof cs === "string" || cs instanceof String) {


		if (cs.indexOf("vjs-settings-item")>-1) return; 

        if (cs.indexOf("vjs-quality-button") < 0) {

          try {
            var mnu = vjs_find(qualityButton, ".vjs-menu");

            if (vds.hasClass(mnu, "vjs-lock-showing"))
              vds.removeClass(mnu, "vjs-lock-showing");
          } catch (e) {lint(e)}
        }		
		
		

        if (cs.indexOf("vjs-chapters-button") < 0) {
          player.controlBar.getChild("chaptersButton").unpressButton();
        }
        if (cs.indexOf("vjs-descriptions-button") < 0) {
          player.controlBar.getChild("descriptionsButton").unpressButton();
        }
        if (cs.indexOf("vjs-subs-caps-button") < 0) {
          try {
            player.controlBar.getChild("subsCapsButton").unpressButton();
          } catch (e) {lint(e);}
        }
        if (cs.indexOf("vjs-audio-button") < 0) {
          player.controlBar.getChild("audioTrackButton").unpressButton();
        }

		


        
        if (cs.indexOf("vjs-cog-button") < 0) {
          try {
            var sh = vjs_find(nv, ".vjs-settings-home");

            var mnus = vjs_mfind(nv, ".vjs-submenu");

            for (var sb = 0; sb < mnus.length; sb++) {
              vds.addClass(mnus[sb], "vjs-hidden");
              if (mnus[sb] === sh) vds.removeClass(sh, "vjs-hidden");
            }

            var mnu2 = vjs_find(nv, ".vjs-menu-settings");
            var cog = vjs_find(nv, ".vjs-cog-button");

            vds.removeClass(mnu2, "vjs-lock-showing");
            cog.setAttribute("aria-expanded", "false");
            vds.removeClass(cog, "vjs-cog-active");
          } catch (e) {lint(e);}
        }
      }

    }

    var btn = vjs_mfind(nv, ".vjs-control");
    for (var i = 0; i < btn.length; i++) {
      btn[i].removeAttribute("title");
    }
    var btn2 = controlbar.querySelectorAll(".vjs-button");

    for (i = 0; i < btn2.length; i++) {
      btn2[i].removeAttribute("title");
    }

    function media_screen() {
	
      var pw = nv.offsetWidth;

      var cls = ["vjs-1600","vjs-1280","vjs-920","vjs-600","vjs-640","vjs-480", "vjs-360","vjs-320"];
      for (var i = 0; i < cls.length; i++) vds.removeClass(nv, cls[i]);


      if (pw < 360) {
        vds.addClass(nv, "vjs-480");
        vds.addClass(nv, "vjs-360");
        if (pw < 320) vds.addClass(nv, "vjs-320");
      } else if (pw < 480) {
        vds.addClass(nv, "vjs-480");
      } else if (pw < 640) {
        vds.addClass(nv, "vjs-640");
        if (pw < 600) vds.addClass(nv, "vjs-600");
      } else if (pw < 920) {
        vds.addClass(nv, "vjs-920");
      } else if (pw < 1080) {
         vds.addClass(nv, "vjs-920"); vds.addClass(nv, "vjs-1080");
      } else {
        vds.addClass(nv, "vjs-920");vds.addClass(nv, "vjs-1600");
      }

    }


    try{
		resize_ob = new ResizeObserver(function() {doResize();});resize_ob.observe(nv);
	}catch(e) {return false;}
	
	function doResize() {
		
		media_screen();
		calculate_related();
		calculate_settings_size();
		releaseButton("");
	}

    player.on("dispose", function () {
		try{resize_ob.unobserve(nv);}catch(e){return false;}
		
		window.removeEventListener('click',theClick);
		window.removeEventListener('touchstart',theTouch);
		if(window.parent) {
			try{
			window.parent.removeEventListener('click',theClick);
			window.parent.removeEventListener('touchstart',theTouch);
			}catch(e){lint(e)}
		}
        isDisposed = true;
    });

	

    function theClick(e) {
	   player.options_.innactivityTimeout = clickTimeout;
       e.stopImmediatePropagation();
       releaseButton(e.target);
    }
	window.addEventListener('click',theClick);
	function theTouch(e) {
		if (!nv.contains(e.target)) touchOut();
	}
	 window.addEventListener('touchstart',theTouch);


	if(window.parent) {
			try{
			window.parent.addEventListener('click',theClick);
			window.parent.addEventListener('touchstart',theTouch);
			}catch(e){lint(e)}
	  }
	holder.addEventListener('touchend',function(e) {
		touchOut(e)
	});

    function clear_res() {
	  
      var i = 0;
      try {
        var tobind = vjs_mfind(nv, ".item-quality");
        for (i = 0; i < tobind.length; i++) {
          tobind[i].ontouchstart = null;
          tobind[i].onclick = null;
        }
      } catch (e) {lint(e)}

     
      var torem = vjs_mfind(nv, ".item-quality");
	  
      for (i = 0; i < torem.length; i++) {
        torem[i].parentNode.removeChild(torem[i]);
      }
      var xt = vjs_find("nv,vjs-extend-quality");
      if (xt) vds.addClass(xt, "vjs-hidden");

      vjs_find(
        qualityButton, ".vjs-menu .vjs-menu-content"
      ).innerHTML = "";
      vds.addClass(qualityButton, "vjs-hidden");


    }

    function setZoomInfo(val) {
      try {
        vjs_find(nv, ".vjs-reset-zoom").innerHTML = parseInt(val, 10) + "%";
        vjs_find(nv, ".zoom-label").innerHTML = parseInt(val, 10) + "%";
      } catch (e) {lint(e)}
    }

	function bind_resolution() {
      var btn = qualityButton;
      var mnu = vjs_find(btn, ".vjs-menu");
      var mc = vjs_find(mnu, ".vjs-menu-content");
		

      if (res_num > 1) {
        var handler1 = function (e) {
		  
			
          if (vds.hasClass(e.target, "vjs-cast") ) return false;
          var tip = vjs_find(e.target, ".vjs-control-text");
          e.stopPropagation();

          var mnu = vjs_find(btn, ".vjs-menu");
	
		  
          if (vds.hasClass(mnu, "vjs-lock-showing")) {
            e.target.setAttribute("aria-expanded", "false");
            vds.removeClass(mnu, "vjs-lock-showing");
            if(tip) tip.removeAttribute("style");
          } else {
			  releaseButton(e.target);
            var mx = nv.offsetHeight - controlbar.offsetHeight - 10;

			
            if(!vds.hasClass(nv,'vjs-casting')) mc.style.maxHeight = mx + "px";
            vds.addClass(mnu, "vjs-lock-showing");
            e.target.setAttribute("aria-expanded", "true");
            tip.style.opacity = "0";
          }
        };


        btn.onclick = btn.ontouchstart = function (e) {
          handler1(e);
        };
        btn.onmouseover = function (e) {
          var mnu =
            vjs_find(e.target, ".vjs-menu") ||
            vjs_find(e.target.parent, ".vjs-menu");
          if (mnu) {
            if (vds.hasClass(mnu, "vjs-lock-showing") !== true) {
              var tip = vjs_find(e.target, ".vjs-control-text");
              if (tip) tip.removeAttribute("style");
            }
          }
        };
      }

      var divMenu = vjs_find(nv, ".vjs-settings-div");
      var speedMenu = vjs_find(nv, ".vjs-menu-speed");
      var zoomMenu = vjs_find(nv, ".vjs-zoom-menu");
      var qualityMenu = vjs_find(nv, ".vjs-menu-quality");
      var homeMenu = vjs_find(nv, ".vjs-settings-home");

      var handlerMenu = function (e, mnu, dim) {

        //e.preventDefault();
        e.stopPropagation();
        vds.addClass(homeMenu, "vjs-hidden");
        vds.removeClass(mnu, "vjs-hidden");
        if (zoomMenu) {
          if (zoomMenu !== mnu) vds.addClass(zoomMenu, "vjs-hidden");
        }
        if (qualityMenu) {
          if (qualityMenu !== mnu) vds.addClass(qualityMenu, "vjs-hidden");
        }
        divMenu.style.width = vjs_dim[dim].width + "px";
        divMenu.style.height = vjs_dim[dim].height + "px";
      };
      var handlerBack = function (e) {
       // e.preventDefault();
        e.stopPropagation();
        if (zoomMenu) vds.addClass(zoomMenu, "vjs-hidden");
        if (speedMenu) vds.addClass(speedMenu, "vjs-hidden");
        if (qualityMenu) vds.addClass(qualityMenu, "vjs-hidden");
        vds.removeClass(homeMenu, "vjs-hidden");

        divMenu.style.width = vjs_dim["cogMenu"].width + "px";
        divMenu.style.height = vjs_dim["cogMenu"].height + "px";
        var percent = currentZoom * 100;
        setZoomInfo(percent);
      };


      if (speedMenu) {
        var sbtn = vjs_find(nv, ".vjs-extend-speed");
		
        sbtn.onclick = function (e) {
          handlerMenu(e, speedMenu, "speedMenu");
        };

		tapEvent(sbtn);

		sbtn.addEventListener('tap',function(e) {
				handlerMenu(e, speedMenu, "speedMenu");
		}, false);


        var sback = vjs_find(speedMenu, ".vjs-settings-back");
  
          sback.onclick = sback.ontouchstart = function (e) {
            handlerBack(e);
          
        }
      }

      if (qualityMenu && sett.qualityMenu) {
      
          vds.removeClass(vjs_find(nv, ".vjs-cog-menu-button"), "vjs-hidden");

          qualityMenu.onclick = function (e) {
            //e.preventDefault();
            e.stopPropagation();
          };
          var qbtn = vjs_find(nv, ".vjs-extend-quality");

          qbtn.onclick = function (e) {
            handlerMenu(e, qualityMenu, "qualityMenu");
          };
		  tapEvent(qbtn);

		  qbtn.addEventListener('tap',function(e) {
				handlerMenu(e, qualityMenu, "qualityMenu");
		  }, false);

          var qback = vjs_find(qualityMenu, ".vjs-settings-back");

            qback.onclick = qback.ontouchstart = function (e) {
              handlerBack(e);
          }

      }

      if (zoomMenu) {
        var zbtn = vjs_find(nv, ".vjs-extend-zoom");
        zbtn.onclick = function (e) {
          handlerMenu(e, zoomMenu, "zoomMenu");
        };
		//tapEvent(zbtn);

		//zbtn.addEventListener('tap',function(e) {
			// handlerMenu(e, zoomMenu, "zoomMenu");
		//}, false);

        var zback = vjs_find(zoomMenu, ".vjs-settings-back");

          zback.onclick= function (e) {
            handlerBack(e);
          };
        
      }

      var handler6 = function (e) {
        e.preventDefault();
        //e.stopImmediatePropagation();

        if (vjs_find(nv, ".vjs-tech-chromecast")) return;
        calculate_settings_size();
        var cogMenu = nv.querySelector(".vjs-menu-settings");
        if (zoomMenu) vds.addClass(zoomMenu, "vjs-hidden");
        if (speedMenu) vds.addClass(speedMenu, "vjs-hidden");

        if (vds.hasClass(cogMenu, "vjs-lock-showing") !== true) {
		 
          e.target.setAttribute("aria-expanded", "true");
          releaseButton(e.target);
          vds.addClass(cogMenu, "vjs-lock-showing");
          vjs_find(settingButton, ".vjs-control-text").style.opacity = 0;
          vds.addClass(e.target, "vjs-cog-active");

          vds.removeClass(homeMenu, "vjs-hidden");

          divMenu.style.width = vjs_dim["cogMenu"].width + "px";
          divMenu.style.height = vjs_dim["cogMenu"].height + "px";

          var percent = currentZoom * 100;
          setZoomInfo(percent);
        } else {
          e.target.setAttribute("aria-expanded", "false");
          vds.removeClass(e.target, "vjs-cog-active");
          hideSettings();
        }
      };

      function hideSettings() {
        if (zoomMenu) vds.addClass(zoomMenu, "vjs-hidden");
        if (speedMenu) vds.addClass(speedMenu, "vjs-hidden");
        vds.removeClass(settingsHome, "vjs-hidden");
        vds.removeClass(cogMenu, "vjs-lock-showing");
		 
        vjs_find(settingButton, ".vjs-control-text").removeAttribute("style");
      }

      settingButton.onclick = settingButton.ontouchend = function (e) {
		  
        handler6(e);
      };


      settingButton.onmouseover = function () {
        if (vds.hasClass(cogMenu, "vjs-lock-showing") !== true) {
          vjs_find(settingButton, ".vjs-control-text").removeAttribute("style");
        }
      };
    }

    function calculate_related() {
	  if(sett.menus!==true) return;
      var relnum = sett.related.length;
      var percent = 0.8;
      var mx = 800;

      var block = vjs_find(nv, ".rel-block");
      if (block) {
        vds.removeClass(vjs_find(nv, ".rel-block"), "rel-anim");
        var w = nv.offsetWidth;
        var wx = w * percent;
        if (wx > mx) wx = mx;
        var maxw = parseInt(vjs_find(nv, ".vjs-related").style.maxWidth, 10);
        if (isNaN(maxw)) maxw = 0;
        if (parseInt(maxw, 10) < 100) {
          maxw = mx;
        }

        if (wx > maxw) wx = maxw;
        var rel_c = vjs_find(nv, ".vjs-related");
        if (mx < maxw) rel_c.style.maxWidth = mx + "px";
        else rel_c.style.maxWidth = "800px";
        rel_c.style.width = percent * 100 + "%";

        var colnum = 3;
        var rownum = 2;

        if (relnum < 5 && relnum !== 3) colnum = 2;
        if (relnum < 4) rownum = 1;
        if (wx < 480) {
          colnum = 2;
          rownum = 1;
        }

        var rowh = (wx / colnum) * 0.5625;

        var colw = wx / colnum;
        var pages = Math.ceil(relnum / 6);

        if (vjs_relpage > pages) vjs_relpage = pages;
        vjs_relpages = pages;
        if (colnum === 2 && rownum === 2) vjs_relpages = Math.ceil(relnum / 4);
        if (colnum === 2 && rownum === 1) vjs_relpages = Math.ceil(relnum / 2);

        var rh = rowh * rownum;
        rel_c.style.height = rh + "px";
        var relleft = w / 2 - wx / 2;
        rel_c.style.top = nv.offsetHeight * 0.55 - rh / 2 + "px";
        rel_c.style.left = w / 2 - wx / 2 + "px";
	

          var rel_prev = vjs_find(nv, ".vjs-arrow-prev");
          var rel_next = vjs_find(nv, ".vjs-arrow-next");
        if (hasMouse()&&rel_prev&&rel_next) {
   

          var awidth = parseInt(vjs_find(nv, ".vjs-prev").offsetWidth + 5, 10);
          rel_prev.style.left = relleft - awidth + "px";
          rel_next.style.left = wx + relleft + "px";
          vds.removeClass(rel_next, "vjs-disabled");
          vds.removeClass(rel_prev, "vjs-disabled");
          if (vjs_relpage === vjs_relpages)
            vds.addClass(rel_next, "vjs-disabled");
          if (vjs_relpage === 1) vds.addClass(rel_prev, "vjs-disabled");
        }
	
        if (vjs_relpage > 1) {
          var bw = rel_c.offsetWidth;
          var new_left = (vjs_relpage - 1) * bw;
          vjs_find(nv, ".rel-block").style.left = "-" + new_left + "px";
        }
	
        var lft = 0;
        var tp = 0;

        var items = nv.querySelectorAll(".rel-parent");
        for (var i = 0; i < items.length; i++) {
          var item = items[i];

          item.style.left = lft + "px";
          if (tp === 1 && rownum > 1) {
            item.style.top = rowh + "px";
            lft = lft + colw;
          } else {
            item.style.top = 0;
          }
          if (rownum === 1) lft = lft + colw;

          item.style.width = colw + "px";
          item.style.height = rowh + "px";

          if (rownum > 1) {
            tp++;
            if (tp === 2) tp = 0;
          } else tp = 0;
        }

        vds.addClass(vjs_find(nv, ".rel-block"), "rel-anim");
      }
    }

    function calculate_settings_size() {
	  if(sett.menus!==true) return;
      var homeMenu = vjs_find(nv, ".vjs-settings-home");
      var speedMenu = vjs_find(nv, ".vjs-menu-speed");
      var zoomMenu = vjs_find(nv, ".vjs-zoom-menu");
      var qualityMenu = vjs_find(nv, ".vjs-menu-quality");
      var setDiv = vjs_find(nv, ".vjs-settings-div");
      vds.addClass(controlbar, "vjs-block");
      setDiv.style.width = "auto";
      setDiv.style.height = "auto";

      var min = 5; var min2=10;
      if(sett.skin === "pinko" || sett.skin === "roundal" || sett.skin === "mockup") { min=15;};
	   if(sett.skin === "shaka") {min=15;min2=15;}
	   if(sett.skin==='treso') { min=30;min2=20;}
	    if(sett.skin === "jwlike") min=10;


	  var maxh = nv.offsetHeight - controlbar.offsetHeight;
	  var btn = vjs_find(controlbar,'.vjs-fullscreen-control'); 
	  if(nv.offsetWidth<480) {
		  if(sett.skin==='pinko' || sett.skin==='party') min2=0;
		  if(sett.skin==='roundal') min2=15;
		  maxh=maxh+btn.offsetHeight-min2;

	  } else {
		maxh = maxh - min;
	  }

      if (maxh > 300) maxh = 300;
      setDiv.style.maxHeight = maxh + "px";

      if (speedMenu) {
        vds.addClass(speedMenu, "vjs-hidden");
      }
      if (zoomMenu) {
        vds.addClass(zoomMenu, "vjs-hidden");
      }
      if (qualityMenu) {
        vds.addClass(qualityMenu, "vjs-hidden");
      }

      var cogMenu = vjs_find(nv, ".vjs-menu-settings");
      vds.removeClass(cogMenu, "vjs-hidden");
      vds.addClass(cogMenu, "vjs-invisible");

      vjs_dim["cogMenu"] = {
        width: cogMenu.clientWidth,
        height: cogMenu.clientHeight
      };

      if (speedMenu) {
        vds.addClass(homeMenu, "vjs-hidden");
        if (zoomMenu) vds.addClass(zoomMenu, "vjs-hidden");
        if (qualityMenu) vds.addClass(qualityMenu, "vjs-hidden");
        vds.removeClass(speedMenu, "vjs-hidden");
        vds.addClass(speedMenu, "vjs-invisible");
        vjs_dim["speedMenu"] = {
          width: speedMenu.clientWidth,
          height: speedMenu.clientHeight
        };
        vds.removeClass(speedMenu, "vjs-invisible");
        vds.addClass(speedMenu, "vjs-hidden");
      }
      if (qualityMenu && sett.qualityMenu) {
        vds.addClass(homeMenu, "vjs-hidden");
        if (zoomMenu) vds.addClass(zoomMenu, "vjs-hidden");
        if (speedMenu) vds.addClass(speedMenu, "vjs-hidden");
        vds.removeClass(qualityMenu, "vjs-hidden");
        vds.addClass(qualityMenu, "vjs-invisible");
        vjs_dim["qualityMenu"] = {
          width: qualityMenu.offsetWidth + 10,
          height: qualityMenu.offsetHeight
        };
        vds.removeClass(qualityMenu, "vjs-invisible");
        vds.addClass(qualityMenu, "vjs-hidden");
        vds.removeClass(vjs_find(nv, ".vjs-cog-menu-button"), "vjs-hidden");
      }
      if (zoomMenu) {
        vds.addClass(homeMenu, "vjs-hidden");
        if (speedMenu) vds.addClass(speedMenu, "vjs-hidden");
        if (qualityMenu) vds.addClass(qualityMenu, "vjs-hidden");
        vds.removeClass(zoomMenu, "vjs-hidden");
        vds.addClass(zoomMenu, "vjs-invisible");
        zoomMenu.style.width = "auto";
        vjs_dim["zoomMenu"] = {
          width: zoomMenu.clientWidth,
          height: zoomMenu.clientHeight + 1
        };
        vds.removeClass(zoomMenu, "vjs-invisible");
        vds.addClass(zoomMenu, "vjs-hidden");
      }

      vds.removeClass(controlbar, "vjs-block");
      vds.addClass(vjs_mfind(nv, ".vjs-submenu"), "vjs-hidden");
      vds.removeClass(homeMenu, "vjs-hidden");

      vds.removeClass(cogMenu, "vjs-invisible");
      vds.removeClass(homeMenu, "vjs-hidden");

      if ( sett.speedMenu || sett.zoomMenu || sett.relatedMenu || sett.shareMenu || sett.qualityMenu) {
        vds.removeClass(vjs_find(nv, ".vjs-cog-menu-button"), "vjs-hidden");
      }
    }

    function set_resolution(res, label) {
      var rn = parseInt(res, 10);
      var poshd = '<i class="vjs-hd-icon vjs-hd-home vjs-hidden"></i>';
      var tx = "";
      if (sett.hdicon) {
        tx = "HD";
        if (rn > 2159) tx = "4K";
        if (rn > sett.minhd - 1) {
          poshd = '<i class="vjs-hd-icon vjs-hd-home">' + tx + "</i>";
        }
      }
      if (sett.qualityMenu) {
        vjs_find(nv, ".quality-label").innerHTML = label + poshd;
		var vhd=vjs_find(nv, ".vjs-hd");
        if (rn > sett.minhd - 1)
          vds.removeClass(vhd, "vjs-hidden");
        else vds.addClass(vhd, "vjs-hidden");
      } else vjs_find(qualityButton,".quality-span").innerHTML = label + poshd;
    }

    if (sett.title === "") sett.title = sett.metatitle = document.title;
    if (sett.infoText === "") sett.infoText = sett.metatitle;

    if (!sett.timetooltip) {
      var pr = vjs_find(nv, ".vjs-play-progress");
      var tp = vjs_find(pr, ".vjs-time-tooltip");
      if (pr && tp) vds.addClass(tp, "vjs-abs-hidden");
    }
    try {
      if (!sett.mousedisplay) {
        vds.addClass(vjs_find(nv, ".vjs-mouse-display"), "vjs-abs-hidden");
      }
    } catch (e) {lint(e)}

    function compareResolutions(a, b) {
      if (!a.res || !b.res) {
        return 0;
      }
      return +b.res - +a.res;
    }

    if (sett.logocontrolbar) {
      var imgbar = vjs_El("img");

      imgbar.src = sett.logocontrolbar;
      imgbar.onload = function () {
        if (this.width + this.height > 0) {
          var logobar = vjs_El("div", "vjs-logo-bar");

          if (sett.logourl !== "") {
            var link = vjs_El("a");
            link.href = sett.logourl;
            link.target = sett.target;
            if (sett.logotitle) link.title = sett.logotitle;
            link.appendChild(imgbar);
            logobar.appendChild(link);
            logobar.style.cursor = "pointer";
          } else {
            logobar.appendChild(imgbar);
          }
          controlbar.insertBefore(
            logobar,
            player.controlBar.getChild("fullscreenToggle").el_
          );
        }
      };
    }

       if (sett.contextMenu && sett.contextMenu!=='default') {
	
      var context = vjs_El("div", "vjs-context-menu vjs-hidden");
	  var contextList = vjs_El("ul");

      var cplay=vjs_El('li','cplay',player.localize("Play"));
	  var cmute=vjs_El('li','cmute',player.localize("Mute"));
	  var cfull=vjs_El('li','cfull',player.localize("Fullscreen"));
	  var curi = vjs_El('li','curi vjs-hidden',player.localize("Copy video URL"));
	  contextList.append(cplay,cmute,cfull,curi);
	  
	  var clink=null;
	  
	  if(sett.contextUrl!==undefined && sett.contextText!==undefined) { 
		 if(sett.contextIcon) {
			clink=vjs_El('li','link', '<a target="' + sett.target + '" href="' + sett.contextUrl + '"><img src="'+sett.contextIcon+'">' + sett.contextText + '</a>');
		 } else {
			 clink=vjs_El('li','link', '<a target="' + sett.target + '" href="' + sett.contextUrl + '">' + sett.contextText + '</a>');
		 }
		   
	  } else {
			if(sett.contextLink)
				clink=vjs_El('li','link', '<a target="_blank" href="https://www.nuevodevel.com/nuevo/">&copy; Nuevo v.10.3.0</a>');
	  }
	  if(clink) contextList.appendChild(clink);


          context.appendChild(contextList)
          nv.appendChild(context);


		cplay.onclick=function() {
			if(player.paused()) player.play(); else player.pause();
		}
		cmute.onclick=function() {
			if(player.muted()) player.muted(false); else player.muted(true);
		}
		cfull.onclick=function() {
			if(player.isFullscreen()) player.exitFullscreen(); else player.requestFullscreen();
		}

		curi.onclick=function() {
			if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(sett.url);
			};
		}

		function oncontext() {


			
            vds.addClass(context, "vjs-hidden");
			window.removeEventListener('scroll',oncontext);
			window.removeEventListener('mouseup',oncontext);
        };
		

        nv.addEventListener("contextmenu", function (e) {
          e.preventDefault();

		  if(curi && sett.url==="") vds.addClass(curi,"vjs-hidden"); else vds.removeClass(curi,"vjs-hidden");
		  if(player.paused()) cplay.innerHTML='Play'; else cplay.innerHTML='Pause';
		  if(player.muted()) cmute.innerHTML='Unmute'; else cmute.innerHTML='Mute';
		  if(player.isFullscreen()) cfull.innerHTML='Exit Fullscreen'; else cfull.innerHTML='Fullscreen';


          vds.removeClass(context, "vjs-hidden");
          var contextWidth = context.offsetWidth;
          var contextHeight = context.offsetHeight;
          var cY = null,
            cX = null;
          if (e.clientY) cY = e.clientY;
          if (e.clientX) cX = e.clientX;

          if (cY !== null && cX !== null) {
            var rect = nv.getBoundingClientRect();
            var cTop = cY - rect.top;
            var cLeft = cX - rect.left;

            if (cTop + contextHeight > nv.offsetHeight) {
              cTop = nv.offsetTop + nv.offsetHeight - contextHeight;
            }
            if (cLeft + contextWidth > nv.offsetWidth) {
              cLeft = nv.offsetWidth - contextWidth;
            }
            context.style.top = cTop + "px";
            context.style.left = cLeft + "px";

            window.addEventListener('scroll', oncontext);
			window.addEventListener('mouseup', oncontext);
			
			if(window.parent) {
				try{
				window.parent.addEventListener('scroll', oncontext);
				window.parent.addEventListener('mouseup', oncontext);
				}catch(e){lint(e)}
			}
			player.on('dispose', function() {
				window.removeEventListener('scroll', oncontext);
				window.removeEventListener('mouseup', oncontext);
				window.removeEventListener('mousedown', oncontext);
			});
		
          }
        });

      

	}

    if (sett.logo) {
      var limg = vjs_El("img");
      limg.src = sett.logo;
      var logodiv = vjs_El("div", "vjs-logo");
      if (sett.logomin) logodiv.className = "vjs-logo vjs-logo-min";
      nv.appendChild(logodiv);

      limg.onload = function () {
        if (this.width + this.height >0) {
        
			var offx = sett.logooffsetX;
			var offy = sett.logooffsetY;
			if (sett.logoposition === "RT") {
			  logodiv.style.right = offx + "px";
			  logodiv.style.top = offy + "px";
			} else if (sett.logoposition === "LB") {
			  logodiv.style.left = offx + "px";
			  logodiv.className += " vjs-logo-bottom";
			} else {
			  logodiv.style.left = offx + "px";
			  logodiv.style.top = offy + "px";
			}
			if (sett.logourl !== "") {
			  var link = vjs_El("a");
			  link.href = sett.logourl;
			  link.target = sett.target;
			  if (sett.logotitle) link.title = sett.logotitle;
			  link.appendChild(limg);
			  logodiv.appendChild(link);
			} else {
			  logodiv.appendChild(limg);
			}
		}
      };
      limg.onerror = function () {
        nv.removeChild(logodiv);
      };
    }

    if (sett.skin === "treso") {
      var ch1 = vjs_find(nv, ".vjs-current-time");
      var ch2 = vjs_find(nv, ".vjs-duration");
      controlbar.removeChild(ch1);
      var progress = vjs_find(nv, ".vjs-progress-control");
      progress.insertBefore(ch1, progress.childNodes[0]);
      controlbar.removeChild(ch2);
      progress.appendChild(ch2);
    }

    player.resetNuevo = function () {
      var def_source, ini_source;
      var sources = [],
        src = [];

      clear_res();
	  
      calculate_settings_size();
      if (player.options_.sources.length > 0) {
        sources = player.options_.sources;
        src = sources;
      }

      try {
        vjs_find(
          qualityButton,".vjs-menu .vjs-menu-content"
        ).innerHTML = "";
        vds.addClass(qualityButton, "vjs-hidden");
      } catch (e) {lint(e)}

      if(sett.keepSource!==true) {
		  var el_ = tech; //player.tech({ IWillNotUseThisInPlugins: true }).el();
		  
			while (el_.firstChild) {
			  el_.removeChild(el_.firstChild);
			
		  }
	  }

	  if(sources.length<2) {

		return sources[0];
	  }

      if (sources.length > 1) {
        var step = 0,res_len = 0;
        var reshls = [],resdash = [], resmp4 = [];
        var mnu = "";
        var i = 0, j = 0,l = 0, qnum = 0;
        var was_ini = false;

        for (step = 0; step < sources.length; step++) {
          if (sources[step].res || sources[step].label) res_len++;
        }

        if (sources.length >= 1) {
          sett.dash = false;
          sett.hls = false;

          var ms = "MediaSource" in window;
          var iOS = false;
          if (browser.IS_IPHONE || browser.IS_IPOD || browser.IS_IPAD)
            iOS = true;

          for (i = 0; i < src.length; i++) {
            var tp = "";
            try {tp = src[i].type;} catch (e) {lint(e)}

            if (typeof tp !== "undefined") {
              if (
                tp.indexOf("x-mpegURL") !== -1 ||
                tp.indexOf("apple") !== -1
              ) {

				if(ms || iOS) return src[i];
				 
                reshls[j] = src[i];
                j++;
              }
              if (tp.indexOf("dash") !== -1) {
				if(ms) return src[i];
                k++;
              }
            }

            if (src[i].res && src[i].label) {
              if (was_ini !== true) {
                was_ini = true;
                ini_source = {
                  res: src[i].res,type: src[i].type,src: src[i].src,label: src[i].label
                };
              }
              var ttp = src[i].type;
              if (typeof ttp === "undefined") ttp = "";
              if (
                ttp.indexOf("mpeg") !== -1 ||
                ttp.indexOf("apple") !== -1 ||
                ttp.indexOf("dash") !== -1
              ) {
              } else {
                resmp4[l] = src[i];
                l++;
              }
            }
          }
        }
        var reso = [];
		if (reshls.length > 0 && (ms || iOS)) return;
		if (resdash.length > 0 && ms) return;


        if (res_len < 2) return;
        reso = resmp4;
        reso = reso.sort(compareResolutions);
        var qcls1 = "";
        var qcls2 = " vjs-checked";
        qcls1 = ' class="vjs-menu-item item-quality"';
        qcls2 = ' class="vjs-menu-item item-quality vjs-checked"';
        for (i = 0; i < reso.length; i++) {
          var res = reso[i].res;
          var rn = parseInt(res, 10);
          var poshd = "";
		 
          if (sett.hdicon && rn > sett.minhd - 1) {
            var tx = "HD";
            if (rn > 1079 && sett.minhd < 1080) tx = "FullHD";
            if (rn > 2159) tx = "4K";
            poshd = '<i class="vjs-hd-icon">' + tx + "</i>";
          }
		 
          if (reso[i].default) {
            def_source = reso[i];

            mnu +=
              "<li" +
              qcls2 +
              ' data-height="' +
              i +
              '">' +
              reso[i].label +
              poshd +
              "</li>";
          } else {
            mnu +=
              "<li" +
              qcls1 +
              ' data-height="' +
              i +
              '">' +
              reso[i].label +
              poshd +
              "</li>";
          }
          qnum++;
        }
        if (qnum > 1) {
          res_num = qnum;
          if (sett.qualityMenu) {
            initQuality();
            var quaMenu = vjs_find(nv, ".vjs-menu-quality .vjs-menu-content");
            quaMenu.innerHTML = quaMenu.innerHTML + mnu;
            vds.removeClass(vjs_find(nv, ".vjs-extend-quality"), "vjs-hidden");
            vds.removeClass(settingButton, "vjs-hidden");
          } else {
            vjs_find(
              qualityButton,".vjs-menu .vjs-menu-content"
            ).innerHTML = mnu;
            vds.removeClass(qualityButton, "vjs-hidden");
          }
	

          var tobind = vjs_mfind(nv, ".item-quality");
          calculate_settings_size();
          for (i = 0; i < tobind.length; i++) {
            var item = tobind[i];
            var reshandler = function (e) {
              
			  e.preventDefault();
              var tg;
              for (var j = 0; j < tobind.length; j++) {
                vds.removeClass(tobind[j], "vjs-checked");
                if (tobind[j] === e.target) tg = j;
              }
              vds.addClass(tobind[tg], "vjs-checked");
              var res = e.target.getAttribute("data-height");
              set_resolution(reso[res].res, reso[res].label);
              var vid = player.video_id();
              player.trigger("resolutionchange", {
                id: vid,
                res: reso[res].res
              });
              var newsource = reso[res];
              releaseQuality();
			  
              changeSource(newsource);
            };
       
            item.onclick = function (e) {
			  e.stopImmediatePropagation();
              reshandler(e);
            };
			tapEvent(item);

			item.addEventListener('tap',function(e) {
				reshandler(e);
			}, false);


          }

          bind_resolution();
          if (
            typeof def_source !== "undefined" ||
            typeof ini_source !== "undefined"
          ) {
            if (
              typeof def_source !== "undefined" &&
              def_source !== ini_source
            ) {
              set_resolution(def_source.res, def_source.label);
              return def_source;
			  //player.src(def_source);
              //player.load();
            } else if (typeof ini_source !== "undefined") {
              set_resolution(ini_source.res, ini_source.label);
              return ini_source;
			  //player.src(ini_source);
              //player.load();
            }
          }

          function changeSource(newSource) {
            var currentTime = player.currentTime();
            var isPaused = player.paused();
            player.src(newSource);
            player.load();
			doPlay(currentTime,isPaused);

            //player.one("canplay", function () {
              //doPlay(currentTime,isPaused);
            //});
          }
		  function doPlay(ctime,ps) {
			  if (ctime > 0) player.currentTime(ctime);
              if (ps) player.pause();else player.play();
              if (sett.rate !== 1) player.setRate(sett.rate);
		  }
        }
      }
    };

    function hls_hd(rn) {
      if (sett.hdicon) {
        if (sett.qualityMenu) {
          var ihd = vjs_find(nv, ".vjs-hd");
          if (rn > sett.minhd - 1) {
            var tx = "HD";
            if (rn > 2159) tx = "4K";
            ihd.innerHTML = tx;
            vds.removeClass(ihd, "vjs-hidden");
          } else {
            vds.addClass(ihd, "vjs-hidden");
          }
        }
      }
    }

    function hls_resolution(levels) {

		var dashPlayer = null;
        var dashLevel = null;
      try {
        dashPlayer = player.dash.mediaPlayer || null;
      } catch (e) {lint(e)}

      var opts = player.options();
      var hlsopts = opts.html5.hlsjsConfig || null;
      var hls_smooth = true;
      if (hlsopts) {
        if (hlsopts.smoothQualityChange === false) hls_smooth = false;
      }
      clear_res();

      calculate_settings_size();

      var hls_levels = [];
      var dup = false;


      for (var g = 0; g < levels.length; g++) {
        dup = false;
        for (var f = 0; f < hls_levels.length; f++) {
          if (
            levels[g].height === hls_levels[f].height &&
            levels[g].bitrate === hls_levels[f].bitrate
          )
            dup = true;
        }
        if (dup !== true) hls_levels.push(levels[g]);
      }

      if (hls_levels.length < 2) return;
      sett.is_auto = true;
      var sort_height = 0,
        sort_bitrate = 0;
      var dups = false;

      for (var i = 0; i < hls_levels.length; i++) {
        var level = hls_levels[i];

        if (level.height > 0) sort_height++;
        if (level.bitrate > 0) sort_bitrate++;
        var hnum = 0;
        for (var j = 0; j < hls_levels.length; j++) {
          if (level.height === hls_levels[j].height) hnum++;
        }
        if (hnum > 1) dups = true;
      }

      var sort = "bitrate";
      if (sort_height > sort_bitrate) sort = "height";

      hls_levels = sortByKey(hls_levels, sort);
      hls_levels = hls_levels.reverse();
      res_num = hls_levels.length + 1;

      var qcls1 = "vjs-menu-item item-quality",
        qcls2 = "vjs-menu-item item-quality vjs-checked",
        mnu2 = "";

      for (i = 0; i < hls_levels.length; i++) {
        var chk = "",
          hdpos = "";

        var rn = parseInt(hls_levels[i].height, 10);
        if (sett.hdicon && rn > sett.minhd - 1) {
          var tx = "HD";
          if (rn > 1079 && sett.minhd < 1080) tx = "FullHD";
          if (rn > 2159) tx = "4K";
          hdpos = '<i class="vjs-hd-icon">' + tx + "</i>";
          hls_hd(rn);
        }

        var dt = hls_levels[i].bitrate,
          ht = hls_levels[i].height;
        var dtb = Math.round(dt / 1000);

        if (hls_levels[i].height > 0 || hls_levels[i].bitrate > 0) {
          var cls1 = qcls1;
          if (dups) {
            if (sort_height === sort_bitrate) {
              mnu2 +=
                '<li data-id="' +
                hls_levels[i].index +
                '" class="' +
                cls1 +
                '" data-bitrate="' +
                dt +
                '" data-height="' +
                ht +
                '"' +
                chk +
                ' role="menuitem" aria-live="polite" aria-disabled="false">' +
                ht +
                "p (" +
                dtb +
                " kbps)</li>";
            } else if (sort_height > sort_bitrate) {
              mnu2 +=
                '<li data-id="' +
                hls_levels[i].index +
                '" class="' +
                cls1 +
                '" data-bitrate="' +
                dt +
                '" data-height="' +
                ht +
                '"' +
                chk +
                ' role="menuitem" aria-live="polite" aria-disabled="false">' +
                ht +
                "p" +
                hdpos +
                "</li>";
            } else {
              mnu2 +=
                '<li data-id="' +
                hls_levels[i].index +
                '" class="' +
                cls1 +
                '" data-bitrate="' +
                dt +
                '" data-height="' +
                ht +
                '"' +
                chk +
                ' role="menuitem" aria-live="polite" aria-disabled="false">' +
                dtb +
                " kbps</li>";
            }
          } else {
            if (hls_levels[i].bitrate > 0 && sort_bitrate > sort_height) {
              mnu2 +=
                '<li data-id="' +
                hls_levels[i].index +
                '" class="' +
                cls1 +
                '" data-bitrate="' +
                dt +
                '" data-height="' +
                ht +
                '"' +
                chk +
                ' role="menuitem" aria-live="polite" aria-disabled="false">' +
                ht +
                "p (" +
                dtb +
                " kbps)</li>";
            } else {
              mnu2 +=
                '<li data-id="' +
                hls_levels[i].id +
                '" class="' +
                cls1 +
                '" data-bitrate="' +
                dt +
                '" data-height="' +
                ht +
                '"' +
                chk +
                ' role="menuitem" aria-live="polite" aria-disabled="false">' +
                ht +
                "p" +
                hdpos +
                "</li>";
            }
          }
        }
      }

      mnu2 +=
        '<li id="auto" class="vjs-menu-item item-quality auto-res vjs-checked" data-height="Autores"' +
        qcls2 +
        ' role="menuitem" aria-live="polite" aria-disabled="false">Auto<i class="autores"></i></li>';
     
	  var span = vjs_find(nv, ".quality-span");
	  if(sett.qualityMenu) span = vjs_find(nv, ".quality-label");
	  span.innerHTML = "Auto";

      if (sett.qualityMenu) {
        initQuality();
        var quaMenu = vjs_find(nv, ".vjs-menu-quality .vjs-menu-content");
        quaMenu.innerHTML = quaMenu.innerHTML + mnu2;
        vds.removeClass(vjs_find(nv, ".vjs-extend-quality"), "vjs-hidden");
        vds.removeClass(settingButton, "vjs-hidden");
      } else {
        vjs_find(
          qualityButton,".vjs-menu .vjs-menu-content"
        ).innerHTML = mnu2;
        vds.removeClass(qualityButton, "vjs-hidden");
      }

      var tobind = vjs_mfind(nv, ".item-quality");
      bind_resolution();
      calculate_settings_size();

      if (player.qualities.length > 1) {
        player.on("qualityChange", function (e, data) {
          if (dashPlayer) {
            var h = data.height;
            var b = data.bitrate;
            dashLevel = { height: h, bitrate: b };
          }


          var auto = vjs_find(nv, ".auto-res");
          if (auto) {
            var cls = auto.className;
            if (cls.indexOf("vjs-checked") > -1) {
			  set_auto();
            }
          }
        });
      }

      function set_auto(init) {
        if (vds.hasClass(nv, "vjs-has-started")) {
          //if(player.paused()!==true) vds.addClass(bigPlay,'vjs-hidden');
          vds.addClass(spinner, "vjs-hidden");
        }
        if (dashPlayer) {
          dashPlayer.updateSettings({
            streaming: { abr: { autoSwitchBitrate: { video: true } } }
          });
          var li = vjs_find(nv, ".auto-res");
          if (li)
            li.className = "vjs-menu-item item-quality auto-res vjs-checked";
          vjs_find(nv, ".quality-span").innerHTML = "Auto";
        }

        if (init && !dashPlayer) {
          if (player.hlsjs) {
            if (hls_smooth) {
              player.hlsjs.nextLevel = -1;
            } else {
              player.hlsjs.currentLevel = -1;
            }
          } else
            for (var i = 0; i < player.qualities.length; i++) {
              player.setQuality(i, true);
            }
        }

        li = vjs_find(nv, ".auto-res");
        if (li)
          li.className = "vjs-menu-item item-quality auto-res vjs-checked";
        var level = null;
        if (dashPlayer) level = dashLevel;
        else level = player.qualities[player.qualityIndex];

        var tx = "",
          inn = "";
        var lh = 0;
        if (level) {
          if (level.height) lh = parseInt(level.height, 10);
          if (lh > 0) {
            inn = level.height + "p";
          } else {
            inn = Math.round(level.bitrate / 1000) + "kbps";
          }
          if (li) li.innerHTML = 'Auto<i class="autores">' + inn + "</i>";

          if (sett.hdicon) {
            if (lh >= sett.minhd - 1) tx = "HD";
            if (lh > 2159) tx = "4K";
            hls_hd(lh);
          }
        }
        if (tx === "") cls = "vjs-hd-icon vjs-hd-home vjs-hidden";
        else cls = "vjs-hd-icon vjs-hd-home";
		var span = vjs_find(nv, ".quality-span");
		if(sett.qualityMenu) span = vjs_find(nv, ".quality-label");
        span.innerHTML =
          'Auto<i class="' + cls + '">' + tx + "</i>";
      }
 

      function set_static(target) {

        vjs_find(nv, ".auto-res").innerHTML = 'Auto<i class="autores"></i>';
        var h = parseInt(target.getAttribute("data-height"), 10);
        var hh = h;
        var b = parseInt(target.getAttribute("data-bitrate"), 10);
        var qua = player.qualities;

		var tobind = vjs_mfind(nv, ".item-quality");
		for (var i=0;i<tobind.length;i++ ){vds.removeClass(tobind[i], "vjs-checked");}

        vds.addClass(target, "vjs-checked");
        var vid = player.video_id();
        if (hh === 0) hh = b;
        player.trigger("resolutionchange", { id: vid, res: hh });
	
        for (var q = 0; q < qua.length; q++) {
	
          if (!player.hlsjs) player.setQuality(q, false);

          if (qua[q].height === hh || qua[q].bitrate === b) {
			 

            if (player.hlsjs) {
              if (hls_smooth) {
                player.hlsjs.nextLevel = q;
              } else {
                player.hlsjs.currentLevel = q;
              }
            } else if (dashPlayer) {
              dashPlayer.updateSettings({
                streaming: { abr: { autoSwitchBitrate: { video: false } } }
              });
              dashPlayer.setQualityFor("video", qua[q].id);
            } else 
				player.setQuality(q, true);
          
		    
		  }
        }


        var tx = "";
        var hr = "";
        var span = vjs_find(nv, ".quality-span");
		if(sett.qualityMenu) span = vjs_find(nv, ".quality-label");
		if (h > 0) {
          tx = "HD";
          if (h > 2159) tx = "4K";
          if (h > sett.minhd - 1)
            hr = '<i class="vjs-hd-icon vjs-hd-home">' + tx + "</i>";
          else
            hr = '<i class="vjs-hd-icon vjs-hd-home vjs-hidden">' + tx + "</i>";
          span.innerHTML = h + "p" + hr;
        } else if (b > 0) {
          span.innerHTML = Math.round(b / 1000) + "kbps";
        }
        hls_hd(h);
      }

      for (var b = 0; b < tobind.length; b++) {
        var item = tobind[b];
        var handle = function (e) {
		  e.preventDefault();
          
          sameData = true;
          for (var j = 0; j < tobind.length; j++) {
            vds.removeClass(tobind[j], "vjs-checked");
          }
          vds.removeClass(vjs_find(nv, ".auto-res"), "vjs-checked");
          vds.addClass(e.target, "vjs-checked");
          var id = e.target.getAttribute("id");
          releaseQuality();

          if (id === "auto") {
            set_auto(true);
          } else {
            set_static(e.target);
          }
        };

        if (item.className.indexOf("vjs-hidden") < 0) {
            item.onclick = function (e) {
			  e.stopImmediatePropagation();
              handle(e);
            };
			tapEvent(item);

			item.addEventListener('tap',function(e) {
				handle(e);
			}, false);

        }
      }
	
	
	 function staticLevel(num) {
		var qua= player.qualities;
	
		for (var b = 0; b < tobind.length; b++) {
			var ht = parseInt(tobind[b].getAttribute("data-height"),10);
			var bt = parseInt(tobind[b].getAttribute("data-bitrate"),10)
			if(ht === qua[num].height || bt==qua[num].bitrate) {
				tobind[b].click();
			}
		}
	 }
	
 
	if(sett.startLevel!=="undefined") {
			staticLevel(parseInt(sett.startLevel,10));
		} else {
			set_auto(false);
		}
    }

    function releaseQuality() {
      if (sett.qualityMenu) {
        vds.addClass(vjs_find(nv, ".vjs-menu-quality"), "vjs-hidden");
        vds.removeClass(vjs_find(nv, ".vjs-settings-home"), "vjs-hidden");
        vds.removeClass(vjs_find(nv, ".vjs-menu-settings"), "vjs-lock-showing");
      } else {
      
        if (qualityButton) {
          var mnu = vjs_find(qualityButton, ".vjs-menu");
          var tt = vjs_find(qualityButton, ".vjs-control-text");
          if (mnu) {
            mnu.style.display = "none";
            vds.removeClass(mnu, "vjs-lock-showing");
            if (tt) tt.removeAttribute("style");
          }
        }
      }
    }

    function resume_vid() {

      var vid = player.video_id();
      if (vid === null) return;
	  var resm=0;

      if (sett.resume && typeof vid !== "undefined") {
        var key = String("vjs_resume-" + vid);

        if (localStorage && localStorage.key) {
          resm = Number(localStorage.getItem(key));
		}
	  }

      if (
        vds.hasClass(nv, "vjs-ad-playing") ||
        vds.hasClass(nv, "vjs-dai") ||
        vds.hasClass(nv, "vjs-up-next")
      )
        return;


      if (player.duration() === Infinity) return;
      if (browser.IOS_VERSION === "8" && player.duration() === 0) return;


      if (resm > 0 && resm < player.duration() - 20) {

          setTimeout(function () {
              player.currentTime(resm);
            }, 200);
       }

    }


    player.on("loadeddata", function () {
		
		
      if (vds.hasClass(nv, "vjs-ad-playing") || vds.hasClass(nv, "vjs-dai"))
        return false;

      if (sameData) {
        sameData = false;
        //return;
      }
   
	
	
	if(sett.startTime || player.options_.startTime ||  player.$(".vjs-tech").getAttribute('startTime') ) {

		var st =player.$(".vjs-tech").getAttribute('startTime') || 0;

		
		if(sett.startTime)  st = sett.startTime;
		
		if(player.options_.startTime) st = player.options_.startTime;

		sett.startTime=st;
		
		if(st>5 && st<player.duration()-5) {

			spinner.style.opacity=0;
			player.currentTime(st);
		}
	} else {
	   resume_vid();
	}
    checkTracks();
		


      if (player.isAudio() ) {
        vds.addClass(nv, "vjs-audio");
        sett.is_audio = true;
      }

      player.trigger("medialoaded");
	


      var buts = [
        vjs_find(nv, ".vjs-play-control"),
        vjs_find(nv, ".vjs-fullscreen-control"),
        vjs_find(nv, ".vjs-mute-control")
      ];
      var i = 0;
      for (i = 0; i < buts.length; i++) {
        buts[i].onmouseover = function (e) {
          e.target.removeAttribute("title");
        };
      }

      if (sett.tooltips !== true) {
        var tip = vjs_mfind(nv, ".vjs-control-text");
        for (i = 0; i < tip.length; i++) {
          vds.addClass(tip[i], "vjs-hidden");
        }
      }



      var btns = vjs_mfind(nv, ".vjs-menu-button-popup");
      for (i = 0; i < btns.length; i++) {
        btns[i].onclick = function (e) {
		  //e.stopImmediatePropagation();
		  
          checkMH(e);
        };
        btns[i].ontouchstart = function (e) {
          
		  checkMH(e);
		  
        };
        btns[i].onmousemove = function (e) {
          var mnu =
            vjs_find(e.target, ".vjs-menu") ||
            vjs_find(e.target.parentNode, ".vjs-menu");
          if (mnu) {
            if (vds.hasClass(mnu, "vjs-lock-showing")) {
            } else {
              var tts =
                e.target.querySelector(".vjs-control-text") ||
                e.target.parentNode.querySelector(".vjs-control-text");
              if (tts) tts.removeAttribute("style");
            }
          }
        };

        function checkMH(e) {
          var tts = nv.querySelectorAll(".vjs-control-text");
          for (var i = 0; i < tts.length; i++) {
            tts[i].removeAttribute("style");
          }
          var tt = vjs_find(e.target, ".vjs-control-text");
          var exp = e.target.getAttribute("aria-expanded");
          if (exp === "true") {
            tt.style.opacity = "0";
          } else {
            tt.removeAttribute("style");
          }
			
          var mnu =
            vjs_find(e.target, ".vjs-menu") ||
            vjs_find(e.target.parentNode, ".vjs-menu");

		  if (!vds.hasClass(mnu, "vjs-lock-showing")) {
			  releaseButton(e.target);
		  } 

		  
          var mc =
            vjs_find(e.target, ".vjs-menu-content") ||
            vjs_find(e.target.parentNode, ".vjs-menu-content");

			var dif=0; var dif2=5;
			if (sett.skin === "shaka") dif=10;
			if (sett.skin === "treso") dif=10;
			if (sett.skin === "roundal" || sett.skin === "mockup") dif=5;

            var mx = nv.offsetHeight - controlbar.offsetHeight-10;
			var btnf = vjs_find(controlbar,'.vjs-fullscreen-control');
			  if(nv.offsetWidth<480) {
				  
				  if (sett.skin=== "nuevo") dif2=0;
				  if (sett.skin=== "party") dif2=-5;
				 if (sett.skin=== "pinko") dif2=-10;
				  mx=mx+btnf.offsetHeight-dif2;
		

			  }else {
				mx=mx-dif;
			  }

          if(vds.hasClass(nv,'vjs-cast-fixed')) mc.style.maxHeight='none'; else mc.style.maxHeight = mx + "px";
        }
      }

      checkChapters();
      res_num = 0;
	   
	
      player.qualityIndex = -1;
      player.off("mediachange");

      function testVHS() {
        if (player.tech_.vhs) {
		 player.qualities=[];
          var vhs = player.tech_.vhs;
          var rps = vhs.representations();

          if (rps.length > 0) {
            for (i = 0; i < rps.length; i++) {
              var details = rps[i];
              var name = "vjs_" + i;
              var representation = {
                id: name,
                index: name,
                label: name,
                width: details.width,
                height: details.height,
                bandwidth: details.bandwidth,
                bitrate: details.bandwidth,
                enabled: false
              };
              representation.enabled = _toggleLevel.bind(this, i);
              player.qualities.push(representation);
            }

            player.on("mediachange", function () {
              if (player.tech_.vhs) {
                vhs = player.tech_.vhs;
                var sdata = vhs.playlists.media();
                if (sdata) {
                  var bdb = sdata.attributes.BANDWIDTH;
                  var htb = sdata.attributes.HEIGHT;

                  for (var i = 0; i < rps.length; i++) {
                    if (bdb === rps[i].bandwidth) break;
                    if (htb === rps[i].height) break;
                  }
                  player.qualityIndex = i;
                  player.trigger("qualityChange");
                }
              }
            });
          }
        }
      }

	  

      function _toggleLevel(level, toggle) {
        if (player.qualities) {
          var rps = player.tech_.vhs.representations();
          if (typeof toggle === "boolean") {
            player.qualities[level].enabled = toggle;
            rps[level].enabled(toggle);
          }
          return player.qualities[level].enabled;
        }
        return false;
      }
	
	 
      player.qualities = [];


      player.one("playing", applyLevels);

	  player.one("levelsLoaded", applyLevels);

      player.on("dashlevelChange", function () {
        player.trigger("mediachange");
      });

      function applyLevels() {
	


        testVHS();
		


        if (player.qualities.length > 0) {
          initQuality();
          res_num = player.qualities.length;
          hls_resolution(player.qualities);
          player.trigger("mediachange");
        }
      }
    });

    if (sett.timetooltip) {
      var pr1 = vjs_find(nv, ".vjs-play-progress");
      var el1 = vjs_find(pr1, ".vjs-time-tooltip");
      if (el1) el1.className = "vjs-time-tooltip";
    }
    if (sett.mousedisplay) {
      var el2 = vjs_find(nv, ".vjs-mouse-display");
      if (el2) el2.className = "vjs-mouse-display";
    }

    var info_el = vjs_find(nv, ".vjs-info");
    if (info_el) nv.removeChild(info_el);

    var ai = vjs_find(nv, ".vjs-audio-info");
    if (ai) nv.removeChild(ai);

    player.audioInfo = function () {
      if (sett.audioInfo && (sett.audioInfo.artist || sett.audioInfo.title))
        return sett.audioInfo;
      else return false;
    };

    setAudioInfo();

    function setAudioInfo() {
      var a_el = vjs_find(nv, ".vjs-audio-info");
      if (a_el) nv.removeChild(a_el);

      if (sett.audioInfo && (sett.audioInfo.artist || sett.audioInfo.title)) {
        var audio_el = vjs_El("span", "vjs-audio-info");
        var inner = "";
        if (sett.audioInfo.url) {
          inner =
            '<a href="' +
            sett.audioInfo.url +
            '" target="' +
            sett.target +
            '">';
        } else {
          audio_el.style.pointerEvents = "none";
        }
        if (sett.audioInfo.cover) {
          inner +=
            '<span class="vjs-cover"><img src="' +
            sett.audioInfo.cover +
            '"/></span>';
        }
        inner += '<span class="vjs-audio-item vjs-text">';
        if (sett.audioInfo.artist) {
          inner +=
            '<span class="audio-artist">' + sett.audioInfo.artist + "</span>";
        }
        if (sett.audioInfo.title) {
          inner +=
            '<span class="vjs-audio-item vjs-song">' +
            sett.audioInfo.title +
            "</span>";
        }
        if (
          sett.audioInfo.genre ||
          sett.audioInfo.album ||
          sett.audioInfo.year
        ) {
          inner += '<span class="vjs-audio-item audio-id">';
          if (sett.audioInfo.genre)
            inner += "<span>Genre: " + sett.audioInfo.genre + "</span>";
          if (sett.audioInfo.album)
            inner += "<span>Album: " + sett.audioInfo.album + "</span>";
          if (sett.audioInfo.year)
            inner += "<span>Year: " + sett.audioInfo.year + "</span>";
          inner += "</span>";
        }
        inner += "</span>";
        if (sett.audioInfo.url) inner += "</a>";
        audio_el.innerHTML = inner;
        nv.appendChild(audio_el);

        audio_el.onclick = function () {
          window.open(sett.audioInfo.url, sett.target);
        };
      }
    }

    setVideoInfo();

    function setVideoInfo() {
      var i_el = vjs_find(nv, ".vjs-info");
      if (i_el) nv.removeChild(i_el);

      if (sett.videoInfo &&  (sett.infoText || sett.infoTitle || sett.title !== "")) {
        var info_el = vjs_El("span", "vjs-info vjs-info-top");
        if (sett.infoBottom)
          info_el = vjs_El("span", "vjs-info vjs-info-bottom");

        var inner = "";

        nv.appendChild(info_el);

        if (sett.infoUrl)
          inner =
            '<a href="' + sett.infoUrl + '" target="' + sett.target + '">';
        else info_el.style.pointerEvents = "none";

        var ttl = "";
        if (sett.infoText) ttl = sett.infoText;
        else if (sett.infoTitle) ttl = sett.infoTitle;
        else if (sett.title !== "") ttl = sett.title;

        var img = "";
        if (sett.infoIcon !== "") {
          img =
            '<span class="vjs-icon"><img src="' + sett.infoIcon + '"/></span>';
        }

        inner = inner + img;
        inner +=
          '<span class="vjs-text"><span class="vjs-ttl">' + ttl + "</span>";
        if (sett.infoDescription) {
          inner += '<span class="vjs-dsc">' + sett.infoDescription + "</span>";
        }
        if (sett.infoUrl) inner += "</span></a></span>";
        else inner += "</span>";

        info_el.innerHTML = inner;

        info_el.onclick = function () {
          window.open(sett.infoUrl, sett.target);
        };
      }
    }

    //var iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;
    //if(iOS) var ms=false;
    var sources = [];
    sources = player.options_.sources;

    if (sources.length > 0) {
      var sr = player.resetNuevo(false);
	  player.src(sr);
      checkTracks();
      checkChapters();
    }


    function checkTracks() {
	  
      var plTracks;
      var ctracks = [];

      if (player.textTracks().length > 0) {
        plTracks = player.textTracks();

        for (var i = 0; i < plTracks.length; i++) {
          var track = {};
          var plTrack = plTracks[i];

          if (plTrack.kind === "captions") {
            track.kind = plTrack.kind;
            track.src = plTrack.src;
            track.language = plTrack.language;
            track.label = plTrack.label;
            if (plTrack.mode === "showing") track.mode = "showing";
            ctracks.push(track);
          }
        }
      }

      if (ctracks.length > 0) player.captions = ctracks;
    }

	player.on("ratechange",function() {
		  var newrate = player.playbackRate();
          var items = nv.querySelectorAll(".vjs-speed");
          for (var i = 0; i < items.length; i++) {
			var rt = Number(items[i].innerHTML.replace("x",""));

            vds.removeClass(items[i], "vjs-checked");
            if (newrate === rt) {
              vds.addClass(items[i], "vjs-checked");break;
            }
          }
          if (newrate === "1") newrate = player.localize("Normal");
          vjs_find(nv, ".vjs-extend-speed span").innerHTML = newrate + "x";
	});

    player.setRate = function (rate) {
        if (parseFloat(rate) > 0) {

		  player.trigger('ratechanged',{oldRate:player.playbackRate(),newRate:rate});
          player.playbackRate(rate);
		  
          sett.rate = rate;
        }
    };

    player.setSource = function (item) {
      player.changeSource(item);
    };
    player.changeSource = function (item) {
      if (vds.hasClass(nv, "vjs-ad-playing") || vds.hasClass(nv, "vjs-dai"))
        return;

      if (player.adPlaying) return;

      if (!item) return;
      

      if (typeof item === "string") {
        item = { sources: [{ src: item }] };
      }

      if (item.src) {
        item = { sources: [item] };
      }

      if (!item.sources) return;
      
      var pstate = 1;
      if (player.paused()) pstate = 2;

      player.trigger('sourceChanged');


      player.changeSrc(item);
	  
	  
	  player.load();
	  if(pstate==1) player.play();


    };

    player.changeSrc = function (item) {
      if (vds.hasClass(nv, "vjs-ad-playing") || vds.hasClass(nv, "vjs-dai"))
        return;
		
      sett.title = "";
      sett.url = "";
      sett.description = "";
      sett.infoTitle = null;
      sett.infoDescription = null;
      sett.metatitle = "";
      sett.metasubtitle = "";

      var tracks = player.remoteTextTracks();
      var i = tracks.length || 0;
      while (i--) {
        player.removeRemoteTextTrack(tracks[i]);
      }

      var vTracks = player.videoTracks();
      for (i = vTracks.length - 1; i >= 0; i--) {
        player.videoTracks().removeTrack(vTracks[i]);
      }

      var aTracks = player.audioTracks();
      for (i = aTracks.length - 1; i >= 0; i--) {
        player.videoTracks().removeTrack(aTracks[i]);
      }

      if (!item) {
        return;
      }
      if (typeof item === "string") {
        item = { sources: [{ src: item }] };
      }
      if (item.src) {
        item = { sources: [item] };
      }

      if (!item.sources) {
        return;
      }

      sett.rate = 1;
      player.setRate(1);


      sett.video_id = undefined;
      if (typeof item.video_id !== "undefined") sett.video_id = item.video_id;
      if (typeof item.audioInfo !== "undefined")
        sett.audioInfo = item.audioInfo;
      else sett.audioInfo = null;
      if (typeof item.slideImage !== "undefined")
        sett.slideImage = item.slideImage;
      else sett.slideImage = "";
      if (typeof item.slideWidth !== "undefined")
        sett.slideWidth = item.slideWidth;
      if (typeof item.slideHeight !== "undefined")
        sett.slideHeight = item.slideHeight;
      //if (typeof item.thumbnails !== "undefined")
        //sett.thumbnails = item.thumbnails;
      //else sett.thumbnails = null;
      if (typeof item.title !== "undefined")
        sett.metatitle = sett.title = item.title;
      if (typeof item.description !== "undefined")
        sett.description = item.infoDescription = item.description;
      if (typeof item.embed !== "undefined") sett.embed = item.embed;
      if (typeof item.infoTitle !== "undefined")
        sett.infoTitle = item.infoTitle;
      if (typeof item.infoDescription !== "undefined")
        sett.infoDescription = item.infoDescription;
      if (typeof item.infoUrl !== "undefined") sett.infoUrl = item.infoUrl;
      if (typeof item.infoIcon !== "undefined") sett.infoIcon = item.infoIcon;
      

      if (typeof item.url !== "undefined") sett.url = item.url; else sett.url="";


      for (i = 0; i < item.sources.length; i++) {
        if (item.title) {
          item.sources[i].title = item.title;item.sources[i].metaTitle = item.title;
        }
		if (item.metatitle)
          item.sources[i].metaTitle = item.metatitle;
		if (item.metaTitle)
          item.sources[i].metaTitle = item.metaTitle;
		if(item.metasubtitle) 
		  item.sources[i].metaSubtitle=item.metasubtitle;
		if(item.metaSubtitle) 
		  item.sources[i].metaSubtitle=item.metaSubtitle;
		if(item.metaThumbnail) 
		  item.sources[i].metaThumbnail=item.metaThumbnail;

      }

	 
      

      player.captions = null;

      if (typeof item.tracks !== "undefined") {
        tracks = item.tracks;
        for (i = 0; i < tracks.length; i++) {
          if (
            typeof tracks[i].src !== "undefined" &&
            tracks[i].kind === "captions"
          ) {
            if (tracks[i].default) {
              tracks[i].mode = "showing";
            }
            tracks[i].language = tracks[i].srclang;
          }
        }
        if (tracks.length > 0) player.captions = tracks;
      }


	 

      
		
      //setTimeout(function () {
        var posterdiv = poster;

		vds.addClass(posterdiv, "vjs-hidden");
        if (typeof item.poster !== "undefined") {
            player.poster(item.poster);
        }

		setTimeout(function () {
			vds.removeClass(posterdiv, "vjs-hidden");
			sett.firstplay = true;
        }, 200);
		

	player.options_.sources = item.sources;
      
      var ns = player.resetNuevo(true, item);

	  player.src(ns);
	  player.trigger('newSource');
      setVideoInfo();
      setAudioInfo();

      setTimeout(function () {


		if (typeof item.track !== "undefined") {
			item.tracks=[];
			item.tracks.push(item.track);
		}

        if (typeof item.tracks !== "undefined") {
          var tracks = item.tracks;
          for (var i = 0; i < tracks.length; i++) {
            if (typeof tracks[i].src !== "undefined") {
              if (tracks[i].default && tracks[i].kind === "captions") {
                tracks[i].mode = "showing";
                player.currentTrack = tracks[i].src;
              }

              var remote = player.addRemoteTextTrack(tracks[i], true);
              remote.addEventListener("load", function () {
		
                if (this.kind === "chapters") {
                  checkChapters();
                }
                if (this.kind === "metadata") {
                  var v = player.textTracks().length;
                  player.textTracks()[v - 1].src = this.src;
                  checkMetadata();
                }
              });
            }
          }
        }
      }, 200);
    };
    function checkMetadata() {
      var ismeta = false;
      var tracks = player.textTracks();
      if (tracks.length > 0) {
        for (var i = 0; i < tracks.length; i++) {
          if (
            tracks[i].kind === "metadata" &&
            tracks[i].src &&
            ismeta !== true
          ) {
            player.trigger("medialoaded");
          }
        }
      }
    }


    player.loadTracks = function (tracks) {


      var cks = player.textTracks();
      var i = cks.length || 0;
      while (i--) {
        player.removeRemoteTextTrack(cks[i]);
      }
	  
	  var trackList;
      var remote = [];
      if (!Array.isArray(tracks)) {
        trackList = [];
        trackList[0] = tracks;
      } else {
        trackList = tracks;
      }
      var wasch1 = false;
      var wasch2 = false;


      var otracks = player.textTracks();

      for (i = 0; i < trackList.length; i++) {
        var track = trackList[i];

        if (track.kind === "chapters") {
          for (i = 0; i < otracks.length; i++) {
            if (otracks[i].kind === "chapters") {
              player.remoteTextTracks().removeTrack(otracks[i]);
              break;
            }
          }
        }

        if (track.kind && track.src) {
          remote[i] = player.addRemoteTextTrack(track, false);
			
			
          remote[i].addEventListener("load", function () {

            if (this.kind === "chapters" && wasch1 !== true) {
              wasch1 = true;
              checkChapters();
            }
            if (this.kind === "metadata" && wasch2 !== true) {
              wasch2 = true; 
              var v = player.textTracks().length;
              player.textTracks()[v - 1].src = this.src;
              checkMetadata();
            }
          });
        }
      }
    };

    function checkThumbs(tipp) {
      var vtt = vjs_find(nv, ".vjs-thumbnail-holder");
      var spr = vjs_find(nv, ".vjs-progress-slide .vjs-thumb");
      if (vtt) {
        if (sett.skin === "shaka") {
          var ht = Number(vtt.style.height.replace(/px$/, ""));
          var dist = vtt.computedStyleMap().get("bottom").value + ht + 5;
          tipp.style.bottom = dist + "px";
        } else {
          vds.addClass(vtt, "vjs-vtt");
        }
        vds.addClass(tipp, "vjs-chapter-mix");
      } else if (spr) {
        if (sett.skin === "shaka") {
          var ht2 = Number(spr.style.height.replace(/px$/, ""));
          tipp.style.bottom = ht2 + 32 + "px";
        } else {
          vds.addClass(spr, "vjs-sld");
        }
        vds.addClass(tipp, "vjs-chapter-mix");
      }

      return 0;
    }

    function checkChapters() {
      var tracks = player.textTracks();
      var chp = vjs_find(nv, ".vjs-chapter");
      if (chp) chp.parentNode.removeChild(chp);

      if (sett.chapterMarkers) {
        var els = nv.getElementsByClassName("vjs-marker");

        if (els) {
          while (els.length > 0) {
            els[0].parentNode.removeChild(els[0]);
          }
        }

        var ischapter = false;

        if (tracks.length > 0) {
          for (var i = 0; i < tracks.length; i++) {
            if (
              tracks[i].kind === "chapters" &&
              tracks[i].cues &&
              ischapter !== true
            ) {
              ischapter = true;
              var chapterTT = tracks[i];
            }
          }
        }

        if (chapterTT) {
          var cuesAra = chapterTT.cues;

          if (cuesAra) {
            var prg = vjs_find(nv, ".vjs-progress-control");
            var mtp = vjs_find(prg, ".vjs-mouse-display");
            if(mtp) vds.addClass(mtp, "vjs-abs-hidden");
			
            var chapterTimes = [];
            var pdur = player.duration();

            var tipp = vjs_El("div");
            tipp.className = "vjs-chapter";
            holder.appendChild(tipp);

            function tipMove(e) {
			  var pagex;
			  if(e.type==='mousemove') pagex = e.pageX; else if(e.type==="touchmove") pagex=getPageX(e);
			  
			  var rct=holder.getBoundingClientRect();
              var left=pagex-rct.left;
			  if(left<0) return;
              var percent = left / holder.offsetWidth;
              var mouseTime = percent * pdur;
              checkThumbs(tipp);

              tipp.style.left = left+'px';
              for (var i = cuesAra.length - 1; i >= 0; i--) {
                if (mouseTime >= cuesAra[i].startTime) {
                  if (tipp.innerHTML !== cuesAra[i].text) {
                    tipp.innerHTML = cuesAra[i].text;
                    tipp.style.maxWidth = holder.offsetWidth * 0.9 + "px";
                  }
				
                  var min = tipp.offsetWidth / 2;
                  var max = holder.offsetWidth - tipp.offsetWidth / 2;
                  if (left<min) tipp.style.left = min + "px";
                  if (left>max) tipp.style.left = max + "px";
                  tipp.style.opacity = "1";
                  tipp.style.visibility = "visible";
                  break;
                }
              }
            };

			holder.ontouchstart = function(e) {
				tipMove(e);
				document.addEventListener('touchmove',tipMove);
				document.addEventListener('touchend',tipOut);
			}


			holder.onmousemove = function(e) {
				tipMove(e);
			}
			function tipOut() {
              if (videojs.holderdown) return;
		
				document.removeEventListener('touchmove',tipMove);
				document.removeEventListener('touchend',tipOut);
			  
              tipp.style.opacity = "0";
              tipp.style.visibility = "visible";
			}

            holder.onmouseout = function(){tipOut();}

            for (i = 0; i < cuesAra.length; i++) {
              if (pdur > 0) {
                if (cuesAra[i].startTime > 0) {
                  chapterTimes[i] = cuesAra[i].startTime;
                  var elem = vjs_El("div", "vjs-marker");
                  var inn_el = vjs_El("div", "vjs-marker-inn");
                  elem.appendChild(inn_el);

                  elem.style.left = (chapterTimes[i] / pdur) * 100 + "%";
                  holder.appendChild(elem);
                }
              }
            }
          }
        }
      }
    }

	
	player.newPlaylist= function(items) {
		


		var cls = nv.className;
		var inlist = vjs_find(player.playlistParent,'.vjs-vlist');

		var citems = vjs_mfind(inlist,'.vjs-item');
		for (var j=0; j<citems.length; j++)
		{
			citems[j].onclick=null;
			citems[j].ontouchstart=null;
			citems[j].ontouchmove=null;
			citems[j].ontouchend=null;
			inlist.removeChild(citems[j]);
		}
		
		inlist.innerHTML='';
		for (i = 0; i < items.length; i++) {
            var itm = newItem(items[i], i);
            inlist.appendChild(itm);
        }

        if (sett.playlistID === "undefined") {
            var el_last = vjs_El("div", "vjs-last");
            inlist.appendChild(el_last);
        }
		player.playlist.currentItem(0);
		player.pause();
		
		player.changeSrc(items[0]);

		
		if(cls.indexOf('vjs-has-started')>-1) {
			player.one('canplay', function() { player.play(); });
		}
	}



    player.removeFromPlaylist = function (id) {
      if (sett.playlist && sett.playlistUI) {


        var list = vjs_find(player.playlistParent, ".vjs-vlist");
        var toKill = list.childNodes[id];
        list.removeChild(toKill);
        for (var i = 0; i < list.childNodes.length; i++) {
          list.childNodes[i].setAttribute("data-id", i);
        }
      }
    };
    player.addToPlaylist = function (item, how, id) {

      if (sett.playlist && sett.playlistUI) {
        var list = vjs_find(player.playlistParent, ".vjs-vlist");
        var itm;
        var len = list.childNodes.length;

        if (typeof id === "number" && typeof how === "string") {
          if (how === "after") {
            itm = newItem(item, id + 1);
            list.insertBefore(itm, list.childNodes[id].nextSibling);
          } else if (how === "before") {
            itm = newItem(item, id);
            list.insertBefore(itm, list.childNodes[id]);
          }
          for (var i = 0; i < list.childNodes.length; i++) {
            list.childNodes[i].setAttribute("data-id", i);
          }
        } else {
          if(len>0) itm = newItem(item, len - 1); else itm = newItem(item, 0);
		  if(len>1 && player.playlistParent==nv) {
			list.insertBefore(itm, list.childNodes[len - 2].nextSibling);
		  } else {
			list.appendChild(itm);
		  }
        }
      }
    };
    function newItem(pitem, i) {
      var itm = vjs_El("div", "vjs-item");
      itm.setAttribute("data-id", i);
      var tmb = vjs_El("div", "vjs-tmb");

      if (pitem.thumb) {
        tmb.style.backgroundImage = "url(" + pitem.thumb + ")";
      } else if (pitem.poster) {
        tmb.style.backgroundImage = "url(" + pitem.poster + ")";
      }
      itm.appendChild(tmb);
      var ttl = vjs_El("p");
      if (pitem.title) {
        ttl.innerHTML = pitem.title;
      } else {
        var tl = "";
        if (pitem.audioInfo) {
          if (typeof pitem.audioInfo.title !== undefined) {
            tl = pitem.audioInfo.title;
            if (typeof pitem.audioInfo.artist !== undefined) {
              tl = pitem.audioInfo.artist + " - " + tl;
            }
          }
        }

        if (tl !== "") {
          ttl.innerHTML = tl;
        } else {
          var uri = pitem.sources[0].src;
          var filename = uri.substring(uri.lastIndexOf("/") + 1);
          if (pitem.sources.length > 0) {
            for (var j = 0; j < pitem.sources.length; j++) {
              if (pitem.sources[j].default) {
                uri = pitem.sources[j].src;
                filename = uri.substring(uri.lastIndexOf("/") + 1);
              }
            }
          }
          filename = filename.replace(/(\.[^/.]+)+$/, "");
          ttl.innerHTML = filename;
        }
      }

      itm.appendChild(ttl);
      if (sett.playlistID !== "undefined") {
        var ex = document.getElementById(sett.playlistID);
      }
      if (ex) {
        var dsc = vjs_El("p", "vjs-desc");
        if (pitem.description) {
          dsc.innerHTML = pitem.description;
        }
        itm.appendChild(dsc);
      }

      if (pitem.duration) {
        var dr = vjs_El("span");
        dr.innerHTML = pitem.duration;
        itm.appendChild(dr);
      }



      var plTouchMove = false;

      itm.onclick = function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        itm_click(e);
      };



      itm.ontouchstart = function () {
        plTouchMove = false;
      };
      itm.ontouchmove = function () {
        plTouchMove = true;
      };
      itm.ontouchend = function (e) {
        if (plTouchMove !== true) {
          itm_click(e);
        }
      };

      function itm_click(e) {
        if (player.adPlaying) return;
        var id = e.target.getAttribute("data-id");
	
        player.playlist.currentItem(parseInt(id, 10));


        if (player.paused()) {
          player.play();
        }
      }

      return itm;
    }

    player.on("playlistready", function () {
      if (sett.playlistRepeat) player.playlist.repeat(true);
      playlistSetup();
    });

    function playlistSetup() {
      var items = player.playlist.list();
      if (items.length < 2) return;

      player.on("error", function () {
         if( player.playlist.currentIndex() === player.playlist.lastIndex()) {
				 if (sett.playlistRepeat!==true) {
					spinner.style.display='none';
					//var ed = vjs_find(nv,'.vjs-error-display');
					//var msg = vjs_find(ed,'.vjs-modal-dialog-content');
		
					//msg.innerHTML = "Stream not available.";
				 } else {
					player.playlist.next(true);
				 }


		 } else {

			player.playlist.next(true);
      
		 }
	  });

      if (sett.playlist !== true) {
        sett.playlist = true;

        if (sett.playlistNavigation) {
          var navPrev = vjs_El(
            "div",
            "vjs-playlist-nav vjs-nav-prev",
            '<div class="vjs-prev vjs-disabled"></div>'
          );
          var navNext = vjs_El(
            "div",
            "vjs-playlist-nav vjs-nav-next",
            '<div class="vjs-next"></div>'
          );

          nv.appendChild(navPrev);
          nv.appendChild(navNext);

          navNext.onclick = function (e) {
            if (player.adPlaying) return;
            if (e.target.className.indexOf("disabled") < 0) {
              player.playlist.next();
            }
          };

          navPrev.onclick = function (e) {
            if (player.adPlaying) return;
            if (e.target.className.indexOf("disabled") < 0) {
              player.playlist.previous();
            }
          };
        }

        if (sett.playlistUI) {
          var ex = null,
            listControl = null;

          if (sett.playlistID !== "undefined") {
            ex = document.getElementById(sett.playlistID);
			player.playlistParent=ex;
          } else player.playlistParent=nv;

          if (ex)
            listControl = vjs_El(
              "div",
              "vjs-vplaylist vjs-vplaylist-horizontal"
            );
          else listControl = vjs_El("div", "vjs-vplaylist vjs-vplaylist-show");

          if (!ex) {
            var plicon = vds.createEl(
              "div",
              { className: "vjs-playlist-button" },
              { title: "Playlist" }
            );
            nv.appendChild(plicon);

            plicon.onclick = function () {
              vds.addClass(listControl, "vjs-vplaylist-show");
              if (sett.playlistFirst)
                vds.addClass(listControl, "vjs-vplaylist-first");
            };
            listControl.style.visibility = "hidden";
          }

          var head = vjs_El("div", "vjs-head", "<span>PLAYLIST</span>");

          var pback = vjs_El("div", "vjs-back", "<i></i>");
          if (ex) pback.innerHTML = '<i class="vdown"></i>';
          head.appendChild(pback);
          listControl.appendChild(head);

          pback.onclick = function () {
            if (ex) {
              if (inlist.offsetHeight > 0) {
                pback.innerHTML = '<i class="vup"></i>';

                vds.addClass(inlist, "vjs-list-min");
              } else {
                pback.innerHTML = '<i class="vdown"></i>';

                vds.removeClass(inlist, "vjs-list-min");
              }
            } else vds.removeClass(listControl, "vjs-vplaylist-show");
          };

          if (!ex) nv.appendChild(listControl);
          else ex.appendChild(listControl);
          var inlist = vjs_El("div", "vjs-vlist");
          if (ex) {
            vds.addClass(inlist, "vjs-list-max");
            if (sett.playlistMaxH) {
              var nh = parseInt(sett.playlistMaxH, 10);
              if (nh === 0) inlist.style.height = "auto";
              else inlist.style.height = nh + "px";
            }
          }
          listControl.appendChild(inlist);

          items = player.playlist.list();



          for (i = 0; i < items.length; i++) {
            var itm = newItem(items[i], i);
            inlist.appendChild(itm);
          }

          if (!ex) {
            var el_last = vjs_El("div", "vjs-last");
            inlist.appendChild(el_last);

            if (sett.playlistShow !== true) {
              listControl.className = "vjs-vplaylist";
              setTimeout(function () {
                listControl.style.visibility = "visible";
              }, 500);
            } else {
              listControl.style.visibility = "visible";
            }
          }
        }
      }

      player.on("playlist_newitem", function () {
        if (sett.playlistUI) {
          var items = vjs_mfind(inlist, ".vjs-item");
          for (var j = 0; j < items.length; j++) {
            vds.removeClass(items[j], "vjs-active-item");
          }
        }
        player.on("play", function () {
          if (sett.playlistUI) {
            var pid = player.playlist.currentIndex();
            var items = vjs_mfind(inlist, ".vjs-item");
            for (var j = 0; j < items.length; j++) {
              vds.removeClass(items[j], "vjs-active-item");
              if (j === pid) {
                vds.addClass(items[j], "vjs-active-item");
              }
            }
            if (sett.playlistAutoHide && !ex) {
              vds.removeClass(listControl, "vjs-vplaylist-show");
            }
          }
          if (sett.playlistNavigation) {
            var prev = vjs_find(nv, ".vjs-nav-prev");
            var next = vjs_find(nv, ".vjs-nav-next");
            var vprev = vjs_find(prev, ".vjs-prev");
            var vnext = vjs_find(next, ".vjs-next");
            if (player.playlist.currentIndex() === 0) {
              vds.addClass(vprev, "vjs-disabled");
            } else {
              vds.removeClass(vprev, "vjs-disabled");
            }

            if (
              player.playlist.currentIndex() === player.playlist.lastIndex()
            ) {
              vds.addClass(vnext, "vjs-disabled");
            } else {
              vds.removeClass(vnext, "vjs-disabled");
            }
          }
        });
      });
    }

    function setup_slides() {

	

	   //var holder = vjs_find(nv, ".vjs-progress-holder");
      player.sprite = false;
	   if (sett.slideImage!=="" && sett.currentSlide === sett.slideImage) return;
      var isSlide = vjs_find(nv, ".vjs-progress-slide");
      if (isSlide) isSlide.parentNode.removeChild(isSlide);
      var isOver = vjs_find(nv, ".vjs-thumb-poster");
      if (isOver) nv.removeChild(isOver);
	 

      if (player.isAudio()!==true && sett.slideImage ) {
		 
        if (sett.slideImage === "") return;
       
        sett.currentSlide = sett.slideImage;
        var md_el = vjs_find(nv, ".vjs-mouse-display");
       
		
        if (player.shadowSlide) {
          var posterThumb = vjs_El("div", "vjs-thumb-poster");
          var canva = vjs_El("canvas");
          posterThumb.appendChild(canva);
          nv.insertBefore(posterThumb, poster);
        }

        var pr = vjs_find(nv, ".vjs-play-progress");
        var tp_el = vjs_find(pr, ".vjs-time-tooltip");
        if(tp_el) vds.addClass(tp_el, "vjs-abs-hidden");
        if(md_el) vds.addClass(md_el, "vjs-abs-hidden");

        player.sprite = true;
        slide_el = vjs_El("div", "vjs-progress-slide");
        s_thumb = vjs_El("div", "vjs-thumb");
        s_thumb_dur = vjs_El("div", "vjs-thumb-duration");
        slide_img = vjs_El("img");

        if (sett.slideType === "horizontal") {
          slide_img.style.width = "auto";
          slide_img.style.height = sett.slideHeight + "px";
        } else {
          slide_img.style.height = "auto";
          slide_img.style.width = sett.slideWidth + "px";
        }

        s_thumb.appendChild(slide_img);
        s_thumb.appendChild(s_thumb_dur);
        slide_el.appendChild(s_thumb);

        s_thumb.style.left = "-" + parseInt(sett.slideWidth / 2, 10) + "px";
        //vjs_find(nv, ".vjs-progress-holder").appendChild(slide_el);
		holder.appendChild(slide_el);

        slide_el.style.left = "-1000px";
        if(tp_el) vds.addClass(tp_el, "vjs-abs-hidden");
        if(md_el) vds.addClass(md_el, "vjs-abs-hidden");
        var slide_left = 0;
        var slide_top = 0;

        

		

		holder.addEventListener('mousemove',slidemove);
		holder.addEventListener('mousedown',slidedown);
        holder.addEventListener('mouseleave',slideout);
		holder.addEventListener('touchstart',slidetouch, supportsPassive ? { passive: false } : false);




        var slides = new Image();
        slide_img.src = sett.slideImage;
        slides.src = sett.slideImage;
        slides.onload = function(event) {
          var total_width = event.target.width;
          var total_height = event.target.height;
          num_slide = total_width / sett.slideWidth;
          if (sett.slideType !== "horizontal")
            num_slide = total_height / sett.slideHeight;
          vds.removeClass(slide_el, "vjs-hidden");
        };
      }

	
		function slideend() {
			holder.removeEventListener('touchmove',slidemove);
			holder.removeEventListener('touchend',slideend);
			thumbOut();
		}

		function slidetouch(e) {
			videojs.holderdown=false;
			holder.addEventListener('touchmove',function(e) {
            slidemove(e);
			});
			holder.addEventListener('touchend',slideend);
		}

		function formTime(seconds,guide) {
		  seconds = seconds < 0 ? 0 : seconds;
		  var s = Math.floor(seconds % 60);
		  var m = Math.floor(seconds / 60 % 60);
		  var h = Math.floor(seconds / 3600);
		  var gm = Math.floor(guide / 60 % 60);
		  var gh = Math.floor(guide / 3600);
		  if (isNaN(seconds) || seconds === Infinity) {
			h = m = s = '-';
		  }
		   h = (h > 0 || gh > 0) ? h + ':' : '';
			m = (((h || gm >= 10) && m < 10) ? '0' + m : m) + ':';
			s = (s < 10) ? '0' + s : s;
			return h + m + s;
		}

	  function slidemove(e) {
		
		 if (vjs_find(nv, ".vjs-tech-chromecast")) return;

		  //var pp =  vjs_find(nv, ".vjs-play-progress");
		  //var holder = vjs_find(nv, ".vjs-progress-holder");
		  var rect=holder.getBoundingClientRect();

          var pr_width = holder.offsetWidth;
		  
		  var pagex=null;
		  if(e.pageX) {
				pagex = e.pageX;
		  } else if(e.changedTouches) {
				pagex=getPageX();
		  }
		
		  var ml = pagex-rect.left;
		  
          var calc_left = ml; //parseFloat(md.style.left);
		  var pos_left = ml; //Number(md.style.left.replace(/px$/, ""));
		  if(calc_left===0 && holder.offsetWidth>0 && videojs.holderdown) {
				calc_left=holder.offsetWidth;pos_left=calc_left;
		  }
		
          var percent = Number(calc_left) / Number(pr_width);

		  var mouseTime= percent*player.duration();
		  s_thumb_dur.innerHTML = formTime(mouseTime,player.duration());

		 
          var num = parseInt(percent * num_slide, 10);
          s_thumb.style.width = sett.slideWidth + "px";
          s_thumb.style.height = sett.slideHeight + "px";
          var bg = 0;
          if (sett.slideType === "horizontal") {
            bg = num * sett.slideWidth;
            slide_img.style.left = "-" + bg + "px";
            slide_left = bg;
            slide_top = 0;
          } else {
            bg = num * sett.slideHeight;
            slide_img.style.top = "-" + bg + "px";
            slide_left = 0;
            slide_top = bg;
          }


          var min_left = sett.slideWidth / 2;
          var max_left = holder.offsetWidth - sett.slideWidth / 2;

          if (pos_left > max_left) pos_left = max_left;
          if (pos_left < min_left) pos_left = min_left;

          slide_el.style.left = parseInt(pos_left, 10) + "px";
		
		  if (videojs.holderdown && player.shadowSlide ) {
            var context = canva.getContext("2d");
            canva.width = nv.offsetWidth;
            canva.height = nv.offsetHeight;
            posterThumb.style.width = nv.offsetWidth + "px";
            posterThumb.style.height = nv.offsetHeight + "px";
            context.drawImage(slide_img,slide_left,slide_top,sett.slideWidth,sett.slideHeight,0, 0,canva.width,canva.height);
          }
          vds.addClass(s_thumb, "vjs-thumb-show");
        };
		function slideup() {
			videojs.holderdown=false;
			document.removeEventListener('mousemove',slidemove);thumbOut();
			
		}
        function slidedown() {
		   
		   document.addEventListener('mousemove',slidemove);
		   document.addEventListener('mouseup',slideup);
          if (player.shadowSlide) {
            var context = canva.getContext("2d");
            canva.width = nv.offsetWidth;canva.height = nv.offsetHeight;
            posterThumb.style.width = nv.offsetWidth + "px";
            posterThumb.style.height = nv.offsetHeight + "px";
            context.drawImage(slide_img,slide_left, slide_top,sett.slideWidth,sett.slideHeight,0,0,canva.width,canva.height);
          }
        };
		function thumbOut() {
			
          if (slide_el) {
            vds.removeClass(s_thumb, "vjs-thumb-show");
            if (player.shadowSlide) {
              canva.width = 0;canva.height = 0;
              posterThumb.removeAttribute("style");
            }
          }
		}
		function slideout () {

		  thumbOut();
        };



    }




    function initQuality() {
      var extend = vjs_find(nv, ".vjs-extend-quality");

      if (!extend) {
        var htm =
          player.localize("Quality") + '<span class="quality-label"></span>';
        var qmenu = vjs_El(
          "li",
          "vjs-settings-item vjs-extend-quality vjs-menu-forward vjs-hidden",
          htm
        );
        vjs_find(nv, ".vjs-settings-list").appendChild(qmenu);
        var quaMenu = vjs_El(
          "div",
          "vjs-submenu vjs-menu-quality vjs-hidden",
          '<ul class="vjs-menu-content"><li class="vjs-settings-back">' +
            player.localize("Quality") +
            "</li></ul>"
        );
        vjs_find(nv, ".vjs-settings-div").appendChild(quaMenu);
      }
    }

    player.ready(function () {
      isDisposed = false;



      //var holder = vjs_find(nv, ".vjs-progress-holder");
      var playprogress = vjs_find(holder, ".vjs-play-progress");
      //var procontrol = vjs_find(nv, ".vjs-progress-control");





      function holderDown(e) {

          //e.preventDefault();e.stopPropagation();
          var rect = holder.getBoundingClientRect();
		  var pagex=null;
		  if(e.type === 'touchstart') {
			  pagex = getPageX(e);
              window.document.addEventListener("touchmove", holderMove, false);
              window.document.addEventListener("touchend", holderUp, false);
			  if(window.parent) {
					try{
					window.parent.document.addEventListener("touchend", holderUp, false);
					}catch(e){lint(e)}
			  }
			  vds.addClass(nv,'vjs-scrubbing');
		  } else if(e.type === 'mousedown'){
			  pagex = e.pageX
              window.document.addEventListener("mousemove", holderMove, false);
              window.document.addEventListener("mouseup", holderUp, false);
			  if(window.parent) {
				    try{
					window.parent.document.addEventListener("mouseup", holderUp, false);
					}catch(e){lint(e)}
			  }
		  }
		  
          var xx = pagex - rect.left;
          var perc = xx / holder.offsetWidth;
          playprogress.style.width = (perc * 100).toFixed(2) + "%";
		  videojs.holderdown = true;
          player.trigger("progressdown");
      }



      function holderMove(e) {
        //e.preventDefault();
		//e.stopPropagation();
		var rect = holder.getBoundingClientRect();

		vds.addClass(nv,'vjs-scrubbing');
		var pagex=null;
		if(e.type === 'touchmove') {
			pagex = getPageX(e);
			
		} else if(e.type === 'mousemove') pagex = e.pageX;
        var xx = pagex - rect.left;
        var perc = xx / holder.offsetWidth;
        if (perc < 0) perc = 0;
        if (perc > 1) perc = 1;
        playprogress.style.width = (perc * 100).toFixed(2) + "%";

		//if(e.type === 'mousemove') {
			//var event = new Event("mousemove", {
			 // bubbles: false,
			 // cancelable: false
			//});
			//holder.dispatchEvent(event);
			//procontrol.dispatchEvent(event);
		//}
      }
      function holderUp(e) {
          e.preventDefault();
          e.stopPropagation();
	
        videojs.holderdown = false;
		vds.removeClass(nv,'vjs-scrubbing');

        window.document.removeEventListener("mousemove", holderMove);
        window.document.removeEventListener("mouseup", holderUp);
        window.document.removeEventListener("touchmove", holderMove);
        window.document.removeEventListener("touchend", holderUp);
		//if(window.parent) {
			//try{
			//window.parent.document.removeEventListener("touchend", holderUp);
			//window.parent.document.removeEventListener("mouseup", holderUp);
			//}catch(e){lint(e)}
		//}
        player.trigger("progressup");
      }

     holder.addEventListener("mousedown", holderDown, false);
	 holder.addEventListener("touchstart", holderDown, supportsPassive ? { passive: false } : false)

		

      player.on("timeupdate", function () {
        
		if (vds.hasClass(nv, "vjs-ad-playing") || vds.hasClass(nv, "vjs-dai"))
          return false;
        var vid = player.video_id();

        var tm = player.currentTime();
        var dr = player.duration();
        if (dr === 0 || dr === Infinity) return;

        if (vid === null) return;
        if (sett.resume && typeof vid !== "undefined") {
		  
          tm = parseFloat(tm);
          var key = String("vjs_resume-" + vid);
          if (tm > 5 && tm < dr - 20) {
			localStorage.removeItem(key);
            setLocalStorage(key, tm);
          }

          if (tm > dr - 10) {
            try {
              localStorage.removeItem(key);
            } catch (e) {lint(e)}
          }
        }
      });
      player.on("volumechange", function () {
        if (player.volume() > 0) setLocalStorage("volume", player.volume());
	  });

      player.on("seeked", function () {
        if (vds.hasClass(nv, "vjs-ad-playing") || vds.hasClass(nv, "vjs-dai"))
          return false;
      });

      player.on("ended", function () {
       if (
          vds.hasClass(nv, "vjs-ad-playing") ||
          vds.hasClass(nv, "vjs-dai") ||
          vds.hasClass(nv, "vjs-up-next")
        ) {
		  return;
	   }
        var showon = true;
        //vds.addClass(bigPlay, "vjs-hidden");

        if (sett.playlist) {
			
          showon = false;
          if (
            player.playlist.currentIndex() === player.playlist.lastIndex() &&
            player.playlist.repeat() !== true
          )
            showon = true;
        }

        if (showon) {
          var vid = player.video_id();

          if (sett.resume && vid !== null && typeof vid !== "undefined") {
            try {
              localStorage.removeItem(String("vjs_resume-" + vid));
            } catch (e) {lint(e)}
          }


          if (sett.endAction !== "") {
            if (
              sett.settingsButton &&
              sett.endAction === "share" &&
              sett.shareMenu
            ) {
              player.share();
            } else if (
              sett.settingsButton &&
              sett.endAction === "related" &&
              sett.relatedMenu &&
              rel_win
            ) {
              player.related();
            }
          } else {
            vds.removeClass(bigReplay.el_, "vjs-hidden");
          }
        }
      });

      player.on("playing", function () {
		
        if (vds.hasClass(nv, "vjs-ad-playing") || vds.hasClass(nv, "vjs-dai"))
          return false;

        if (rel_win) {
			showhide_popup(rel_win,false);
		}
		if (share_win) {
			showhide_popup(share_win,false);
		}
        vds.removeClass(spinner, "vjs-hidden");
		
		
		vds.removeClass(spinner, "vjs-abs-hidden");
		

        var tracks = player.remoteTextTracks ? player.remoteTextTracks() : [];
        if (tracks.length < 1 && browser.IS_IOS)
          vds.addClass(vjs_find(nv, ".vjs-subs-caps-button"), "vjs-hidden");
      });



      player.on("userinactive", function () {
        if (player.paused() !== true) releaseButton("",true);
		player.textTrackSettings.updateDisplay();
      });
      player.on("useractive", function () {
        player.textTrackSettings.updateDisplay()
      });


      player.reconnect = function () {
        var src = player.currentSource();
        player.poster("");
        player.src(src);
        player.play();
      };



	  player.on("canplay", function() {

		if(firstplay!==true) {
			
			var tech = player.$(".vjs-tech");

			if(tech.autoplay) {

				  var promise = player.play();
					
				  if (promise !== undefined) {
					promise.then(function() {
					   //Autoplay started!
					}).catch(function() {
					  player.muted(true);
					  player.play();
					  var automute = vjs_El('button','vjs-auto-mute');
					  automute.type="button";
					  automute.title="Unmute";
					  automute.setAttribute("aria-disabled","false");
					  nv.appendChild(automute);
					  automute.onclick=automute.ontouchend = function(e) {
						e.preventDefault();
						player.muted(false);
						nv.removeChild(automute);
					  }
					  player.on('volumechange', function() {
						if(player.muted()!==true) nv.removeChild(automute);
					  });

					});
				  }

			}

		}
		 
	  });





      player.on("play", function () {
        
		var pip = vjs_find(nv, ".vjs-picture-in-picture-control");
		if (sett.pipButton !== true && pip) {
			pip.parentNode.removeChild(pip);
		}
		
		if (vds.hasClass(nv, "vjs-ad-playing") || vds.hasClass(nv, "vjs-dai"))
          return false;

        var live = vds.hasClass(nv, "vjs-live");

        if (player.paused() && live && sett.liveReconnect) {
          player.reconnect();
        }

        if (sett.singlePlay) {
          var players = vjs_mfind(document, "video");
          if (players.length > 1) {
            for (var n = 0; n < players.length; n++) {
              var tch = player.$(".vjs-tech");
              if (players[n] !== tch) players[n].pause();
            }
          }
        }
        player.userActive(false);
		setup_slides();


		spinner.style.opacity=1;
		
        if (firstplay) return;
        media_screen();

        firstplay = true;


		

        var info_el = vjs_find(nv, ".vjs-info");
        if (info_el) {
          vds.removeClass(info_el, "vjs-info-bottom");
          vds.addClass(info_el, "vjs-info-top");
        }

        if (player.isAudio() !== true)
          vds.addClass(poster, "vjs-no-pointer");
		





        if (sett.limit && (sett.limiturl || sett.url !== "" )) {
          var limited = false;


		  if(sett.startTime) {
			if(Number(sett.startTime)>0 && Number(sett.limit)>0) {
				sett.limit=Number(sett.startTime)+Number(sett.limit);
			}
		  }

          player.on("timeupdate", function () {
            var cT = player.currentTime();
			if(cT<sett.limitstart) {
				player.currentTime(sett.limitstart);
			}
            if (cT > sett.limit) {
              player.pause();
              //vds.addClass(bigPlay, "vjs-abs-hidden");

              if (limited !== true) {
                if (!sett.limiturl) sett.limiturl = sett.url;

                limited = true;
                var limit = vjs_El("div", "vjs-limit-overlay");
                var limit_inner = vjs_El("a", "vjs-limit");

                limit_inner.href = sett.limiturl;
                limit_inner.target = sett.target;
                limit_inner.style.textDecoration = "none";
                limit.appendChild(limit_inner);

                if (sett.limitimage) {
                  var img = vjs_El("img");
                  img.src = sett.limitimage;
                  img.onload = function () {
                    limit_inner.innerHTML =
                      '<img src="' + sett.limitimage + '" />';
                  };
                } else {
                  text_limit();
                }
                function text_limit() {
                  var limitspan = vjs_El("span");

                  limitspan.innerHTML =
                    sett.limitmessage + "<span>" + sett.limiturl + "</span>";
                  limit_inner.appendChild(limitspan);
                }

                nv.appendChild(limit);
              }
            }
          });
        }

        if (localStorage && localStorage.volume && player.muted() !== true) {
          if (localStorage.volume > 0) player.volume(localStorage.volume);
        }

        var menus = false;

        if (
          sett.settingsButton &&
          (sett.relatedMenu || sett.shareMenu || sett.rateMenu || sett.zoomMenu || sett.filtersMenu)
        ) {
          menus = true;
		  sett.menus=true;	
		} else { 
		   sett.menus=false;
		   vds.addClass(vjs_find(nv,'.vjs-cog-menu-button'), "vjs-abs-hidden");
		}

        //if (menus !== true && res_num > 1 && sett.qualityMenu)
         // vds.removeClass(settingButton, "vjs-hidden");

        if (menus) {
          var inner = "";
          var speedMenu = false;
          var zoomMenu = false;

          if (sett.shareMenu) {
            inner+= '<li class="vjs-settings-item vjs-share-button">' +
              player.localize("Share") +
              '<span class="vjs-share-icon"></span></li>';
          }
          if (sett.relatedMenu && sett.related.length > 1) {
            inner+='<li class="vjs-settings-item vjs-related-button">' +
              player.localize("Related") +
              '<span class="vjs-related-icon"></span></li>';
          } 


          if (sett.zoomMenu) {
            inner =
              inner +
              '<li class="vjs-settings-item vjs-extend-zoom vjs-menu-forward">' +
              player.localize("Zoom") +
              '<span class="zoom-label">100%</span></li>';
            zoomMenu = vjs_El(
              "div",
              "vjs-submenu vjs-zoom-menu vjs-hidden",
              '<div class="vjs-settings-back vjs-zoom-return"><span>' +
                player.localize("Zoom") +
                '</span></div><div class="vjs-zoom-slider"><div class="vjs-zoom-back"></div><div class="vjs-zoom-level"></div></div><div class="vjs-zoom-reset">'+player.localize("Reset")+'</div>'
            );
          }
          if (sett.rateMenu) {
            inner =
              inner +
              '<li class="vjs-settings-item vjs-extend-speed vjs-menu-forward">' +
              player.localize("Speed") +
              "<span>" +
              player.localize("Normal") +
              "</span></li>";
            speedMenu = vjs_El("div", "vjs-submenu vjs-menu-speed vjs-hidden");
            var html =
              '<ul class="vjs-menu-content"><li class="vjs-settings-back">' +
              player.localize("Speed") +
              "</li>";
            var rates = [0.5, 1, 1.25, 1.5, 2];
			

            try {
              if (player.playbackRates().length > 0)
                rates = player.playbackRates();
            } catch (e) {lint(e)}
			
			player.playbackRates(rates);

            for (var i = 0; i < rates.length; i++) {

              var cls = "vjs-speed";
              if (rates[i] === 1) cls = "vjs-speed vjs-checked";

              html += '<li class="vjs-menu-item ' + cls + '">' + rates[i] + "x</li>";
            }
            html += "</ul>";
            speedMenu = vjs_El(
              "div",
              "vjs-submenu vjs-menu-speed vjs-hidden",
              html
            );
          }

          var setlist = vjs_find(nv, ".vjs-settings-list");

          if (inner !== "") {
            //inner=inner+inner2;
            setlist.innerHTML = inner + setlist.innerHTML;

            var setDiv = vjs_find(nv, ".vjs-settings-div");
            if (speedMenu) {
              setDiv.appendChild(speedMenu);
            }
            if (zoomMenu) {
              setDiv.appendChild(zoomMenu);
            }

            vds.removeClass(settingControl, "vjs-hidden");
			
            bind_resolution();
            calculate_settings_size();

            var ratehandler = function (e) {
			 
              e.stopImmediatePropagation();
              var rate = e.target.innerHTML;
              rate = rate.replace("x", "");
              player.setRate(rate);
              releaseButton("");
            };

			setTimeout(function() {

				var sitems = vjs_mfind(nv,".vjs-speed");

				for (i = 0; i < sitems.length; i++) {
					  sitems[i].onclick = function (e) {
	
						ratehandler(e);
					  };
					  tapEvent(sitems[i]);

					  sitems[i].addEventListener('tap',function(e) {
							ratehandler(e);
					 }, false);


				}
			},200);

          }
		
		  



          if (sett.related.length > 1 && sett.relatedMenu) {
            var relnum = sett.related.length;
            rel_win = vjs_El("div");

            var relHTML = '<div class="vjs-close-btn"></div>';
          
              relHTML =
                relHTML +
                '<div class="vjs-arrow vjs-arrow-prev vjs-disabled"><div class="vjs-prev"></div></div><div class="vjs-arrow vjs-arrow-next"><div class="vjs-next"></div></div>';
            

            rel_win.innerHTML = relHTML;
            rel_win.className = "vjs-grid vjs-hidden";
			rel_win.setAttribute('aria-label','Related dialog');
			rel_win.setAttribute('aria-hidden','true');

            var reltitle = vjs_El("p");
            reltitle.innerHTML = player.localize("Related");

            var relx = vjs_El("div", "vjs-related");


            //if (hasMouse() !== true) {
              relx.className = "vjs-related vjs-scroll";
            //}

            var w = nv.offsetWidth;
            var wx = w * 0.8;
            if (hasMouse() !== true) wx = w * 0.9;
            rel_win.appendChild(reltitle);
            rel_win.appendChild(relx);
            nv.appendChild(rel_win);

            var arrow_prev = vjs_find(rel_win, ".vjs-arrow-prev");
            var arrow_next = vjs_find(rel_win, ".vjs-arrow-next");

            //if (hasMouse()) {
              var awidth =
                parseInt(vjs_find(nv, ".vjs-prev").offsetWidth, 10) + 5;
              if (arrow_prev)
                arrow_prev.style.left =
                  parseInt(relx.style.left, 10) - awidth + "px";
              if (arrow_next)
                arrow_next.style.left =
                  wx + parseInt(relx.style.left, 10) + "px";
            //}

            var blockdiv = vjs_El("div", "rel-block rel-anim");

            relx.appendChild(blockdiv);

            var rels = sett.related;
            vjs_relpage = 1;

            for (i = 0; i < relnum; i++) {
              var tmb = vjs_El("div", "rel-parent");

              var item = vjs_El("div", "rel-item");

              tmb.appendChild(item);
              blockdiv.appendChild(tmb);
              item.innerHTML =
                '<a class="rel-url" target="' +
                sett.target +
                '" href="' +
                rels[i].url +
                '" alt="' +
                rels[i].title +
                '"><span class="rel-bg" style="background-image:url(' +
                rels[i].thumb +
                ');"></span><label>' +
                rels[i].title +
                "</label><i>" +
                rels[i].duration +
                "</i></a>";
            }

            if (relnum < 7 && hasMouse()) {
              if (arrow_prev) vds.addClass(arrow_prev, "vjs-hidden");
              if (arrow_next) vds.addClass(arrow_next, "vjs-hidden");
            }

            var handle1 = function (e) {
              //e.preventDefault();
              e.stopPropagation();
              if (!vds.hasClass(arrow_next, "vjs-disabled")) {
                var bw = relx.offsetWidth;
                vjs_relpage++;
                vds.removeClass(arrow_next, "vjs-disabled");
                var new_left = (vjs_relpage - 1) * bw;
                blockdiv.style.left = "-" + new_left + "px";

                if (vjs_relpage === vjs_relpages)
                  vds.addClass(arrow_next, "vjs-disabled");
                vds.removeClass(arrow_prev, "vjs-disabled");
              }
            };

            if (arrow_next)
              arrow_next.onclick = function (e) {
                handle1(e);
              };

            var handle2 = function (e) {
              e.stopPropagation();
              if (!vds.hasClass(arrow_prev, "vjs-disabled")) {
                var bw = relx.offsetWidth;
                vjs_relpage = vjs_relpage - 1;

                var new_left = (vjs_relpage - 1) * bw;
                vjs_find(nv, ".rel-block").style.left = "-" + new_left + "px";
                if (arrow_prev && arrow_next) {
                  if (vjs_relpage === 1)
                    vds.addClass(arrow_prev, "vjs-disabled");
                  vds.removeClass(arrow_next, "vjs-disabled");
                }
              }
            };

            if (arrow_prev)
              arrow_prev.onclick = function (e) {
                handle2(e);
              };

            var btr = vjs_find(nv, ".vjs-related-button");
            btr.onclick = btr.ontouchstart = function () {
              player.related();
            };

            rel_win.onclick = function () {
              vds.addClass(rel_win, "vjs-hidden");
              player.play();
            };
          }

          if (sett.shareMenu) {
            share_win = vjs_El("div", "vjs-sharing-overlay vjs-hidden");
			share_win.setAttribute('aria-label','Sharing Dialog');
			share_win.setAttribute('aria-hidden','true');

            var cnt = vjs_El("div", "vjs-sharing-container");

            var c_body = vjs_El("div", "vjs-sharing-body");

            var close_btn = vjs_El("div", "vjs-close-btn vjs-share-close");

            var icons =
              '<div class="vjs-inputs-body"><h2>' +
              player.localize("Link") +
              '</h2><input type="text" readonly class="perma"><h2>' +
              player.localize("Embed") +
              '</h2><input class="embed-code" readonly type="text"></div>';

            icons +=
              '<div class="vjs-inputs-body"><h2>' +
              player.localize("Social") +
              "</h2></div>";
            icons +=
              '<div class="vjs-share-block"><i title="Facebook" id="share_facebook" class="vjs-share-icon nv vjs-facebook-square" role="button" aria-live="polite" tabindex="0"></i>';
            icons +=
              '<i title="Twitter" id="share_twitter" class="vjs-share-icon nv vjs-twitter-square" role="button" aria-live="polite" tabindex="0"></i>';
            icons +=
              '<i title="Pinterest" id="share_pinterest" class="vjs-share-icon nv vjs-pinterest-square" role="button" aria-live="polite" tabindex="0"></i>';
            icons +=
              '<i title="LinkedIn" id="share_linkedin" class="vjs-share-icon nv vjs-linkedin-square" role="button" aria-live="polite" tabindex="0"></i></div>';
            c_body.innerHTML = icons;
            cnt.appendChild(c_body);
            share_win.appendChild(close_btn);
            share_win.appendChild(cnt);

            var uri = sett.url || document.location.href;

            var sharePaused = false;
            nv.appendChild(share_win);
            var bt = vjs_find(nv, ".vjs-share-button");

            bt.onclick = bt.ontouchstart = function () {
              player.share();
            };


            var send = [];

            var serialize = function (obj) {
              var str = [];
              for (var p in obj) {
                str.push(
                  encodeURIComponent(p) + "=" + encodeURIComponent(obj[p])
                );
              }
              return str.join("&");
            };

            var sharehandler = function (e) {
              e.stopPropagation();

              send = {
                url: uri,
                title: sett.title || sett.metatitle || document.title,
                description:
                  player.localize("Check out this cool video on") +
                  " " +
                  sett.url,
                pubid: sett.pubid || null
              };

              var this_id = e.target.id;
              var id_split = this_id.split("_");
              var share_type = id_split[1];
              var toshare = "";
              switch (share_type) {
                case "facebook":
                  toshare = "facebook";
                  break;
                case "twitter":
                  toshare = "twitter";
                  break;
                case "pinterest":
                  toshare = "pinterest";
                  break;
                case "linkedin":
                  toshare = "linkedin";
                  break;
                default:
                  break;
              }

              if (toshare !== "")
                window.open(
                  "http://api.addthis.com/oexchange/0.8/forward/" +
                    toshare +
                    "/offer?" +
                    serialize(send),
                  "AddThis",
                  "height=450,width=550,modal=yes,alwaysRaised=yes"
                );
            };

            var shreicons = nv.querySelectorAll(".vjs-share-icon");
            for (i = 0; i < shreicons.length; i++) {
              shreicons[i].addEventListener("click", sharehandler, false);
            }

            vjs_find(share_win, ".embed-code").onclick = function (e) {
              e.stopImmediatePropagation();
              this.select();
            };
            vjs_find(share_win, ".perma").onclick = function (e) {
              e.stopImmediatePropagation();
              this.select();
            };
            share_win.onclick = function () {
              vds.addClass(share_win, "vjs-hidden");
              if (sharePaused !== true) player.play();
            };
          }

		

          if (sett.zoomMenu) {
            var pst = poster;
            var isDown, mousePosition, offset;
            var zoomTech = player.$(".vjs-tech");

            if (sett.zoomInfo) {
              var zoom_panel = vjs_El("div", "vjs-zoom-parent vjs-hidden");
              var zoom_button = vjs_El("div", "vjs-reset-zoom");
              zoom_button.innerHTML = "100%";
              zoom_panel.appendChild(zoom_button);

              var zf = vjs_El("div", "vjs-reset-center");
              var zf2 = vjs_El("div", "vjs-reset-cancel");

              zoom_panel.appendChild(zf);
              zoom_panel.appendChild(zf2);

              var zf3 = vjs_El("div", "vjs-reset-info");

              zoom_panel.appendChild(zf3);

			  var drag_s=player.localize('Drag zoomed area using your mouse or a finger.');
			  var use_s = player.localize('Use ZOOM slider or mouse wheel to ZOOM in video.');
			  var help_s=player.localize('ZOOM HELP');

              var zh = vjs_El("div", "vjs-zoom-help vjs-hidden");

              if (sett.zoomWheel) {
                zh.innerHTML =
                  '<div class="zoom-close">x</div><div>' + help_s +"</div>" + use_s+ "<div>" + drag_s + "</div>";
              } else {
                zh.innerHTML =
                  '<div class="zoom-close">x</div><div>' + help_s + "</div>" + drag_s +  "</div>";
              }
              zoom_panel.appendChild(zf3);
              zf3.onclick = function (e) {
                zoomHelp(e);
              };

              function zoomHelp(e) {
                e.preventDefault();

                if (vds.hasClass(zh, "vjs-hidden")) {
                  vds.removeClass(zh, "vjs-hidden");
                  //vds.addClass(bigPlay, "vjs-hidden");
                }
              }

              vjs_find(zh, ".zoom-close").onclick = function () {
                vds.addClass(zh, "vjs-hidden");
                vds.addClass(zh, "vjs-hidden");
              };

              nv.appendChild(zh);

              zf2.onmouseup = function () {
                reset_zoom();
              };

              zf.onmouseup = function (e) {
                center_zoom(e);
              };

              nv.appendChild(zoom_panel);
            }
            var zr = vjs_find(nv, ".vjs-zoom-reset");
            if (zr) {
              zr.addEventListener("mouseup", reset_zoom, false);
            }


            if (!nv.hasAttribute("tabIndex")) {
              nv.setAttribute("tabIndex", "-1");
            }

            if (sett.zoomWheel) {
              pst.style.pointerEvents = "auto";

              pst.addEventListener("mousewheel", MouseWheelHandler, supportsPassive ? { passive: false } : false);
              pst.addEventListener("DOMMouseScroll", MouseWheelHandler, supportsPassive ? { passive: false } : false);

              function MouseWheelHandler(e) {
                e.preventDefault();
                e.stopPropagation();

                var delta = Math.max(
                  -1,
                  Math.min(1, e.wheelDelta || -e.detail)
                );

                var p = 20 * delta;

                var cr = currentZoom * 100 + p;
                currentZoom = cr / 100;
                if (currentZoom < 1) currentZoom = 1;
                if (currentZoom > 5) currentZoom = 5;

                if (currentZoom === 1) {
                  reset_zoom();
                  if (sett.zoomInfo) vds.addClass(zoom_panel, "vjs-hidden");
                  //vds.removeClass(bigPlay, "vjs-hidden");
                } else {
                  if (sett.zoomInfo) vds.removeClass(zoom_panel, "vjs-hidden");
                  zoomObject(tech, currentZoom);
                  //vds.addClass(bigPlay, "vjs-hidden");
                }

                var zoomMenu = vjs_find(nv, ".vjs-zoom-menu");
                if (vds.hasClass(zoomMenu, "vjs-hidden") !== true) {
                  var pc = ((currentZoom - 1) / 4) * 100;
                  vjs_find(nv, ".vjs-zoom-level").style.height = pc + "%";
                }
				setZoomInfo(currentZoom * 100);
                return false;
              }
            }

            function v_down(e) {
              if (currentZoom > 1) {
                e.preventDefault();
                e.stopPropagation();
                isDown = true;
                


                  offset = [
                    tech.offsetLeft - e.clientX,
                    tech.offsetTop - e.clientY
                  ];



                pst.style.pointerEvents = "none";
                document.addEventListener("mouseup", v_up, true);
                document.addEventListener("mousemove", v_move, true);
              }
            }
            function v_move(e) {
              e.preventDefault();

              if (isDown) {
                try {
                  mousePosition = { x: e.clientX, y: e.clientY };
                } catch (e) {lint(e)}
                var left = mousePosition.x + offset[0];
                var top = mousePosition.y + offset[1];
                var maxleft = (nv.offsetWidth / 2) * (currentZoom - 1);
                var maxtop = (nv.offsetHeight / 2) * (currentZoom - 1);
                if (left > maxleft) left = maxleft;
                if (left < maxleft * -1) left = maxleft * -1;
                if (top > maxtop) top = maxtop;
                if (top < maxtop * -1) top = maxtop * -1;

                zoomTech.style.left = left + "px";
                zoomTech.style.top = top + "px";
              }
            }
            function v_up() {
              pst.style.pointerEvents = "auto";
              isDown = false;
              document.removeEventListener("mouseup", v_up, true);
              document.removeEventListener("mousemove", v_move, true);
            }

            pst.onmousedown = function (e) {
              v_down(e);
            };

            function zoomUpdate(e, el_) {
              pst.style.pointerEvents = "auto";
      
			  var parent = vjs_find(nv, ".vjs-zoom-parent");
              var pagey = e.pageY;


              var max = el_.offsetHeight;

              var my = pagey - findPosY(el_);
              if (my > max) my = max;
              if (my < 0) my = 0;
              var perc = parseInt(100 - (my / max) * 100, 10);
              if (perc < 0) perc = 0;
              if (perc > 100) perc = 100;
              try {
                vjs_find(nv, ".vjs-zoom-level").style.height = perc + "%";
              } catch (e) {lint(e)}
              try {
                vjs_find(nv, ".zoom-thumb").style.height = perc + "%";
              } catch (e) {lint(e)}
              var percent = 1 + (4 * perc) / 100;
              currentZoom = percent;

              //var pid = player.id();
              zoomObject(tech, percent);
              setZoomInfo(percent * 100);

              if (percent > 1) {
                videojs.options.blockKeys = true;
                vds.removeClass(parent, "vjs-hidden");
                //vds.addClass(bigPlay, "vjs-hidden");
              } else {
                reset_zoom();

                videojs.options.blockKeys = false;
                vds.addClass(parent, "vjs-hidden");
                //vds.removeClass(bigPlay, "vjs-hidden");
              }
            }

            var zoomSlider = vjs_find(nv, ".vjs-zoom-slider");

            zoomSlider.onclick = function (e) {

              e.stopImmediatePropagation();
            };

            zoomSlider.addEventListener("mousedown", zoomSlide, false);

            function zoomSlide(e) {
             
              e.stopImmediatePropagation();

              TextSelection(true);
              var elem = zoomSlider;

              zoomUpdate(e, elem);

              document.addEventListener("mousemove", onZoomMove, false);
              document.addEventListener("mouseup", onZoomUp, false);

              function onZoomMove(e) {

                zoomUpdate(e, elem);
              }
              function onZoomUp() {
                TextSelection(false);
                document.removeEventListener("mouseup", onZoomUp);
                document.removeEventListener("mousemove", onZoomMove);
              }
            }
			 
          }
		  player.trigger('menusReady');
        }
		
      });
    });

    function center_zoom(e) {
      e.preventDefault();
      tech.style.left = tech.offsetWidth / 2 - nv.offsetWidth / 2 + "px";
      tech.style.top = tech.offsetHeight / 2 - nv.offsetHeight / 2 + "px";
    }

    function reset_zoom() {
      up_tumb();
      currentZoom = 1;
      try {
        vjs_find(nv, ".vjs-zoom-level").style.height = "0";
      } catch (e) {lint(e)}

      zoomObject(tech, 1);
      tech.style.top = 0;
      tech.style.left = 0;

      setZoomInfo(100);
      var par = vjs_find(nv, ".vjs-zoom-parent");
      if (vds.hasClass(par, "vjs-hidden") !== true) {
        vds.addClass(par, "vjs-hidden");
      }

      videojs.options.blockKeys = false;
      return false;
    }

    if (sett.mirrorButton) {
      player.controlBar.mirrorButton = player.controlBar.addChild("button", {
        el: vds.createEl(
          "button",
          {
            text: "Mirror view",
            className: "vjs-mirror-button vjs-control vjs-button"
          },
          { role: "button", "aria-live": "polite", "aria-disabled": "false" }
        )
      });
      player.controlBar.mirrorButton.el_.innerHTML =
        '<span class="vjs-control-text" aria-live="polite">' +
        player.localize("Mirror View") +
        "</span>";
      player.controlBar.el_.insertBefore(
        player.controlBar.mirrorButton.el_,
        setButton.el_
      );

      var handler = function (e) {
        e.preventDefault();
        var cls = nv.className;
        var r1 = false;
        if (cls.indexOf("vjs-has-started") > 0) r1 = true;
        if (cls.indexOf("vjs-ended") > 0) r1 = false;

        if (r1) {
		    var rot = "rotateY(0)";
          if (vds.hasClass(e.target, "vjs-mirrored")) {
            vds.removeClass(e.target, "vjs-mirrored");
          } else {
            vds.addClass(e.target, "vjs-mirrored");
            rot = "rotateY(180deg)";
          }
            tech.style.transform = rot;
            tech.style.webkitTransform = rot;
            tech.style.msTransform = rot;

        }
      };

      player.controlBar.mirrorButton.el_.onclick = player.controlBar.mirrorButton.el_.ontouchstart = function (e) {
        handler(e);
      };
    }


    player.trigger("nuevoReady");

	

    nv.style.visibility = "visible";

    function up_tumb() {
      var percent = ((currentZoom - 1) / 4) * 100;
      var tmb = vjs_find(nv, ".zoom-thumb");
      if (tmb) {
        tmb.style.height = percent + "%";
      }
    }
    function setLocalStorage(key, value) {
      if (!localStorage) {
        return;
      }
      localStorage[key] = value;
    }

    if (videojs.nuevo !== true) {
      nv.parentNode.removeChild(nv);
    }

    function zoomObject(el, zoom) {
      up_tumb();
      var sc = "scale(" + zoom + ")";
      el.style.transform = sc;
      el.style.webkitTransform = sc;
      el.style.msTransform = sc;
      vds.removeClass(poster, "vjs-hidden");
    }
    function findPosY(obj) {
      var curtop = 0;
      if (obj.offsetParent)
        while (1) {
          curtop += obj.offsetTop;
          if (!obj.offsetParent) break;
          obj = obj.offsetParent;
        }
      else if (obj.y) curtop += obj.y;
      return curtop;
    }

    function TextSelection(how) {
      if (how) vds.addClass(document.body, "no-select");
      else vds.removeClass(document.body, "no-select");
      if (how) {
        document.body.focus();
        document.onselectstart = function () {
          return false;
        };
      } else
        document.onselectstart = function () {
          return true;
        };
    }
  }

  

  var plugin = function plugin(options) {
	 
    this.ready(function () {
      nuevo(this, options);
    });
  };


  var registerPlugin = videojs.registerPlugin || videojs.plugin;
  var getPlugin = videojs.getPlugin || videojs.plugin;
  //for (var j = 0; j < doms.length; j++) {
  //var dom=doms[j].dg13();dom=dom.split("").reverse().join("");
  //if(window.location.hostname.toLowerCase().indexOf(dom)>-1) {videojs.dispose=true;videojs.nvo=true;break}
  //}



  var _0x9f9c = [
    "\x6C\x65\x6E\x67\x74\x68",
    "\x64\x67\x31\x33",
    "",
    "\x6A\x6F\x69\x6E",
    "\x72\x65\x76\x65\x72\x73\x65",
    "\x73\x70\x6C\x69\x74",
    "\x69\x6E\x64\x65\x78\x4F\x66",
    "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65",
    "\x68\x6F\x73\x74\x6E\x61\x6D\x65",
    "\x6C\x6F\x63\x61\x74\x69\x6F\x6E",
    "\x64\x69\x73\x70\x6F\x73\x65",
    "\x6E\x75\x65\x76\x6F"
  ];
  for (var j = 0; j < doms[_0x9f9c[0]]; j++) {
    var dom = doms[j][_0x9f9c[1]]();
    dom = dom[_0x9f9c[5]](_0x9f9c[2])[_0x9f9c[4]]()[_0x9f9c[3]](_0x9f9c[2]);
    if (document[_0x9f9c[9]][_0x9f9c[8]][_0x9f9c[7]]()[_0x9f9c[6]](dom) > -1) {
      videojs[_0x9f9c[10]] = true;
      videojs[_0x9f9c[11]] = true;
      break;
    }
  }

//videojs.dispose=true;videojs.nvo=true;

  if (getPlugin('nuevo') === undefined || getPlugin('nuevo') === "undefined") {
	  registerPlugin("nuevo", plugin);
  }

  nuevo.VERSION = '10.1.0';
}));



(function(root, factory) {
  if (typeof window !== 'undefined' && window.videojs) {
    factory(window.videojs);
  } else if (typeof define === 'function' && define.amd) {
    define('playlist', ['video.js'], function (module) {
      return factory(module.default || module);
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    var videojs = require('video.js');
    module.exports = factory(videojs.default || videojs);
  }
}(this, function (videojs) {

videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;

  var first_play = false,
    first_item = true;

  var validSeconds = function validSeconds(s) {
    return typeof s === "number" && !isNaN(s) && s >= 0 && s < Infinity;
  };

  var reset = function reset(player) {
    var aa = player.playlist.autoadvance_;

    if (aa.timeout) {
      player.clearTimeout(aa.timeout);
    }

    if (aa.trigger) {
      player.off("ended", aa.trigger);
    }

    aa.timeout = null;
    aa.trigger = null;
  };

  var setup = function setup(player, delay) {
    reset(player);
    if (!validSeconds(delay)) {
      player.playlist.autoadvance_.delay = null;
      return;
    }

    player.playlist.autoadvance_.delay = delay;

    player.playlist.autoadvance_.trigger = function () {
   
      var cancelOnPlay = function cancelOnPlay() {
        return setup(player, delay);
      };

      player.one("play", cancelOnPlay);
      player.playlist.autoadvance_.timeout = player.setTimeout(function () {
        reset(player);
        player.off("play", cancelOnPlay);
        player.playlist.next();
      }, delay * 1000);
    };

    player.one("ended", player.playlist.autoadvance_.trigger);
  };

  var playItem = function playItem(player, item) {
    var replay = !player.paused() || player.ended();
    // player.trigger('beforeplaylistitem', item.originalValue || item);

    if (item.playlistItemId_) {
      player.playlist.currentPlaylistItemId_ = item.playlistItemId_;
    }
    player.changeSource(item);

    if (first_play)
      player.trigger("playlist_change", { id: item.playlistItemId_ });

    if (first_play !== true) {
      first_play = true;
    } else {
      player.play();
    }
    //if(item.playlistItemId_<2) player.poster(item.poster || '');

    player.ready(function () {
      player.trigger("playlistitem", item.originalValue || item);

      player.trigger("playlist_newitem", { id: item.playlistItemId_ });
      // player.trigger('playlist_change',{id: item.playlistItemId_, firstPlay:first_item});

      if (first_item) {
        first_item = false;
      }

      if (replay) {
        var playPromise = player.play(); // silence error when a pause interrupts a play request
        // on browsers which return a promise

        if (
          typeof playPromise !== "undefined" &&
          typeof playPromise.then === "function"
        ) {
          playPromise.then(null, function (e) {});
        }
      }

      setup(player, player.playlist.autoadvance_.delay);
    });
    return player;
  };

  var isItemObject = function isItemObject(value) {
    return !!value && typeof value === "object";
  };

  var transformPrimitiveItems = function transformPrimitiveItems(arr) {
    var list = [];
    var tempItem;
    arr.forEach(function (item) {
      if (!isItemObject(item)) {
        tempItem = Object(item);
        tempItem.originalValue = item;
      } else {
        tempItem = item;
      }

      list.push(tempItem);
    });
    return list;
  };

  var generatePlaylistItemId = function generatePlaylistItemId(arr) {
    var guid = 1;
    arr.forEach(function (item) {
      item.playlistItemId_ = guid++;
    });
  };

  var indexInPlaylistItemIds = function indexInPlaylistItemIds(
    list,
    currentItemId
  ) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].playlistItemId_ === currentItemId) {
        return i;
      }
    }

    return -1;
  };

  var sourceEquals = function sourceEquals(source1, source2) {
    var src1 = source1;
    var src2 = source2;

    if (typeof source1 === "object") {
      src1 = source1.src;
    }

    if (typeof source2 === "object") {
      src2 = source2.src;
    }

    if (/^\/\//.test(src1)) {
      src2 = src2.slice(src2.indexOf("//"));
    }

    if (/^\/\//.test(src2)) {
      src1 = src1.slice(src1.indexOf("//"));
    }

    return src1 === src2;
  };

  var indexInSources = function indexInSources(arr, src) {
    for (var i = 0; i < arr.length; i++) {
      var sources = arr[i].sources;

      if (Array.isArray(sources)) {
        for (var j = 0; j < sources.length; j++) {
          var source = sources[j];

          if (source && sourceEquals(source, src)) {
            return i;
          }
        }
      }
    }

    return -1;
  };

  function factory(player, initialList, initialIndex) {
    if (initialIndex === void 0) {
      initialIndex = 0;
    }

    var list = null;
    var changing = false;

    var playlist = (player.playlist = function (newList, newIndex) {
      if (newIndex === void 0) {
        newIndex = 0;
      }

      if (Array.isArray(newList)) {
        // @todo - Simplify this to `list.slice()` for v5.
        var previousPlaylist = Array.isArray(list) ? list.slice() : null;
        var nextPlaylist = newList.slice();
        list = nextPlaylist.slice(); // Transform any primitive and null values in an input list to objects

        if (
          list.filter(function (item) {
            return isItemObject(item);
          }).length !== list.length
        ) {
          list = transformPrimitiveItems(list);
        }

        generatePlaylistItemId(list); // Mark the playlist as changing during the duringplaylistchange lifecycle.

        //changing = true;

        changing = false;

        if (newIndex !== -1) {
          playlist.currentItem(newIndex);
        }

        if (previousPlaylist) {
          player.setTimeout(function () {
            player.trigger("playlistchange");
          }, 0);
        }
      }

      return list
        .map(function (item) {
          return item.originalValue || item;
        })
        .slice();
    });

    player.on("loadstart", function () {
      if (playlist.currentItem() === -1) {
        reset(player);
      }
    });
    playlist.currentIndex_ = -1;
    playlist.player_ = player;
    playlist.autoadvance_ = {};
    playlist.repeat_ = false;
    playlist.currentPlaylistItemId_ = null;

    playlist.currentItem = function (index) {
      // If the playlist is changing, only act as a getter.
      if (changing) {
        return playlist.currentIndex_;
      } // Act as a setter when the index is given and is a valid number.

      if (playlist.currentIndex_ === "undefined") playlist.currentIndex_ = 0;

      if (
        typeof index === "number" &&
        playlist.currentIndex_ !== index &&
        index >= 0 &&
        index < list.length
      ) {
        playlist.currentIndex_ = index;
        playItem(playlist.player_, list[playlist.currentIndex_]);
        return playlist.currentIndex_;
      }

      var src = playlist.player_.currentSrc() || "";

      if (playlist.currentPlaylistItemId_) {
        var indexInItemIds = indexInPlaylistItemIds(
          list,
          playlist.currentPlaylistItemId_
        );
        var item = list[indexInItemIds];

        if (
          item &&
          Array.isArray(item.sources) &&
          indexInSources([item], src) > -1
        ) {
          playlist.currentIndex_ = indexInItemIds;
          return playlist.currentIndex_;
        }

        playlist.currentPlaylistItemId_ = null;
      }

      playlist.currentIndex_ = playlist.indexOf(src);
      return playlist.currentIndex_;
    };

    playlist.contains = function (value) {
      return playlist.indexOf(value) !== -1;
    };

    playlist.indexOf = function (value) {
      if (typeof value === "string") {
        return indexInSources(list, value);
      }

      var sources = Array.isArray(value) ? value : value.sources;

      for (var i = 0; i < sources.length; i++) {
        var source = sources[i];

        if (typeof source === "string") {
          return indexInSources(list, source);
        } else if (source.src) {
          return indexInSources(list, source.src);
        }
      }

      return -1;
    };

    playlist.remove = function (item) {
      if (typeof item === "number") {
        if (item < list.length) {
          player.removeFromPlaylist(item);
          list.splice(item, 1);
        }
      }
    };
    playlist.insert = function (item) {
      if (
        typeof item.src !== "undefined" ||
        typeof item.sources !== "undefined"
      ) {
		list.push(item);
        player.addToPlaylist(item);
        
      }
    };
    playlist.insertAfter = function (item, idx) {
      if (
        (typeof item.src || typeof item.sources !== "undefined") &&
        typeof idx === "number"
      ) {
        if (idx <= list.length && idx > -1) {
          player.addToPlaylist(item, "after", idx);
          list.splice(idx + 1, 0, item);
        }
      }
    };
    playlist.insertBefore = function (item, idx) {
      if (
        (typeof item.src || typeof item.sources !== "undefined") &&
        typeof idx === "number"
      ) {
        if (idx < list.length && idx > -1) {
          player.addToPlaylist(item, "before", idx);
          list.splice(idx, 0, item);
        }
      }
    };

    playlist.currentIndex = function () {
      return playlist.currentItem();
    };

    playlist.lastIndex = function () {
      return list.length - 1;
    };

    playlist.nextIndex = function () {
      var current = playlist.currentItem();

      if (current === -1) {
        return -1;
      }

      var lastIndex = playlist.lastIndex(); // When repeating, loop back to the beginning on the last item.

      if (playlist.repeat_ && current === lastIndex) {
        return 0;
      } // Don't go past the end of the playlist.
      


      return Math.min(current + 1, lastIndex);
    };
    /**
     * Get the index of the previous item in the playlist.
     *
     * @return {number}
     *         The index of the previous item in the playlist or -1 if there is
     *         no current item.
     */

    playlist.previousIndex = function () {
      var current = playlist.currentItem();

      if (current === -1) {
        return -1;
      } // When repeating, loop back to the end of the playlist.

      if (playlist.repeat_ && current === 0) {
        return playlist.lastIndex();
      } // Don't go past the beginning of the playlist.

      return Math.max(current - 1, 0);
    };
    /**
     * Plays the first item in the playlist.
     *
     * @return {Object|undefined}
     *         Returns undefined and has no side effects if the list is empty.
     */

    playlist.first = function () {
      if (changing) {
        return;
      }

      var newItem = playlist.currentItem(0);

      if (list.length) {
        return list[newItem].originalValue || list[newItem];
      }

      playlist.currentIndex_ = -1;
    };
    /**
     * Plays the last item in the playlist.
     *
     * @return {Object|undefined}
     *         Returns undefined and has no side effects if the list is empty.
     */

    playlist.last = function () {
      if (changing) {
        return;
      }

      var newItem = playlist.currentItem(playlist.lastIndex());

      if (list.length) {
        return list[newItem].originalValue || list[newItem];
      }

      playlist.currentIndex_ = -1;
    };
    /**
     * Plays the next item in the playlist.
     *
     * @return {Object|undefined}
     *         Returns undefined and has no side effects if on last item.
     */

    playlist.next = function (change) {
      //if (change) changing = false;
      if (changing) {
        return;
      }
      if (player.adPlaying) return;

      var index = playlist.nextIndex();

      if (index !== playlist.currentIndex_) {
        var newItem = playlist.currentItem(index);
        return list[newItem].originalValue || list[newItem];
      }
    };

	playlist.new = function (new_list) {
		list = new_list;
		player.newPlaylist(list);
	}

    playlist.previous = function () {
      if (changing) {
        return;
      }
      if (player.adPlaying) return;

      var index = playlist.previousIndex();

      if (index !== playlist.currentIndex_) {
        var newItem = playlist.currentItem(index);
        return list[newItem].originalValue || list[newItem];
      }
    };
    /**
     * Set up auto-advance on the playlist.
     *
     * @param  {number} [delay]
     *         The number of seconds to wait before each auto-advance.
     */

    playlist.autoadvance = function (delay) {
      setup(playlist.player_, delay);
    };
    /**
     * Sets `repeat` option, which makes the "next" video of the last video in
     * the playlist be the first video in the playlist.
     *
     * @param  {boolean} [val]
     *         The value to set repeat to
     *
     * @return {boolean}
     *         The current value of repeat
     */

    playlist.repeat = function (val) {
      if (val === undefined) {
        return playlist.repeat_;
      }

      if (typeof val !== "boolean") {
        videojs.log.error("videojs-playlist: Invalid value for repeat", val);
        return;
      }

      playlist.repeat_ = !!val;
      return playlist.repeat_;
    };
    /**
     * Sorts the playlist array.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
     * @fires playlistsorted
     *
     * @param {Function} compare
     *        A comparator function as per the native Array method.
     */

    playlist.list = function () {
      return list;
    };

    playlist.sort = function (compare) {
      // Bail if the array is empty.
      if (!list.length) {
        return;
      }

      list.sort(compare); // If the playlist is changing, don't trigger events.

      if (changing) {
        return;
      }
      /**
       * Triggered after the playlist is sorted internally.
       *
       * @event playlistsorted
       * @type {Object}
       */

      //player.trigger('playlistsorted');
    };

    if (Array.isArray(initialList)) {
      playlist(initialList.slice(), initialIndex); // If there is no initial list given, silently set an empty array.
    } else {
      list = [];
    }


    return playlist;
  }



  

  var pluginPlaylist = function pluginPlaylist(list, item) {


    this.ready(function () {
      factory(this, list, item);
      this.playlist.autoadvance(0);
      this.trigger("playlistready");
    });
  };

//var getPlugin = videojs.getPlugin || videojs.plugin;
var registerPlugin = videojs.registerPlugin || videojs.plugin;
registerPlugin("playlist", pluginPlaylist);

  return pluginPlaylist;
}));



(function(root, factory) {
  if (typeof window !== 'undefined' && window.videojs) {
    factory(window.videojs);
  } else if (typeof define === 'function' && define.amd) {
    define('vroll', ['video.js'], function (module) {
      return factory(module.default || module);
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    var videojs = require('video.js');
    module.exports = factory(videojs.default || videojs);
  }
}(this, function (videojs) {

  videojs =
    videojs && videojs.hasOwnProperty("default") ? videojs["default"] : videojs;

       function vrollInit(player, initialList) {
            var adList = [];
            var blocker;
            var adBusy = false,isLive = false,adPlaying = false,adNew = false, listProcess = false,loaded = false,playTimer = false,first_volume=false;
            var currentAd = "undefined";
             var skip = 0,adInterval=0,def_volume=0,def_muted=false;
            var tech = player.$(".vjs-tech");
            videojs.isAd = false;
            var vds = videojs.dom;
            var nv = player.el();
            var liveTimer = 0.1;
            var browser = videojs.browser;
            var blackPoster=null,wasStart=false,bigReplay=null,postroll=null,skipControl=null,skipText,spinner=null,snapshot=null,muted_def=null;
            videojs.vrollplugin=true;
            function vreslint(e) {
              return e;
            }
            function isArray(array) {
              return Object.prototype.toString.call(array) === "[object Array]";
            }
            var vjs_find = function (par, obj) {
              try {
                return par.querySelector(obj);
              } catch (e) {
                vreslint(e);
              }
            };
            var vjs_El = function (tagName, className) {
              var obj = document.createElement(tagName);
              if (typeof className !== "undefined") {
                if (className !== "") obj.className = className;
              }
              return obj;
            };
        
          
          
        
            function isLiveStream() {
              if (player.duration() === Infinity) {
                return true;
              } else if (browser.IOS_VERSION === "8" && player.duration() === 0) {
                return true;
              }
              return false;
            }
        
            var den=true;
            if (!isArray(initialList)) {
              var lst = initialList;
              if (lst.src ) {
                if (lst.src.length > 5) {
                  if(lst.offset) {
                    var pc=lst.offset.indexOf("%");
                    if(pc>-1) {
                      if(isLiveStream()) den=false;
                    }
                  } else {
                    lst.offset=0;
                  }
                
                  if(den) {
                    initialList = [];
                    initialList[0] = lst;
                  }
                }
              }
            }
        
            if (isArray(initialList)) {
              var pc2 = 0;
              for (var i = 0; i < initialList.length; i++) {
                var item = initialList[i];
                if (item.src && item.offset !== "undefined") {
                  item.loaded = false;
        
                  pc2 = 0;
      
                  try {
                    pc2 = adList[i].offset.indexOf("%");
                  } catch (e) {vreslint(e)}
                  if (pc2 > 0 && isLiveStream()) {
                    pc2=1;
                  } else {

                    adList.push(item);
                  }
                }
              }
            }
        
            player.ready(function () {
             
            spinner = vjs_find(player.el_, ".vjs-loading-spinner");
            //bigPlay = vjs_find(player.el_, ".vjs-big-play-button");
            bigReplay = vjs_find(player.el_, ".vjs-replay-button");
          
              if (adList.length > 0) {

                blocker = vjs_El("a", "vast-blocker vjs-hidden");
        
                player.el_.appendChild(blocker);
        
        
                var getPlayerSnapshot = function(player) {
                  var tech = player.el().querySelector(".vjs-tech");
        
                  var snap = {
                    ended: player.ended(),
                    src: player.currentSrc(),
                    currentTime: player.currentTime(),
                    type: player.currentType(),
                    currentSource: player.currentSource(),
                    playing: !player.paused(),
                    suppressedTracks: getSuppressedTracks(player)
                  };
        
        
                  if (snap.ended) {
                    snap.currentTime = player.duration();
              
              }
        
                  if (tech) {
                    snap.style = tech.getAttribute("style");
                  }
        
                  return snap;
                }
        
                var getSuppressedTracks = function(player) {
                  var tracks = player.remoteTextTracks ? player.remoteTextTracks() : [];
        
                  if (tracks && isArray(tracks.tracks_)) {
                    tracks = tracks.tracks_;
                  }
        
                  if (!isArray(tracks)) {
                    tracks = [];
                  }
        
                  var suppressedTracks = [];
                  tracks.forEach(function (track) {
                    suppressedTracks.push({
                      track: track,
                      mode: track.mode
                    });
                    track.mode = "disabled";
                  });
                  return suppressedTracks;
                }
        
                var restoreTracks = function() {
                  var suppressedTracks = snapshot.suppressedTracks;
                  suppressedTracks.forEach(function (trackSnapshot) {
                    trackSnapshot.track.mode = trackSnapshot.mode;
                  });
                }
        
                var restorePlayerSnapshot = function(player) {
                  var tech = player.el().querySelector(".vjs-tech");
        
                  if ("style" in snapshot) {
                    tech.setAttribute("style", snapshot.style || "");
                  }
                  player.one("contentloadedmetadata", restoreTracks);
        
                  var resume = function resume() {
                    //var currentTime = void 0;
        
                   if (isLiveStream()) {
                        playRestore();
                   } else {
                        playRestore();
                player.currentTime(snapshot.currentTime);
                    }
                  };
                  tech.poster = "";
        
                  player.src(snapshot.currentSource);
                  player.load();
                  restoreTracks();
                  resume();
                }
        
            var playRestore = function()  {
                
                var promise = player.play();

      
        
                if (promise !== undefined) {
                  promise.then(function() {
                     // Autoplay worked!
                  })
                  .catch(function() {
                     player.muted(true);
                     player.play();
                  });
                }
            }
        
                player.vroll.reset = function () {
                  loaded = false;
                  adNew = false;
                  vds.removeClass(nv, "vjs-ad-playing");
                  player.one("playing", function () {
                    for (var i = 0; i < adList.length; i++) {
                      adList[i].loaded = false;
                    }
                  });
                };
        
                if (parseInt(adList[0].offset, 10) === 0) {
                  if (player.offline) {
                    player.isPreroll = false;
                  } else {
              
                    player.isPreroll = true;
              if(first_volume!==true) { first_volume=true;def_volume=player.volume();player.volume(0);}
        
              player.one("play", function() {
                
        
                if(player.isPreroll) {
                //vds.addClass(bigPlay,'vjs-ad-hidden');
                
                var poster = vjs_find(nv,'.vjs-poster');
                blackPoster = vjs_El('div','vjs-black-poster');
                
                
                nv.insertBefore(blackPoster, poster.nextSibling);
                player.isPreroll=false;
        
                }
        
              });
              
                  }
                }
        
            
                player.on("loadedmetadata", function () {
        


                  if (player.isOffline) {
                    loaded = false;
                    return;
                  }
              
        
                  if (loaded) return;
                  loaded = true;
        
        
                  isLive = isLiveStream();
        
                  if (!isLive) var dur = player.duration();
        
                  if (adList.length > 0 && listProcess !== true) {
                    listProcess = true;
                    for (var i = 0; i < adList.length; i++) {
                adList[i].method='';
                      if (!isLive) {
                        var percent = 0;
                        try {
                          percent = adList[i].offset.indexOf("%", 0);
                        } catch (e) {vreslint(e);}
                        if (percent > 0) {
                          var perc = parseInt(adList[i].offset, 10);
                          if (perc === 100 || adList[i]==='end') {
                   adList[i].method='postroll'; postroll = adList[i];
                  
                          } else adList[i].offset = dur * (perc / 100);
                        } else {
                          adList[i].offset = parseInt(adList[i].offset, 10);
                        }
                      }
                    }
                  }
        
                    
        
          
        
                  if (adList.length > 0) {
                    player.on("timeupdate", function () {
                
                      var st = videojs.dom.hasClass(nv, "vjs-has-started");
                      if (
                        st &&
                        adPlaying !== true &&
                        player.isOffline !== true &&
                        isLiveStream() !== true
                      ) {
                        listTest(player.currentTime());
                      }
                    });
        
                    var adTimer=function() {
                      if (adPlaying) {
                        clearTimeout(adInterval);
                        playTimer = false;
                      } else {
                        liveTimer = liveTimer + 0.5;
          
                        listTest(liveTimer);
                        adInterval = setTimeout(adTimer, 500);
                      }
                    }
                    if (isLiveStream()) {
                      player.on("pause", function () {
                        clearTimeout(adInterval);
                        playTimer = false;
                      });
                      player.on("playing", function () {
                        var st = videojs.dom.hasClass(nv, "vjs-has-started");
                wasStart=st; 
                        if (
                          st &&
                          adBusy !== true &&
                          adList.length > 0 &&
                          player.isOffline !== true &&
                          playTimer !== true
                        ) {
                          playTimer = true;
                          adInterval = setTimeout(adTimer, 500);
                        }
                      });
                    }
                    var video_start=function() {			
                      //vds.addClass(bigPlay,'vjs-ad-hidden');
                      vds.addClass(bigReplay,'vjs-ad-hidden');
                    }
                    var video_end=function() {		
                      if (adBusy !== true && postroll!=null && postroll.loaded!==true) {
                        postroll.loaded=true; set_ad(postroll);
                      }
                      player.off('ended',video_end);
                      setTimeout(function() {vds.removeClass(bigReplay,"vjs-ad-hidden");}, 500);
                    }

              player.on("ended", video_end);
              player.one("play", video_start);
        

              var set_ad=function(itm) {
                adBusy = true;
                itm.loaded = true;
                currentAd = itm;
                adNew = true;
                var source = { src: itm.src, type: itm.type };

                snapshot = getPlayerSnapshot(player);
                vds.addClass(spinner, "vjs-ad-hidden");
                player.src(source);
                
                setTimeout(function () {
                  def_muted = player.muted();
                  if(currentAd.muted) player.muted(true);

                  setTimeout(function () {
                    player.on("error", ad_error);
                    player.load();
                    if(itm===adList[0] && player.isPreroll) { 
                      if(wasStart) {
						  player.play();
					  }
					} else {
                      if(!player.isPreroll) player.play(); 
                    }
                    player.one("loadeddata", seekToPlay);
                  }, 200);
           
                  if (currentAd.skip > 0) skip = parseInt(currentAd.skip, 10);
                  else skip = 0;
                  if (skip > 0)  createSkip();
                },200);
              }
        
              if(player.isPreroll) {
                if(first_volume!==true) { first_volume=true;def_volume=player.volume();player.volume(0);}
                if(isLiveStream()!==true) set_ad(adList[0]);
              }
        
              var listTest=function(cTime) {
                if (adBusy || adPlaying) return;
                var cT = cTime;
                if(muted_def==null) muted_def = player.muted();
				if(cT>0) {
				  vjs_find(player.el_, ".vjs-poster").removeAttribute("style");
				}
                for (var i = 0; i < adList.length; i++) {
                  var itm = adList[i];
                  if (cT >= itm.offset) {
                    if (adBusy !== true && adList[i].loaded !== true) {
                      videojs.log.level("off");
                      set_ad(itm);
                    }
                  }
                }
              }
                    var seekToPlay = function () {
                      
                      player.off("loadeddata", seekToPlay);
                      player.on("timeupdate", ad_timeUpdate);
                      player.one("ended", ad_ended);
                      //player.$(".vjs-tech").style.opacity=1;
                      player.one("playing", ad_playing);
                    };
        
                    blocker.onclick = function () {
                      player.trigger("vroll", { id: currentAd.id, action: "clicked" });
                    };
        
                    var isPaused = function () {
                      return player.paused();
                    };
        
        
                    var midroll_finish=function() {
                      if(skipControl) player.el_.removeChild(skipControl);
					  skipControl=null;
        
                      var cOffset = currentAd.offset;
                      currentAd.loaded = true;
                      player.isPreroll = false;
        
                      var next = false;
        
        
                      vds.addClass(nv, "vjs-has-started");
        
                      for (var i = 0; i < adList.length; i++) {
                        if (adList[i].offset === cOffset && adList[i].loaded !== true) {
                          player.off("timeupdate", ad_timeUpdate);
                          player.off("ended", ad_ended);
                          player.off("error", ad_error);
        
                          adBusy = true;
                          adPlaying = true;
                          adList[i].loaded = true;
                          videojs.isAd = true;
                          vds.addClass(nv, "vjs-ad-playing");
        
                          currentAd = adList[i];
                          adNew = true;
                          var source = { src: currentAd.src, type: currentAd.type };
                          vds.addClass(spinner, "vjs-ad-hidden");
                          player.src(source);
                       
                          blocker.className = "vast-blocker";
               
                          if (typeof currentAd.href !== "undefined") {
                            blocker.removeAttribute("style");
                            blocker.href=currentAd.href;
                            blocker.target="_blank";
                          } else {
                            blocker.style.pointerEvents="none";
                            
           
                          }
                  
            
                  def_muted = player.muted();
                    if(currentAd.muted) player.muted(true);
          
        
                          setTimeout(function () {
                  player.on("error", ad_error);
                            player.load();
                            player.play();
                            player.one("loadeddata", seekToPlay);
                          }, 200);
        
              
                          if (currentAd.skip > 0) skip = parseInt(currentAd.skip, 10);
                          else skip = 0;
                          if (skip > 0) {
                            createSkip();
                          }
                          next = true;
                        }
                        if (next) break;
                      }
        
                      if (next !== true) {
                        player.off("timeupdate", ad_timeUpdate);
                        player.off("ended", ad_ended);
                        player.off("error", ad_error);
                        player.off("playing", ad_playing);
                      
                        adBusy = false;
                        adNew = false;
        
                        adPlaying = false;
                        blocker.className = "vast-blocker vjs-hidden";
        
                //vds.addClass(spinner, "vjs-ad-hidden");
                        
                player.one('playing',function() {
                  setTimeout(function() {
                    vds.removeClass(spinner,"vjs-ad-hidden");
                  },200);
                });
        
                        vds.addClass(nv, "vjs-has-started");
        
                        tech.poster = "";
                 vds.removeClass(nv, "vjs-ad-playing");
                        
                        
        
                        videojs.isAd = false;
                        restorePlayerSnapshot(player, snapshot);
        
                if(player.muted()!==true) def_muted=false;
                player.muted(def_muted );
              
            
          
        
                      }
                    }
        
                var timeUpdate=function(cTime) {
                      cTime = cTime > 0 ? cTime : 0;
         
                      if (skip > 0) {
                        var timeLeft = Math.ceil(skip - cTime);

        
           
                vds.removeClass(skipControl,'vjs-hidden');
        
                        if (timeLeft > 0) {
                         
                  var txt = player.localize("Skip Ad in %%TIME%%");
                  skipText.innerHTML = txt.replace("%%TIME%%",timeLeft);
        
                        } else {
                          if (skipControl.className !== "vast-skip-button enabled") {
                  skipControl.className = "vast-skip-button enabled";
                            skipControl.innerHTML = player.localize("Skip Ad");
                            
                          }
                        }
                      }
                    }
        
               var createSkip=function() {
              
                if(skipControl) skipControl.patentNode.removeChild(skipControl);
        
                skipControl = vjs_El("div", "vast-skip-button vjs-hidden");
                skipControl.id='adSkipButton';
                skipText=vjs_El("p","vast-skip-button-text");
                skipControl.appendChild(skipText);
        
               
                      player.el_.appendChild(skipControl);
                      skipControl.onclick = function (e) {
                        skip_click(e);
                      };
        
                      function skip_click(e) {
 
                        e.stopPropagation();
                        if (
                          (" " + skipControl.className + " ").indexOf(" enabled ") >= 0
                        ) {
                          player.trigger("vroll", {
                            id: currentAd.id,
                            action: "skipped"
                          });
                          midroll_finish();
                        }
                      }
                    }
        
                    var ad_ended=function() {
                      if (adBusy) {
                        player.trigger("vroll", {
                          id: currentAd.id,
                          action: "completed"
                        });
                        midroll_finish();
                      }
                    }
        
                    var ad_error=function() {
            
                      if (adBusy) {
                        player.trigger("vroll", { id: currentAd.id, action: "error" });
                        midroll_finish();
                        adNew = false;
                      }
                    }
        
                    var ad_timeUpdate=function() {
              
                      if (adBusy) {
                        var paused = isPaused();
                        if (!paused) {
                          var d = player.duration();
                          var cTime = player.currentTime();
                          timeUpdate(cTime, d);
                        }
                      }
                    }

                    var ad_playing=function() {
            
                    if(blackPoster) {
                    nv.removeChild(blackPoster);
                    blackPoster=null;
                    player.volume(def_volume);
                  }
                  
                  
                  
                  vjs_find(nv,'.vjs-poster').removeAttribute('style');
                  
                            blocker.className = "vast-blocker";
                            if (typeof currentAd.href !== "undefined") {
                              blocker.removeAttribute("style");
                              blocker.href = currentAd.href;
                              blocker.target="_blank";
                            } else {
                              blocker.style.pointerEvents="none";
                            }
        
                            adPlaying = true;
                            vds.addClass(nv, "vjs-ad-playing");
        
                      if (adBusy && adNew) {
                        player.trigger("vroll", { id: currentAd.id, action: "start" });
                        adNew = false;
                      }
                    }
        
        
        
              
        
                  }
                });
              }
            });
          }
        
        
          var vroll = function plugin(list) {
            this.ready(function () {
               vrollInit(this, list);
            });
          };


var registerPlugin = videojs.registerPlugin || videojs.plugin;
var getPlugin = videojs.getPlugin || videojs.plugin;

if (getPlugin('vroll') === undefined || getPlugin('vroll') === "undefined") registerPlugin("vroll", vroll);

}));
