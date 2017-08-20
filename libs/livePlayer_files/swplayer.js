! function(a) {
	a.SewisePlayer = a.SewisePlayer || {
		name: "Sewise Player",
		version: "2.5.2",
		build: "2014.12.26 11:00",
		script: "",
		localPath: "",
		video: "",
		audio: "",
		player: ""
	}, a.SewisePlayerSkin = a.SewisePlayerSkin || {}
}(window),
function(a) {
	a.SewisePlayer.IVodPlayer = a.SewisePlayer.IVodPlayer || {
		play: function() {},
		pause: function() {},
		stop: function() {},
		seek: function() {},
		changeClarity: function() {},
		setVolume: function() {},
		toPlay: function() {},
		duration: function() {},
		playTime: function() {},
		type: function() {},
		showTextTip: function() {},
		hideTextTip: function() {},
		muted: function() {},
		bufferProgress: function() {}
	}
}(window),
function(a) {
	a.SewisePlayerSkin.IVodSkin = a.SewisePlayerSkin.IVodSkin || {
		player: function() {},
		started: function() {},
		paused: function() {},
		stopped: function() {},
		seeking: function() {},
		buffering: function() {},
		bufferProgress: function() {},
		loadedProgress: function() {},
		loadedOpen: function() {},
		loadedComplete: function() {},
		programTitle: function() {},
		duration: function() {},
		playTime: function() {},
		startTime: function() {},
		loadSpeed: function() {},
		initialClarity: function() {},
		lang: function() {},
		logo: function() {},
		timeUpdate: function() {},
		volume: function() {},
		clarityButton: function() {},
		timeDisplay: function() {},
		controlBarDisplay: function() {},
		topBarDisplay: function() {},
		customStrings: function() {},
		customDatas: function() {},
		fullScreen: function() {},
		noramlScreen: function() {},
		initialAds: function() {},
		initialStatistics: function() {}
	}
}(window),
function(a) {
	a.SewisePlayer.ILivePlayer = a.SewisePlayer.ILivePlayer || {
		live: function() {},
		play: function() {},
		pause: function() {},
		stop: function() {},
		seek: function() {},
		changeClarity: function() {},
		setVolume: function() {},
		playChannel: function() {},
		toPlay: function() {},
		duration: function() {},
		liveTime: function() {},
		playTime: function() {},
		type: function() {},
		showTextTip: function() {},
		hideTextTip: function() {},
		muted: function() {},
		bufferProgress: function() {},
		setDuration: function() {},
		refreshTimeSpan: function() {}
	}
}(window),
function(a) {
	a.SewisePlayerSkin.ILiveSkin = a.SewisePlayerSkin.ILiveSkin || {
		player: function() {},
		started: function() {},
		paused: function() {},
		stopped: function() {},
		seeking: function() {},
		buffering: function() {},
		bufferProgress: function() {},
		loadedOpen: function() {},
		loadedComplete: function() {},
		programTitle: function() {},
		duration: function() {},
		playTime: function() {},
		startTime: function() {},
		loadSpeed: function() {},
		initialClarity: function() {},
		lang: function() {},
		logo: function() {},
		timeUpdate: function() {},
		volume: function() {},
		clarityButton: function() {},
		timeDisplay: function() {},
		controlBarDisplay: function() {},
		topBarDisplay: function() {},
		customStrings: function() {},
		customDatas: function() {},
		fullScreen: function() {},
		noramlScreen: function() {},
		initialAds: function() {},
		initialStatistics: function() {},
		refreshTimes: function() {}
	}
}(window),
function() {
	SewisePlayer.GlobalConst = {
		FLASH: "flash",
		HTML5: "html5",
		VOD: "vod",
		LIVE: "live",
		AUDIO: "audio",
		VIDEO: "video",
		FLV: "flv",
		MP4: "mp4",
		RTMP: "rtmp",
		HTTP: "http",
		M3U8: "m3u8",
		MP3: "mp3",
		PLAYER_NAME: SewisePlayer.name,
		PLAYER_COPYRIGHT: "(C) All right reserved the SEWISE inc 2011-2014",
		PLAYER_VERSION: "Version: " + SewisePlayer.version,
		BUILD_DATE: "Build: " + SewisePlayer.build
	}
}(),
function() {
	SewisePlayer.GlobalVars = {
		clarities: []
	}
}(),
function() {
	SewisePlayer.CommandDispatcher = function() {
		function a() {
			this.handlers = {}
		}
		a.prototype = {
			constructor: a,
			addEventListener: function(a, b) {
				if (void 0 === a) throw new Error("undefined property events.");
				"undefined" == typeof this.handlers[a] && (this.handlers[a] = []), this.handlers[a].push(b)
			},
			dispatchEvent: function(a) {
				if (a.target || (a.target = this), this.handlers[a.type] instanceof Array)
					for (var b = this.handlers[a.type], c = 0, d = b.length; d > c; c++) b[c](a)
			},
			removeEventListener: function(a, b) {
				if (this.handlers[a] instanceof Array) {
					for (var c = this.handlers[a], d = 0, e = c.length; e > d && c[d] !== b; d++);
					c.splice(d, 1)
				}
			}
		};
		var b = new a;
		return b
	}()
}(),
function() {
	SewisePlayer.Events = {
		PARAMS_READY: "params_ready",
		PLAYER_SKIN_LOADED: "player_skin_loaded",
		PLAYER_SKIN_LOADED_ERROR: "player_skin_loaded_error",
		STREAMS_DATA_READY: "streams_data_ready",
		STREAMS_DATA_FAILED: "streams_data_failed",
		GET_VOD_STREAMS: "get_vod_streams",
		GET_LIVE_STREAMS: "get_live_streams",
		GET_SHIFT_STREAMS: "get_shift_streams",
		PLAY_VIDEO: "play_video",
		PLAY_NEXT: "play_next",
		PLAY_START: "play_start",
		PLAY_PAUSE: "play_pause",
		PLAY_ENDED: "play_ended",
		DURATION_CHANGE: "duration_change",
		TIME_UPDATE: "time_update",
		LOAD_PROGRESS: "load_progress",
		LOAD_OPEN: "load_open",
		LOAD_COMPLETE: "load_complete"
	}
}(),
function() {
	SewisePlayer.Utils = {
		jsonp: function(a) {
			var b = a.url,
				c = a.jsonp,
				d = a.jsonpCallback,
				e = a.data,
				f = a.success,
				g = "";
			for (var h in e) g += "&" + h + "=" + e[h];
			g = "?" + g.slice(1), void 0 === c && (c = "callback"), void 0 === d && (d = "callbackFun" + (new Date).getTime());
			var i = "&" + c + "=" + d,
				j = b + g + i,
				k = document.createElement("script");
			k.setAttribute("type", "text/javascript"), k.src = j, document.body.appendChild(k), window[d] = f, k.onload = k.onreadystatechange = function() {
				this.readyState && "loaded" != this.readyState && "complete" != this.readyState || document.body.removeChild(k)
			}
		},
		getScript: function(a) {
			var b = a.url,
				c = a.data,
				d = a.success,
				e = "";
			for (var f in c) e += "&" + f + "=" + c[f];
			e = "?" + e.slice(1);
			var g = b + e,
				h = document.createElement("script");
			h.setAttribute("type", "text/javascript"), h.src = g, document.body.appendChild(h), h.onload = h.onreadystatechange = function() {
				d(), this.readyState && "loaded" != this.readyState && "complete" != this.readyState || document.body.removeChild(h)
			}
		},
		getParameters: function(a) {
			var b, c = document.getElementsByTagName("script");
			try {
				for (var d = c.length, e = 0; d > e; e++) {
					var f = c[e].src.split("?"),
						g = f[0],
						h = g.split("/");
					if (g = 1 == h.length ? h[0] : h[h.length - 1], g == a[0] || g == a[1]) {
						if (b = f.length > 1 ? f[1].split("&") : [], SewisePlayer.script = c[e], g == a[1]) {
							var i = f[0].lastIndexOf("/");
							i > 0 && (SewisePlayer.localPath = f[0].slice(0, i + 1))
						}
						break
					}
				}
				for (var j, k, l, m = {}, n = 0, o = b.length; o > n; n++) j = b[n].split("="), k = j[0], l = j[1], "undefined" == typeof m[k] ? m[k] = l : "string" == typeof m[k] ? (m[k] = [m[k]], m[k].push(l)) : m[k].push(l);
				return m
			} catch (p) {
				return []
			}
		},
		object: {
			isEmpty: function(a) {
				for (var b in a) return !1;
				return !0
			}
		},
		browser: {
			versions: function() {
				{
					var a = navigator.userAgent;
					navigator.appVersion
				}
				return {
					trident: a.indexOf("Trident") > -1,
					presto: a.indexOf("Presto") > -1,
					webKit: a.indexOf("AppleWebKit") > -1,
					gecko: a.indexOf("Gecko") > -1 && -1 == a.indexOf("KHTML"),
					mobile: !!a.match(/AppleWebKit.*Mobile.*/),
					ios: !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
					android: a.indexOf("Android") > -1,
					iPhone: a.indexOf("iPhone") > -1,
					iPad: a.indexOf("iPad") > -1,
					webApp: -1 == a.indexOf("Safari")
				}
			}(),
			supportH5: function() {
				var a = !1;
				return navigator.geolocation && (a = !0), a
			}(),
			supportFlash: function() {
				if (navigator.mimeTypes.length > 0) {
					var a = navigator.mimeTypes["application/x-shockwave-flash"];
					return void 0 !== a ? void 0 !== a.enabledPlugin : !1
				}
				if (self.ActiveXObject) try {
					return new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), !0
				} catch (b) {
					return !1
				}
			}(),
			language: (navigator.browserLanguage || navigator.language).toLowerCase()
		},
		location: {
			hostname: function(a) {
				if (a) {
					var b = document.createElement("a");
					return b.href = a, b.hostname
				}
				return window.location.hostname
			},
			port: function(a) {
				if (a) {
					var b = document.createElement("a");
					return b.href = a, b.port
				}
				return window.location.port
			},
			porthost: function(a) {
				var b, c;
				if (a) {
					var d = document.createElement("a");
					d.href = a, b = d.hostname, c = d.port
				} else b = window.location.hostname, c = window.location.port;
				var e = b;
				return c && "0" !== c && "" !== c && (e = b + ":" + c), e
			}
		},
		loader: {
			loadCssFile: function(a, b) {
				var c = document.createElement("link");
				c.rel = "stylesheet", c.href = a, b && (c.onerror = function() {
					b()
				}), document.getElementsByTagName("head")[0].appendChild(c)
			},
			loadJsFile: function(a, b, c, d, e) {
				var f = document.getElementsByTagName("head")[0],
					g = null;
				!a && !e || "override" == a ? (g = document.createElement("script"), g.type = "text/javascript", g.charset = "utf-8", g.src = b, c && (g.onload = g.onreadystatechange = function() {
					return g.ready ? !1 : void(g.readyState && "loaded" != g.readyState && "complete" != g.readyState || (g.ready = !0, c()))
				}), d && (g.onerror = function() {
					d()
				}), f.appendChild(g)) : c && c()
			}
		}
	}
}(),
function() {
	SewisePlayer.GlobalParams = function(a) {
		var b, c, d, e, f = "",
			g = "",
			h = "",
			i = "html5",
			j = "",
			k = SewisePlayer.GlobalConst.VIDEO,
			l = "false",
			m = "192.168.1.24",
			n = "192.168.1.218",
			o = !1,
			p = SewisePlayer.Utils.getParameters(a);
		this.init = function(a, j) {
			p = a, o = j, p.debug && (l = p.debug), p.server && (f = p.server), p.type && (g = p.type), p.swfpath && (h = p.swfpath), p.primary && (i = p.primary), b = SewisePlayer.Utils.browser.versions.mobile, c = SewisePlayer.Utils.browser.supportH5, d = SewisePlayer.Utils.browser.supportFlash, e = SewisePlayer.Utils.location.porthost(SewisePlayer.localPath), "" === g && (f == SewisePlayer.GlobalConst.VOD ? g = b && !d ? SewisePlayer.GlobalConst.M3U8 : SewisePlayer.GlobalConst.FLV : f == SewisePlayer.GlobalConst.LIVE && (g = b && !d ? SewisePlayer.GlobalConst.M3U8 : SewisePlayer.GlobalConst.RTMP), p.type = g)
		}, this.getParameObj = function() {
			return p
		}, this.getPlayerId = function() {
			var a = p.playerid ? p.playerid : "sewise_player";
			return a
		}, this.getServerType = function() {
			return f
		}, this.getSwfPath = function() {
			return h
		}, this.getMediaType = function() {
			return k
		}, this.getPlayerType = function() {
			if (f == SewisePlayer.GlobalConst.VOD) switch (g) {
					case SewisePlayer.GlobalConst.FLV:
						j = d ? SewisePlayer.GlobalConst.FLASH : SewisePlayer.GlobalConst.HTML5;
						break;
					case SewisePlayer.GlobalConst.MP4:
						j = c && "flash" !== i || !d ? SewisePlayer.GlobalConst.HTML5 : SewisePlayer.GlobalConst.FLASH;
						break;
					case SewisePlayer.GlobalConst.M3U8:
						j = c && b && "flash" !== i || !d ? SewisePlayer.GlobalConst.HTML5 : SewisePlayer.GlobalConst.FLASH;
						break;
					case SewisePlayer.GlobalConst.MP3:
						j = d && "html5" !== i || !c ? SewisePlayer.GlobalConst.FLASH : SewisePlayer.GlobalConst.HTML5, k = SewisePlayer.GlobalConst.AUDIO
				} else if (f == SewisePlayer.GlobalConst.LIVE) switch (g) {
					case SewisePlayer.GlobalConst.RTMP:
						j = d ? SewisePlayer.GlobalConst.FLASH : SewisePlayer.GlobalConst.HTML5;
						break;
					case SewisePlayer.GlobalConst.HTTP:
						j = d ? SewisePlayer.GlobalConst.FLASH : SewisePlayer.GlobalConst.HTML5;
						break;
					case SewisePlayer.GlobalConst.M3U8:
						j = c && b && "flash" !== i || !d ? SewisePlayer.GlobalConst.HTML5 : SewisePlayer.GlobalConst.FLASH;
						break;
					case SewisePlayer.GlobalConst.MP4:
						j = c && "flash" !== i || !d ? SewisePlayer.GlobalConst.HTML5 : SewisePlayer.GlobalConst.FLASH;
						break;
					case SewisePlayer.GlobalConst.MP3:
						j = d && "html5" !== i || !c ? SewisePlayer.GlobalConst.FLASH : SewisePlayer.GlobalConst.HTML5, k = SewisePlayer.GlobalConst.AUDIO
				}
				return SewisePlayer.player = j, j
		}, this.getPlayVars = function() {
			var a, b, c, d, g, i, k, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S;
			if (j == SewisePlayer.GlobalConst.HTML5) {
				var T;
				f == SewisePlayer.GlobalConst.VOD ? (b = p.autostart ? p.autostart : "true", c = p.sourceid ? p.sourceid : "", d = p.lang ? p.lang : "en_US", g = p.logo ? p.logo : "http://onvod.sewise.com/libs/swfplayer/skin/images/logo.png", i = p.buffer ? p.buffer : 2, k = p.type, q = p.skin, S = "true" == l ? "http://" + m + "/service/playerapi/" : "http://" + e + "/service/playerapi/", q ? (T = {}, T.jqueryPath = SewisePlayer.localPath + "js/jquery.min.js", T.skinCssPath = SewisePlayer.localPath + "html/skins/" + q + "/skin.css", T.skinHtmlPath = SewisePlayer.localPath + "html/skins/" + q + "/skin.html", T.skinHtmlJsPath = SewisePlayer.localPath + "html/skins/" + q + "/skin.html.js", T.skinJsPath = SewisePlayer.localPath + "html/skins/" + q + "/skin.js", q = T) : q = "", H = "string" == typeof p.fallbackurls ? p.fallbackurls ? JSON.parse(decodeURIComponent(p.fallbackurls)) : "" : p.fallbackurls ? p.fallbackurls : "", G = "string" == typeof p.flagdatas ? p.flagdatas ? JSON.parse(decodeURIComponent(p.flagdatas)) : "" : p.flagdatas ? p.flagdatas : "", I = "string" == typeof p.videosjsonurl ? p.videosjsonurl ? JSON.parse(decodeURIComponent(p.videosjsonurl)) : "" : p.videosjsonurl ? p.videosjsonurl : "", J = "string" == typeof p.adsjsondata ? p.adsjsondata ? JSON.parse(decodeURIComponent(p.adsjsondata)) : "" : p.adsjsondata ? p.adsjsondata : "", K = "string" == typeof p.statistics ? p.statistics ? JSON.parse(decodeURIComponent(p.statistics)) : "" : p.statistics ? p.statistics : "", L = "string" == typeof p.customdatas ? p.customdatas ? JSON.parse(decodeURIComponent(p.customdatas)) : "" : p.customdatas ? p.customdatas : "", r = o ? p.title ? p.title : "" : p.title ? decodeURIComponent(p.title) : "", s = p.draggable ? p.draggable : "true", t = p.published ? p.published : 0, M = o ? p.videourl ? p.videourl : "" : p.videourl ? decodeURIComponent(p.videourl) : "", N = p.starttime ? p.starttime : 0, u = p.poster ? p.poster : "", v = p.playername ? decodeURIComponent(p.playername) : SewisePlayer.GlobalConst.PLAYER_NAME, w = p.copyright ? decodeURIComponent(p.copyright) : SewisePlayer.GlobalConst.PLAYER_COPYRIGHT, x = p.playerversion ? decodeURIComponent(p.playerversion) : SewisePlayer.GlobalConst.PLAYER_VERSION, y = p.builddate ? decodeURIComponent(p.builddate) : SewisePlayer.GlobalConst.BUILD_DATE, z = p.claritybutton ? p.claritybutton : "enable", A = p.timedisplay ? p.timedisplay : "enable", B = p.controlbardisplay ? p.controlbardisplay : "enable", C = p.topbardisplay ? p.topbardisplay : "enable", D = p.customstrings ? p.customstrings : "", E = p.volume ? p.volume : .6, F = p.key ? p.key : "", a = {
					autoStart: b,
					programId: c,
					lang: d,
					logo: g,
					buffer: i,
					type: k,
					skin: q,
					serverPath: S,
					title: r,
					draggable: s,
					published: t,
					videoUrl: M,
					startTime: N,
					poster: u,
					fallbackUrls: H,
					flagDatas: G,
					videosJsonUrl: I,
					adsJsonData: J,
					statistics: K,
					customDatas: L,
					playerName: v,
					copyright: w,
					playerVersion: x,
					buildDate: y,
					clarityButton: z,
					timeDisplay: A,
					controlBarDisplay: B,
					topBarDisplay: C,
					customStrings: D,
					volume: E,
					key: F
				}) : f == SewisePlayer.GlobalConst.LIVE && (b = p.autostart ? p.autostart : "true", c = p.pid ? p.pid : "", d = p.lang ? p.lang : "en_US", g = p.logo ? p.logo : "http://onvod.sewise.com/libs/swfplayer/skin/images/logo.png", i = p.buffer ? p.buffer : .1, k = p.type, q = p.skin, P = p.shifttime ? p.shifttime : "", S = "true" == l ? "http://" + n + "/service/playerapi/" : "http://" + e + "/service/playerapi/", q ? (T = {}, T.jqueryPath = SewisePlayer.localPath + "js/jquery.min.js", T.skinCssPath = SewisePlayer.localPath + "html/skins/" + q + "/skin.css", T.skinHtmlPath = SewisePlayer.localPath + "html/skins/" + q + "/skin.html", T.skinHtmlJsPath = SewisePlayer.localPath + "html/skins/" + q + "/skin.html.js", T.skinJsPath = SewisePlayer.localPath + "html/skins/" + q + "/skin.js", q = T) : q = "", H = "string" == typeof p.fallbackurls ? p.fallbackurls ? JSON.parse(decodeURIComponent(p.fallbackurls)) : "" : p.fallbackurls ? p.fallbackurls : "", G = "string" == typeof p.flagdatas ? p.flagdatas ? JSON.parse(decodeURIComponent(p.flagdatas)) : "" : p.flagdatas ? p.flagdatas : "", I = "string" == typeof p.videosjsonurl ? p.videosjsonurl ? JSON.parse(decodeURIComponent(p.videosjsonurl)) : "" : p.videosjsonurl ? p.videosjsonurl : "", J = "string" == typeof p.adsjsondata ? p.adsjsondata ? JSON.parse(decodeURIComponent(p.adsjsondata)) : "" : p.adsjsondata ? p.adsjsondata : "", K = "string" == typeof p.statistics ? p.statistics ? JSON.parse(decodeURIComponent(p.statistics)) : "" : p.statistics ? p.statistics : "", L = "string" == typeof p.customdatas ? p.customdatas ? JSON.parse(decodeURIComponent(p.customdatas)) : "" : p.customdatas ? p.customdatas : "", r = o ? p.title ? p.title : "" : p.title ? decodeURIComponent(p.title) : "", s = p.draggable ? p.draggable : "true", t = p.published ? p.published : 0, O = o ? p.streamurl ? p.streamurl : "" : p.streamurl ? decodeURIComponent(p.streamurl) : "", Q = p.duration ? p.duration : 3600, u = p.poster ? p.poster : "", v = p.playername ? decodeURIComponent(p.playername) : SewisePlayer.GlobalConst.PLAYER_NAME, w = p.copyright ? decodeURIComponent(p.copyright) : SewisePlayer.GlobalConst.PLAYER_COPYRIGHT, x = p.playerversion ? decodeURIComponent(p.playerversion) : SewisePlayer.GlobalConst.PLAYER_VERSION, y = p.builddate ? decodeURIComponent(p.builddate) : SewisePlayer.GlobalConst.BUILD_DATE, z = p.claritybutton ? p.claritybutton : "enable", A = p.timedisplay ? p.timedisplay : "enable", B = p.controlbardisplay ? p.controlbardisplay : "enable", C = p.topbardisplay ? p.topbardisplay : "enable", D = p.customstrings ? p.customstrings : "", E = p.volume ? p.volume : .6, F = p.key ? p.key : "", a = {
					autoStart: b,
					programId: c,
					shiftTime: P,
					buffer: i,
					logo: g,
					lang: d,
					type: k,
					skin: q,
					serverPath: S,
					title: r,
					draggable: s,
					published: t,
					streamUrl: O,
					duration: Q,
					poster: u,
					fallbackUrls: H,
					flagDatas: G,
					videosJsonUrl: I,
					adsJsonData: J,
					statistics: K,
					customDatas: L,
					playerName: v,
					copyright: w,
					playerVersion: x,
					buildDate: y,
					clarityButton: z,
					timeDisplay: A,
					controlBarDisplay: B,
					topBarDisplay: C,
					customStrings: D,
					volume: E,
					key: F
				})
			} else if (j == SewisePlayer.GlobalConst.FLASH) {
				var U;
				if (f == SewisePlayer.GlobalConst.VOD) {
					if (b = p.autostart ? p.autostart : "true", c = p.sourceid ? p.sourceid : "", d = p.lang ? p.lang : "en_US", g = p.logo ? p.logo : "http://onvod.sewise.com/libs/swfplayer/skin/images/logo.png", i = p.buffer ? p.buffer : 2, k = p.type, q = p.skin, S = "true" == l ? "http://" + m + "/flashservice/gateway.php" : "http://" + e + "/flashservice/gateway.php", U = "ServerApi.execute", q = q ? "" === h ? SewisePlayer.localPath + "flash/skins/" + q + ".swf" : h + "flash/skins/" + q + ".swf" : "", G = "string" == typeof p.flagdatas ? p.flagdatas ? p.flagdatas : "" : p.flagdatas ? encodeURIComponent(JSON.stringify(p.flagdatas, "", "	")) : "", I = "string" == typeof p.videosjsonurl ? p.videosjsonurl ? p.videosjsonurl : "" : p.videosjsonurl ? encodeURIComponent(JSON.stringify(p.videosjsonurl, "", "	")) : "", J = "string" == typeof p.adsjsondata ? p.adsjsondata ? p.adsjsondata : "" : p.adsjsondata ? encodeURIComponent(JSON.stringify(p.adsjsondata, "", "	")) : "", K = "string" == typeof p.statistics ? p.statistics ? p.statistics : "" : p.statistics ? encodeURIComponent(JSON.stringify(p.statistics, "", "	")) : "", L = "string" == typeof p.customdatas ? p.customdatas ? p.customdatas : "" : p.customdatas ? encodeURIComponent(JSON.stringify(p.customdatas, "", "	")) : "", r = o ? p.title ? encodeURIComponent(p.title) : "" : p.title ? p.title : "", s = p.draggable ? p.draggable : "true", t = p.published ? p.published : 0, M = o ? p.videourl ? encodeURIComponent(p.videourl) : "" : p.videourl ? p.videourl : "", !p.videourl.match(/(?:http|https|file):\/\//)) {
						var V = window.location.href;
						M = V.slice(0, V.lastIndexOf("/") + 1) + M
					}
					N = p.starttime ? p.starttime : 0, u = p.poster ? p.poster : "", o ? (v = p.playername ? encodeURIComponent(p.playername) : SewisePlayer.GlobalConst.PLAYER_NAME, w = p.copyright ? encodeURIComponent(p.copyright) : SewisePlayer.GlobalConst.PLAYER_COPYRIGHT, x = p.playerversion ? encodeURIComponent(p.playerversion) : SewisePlayer.GlobalConst.PLAYER_VERSION, y = p.builddate ? encodeURIComponent(p.builddate) : SewisePlayer.GlobalConst.BUILD_DATE) : (v = p.playername ? p.playername : SewisePlayer.GlobalConst.PLAYER_NAME, w = p.copyright ? p.copyright : SewisePlayer.GlobalConst.PLAYER_COPYRIGHT, x = p.playerversion ? p.playerversion : SewisePlayer.GlobalConst.PLAYER_VERSION, y = p.builddate ? p.builddate : SewisePlayer.GlobalConst.BUILD_DATE), z = p.claritybutton ? p.claritybutton : "enable", A = p.timedisplay ? p.timedisplay : "enable", B = p.controlbardisplay ? p.controlbardisplay : "enable", C = p.topbardisplay ? p.topbardisplay : "enable", D = p.customstrings ? p.customstrings : "", E = p.volume ? p.volume : .6, F = p.key ? p.key : "", a = {
						autoStart: b,
						programId: c,
						lang: d,
						logo: g,
						buffer: i,
						type: k,
						serverPath: S,
						serverApi: U,
						skin: q,
						title: r,
						draggable: s,
						published: t,
						videoUrl: M,
						startTime: N,
						poster: u,
						flagDatas: G,
						videosJsonUrl: I,
						adsJsonData: J,
						statistics: K,
						customDatas: L,
						playerName: v,
						copyright: w,
						playerVersion: x,
						buildDate: y,
						clarityButton: z,
						timeDisplay: A,
						controlBarDisplay: B,
						topBarDisplay: C,
						customStrings: D,
						volume: E,
						key: F
					}
				} else f == SewisePlayer.GlobalConst.LIVE && (b = p.autostart ? p.autostart : "true", c = p.pid ? p.pid : "", d = p.lang ? p.lang : "en_US", g = p.logo ? p.logo : "http://onvod.sewise.com/libs/swfplayer/skin/images/logo.png", i = p.buffer ? p.buffer : .1, k = p.type, q = p.skin, P = p.shifttime ? p.shifttime : "", S = "true" == l ? "http://" + n + "/flashservice/gateway.php" : "http://" + e + "/flashservice/gateway.php", U = "ServerApi.execute", q = q ? "" === h ? SewisePlayer.localPath + "flash/skins/" + q + ".swf" : h + "flash/skins/" + q + ".swf" : "", G = "string" == typeof p.flagdatas ? p.flagdatas ? p.flagdatas : "" : p.flagdatas ? encodeURIComponent(JSON.stringify(p.flagdatas, "", "	")) : "", I = "string" == typeof p.videosjsonurl ? p.videosjsonurl ? p.videosjsonurl : "" : p.videosjsonurl ? encodeURIComponent(JSON.stringify(p.videosjsonurl, "", "	")) : "", J = "string" == typeof p.adsjsondata ? p.adsjsondata ? p.adsjsondata : "" : p.adsjsondata ? encodeURIComponent(JSON.stringify(p.adsjsondata, "", "	")) : "", K = "string" == typeof p.statistics ? p.statistics ? p.statistics : "" : p.statistics ? encodeURIComponent(JSON.stringify(p.statistics, "", "	")) : "", L = "string" == typeof p.customdatas ? p.customdatas ? p.customdatas : "" : p.customdatas ? encodeURIComponent(JSON.stringify(p.customdatas, "", "	")) : "", r = o ? p.title ? encodeURIComponent(p.title) : "" : p.title ? p.title : "", s = p.draggable ? p.draggable : "true", t = p.published ? p.published : 0, O = o ? p.streamurl ? encodeURIComponent(p.streamurl) : "" : p.streamurl ? p.streamurl : "", Q = p.duration ? p.duration : 3600, u = p.poster ? p.poster : "", o ? (v = p.playername ? encodeURIComponent(p.playername) : SewisePlayer.GlobalConst.PLAYER_NAME, w = p.copyright ? encodeURIComponent(p.copyright) : SewisePlayer.GlobalConst.PLAYER_COPYRIGHT, x = p.playerversion ? encodeURIComponent(p.playerversion) : SewisePlayer.GlobalConst.PLAYER_VERSION, y = p.builddate ? encodeURIComponent(p.builddate) : SewisePlayer.GlobalConst.BUILD_DATE) : (v = p.playername ? p.playername : SewisePlayer.GlobalConst.PLAYER_NAME, w = p.copyright ? p.copyright : SewisePlayer.GlobalConst.PLAYER_COPYRIGHT, x = p.playerversion ? p.playerversion : SewisePlayer.GlobalConst.PLAYER_VERSION, y = p.builddate ? p.builddate : SewisePlayer.GlobalConst.BUILD_DATE), R = o ? p.trackcallback ? encodeURIComponent(p.trackcallback) : "" : p.trackcallback ? p.trackcallback : "", z = p.claritybutton ? p.claritybutton : "enable", A = p.timedisplay ? p.timedisplay : "enable", B = p.controlbardisplay ? p.controlbardisplay : "enable", C = p.topbardisplay ? p.topbardisplay : "enable", D = p.customstrings ? p.customstrings : "", E = p.volume ? p.volume : .6, F = p.key ? p.key : "", a = {
					autoStart: b,
					programId: c,
					shiftTime: P,
					buffer: i,
					logo: g,
					lang: d,
					type: k,
					serverPath: S,
					serverApi: U,
					skin: q,
					title: r,
					draggable: s,
					published: t,
					streamUrl: O,
					duration: Q,
					poster: u,
					flagDatas: G,
					videosJsonUrl: I,
					adsJsonData: J,
					statistics: K,
					customDatas: L,
					playerName: v,
					copyright: w,
					playerVersion: x,
					buildDate: y,
					clarityButton: z,
					timeDisplay: A,
					controlBarDisplay: B,
					topBarDisplay: C,
					customStrings: D,
					volume: E,
					key: F,
					trackCallback: R
				})
			}
			return a
		}
	}
}(),
function() {
	SewisePlayer.H5Params = function() {
		function a(a) {
			"true" !== a && (I.autoStart = !1)
		}

		function b(a) {
			a && (I.programId = a)
		}

		function c(a) {
			a && (I.lang = a)
		}

		function d(a) {
			a && (I.logo = a)
		}

		function e(a) {
			a > 0 && (I.buffer = a)
		}

		function f(a) {
			a && (I.type = a)
		}

		function g(a) {
			a && (I.shiftTime = a)
		}

		function h(a) {
			a && (I.serverPath = a)
		}

		function i(a) {
			a && (I.title = a)
		}

		function j(a) {
			I.draggable = "false" == a ? !1 : !0
		}

		function k(a) {
			a && (I.published = a)
		}

		function l(a) {
			a && (I.videoUrl = a)
		}

		function m(a) {
			a && (I.streamUrl = a)
		}

		function n(a) {
			a && (I.startTime = a)
		}

		function o(a) {
			a && (I.duration = a)
		}

		function p(a) {
			a && (I.playerName = a)
		}

		function q(a) {
			a && (I.copyright = a)
		}

		function r(a) {
			a && (I.playerVersion = a)
		}

		function s(a) {
			a && (I.buildDate = a)
		}

		function t(a) {
			a && (I.skin = a)
		}

		function u(a) {
			a && (I.poster = a)
		}

		function v(a) {
			a && (I.fallbackUrls = a)
		}

		function w(a) {
			a && (I.flagDatas = a)
		}

		function x(a) {
			a && (I.videosJsonUrl = a)
		}

		function y(a) {
			a && (I.adsJsonData = a)
		}

		function z(a) {
			a && (I.statistics = a)
		}

		function A(a) {
			a && (I.customDatas = a)
		}

		function B(a) {
			a >= 0 && 1 >= a && (I.volume = a)
		}

		function C(a) {
			a && (I.key = a)
		}

		function D(a) {
			a && (I.clarityButton = a)
		}

		function E(a) {
			a && (I.timeDisplay = a)
		}

		function F(a) {
			a && (I.controlBarDisplay = a)
		}

		function G(a) {
			a && (I.topBarDisplay = a)
		}

		function H(a) {
			a && (I.customStrings = a)
		}
		var I = this;
		this.autoStart = !0, this.programId = "", this.lang = "", this.logo = "", this.buffer = .1, this.type = "", this.shiftTime = "", this.serverPath = "", this.title = "", this.draggable = !0, this.published = 0, this.videoUrl = "", this.streamUrl = "", this.startTime = 0, this.duration = 3600, this.playerName = "", this.copyright = "", this.playerVersion = "", this.buildDate = "", this.skin = "", this.poster = "", this.fallbackUrls = "", this.flagDatas = "", this.videosJsonUrl = "", this.adsJsonData = "", this.statistics = "", this.customDatas = "", this.volume = .6, this.key = "", this.clarityButton = "enable", this.timeDisplay = "enable", this.controlBarDisplay = "enable", this.topBarDisplay = "enable", this.customStrings = "", this.parseParams = function(I) {
			var J = I;
			a(J.autoStart), b(J.programId), c(J.lang), d(J.logo), e(J.buffer), f(J.type), g(J.shiftTime), h(J.serverPath), i(J.title), j(J.draggable), k(J.published), l(J.videoUrl), m(J.streamUrl), n(J.startTime), o(J.duration), p(J.playerName), q(J.copyright), r(J.playerVersion), s(J.buildDate), t(J.skin), u(J.poster), v(J.fallbackUrls), w(J.flagDatas), x(J.videosJsonUrl), y(J.adsJsonData), z(J.statistics), A(J.customDatas), B(J.volume), C(J.key), D(J.clarityButton), E(J.timeDisplay), F(J.controlBarDisplay), G(J.topBarDisplay), H(J.customStrings), SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.PARAMS_READY
			})
		}
	}
}(),
function() {
	SewisePlayer.PlayerSkinLoader = function(a, b) {
		function c() {
			e()
		}

		function d() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.PLAYER_SKIN_LOADED_ERROR
			})
		}

		function e() {
			var b = document.getElementsByTagName("body")[0],
				c = document.createElement("iframe");
			c.style.display = "none", c.src = l, c.onload = c.onreadystatechange = function() {
				try {
					if (null === c) return;
					var d = c.contentWindow.document.getElementsByClassName("sewise-player-ui")[0],
						e = document.createElement("div");
					a.appendChild(e), e.outerHTML = d.outerHTML, b.removeChild(c), c = null, SewisePlayer.Utils.loader.loadJsFile("override", m)
				} catch (g) {
					b.removeChild(c), f()
				}
			}, b.appendChild(c)
		}

		function f() {
			SewisePlayer.Utils.loader.loadJsFile("override", n, g, h)
		}

		function g() {
			var b = window.SewisePlayerSkin.localSkin;
			a.appendChild(i(b)[0]), SewisePlayer.Utils.loader.loadJsFile("override", m)
		}

		function h() {
			d()
		}

		function i(a) {
			var b = document.createElement("div");
			return "string" == typeof a && (b.innerHTML = a), b.childNodes
		}
		var j = b.jqueryPath,
			k = b.skinCssPath,
			l = b.skinHtmlPath,
			m = b.skinJsPath,
			n = b.skinHtmlJsPath;
		SewisePlayer.Utils.loader.loadCssFile(k, d), SewisePlayer.Utils.loader.loadJsFile(window.jQuery, j, c, d, window.Zepto)
	}
}(),
function() {
	SewisePlayer.VodVideo = function(a) {
		function b() {
			i(), SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.PLAY_START
			})
		}

		function c() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.PLAY_PAUSE
			})
		}

		function d() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.PLAY_ENDED
			})
		}

		function e() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.DURATION_CHANGE
			})
		}

		function f() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.TIME_UPDATE
			})
		}

		function g() {
			if (k.buffered && k.duration > 0) try {
				n = k.buffered.end(0) / k.duration
			} catch (a) {
				n = 0
			}
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.LOAD_PROGRESS,
				progress: n
			})
		}

		function h() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.LOAD_OPEN
			})
		}

		function i() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.LOAD_COMPLETE
			})
		}

		function j() {
			i(), k.removeEventListener("canplay", j, !1), o = !0, m > 0 && (k.currentTime = m)
		}
		var k, l = a,
			m = 0,
			n = 0,
			o = !1,
			p = {
				mp4: "video/mp4",
				ogg: "video/ogg",
				webm: "video/webm",
				m3u8: "application/x-mpegURL"
			};
		SewisePlayer.video && !SewisePlayer.Utils.browser.versions.ios ? (k = SewisePlayer.video, k.pause()) : (k = document.createElement("video"), SewisePlayer.video = k), k.style.width = "100%", k.style.height = "100%", k.style.backgroundColor = "#000000", k.autoplay = !1, k.loop = !1, l.appendChild(k), k.addEventListener("emptied", h, !1), k.addEventListener("waiting", h, !1), k.addEventListener("seeking", h, !1), k.addEventListener("seeked", i, !1), k.addEventListener("play", b, !1), k.addEventListener("playing", b, !1), k.addEventListener("pause", c, !1), k.addEventListener("ended", d, !1), k.addEventListener("durationchange", e, !1), k.addEventListener("timeupdate", f, !1), k.addEventListener("progress", g, !1), k.addEventListener("canplay", j, !1), this.updatePlayer = function(a, b, c, d, e, f, g) {
			if (o = !1, k.addEventListener("canplay", j, !1), m = c, d && (k.poster = d), k.volume = g, f) {
				if (k.canPlayType)
					if ("" !== k.canPlayType(p[e])) k.src = a;
					else
						for (var h in f)
							if ("" !== k.canPlayType(p[h])) {
								k.src = f[h];
								break
							}
			} else k.src = a
		}, this.play = function() {
			k.autoplay = !0, k.play()
		}, this.pause = function() {
			k.pause()
		}, this.seek = function(a) {
			o ? k.currentTime = a : (k.autoplay = !0, k.play())
		}, this.stop = function() {
			k.currentTime && (k.currentTime = 0), k.pause()
		}, this.duration = function() {
			return k.duration
		}, this.currentTime = function() {
			return k.currentTime
		}, this.muted = function(a) {
			k.muted = a
		}, this.controls = function(a) {
			// k.controls = a
		}, this.volume = function(a) {
			k.volume = a
		}, this.bufferPt = function() {
			return n
		}
	}
}(),
function() {
	SewisePlayer.VodAudio = function(a) {
		function b() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.PLAY_START
			})
		}

		function c() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.PLAY_PAUSE
			})
		}

		function d() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.PLAY_ENDED
			})
		}

		function e() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.DURATION_CHANGE
			})
		}

		function f() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.TIME_UPDATE
			})
		}

		function g() {
			if (j.buffered && j.duration) try {
				i = j.buffered.end(0) / j.duration
			} catch (a) {
				i = 0
			}
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.LOAD_PROGRESS,
				progress: i
			})
		}

		function h() {
			j.removeEventListener("canplay", h, !1), m = !0, l && (j.currentTime = l)
		}
		var i, j, k = a,
			l = 0,
			m = !1,
			n = {
				mp3: "audio/mpeg",
				ogg: "audio/ogg",
				webm: "audio/webm",
				m3u8: "application/x-mpegURL"
			};
		SewisePlayer.audio && !SewisePlayer.Utils.browser.versions.ios ? (j = SewisePlayer.audio, j.pause()) : (j = document.createElement("audio"), SewisePlayer.audio = j), j.style.width = "100%", j.style.height = "100%", j.style.backgroundColor = "#000000", j.autoplay = !1, j.loop = !1, k.appendChild(j), j.addEventListener("play", b, !1), j.addEventListener("pause", c, !1), j.addEventListener("ended", d, !1), j.addEventListener("durationchange", e, !1), j.addEventListener("timeupdate", f, !1), j.addEventListener("progress", g, !1), j.addEventListener("canplay", h, !1), this.updatePlayer = function(a, b, c, d, e, f, g) {
			if (l = c, j.volume = g, f) {
				if (j.canPlayType)
					if ("" !== j.canPlayType(n[e])) j.src = a;
					else
						for (var h in f)
							if ("" !== j.canPlayType(n[h])) {
								j.src = f[h];
								break
							}
			} else j.src = a
		}, this.play = function() {
			j.autoplay = !0, j.play()
		}, this.pause = function() {
			j.pause()
		}, this.seek = function(a) {
			m ? j.currentTime = a : (j.autoplay = !0, j.play())
		}, this.stop = function() {
			j.currentTime && (j.currentTime = 0), j.pause()
		}, this.duration = function() {
			return j.duration
		}, this.currentTime = function() {
			return j.currentTime
		}, this.muted = function(a) {
			j.muted = a
		}, this.controls = function(a) {
			// j.controls = a
		}, this.volume = function(a) {
			j.volume = a
		}, this.bufferPt = function() {
			return i
		}
	}
}(),
function() {
	SewisePlayer.VodMediaConsole = function(a, b, c) {
		function d() {
			r.programTitle(b.title), r.initialClarity(SewisePlayer.GlobalVars.clarities), o.updatePlayer(b.videoUrl, b.buffer, b.startTime, b.poster, b.type, b.fallbackUrls, b.volume), b.autoStart && (b.startTime > 0 ? o.seek(b.startTime) : o.play()), p.playerReady()
		}

		function e() {
			p.playerReady(), r.programTitle("")
		}

		function f(a) {
			r = a.playerSkin, r.player(SewisePlayer.IVodPlayer), r.logo(b.logo), r.lang(b.lang), r.volume(b.volume), r.clarityButton(b.clarityButton), r.timeDisplay(b.timeDisplay), r.controlBarDisplay(b.controlBarDisplay), r.topBarDisplay(b.topBarDisplay), r.customStrings(b.customStrings), r.customDatas(b.customDatas), r.initialAds(b.adsJsonData), r.initialStatistics(b.statistics), o.controls(!1)
		}

		function g() {
			r.started(), p.onStart()
		}

		function h() {
			r.paused(), p.onPause()
		}

		function i() {
			r.stopped()
		}

		function j() {
			r.duration(o.duration())
		}

		function k() {
			var a = o.currentTime();
			r.timeUpdate(a), p.onPlayTime(a)
		}

		function l(a) {
			var b = a.progress;
			r.loadedProgress(b), p.onBuffer(b)
		}

		function m() {
			r.loadedOpen()
		}

		function n() {
			r.loadedComplete()
		}
		var o, p = this,
			q = !1,
			r = SewisePlayerSkin.IVodSkin;
		o = c == SewisePlayer.GlobalConst.AUDIO ? new SewisePlayer.VodAudio(a) : new SewisePlayer.VodVideo(a), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.STREAMS_DATA_READY, d), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.STREAMS_DATA_FAILED, e), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PLAYER_SKIN_LOADED, f), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PLAY_START, g), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PLAY_PAUSE, h), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PLAY_ENDED, i), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.DURATION_CHANGE, j), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.TIME_UPDATE, k), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.LOAD_PROGRESS, l), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.LOAD_OPEN, m), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.LOAD_COMPLETE, n), SewisePlayer.IVodPlayer.play = function() {
			o.play()
		}, SewisePlayer.IVodPlayer.pause = function() {
			o.pause()
		}, SewisePlayer.IVodPlayer.seek = function(a) {
			return b.draggable ? (o.seek(a), void p.onSeek(a)) : void alert("时移已被禁用!")
		}, SewisePlayer.IVodPlayer.stop = function() {
			o.stop(), p.onStop()
		}, SewisePlayer.IVodPlayer.changeClarity = function(a) {
			var c = a.videoUrl,
				d = SewisePlayer.IVodPlayer.playTime() > 0 ? SewisePlayer.IVodPlayer.playTime() : 0;
			SewisePlayer.IVodPlayer.toPlay(c, b.title, d, !0)
		}, SewisePlayer.IVodPlayer.setVolume = function(a) {
			o.volume(a)
		}, SewisePlayer.IVodPlayer.muted = function(a) {
			o.muted(a)
		}, SewisePlayer.IVodPlayer.playProgram = function(a, c, d) {
			b.programId = a, b.startTime = c, b.autoStart = d, b.title = "", SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.GET_VOD_STREAMS
			})
		}, SewisePlayer.IVodPlayer.toPlay = function(a, c, d, e) {
			b.videoUrl = a, b.title = c, b.startTime = d, b.autoStart = e, r.programTitle(b.title), o.updatePlayer(b.videoUrl, b.buffer, b.startTime, b.poster, b.type, b.fallbackUrls, b.volume), b.autoStart && (b.startTime > 0 ? o.seek(b.startTime) : o.play())
		}, SewisePlayer.IVodPlayer.duration = function() {
			return o.duration()
		}, SewisePlayer.IVodPlayer.playTime = function() {
			return o.currentTime()
		}, SewisePlayer.IVodPlayer.type = function() {}, SewisePlayer.IVodPlayer.showTextTip = function() {}, SewisePlayer.IVodPlayer.hideTextTip = function() {}, SewisePlayer.IVodPlayer.bufferProgress = function() {
			return o.bufferPt()
		}, this.doPlay = function() {
			SewisePlayer.IVodPlayer.play()
		}, this.doPause = function() {
			SewisePlayer.IVodPlayer.pause()
		}, this.doSeek = function(a) {
			SewisePlayer.IVodPlayer.seek(a)
		}, this.doStop = function() {
			SewisePlayer.IVodPlayer.stop()
		}, this.setVolume = function(a) {
			SewisePlayer.IVodPlayer.setVolume(a)
		}, this.duration = function() {
			return SewisePlayer.IVodPlayer.duration()
		}, this.playTime = function() {
			return SewisePlayer.IVodPlayer.playTime()
		}, this.playProgram = function(a, b, c) {
			SewisePlayer.IVodPlayer.playProgram(a, b, c)
		}, this.toPlay = function(a, b, c, d) {
			SewisePlayer.IVodPlayer.toPlay(a, b, c, d)
		}, this.fullScreen = function() {
			r.fullScreen()
		}, this.noramlScreen = function() {
			r.noramlScreen()
		}, this.bufferProgress = function() {
			return SewisePlayer.IVodPlayer.bufferProgress()
		}, this.callbackFunsObj = {
			playerReady: null,
			onStart: null,
			onStop: null,
			onMetadata: null,
			onClarity: null,
			onPause: null,
			onSeek: null,
			onPlayTime: null,
			onBuffer: null
		}, this.playerReady = function(a) {
			q || (q = !0, window.playerReady && "function" == typeof window.playerReady && window.playerReady(), p.callbackFunsObj.playerReady && p.callbackFunsObj.playerReady.call(this, a))
		}, this.onStart = function(a) {
			window.onStart && "function" == typeof window.onStart && window.onStart(a), p.callbackFunsObj.onStart && p.callbackFunsObj.onStart.call(this, a)
		}, this.onStop = function(a) {
			window.onStop && "function" == typeof window.onStop && window.onStop(a), p.callbackFunsObj.onStop && p.callbackFunsObj.onStop.call(this, a)
		}, this.onMetadata = function(a, b) {
			window.onMetadata && "function" == typeof window.onMetadata && window.onMetadata(a, b), p.callbackFunsObj.onMetadata && p.callbackFunsObj.onMetadata.call(this, a, b)
		}, this.onClarity = function(a, b) {
			window.onClarity && "function" == typeof window.onClarity && window.onClarity(a, b), p.callbackFunsObj.onClarity && p.callbackFunsObj.onClarity.call(this, a, b)
		}, this.onPause = function(a) {
			window.onPause && "function" == typeof window.onPause && window.onPause(a), p.callbackFunsObj.onPause && p.callbackFunsObj.onPause.call(this, a)
		}, this.onSeek = function(a, b) {
			window.onSeek && "function" == typeof window.onSeek && window.onSeek(a, b), p.callbackFunsObj.onSeek && p.callbackFunsObj.onSeek.call(this, a, b)
		}, this.onPlayTime = function(a, b) {
			window.onPlayTime && "function" == typeof window.onPlayTime && window.onPlayTime(a, b), p.callbackFunsObj.onPlayTime && p.callbackFunsObj.onPlayTime.call(this, a, b)
		}, this.onBuffer = function(a, b) {
			window.onBuffer && "function" == typeof window.onBuffer && window.onBuffer(a, b), p.callbackFunsObj.onBuffer && p.callbackFunsObj.onBuffer.call(this, a, b)
		}
	}
}(),
function() {
	SewisePlayer.VodMediaStreams = function(a, b) {
		function c() {
			if (l.skin) {
				var a = l.skin;
				SewisePlayer.PlayerSkinLoader(k, a)
			} else j.getStreams()
		}

		function d() {
			j.getStreams()
		}

		function e() {
			j.getStreams()
		}

		function f() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.STREAMS_DATA_READY
			})
		}

		function g() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.STREAMS_DATA_FAILED
			})
		}

		function h(a) {
			"" === l.title && (l.title = a.programname);
			for (var b = a.videos, c = 0; c < b.length; c++) {
				var d = b[c],
					e = {
						name: "",
						videoUrl: "",
						id: 0,
						selected: !1
					};
				e.name = d.name ? d.name : "", e.selected = d.selected ? d.selected : !1, e.videoUrl = d.url, e.id = c, SewisePlayer.GlobalVars.clarities.push(e), e.selected && (i = e, i.selected = !0, l.videoUrl = i.videoUrl)
			}
			i || (i = SewisePlayer.GlobalVars.clarities[0], i.selected = !0, l.videoUrl = i.videoUrl)
		}
		var i, j = this,
			k = a,
			l = b;
		SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PARAMS_READY, c), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PLAYER_SKIN_LOADED, d), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PLAYER_SKIN_LOADED_ERROR, d), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.GET_VOD_STREAMS, e), this.getStreams = function() {
			if (l.programId) return void SewisePlayer.Utils.jsonp({
				url: l.serverPath,
				jsonp: "callback",
				data: {
					"do": "getvideos",
					programid: l.programId,
					m3u8: 1,
					isAjax: 1,
					published: l.published,
					flagdatas: JSON.stringify(l.flagDatas, "", "	"),
					key: l.key
				},
				success: function(a) {
					"" === l.title && (l.title = a.programname), l.videoUrl = a.m3u8url, l.poster = a.poster, l.type = SewisePlayer.GlobalConst.M3U8, l.fallbackUrls = a.fallbackurls;
					var b = {
						name: "默认",
						videoUrl: l.videoUrl,
						id: 0,
						selected: !0
					};
					SewisePlayer.GlobalVars.clarities.push(b), f()
				}
			});
			if (l.videosJsonUrl) return h(l.videosJsonUrl), void f();
			if (l.videoUrl) {
				var a = {
					name: "默认",
					videoUrl: l.videoUrl,
					id: 0,
					selected: !0
				};
				SewisePlayer.GlobalVars.clarities.push(a), f()
			} else g()
		}
	}
}(),
function() {
	SewisePlayer.LiveVideo = function(a) {
		function b() {
			i(), SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.PLAY_START
			})
		}

		function c() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.PLAY_PAUSE
			})
		}

		function d() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.PLAY_ENDED
			})
		}

		function e() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.DURATION_CHANGE
			})
		}

		function f() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.TIME_UPDATE
			})
		}

		function g() {
			k.buffered && k.duration && (n = k.buffered.end(0) / k.duration), SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.LOAD_PROGRESS,
				progress: n
			})
		}

		function h() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.LOAD_OPEN
			})
		}

		function i() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.LOAD_COMPLETE
			})
		}

		function j() {
			i(), k.removeEventListener("canplay", j, !1), o = !0, "" !== m && (k.currentTime = m)
		}
		var k, l = a,
			m = 0,
			n = 0,
			o = !1,
			p = {
				mp4: "video/mp4",
				ogg: "video/ogg",
				webm: "video/webm",
				m3u8: "application/x-mpegURL"
			};
		SewisePlayer.video && !SewisePlayer.Utils.browser.versions.ios ? (k = SewisePlayer.video, k.pause()) : (k = document.createElement("video"), SewisePlayer.video = k), k.style.width = "100%", k.style.height = "100%", k.style.backgroundColor = "#000000", k.autoplay = !1,  k.loop = !1, l.appendChild(k), k.addEventListener("emptied", h, !1), k.addEventListener("waiting", h, !1), k.addEventListener("seeking", h, !1), k.addEventListener("seeked", i, !1), k.addEventListener("play", b, !1), k.addEventListener("playing", b, !1), k.addEventListener("pause", c, !1), k.addEventListener("ended", d, !1), k.addEventListener("durationchange", e, !1), k.addEventListener("timeupdate", f, !1), k.addEventListener("progress", g, !1), k.addEventListener("canplay", j, !1), this.updatePlayer = function(a, b, c, d, e, f, g) {
			if (m = c, d && (k.poster = d), k.volume = g, f) {
				if (k.canPlayType)
					if ("" !== k.canPlayType(p[e])) k.src = a;
					else
						for (var h in f)
							if ("" !== k.canPlayType(p[h])) {
								k.src = f[h];
								break
							}
			} else k.src = a
		}, this.play = function() {
			k.autoplay = !0, k.play()
		}, this.pause = function() {
			k.pause()
		}, this.seek = function(a) {
			o ? k.currentTime = a : (k.autoplay = !0, k.play())
		}, this.stop = function() {
			k.pause()
		}, this.duration = function() {}, this.currentTime = function() {
			return k.currentTime
		}, this.muted = function(a) {
			k.muted = a
		}, this.controls = function(a) {
			// k.controls = a
		}, this.volume = function(a) {
			k.volume = a
		}, this.bufferPt = function() {
			return n
		}
	}
}(),
function() {
	SewisePlayer.LiveMediaConsole = function(a, b) {
		function c() {
			r && (r = new Date(r.getTime() + x))
		}

		function d() {
			q = b.liveTime ? new Date(1e3 * b.liveTime) : new Date, w = q.getTime(), b.serverTime ? r = new Date(1e3 * b.serverTime) : r || (r = q)
		}

		function e() {
			b.streamId && SewisePlayer.Utils.getScript({
				url: b.serverPath,
				data: {
					"do": "epg",
					op: "getplaytime",
					sessionid: b.sessionId,
					streamid: b.streamId,
					key: b.key
				},
				success: function() {
					return this.error ? void alert(this.error) : (epgTimes.livetime && (b.liveTime = epgTimes.livetime), epgTimes.servertime && (b.serverTime = epgTimes.servertime), void d())
				}
			})
		}

		function f() {
			d(), u.programTitle(b.title), v.updatePlayer(b.streamUrl, b.buffer, b.shiftTime, b.poster, b.type, b.fallbackUrls, b.volume), v.play(), s.playerReady()
		}

		function g() {
			u.programTitle("")
		}

		function h(a) {
			u = a.playerSkin, u.player(SewisePlayer.ILivePlayer), u.logo(b.logo), u.lang(b.lang), u.duration(b.duration), u.volume(b.volume), u.clarityButton(b.clarityButton), u.timeDisplay(b.timeDisplay), u.controlBarDisplay(b.controlBarDisplay), u.topBarDisplay(b.topBarDisplay), u.customStrings(b.customStrings), u.customDatas(b.customDatas), u.initialAds(b.adsJsonData), u.initialStatistics(b.statistics), v.controls(!1)
		}

		function i() {
			u.started(), s.onStart(), e()
		}

		function j() {
			u.paused(), s.onPause()
		}

		function k() {
			u.stopped()
		}

		function l() {}

		function m() {
			var a = v.currentTime();
			q = new Date(w + 1e3 * a), u.timeUpdate(), s.onPlayTime(q)
		}

		function n(a) {
			var b = a.progress;
			s.onBuffer(b)
		}

		function o() {
			u.loadedOpen()
		}

		function p() {
			u.loadedComplete()
		}
		var q, r, s = this,
			t = !1,
			u = SewisePlayerSkin.ILiveSkin,
			v = new SewisePlayer.LiveVideo(a),
			w = 0,
			x = 1e3,
			y = (setInterval(c, x), 0);
		SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.STREAMS_DATA_READY, f), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.STREAMS_DATA_FAILED, g), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PLAYER_SKIN_LOADED, h), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PLAY_START, i), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PLAY_PAUSE, j), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PLAY_ENDED, k), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.DURATION_CHANGE, l), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.TIME_UPDATE, m), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.LOAD_PROGRESS, n), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.LOAD_OPEN, o), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.LOAD_COMPLETE, p), SewisePlayer.ILivePlayer.live = function() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.GET_LIVE_STREAMS
			})
		}, SewisePlayer.ILivePlayer.play = function() {
			v.play()
		}, SewisePlayer.ILivePlayer.pause = function() {
			v.pause()
		}, SewisePlayer.ILivePlayer.seek = function(a) {
			if (!b.draggable) return void alert("时移已被禁用!");
			new Date(a.substring(0, 4), a.substring(4, 6) - 1, a.substring(6, 8), a.substring(8, 10), a.substring(10, 12), a.substring(12, 14));
			b.shiftTime = a, SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.GET_SHIFT_STREAMS
			})
		}, SewisePlayer.ILivePlayer.stop = function() {
			v.stop(), s.onStop()
		}, SewisePlayer.ILivePlayer.changeClarity = function() {}, SewisePlayer.ILivePlayer.setVolume = function(a) {
			v.volume(a)
		}, SewisePlayer.ILivePlayer.muted = function(a) {
			v.muted(a)
		}, SewisePlayer.ILivePlayer.playChannel = function(a, c, d) {
			b.programId = a, b.shiftTime = c, b.autoStart = d, b.title = "", SewisePlayer.CommandDispatcher.dispatchEvent(b.shiftTime ? {
				type: SewisePlayer.Events.GET_SHIFT_STREAMS
			} : {
				type: SewisePlayer.Events.GET_LIVE_STREAMS
			})
		}, SewisePlayer.ILivePlayer.toPlay = function(a, c, d, e, f) {
			b.streamUrl = a, b.title = c, b.shiftTime = d, b.autoStart = e, b.programId = f, u.programTitle(b.title), SewisePlayer.CommandDispatcher.dispatchEvent(b.shiftTime ? {
				type: SewisePlayer.Events.GET_SHIFT_STREAMS
			} : {
				type: SewisePlayer.Events.GET_LIVE_STREAMS
			})
		}, SewisePlayer.ILivePlayer.duration = function() {
			return b.duration
		}, SewisePlayer.ILivePlayer.liveTime = function() {
			return r
		}, SewisePlayer.ILivePlayer.playTime = function() {
			return q
		}, SewisePlayer.ILivePlayer.type = function() {}, SewisePlayer.ILivePlayer.showTextTip = function() {}, SewisePlayer.ILivePlayer.hideTextTip = function() {}, SewisePlayer.ILivePlayer.bufferProgress = function() {
			return v.bufferPt()
		}, SewisePlayer.ILivePlayer.setDuration = function(a) {
			b.duration = a, u.duration(b.duration)
		}, SewisePlayer.ILivePlayer.refreshTimeSpan = function(a, b, c, d) {
			u.refreshTimes(a, b, c, d)
		}, this.doLive = function() {
			SewisePlayer.ILivePlayer.live()
		}, this.doPlay = function() {
			SewisePlayer.ILivePlayer.play()
		}, this.doPause = function() {
			SewisePlayer.ILivePlayer.pause()
		}, this.doSeek = function(a) {
			SewisePlayer.ILivePlayer.seek(a)
		}, this.doStop = function() {
			SewisePlayer.ILivePlayer.stop()
		}, this.setVolume = function(a) {
			SewisePlayer.ILivePlayer.setVolume(a)
		}, this.liveTime = function(a) {
			return a && 0 !== y ? new Date(SewisePlayer.ILivePlayer.liveTime().getTime() + y) : SewisePlayer.ILivePlayer.liveTime()
		}, this.playTime = function(a) {
			return a && 0 !== y ? new Date(SewisePlayer.ILivePlayer.playTime().getTime() + y) : SewisePlayer.ILivePlayer.playTime()
		}, this.playChannel = function(a, b, c) {
			SewisePlayer.ILivePlayer.playChannel(a, b, c)
		}, this.toPlay = function(a, b, c, d, e) {
			SewisePlayer.ILivePlayer.toPlay(a, b, c, d, e)
		}, this.fullScreen = function() {
			u.fullScreen()
		}, this.noramlScreen = function() {
			u.noramlScreen()
		}, this.bufferProgress = function() {
			return SewisePlayer.ILivePlayer.bufferProgress()
		}, this.setDuration = function(a) {
			SewisePlayer.ILivePlayer.setDuration(a)
		}, this.refreshTimeSpan = function(a, b, c, d) {
			a && b && SewisePlayer.ILivePlayer.refreshTimeSpan(a, b, c, d), c && (y = new Date(c).getTime() - 1e3 * d)
		}, this.callbackFunsObj = {
			playerReady: null,
			onStart: null,
			onStop: null,
			onMetadata: null,
			onClarity: null,
			onPause: null,
			onSeek: null,
			onPlayTime: null,
			onBuffer: null
		}, this.playerReady = function() {
			t || (t = !0, window.playerReady && "function" == typeof window.playerReady && window.playerReady(), s.callbackFunsObj.playerReady && s.callbackFunsObj.playerReady.call(this, id))
		}, this.onStart = function(a) {
			window.onStart && "function" == typeof window.onStart && window.onStart(a), s.callbackFunsObj.onStart && s.callbackFunsObj.onStart.call(this, a)
		}, this.onStop = function(a) {
			window.onStop && "function" == typeof window.onStop && window.onStop(a), s.callbackFunsObj.onStop && s.callbackFunsObj.onStop.call(this, a)
		}, this.onMetadata = function(a, b) {
			window.onMetadata && "function" == typeof window.onMetadata && window.onMetadata(a, b), s.callbackFunsObj.onMetadata && s.callbackFunsObj.onMetadata.call(this, a, b)
		}, this.onClarity = function(a, b) {
			window.onClarity && "function" == typeof window.onClarity && window.onClarity(a, b), s.callbackFunsObj.onClarity && s.callbackFunsObj.onClarity.call(this, a, b)
		}, this.onPause = function(a) {
			window.onPause && "function" == typeof window.onPause && window.onPause(a), s.callbackFunsObj.onPause && s.callbackFunsObj.onPause.call(this, a)
		}, this.onSeek = function(a, b) {
			window.onSeek && "function" == typeof window.onSeek && window.onSeek(a, b), s.callbackFunsObj.onSeek && s.callbackFunsObj.onSeek.call(this, a, b)
		}, this.onPlayTime = function(a, b) {
			window.onPlayTime && "function" == typeof window.onPlayTime && window.onPlayTime(a, b), s.callbackFunsObj.onPlayTime && s.callbackFunsObj.onPlayTime.call(this, a, b)
		}, this.onBuffer = function(a, b) {
			window.onBuffer && "function" == typeof window.onBuffer && window.onBuffer(a, b), s.callbackFunsObj.onBuffer && s.callbackFunsObj.onBuffer.call(this, a, b)
		}
	}
}(),
function() {
	SewisePlayer.LiveMediaStreams = function(a, b) {
		function c() {
			if (k.skin) {
				var a = k.skin;
				SewisePlayer.PlayerSkinLoader(j, a)
			} else k.shiftTime ? i.getShiftStreams() : i.getLiveStreams()
		}

		function d() {
			k.shiftTime ? i.getShiftStreams() : i.getLiveStreams()
		}

		function e() {
			i.getLiveStreams()
		}

		function f() {
			i.getShiftStreams()
		}

		function g() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.STREAMS_DATA_READY
			})
		}

		function h() {
			SewisePlayer.CommandDispatcher.dispatchEvent({
				type: SewisePlayer.Events.STREAMS_DATA_FAILED
			})
		}
		var i = this,
			j = a,
			k = b;
		SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PARAMS_READY, c), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PLAYER_SKIN_LOADED, d), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.PLAYER_SKIN_LOADED_ERROR, d), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.GET_LIVE_STREAMS, e), SewisePlayer.CommandDispatcher.addEventListener(SewisePlayer.Events.GET_SHIFT_STREAMS, f), this.getLiveStreams = function() {
			return k.programId ? void SewisePlayer.Utils.getScript({
				url: k.serverPath,
				data: {
					"do": "getm3u8bypid",
					programid: k.programId,
					published: k.published,
					flagdatas: JSON.stringify(k.flagDatas, "", "	"),
					key: k.key
				},
				success: function() {
					if (this.error) return void alert(this.error);
					var a = this.serverInfo || {};
					k.streamUrl = this.m3u8Url ? this.m3u8Url : a.url, "" === k.title && (k.title = this.programname ? this.programname : a.name), k.poster = this.poster ? this.poster : a.poster, k.type = SewisePlayer.GlobalConst.M3U8, k.fallbackUrls = this.fallbackurls ? this.fallbackurls : a.fallbackurls, k.sessionId = a.sessionid, k.streamId = a.streamid, k.liveTime = a.livetime, k.serverTime = a.servertime, g()
				}
			}) : void(k.streamUrl ? g() : h())
		}, this.getShiftStreams = function() {
			SewisePlayer.Utils.getScript({
				url: k.serverPath,
				data: {
					"do": "epg",
					op: "getm3u8",
					programid: k.programId,
					published: k.published,
					time: k.shiftTime,
					playShift: "true",
					key: k.key
				},
				success: function() {
					return this.error ? void alert(this.error) : ("" === k.title && (k.title = epgM3u8.programname), k.streamUrl = epgM3u8.url, k.sessionId = epgM3u8.sessionid, k.streamId = epgM3u8.streamid, k.liveTime = epgM3u8.livetime ? epgM3u8.livetime : k.shiftTime, k.serverTime = epgM3u8.servertime ? epgM3u8.servertime : "", void g())
				}
			})
		}
	}
}(),
function() {
	SewisePlayer.PlayerCommon = function(a, b, c, d) {
		var e, f;
		return a == SewisePlayer.GlobalConst.VOD ? (f = new SewisePlayer.VodMediaConsole(b, c, d), e = new SewisePlayer.VodMediaStreams(b, c)) : a == SewisePlayer.GlobalConst.LIVE && (f = new SewisePlayer.LiveMediaConsole(b, c, d), e = new SewisePlayer.LiveMediaStreams(b, c)), f
	}
}(),
function() {
	SewisePlayer.FlashExternalInterface = function(a, b) {
		var c;
		if (a == SewisePlayer.GlobalConst.VOD) {
			if (SewisePlayer.doPlay = function() {
					b.doPlay()
				}, SewisePlayer.doPause = function() {
					b.doPause()
				}, SewisePlayer.doSeek = function(a) {
					b.doSeek(a)
				}, SewisePlayer.doStop = function() {
					b.doStop()
				}, SewisePlayer.setVolume = function(a) {
					b.setVolume(a)
				}, SewisePlayer.duration = function() {
					return b.duration()
				}, SewisePlayer.playTime = function() {
					return b.playTime()
				}, SewisePlayer.playProgram = function(a, c, d) {
					b.playProgram(a, c, d)
				}, SewisePlayer.toPlay = function(a, c, d, e) {
					b.toPlay(a, c, d, e)
				}, SewisePlayer.fullScreen = function() {
					b.fullScreen()
				}, SewisePlayer.noramlScreen = function() {
					b.noramlScreen()
				}, SewisePlayer.bufferProgress = function() {
					return b.bufferProgress()
				}, b) return;
			c = {
				playerReady: null,
				onStart: null,
				onStop: null,
				onMetadata: null,
				onClarity: null,
				onPause: null,
				onSeek: null,
				onPlayTime: null,
				onBuffer: null
			}, SewisePlayer.playerReady = function(a) {
				c.playerReady = a
			}, SewisePlayer.onStart = function(a) {
				c.onStart = a
			}, SewisePlayer.onStop = function(a) {
				c.onStop = a
			}, SewisePlayer.onMetadata = function(a) {
				c.onMetadata = a
			}, SewisePlayer.onClarity = function(a) {
				c.onClarity = a
			}, SewisePlayer.onPause = function(a) {
				c.onPause = a
			}, SewisePlayer.onSeek = function(a) {
				c.onSeek = a
			}, SewisePlayer.onSeek = function(a) {
				c.onSeek = a
			}, SewisePlayer.onPlayTime = function(a) {
				c.onPlayTime = a
			}, SewisePlayer.onBuffer = function(a) {
				c.onBuffer = a
			}, SewisePlayer.callbackFunction = function(a, b) {
				switch (a) {
					case "playerReady":
						c.playerReady && c.playerReady.call(this, b[0]);
						break;
					case "onStart":
						c.onStart && c.onStart.call(this, b[0]);
						break;
					case "onStop":
						c.onStop && c.onStop.call(this, b[0]);
						break;
					case "onMetadata":
						c.onMetadata && c.onMetadata.call(this, b[0], b[1]);
						break;
					case "onClarity":
						c.onClarity && c.onClarity.call(this, b[0], b[1]);
						break;
					case "onPause":
						c.onPause && c.onPause.call(this, b[0]);
						break;
					case "onSeek":
						c.onSeek && c.onSeek.call(this, b[0], b[1]);
						break;
					case "onPlayTime":
						c.onPlayTime && c.onPlayTime.call(this, b[0], b[1]);
						break;
					case "onBuffer":
						c.onBuffer && c.onBuffer.call(this, b[0], b[1])
				}
			}
		} else if (a == SewisePlayer.GlobalConst.LIVE) {
			if (SewisePlayer.doPlay = function() {
					b.doPlay()
				}, SewisePlayer.doPause = function() {
					b.doPause()
				}, SewisePlayer.doSeek = function(a) {
					b.doSeek(a)
				}, SewisePlayer.doStop = function() {
					b.doStop()
				}, SewisePlayer.doLive = function() {
					b.doLive()
				}, SewisePlayer.setVolume = function(a) {
					b.setVolume(a)
				}, SewisePlayer.liveTime = function(a) {
					return b.liveTime(void 0 === a ? !0 : a)
				}, SewisePlayer.playTime = function(a) {
					return b.playTime(void 0 === a ? !0 : a)
				}, SewisePlayer.playChannel = function(a, c, d) {
					b.playChannel(a, c, d)
				}, SewisePlayer.toPlay = function(a, c, d, e) {
					b.toPlay(a, c, d, e)
				}, SewisePlayer.fullScreen = function() {
					b.fullScreen()
				}, SewisePlayer.noramlScreen = function() {
					b.noramlScreen()
				}, SewisePlayer.bufferProgress = function() {
					return b.bufferProgress()
				}, SewisePlayer.setDuration = function(a) {
					b.setDuration(a)
				}, SewisePlayer.refreshTimeSpan = function(a, c, d, e) {
					b.refreshTimeSpan(a, c, d, e)
				}, b) return;
			c = {
				playerReady: null,
				onStart: null,
				onStop: null,
				onMetadata: null,
				onClarity: null,
				onPause: null,
				onSeek: null,
				onPlayTime: null,
				onBuffer: null
			}, SewisePlayer.playerReady = function(a) {
				c.playerReady = a
			}, SewisePlayer.onStart = function(a) {
				c.onStart = a
			}, SewisePlayer.onStop = function(a) {
				c.onStop = a
			}, SewisePlayer.onMetadata = function(a) {
				c.onMetadata = a
			}, SewisePlayer.onClarity = function(a) {
				c.onClarity = a
			}, SewisePlayer.onPause = function(a) {
				c.onPause = a
			}, SewisePlayer.onSeek = function(a) {
				c.onSeek = a
			}, SewisePlayer.onSeek = function(a) {
				c.onSeek = a
			}, SewisePlayer.onPlayTime = function(a) {
				c.onPlayTime = a
			}, SewisePlayer.onBuffer = function(a) {
				c.onBuffer = a
			}, SewisePlayer.callbackFunction = function(a, b) {
				switch (a) {
					case "playerReady":
						c.playerReady && c.playerReady.call(this, b[0]);
						break;
					case "onStart":
						c.onStart && c.onStart.call(this, b[0]);
						break;
					case "onStop":
						c.onStop && c.onStop.call(this, b[0]);
						break;
					case "onMetadata":
						c.onMetadata && c.onMetadata.call(this, b[0], b[1]);
						break;
					case "onClarity":
						c.onClarity && c.onClarity.call(this, b[0], b[1]);
						break;
					case "onPause":
						c.onPause && c.onPause.call(this, b[0]);
						break;
					case "onSeek":
						c.onSeek && c.onSeek.call(this, b[0], b[1]);
						break;
					case "onPlayTime":
						c.onPlayTime && c.onPlayTime.call(this, b[0], b[1]);
						break;
					case "onBuffer":
						c.onBuffer && c.onBuffer.call(this, b[0], b[1])
				}
			}
		}
	}
}(),
function() {
	SewisePlayer.Html5ExternalInterface = function(a, b) {
		a == SewisePlayer.GlobalConst.VOD ? (SewisePlayer.doPlay = function() {
			b.doPlay()
		}, SewisePlayer.doPause = function() {
			b.doPause()
		}, SewisePlayer.doSeek = function(a) {
			b.doSeek(a)
		}, SewisePlayer.doStop = function() {
			b.doStop()
		}, SewisePlayer.setVolume = function(a) {
			b.setVolume(a)
		}, SewisePlayer.duration = function() {
			return b.duration()
		}, SewisePlayer.playTime = function() {
			return b.playTime()
		}, SewisePlayer.playProgram = function(a, c, d) {
			b.playProgram(a, c, d)
		}, SewisePlayer.toPlay = function(a, c, d, e) {
			b.toPlay(a, c, d, e)
		}, SewisePlayer.fullScreen = function() {
			b.fullScreen()
		}, SewisePlayer.noramlScreen = function() {
			b.noramlScreen()
		}, SewisePlayer.bufferProgress = function() {
			return b.bufferProgress()
		}, SewisePlayer.playerReady = function(a) {
			b.callbackFunsObj.playerReady = a
		}, SewisePlayer.onStart = function(a) {
			b.callbackFunsObj.onStart = a
		}, SewisePlayer.onStop = function(a) {
			b.callbackFunsObj.onStop = a
		}, SewisePlayer.onMetadata = function(a) {
			b.callbackFunsObj.onMetadata = a
		}, SewisePlayer.onClarity = function(a) {
			b.callbackFunsObj.onClarity = a
		}, SewisePlayer.onPause = function(a) {
			b.callbackFunsObj.onPause = a
		}, SewisePlayer.onSeek = function(a) {
			b.callbackFunsObj.onSeek = a
		}, SewisePlayer.onSeek = function(a) {
			b.callbackFunsObj.onSeek = a
		}, SewisePlayer.onPlayTime = function(a) {
			b.callbackFunsObj.onPlayTime = a
		}, SewisePlayer.onBuffer = function(a) {
			b.callbackFunsObj.onBuffer = a
		}) : a == SewisePlayer.GlobalConst.LIVE && (SewisePlayer.doLive = function() {
			b.doLive()
		}, SewisePlayer.doPlay = function() {
			b.doPlay()
		}, SewisePlayer.doPause = function() {
			b.doPause()
		}, SewisePlayer.setVolume = function(a) {
			b.setVolume(a)
		}, SewisePlayer.doSeek = function(a) {
			b.doSeek(a)
		}, SewisePlayer.doStop = function() {
			b.doStop()
		}, SewisePlayer.liveTime = function(a) {
			return b.liveTime(void 0 === a ? !0 : a)
		}, SewisePlayer.playTime = function(a) {
			return b.playTime(void 0 === a ? !0 : a)
		}, SewisePlayer.playChannel = function(a, c, d) {
			b.playChannel(a, c, d)
		}, SewisePlayer.toPlay = function(a, c, d, e) {
			b.toPlay(a, c, d, e)
		}, SewisePlayer.fullScreen = function() {
			b.fullScreen()
		}, SewisePlayer.noramlScreen = function() {
			b.noramlScreen()
		}, SewisePlayer.bufferProgress = function() {
			return b.bufferProgress()
		}, SewisePlayer.setDuration = function(a) {
			b.setDuration(a)
		}, SewisePlayer.refreshTimeSpan = function(a, c, d, e) {
			b.refreshTimeSpan(a, c, d, e)
		}, SewisePlayer.playerReady = function(a) {
			b.callbackFunsObj.playerReady = a
		}, SewisePlayer.onStart = function(a) {
			b.callbackFunsObj.onStart = a
		}, SewisePlayer.onStop = function(a) {
			b.callbackFunsObj.onStop = a
		}, SewisePlayer.onMetadata = function(a) {
			b.callbackFunsObj.onMetadata = a
		}, SewisePlayer.onClarity = function(a) {
			b.callbackFunsObj.onClarity = a
		}, SewisePlayer.onPause = function(a) {
			b.callbackFunsObj.onPause = a
		}, SewisePlayer.onSeek = function(a) {
			b.callbackFunsObj.onSeek = a
		}, SewisePlayer.onSeek = function(a) {
			b.callbackFunsObj.onSeek = a
		}, SewisePlayer.onPlayTime = function(a) {
			b.callbackFunsObj.onPlayTime = a
		}, SewisePlayer.onBuffer = function(a) {
			b.callbackFunsObj.onBuffer = a
		})
	}
}(),
function() {
	SewisePlayer.ContextMenu = function(a, b) {
		a.oncontextmenu = function(c) {
			c.preventDefault ? c.preventDefault() : c.returnValue = !1;
			var d = document.createElement("div");
			d.innerHTML = '<ul class="sewise_player_contextmenu_items"><li>' + b.playerName + "</li><li>" + b.playerVersion + "</li><li>" + b.buildDate + "</li><li>--------------------------------------------------</li><li>" + b.copyright + "</li></ul>", d.style.position = "absolute", d.style.width = "300px", d.style.background = "#eee", d.style.border = "1px solid #ccc", d.style.boxShadow = "3px 3px 3px rgba(0, 0, 0, 0.3)", d.style.left = c.clientX - a.getBoundingClientRect().left + "px", d.style.top = c.clientY - a.getBoundingClientRect().top + "px", d.style.zIndex = 10, a.appendChild(d);
			var e = document.createElement("style");
			e.innerHTML = 'ul.sewise_player_contextmenu_items {margin:0; padding:0; }ul.sewise_player_contextmenu_items li {list-style: none; padding: 5px 20px; cursor: default; font-family: "MS Sans Serif", Geneva, sans-serif; font-size: 10px; }ul.sewise_player_contextmenu_items li:hover {background: #888; color: #fff; }', a.appendChild(e), document.onmousedown = function(c) {
				c.target.textContent == b.playerName && window.open("http://player.sewise.com/", "_blank"), d && (a.removeChild(d), a.removeChild(e), d = null, e = null)
			}
		}
	}
}(),
function() {
	function a(a) 
	{
		function b() {
			d(m, i)
		}

		function d(a, b) {
			var d = a,
				e = b,
				f = document.createElement("div"),
				h = "swf-container";
			f.id = h, d.appendChild(f);
			var i, l = {
					allowfullscreen: !0,
					wmode: "transparent",
					allowscriptaccess: "always"
				},
				m = {
					id: j,
					name: j
				},
				n = c.getSwfPath();
			i = "" === n ? k == SewisePlayer.GlobalConst.AUDIO ? SewisePlayer.localPath + "flash/plugins/AudioPlayer.swf" : SewisePlayer.localPath + "flash/SewisePlayer.swf" : k == SewisePlayer.GlobalConst.AUDIO ? n + "flash/plugins/AudioPlayer.swf" : n + "flash/SewisePlayer.swf", swfobject.embedSWF(i, h, "100%", "100%", "9.0.115", !1, e, l, m, function() {
				var a = document.getElementById(j);
				SewisePlayer.FlashExternalInterface(g, a)
			})
		}

		function e(a, b) {
			{
				var c = a,
					d = b,
					e = new SewisePlayer.H5Params(d),
					f = new SewisePlayer.PlayerCommon(g, c, e, k);
				new SewisePlayer.ContextMenu(c, e)
			}
			SewisePlayer.Html5ExternalInterface(g, f), e.parseParams(d)
		}
		var f, g = c.getServerType(),
			h = c.getPlayerType(),
			i = c.getPlayVars(),
			j = c.getPlayerId(),
			k = c.getMediaType();
		if (a) f = document.getElementById(a);
		else {
			var l = SewisePlayer.script;
			f = l.parentNode
		}
		// var m = document.createElement("div");
		var m = f;
		if (m.style.position = "relative", m.style.width = "100%", m.style.height = "100%", m.style.left = "0px", m.style.top = "0px",  h == SewisePlayer.GlobalConst.HTML5) 
			e(m, i);
		else {
			SewisePlayer.FlashExternalInterface(g, null);
			var n = SewisePlayer.localPath + "js/swfobject.js";
			SewisePlayer.Utils.loader.loadJsFile(window.swfobject, n, b)
		}
	}
	var b = ["SewisePlayer.js", "sewise.player.min.js"],
		c = new SewisePlayer.GlobalParams(b),
		d = c.getParameObj();
	SewisePlayer.Utils.object.isEmpty(d) || (c.init(d, !1), a()), SewisePlayer.setup = function(b, e) {
		d = b, c.init(d, !0), a(e)
	}
}(window);