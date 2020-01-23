
		//global variabels
		var playlist = [
		[0, "Amv_1", "Коллекция#", "Пишем плеер", "http://globalmich.ddns.net/elements/video/amv1.mp4",
		"img/player/amv1_512.png", "img/player/amv1_384.png", "img/player/amv1_256.png",
		"img/player/amv1_192.png", "img/player/amv1_128.png", "img/player/amv1_96.png"],
		[1, "Amv_2", "Коллекция$", "Пишем плеер", "http://globalmich.ddns.net/elements/video/amv2.mp4",
		"img/player/amv2_512.png", "img/player/amv2_384.png", "img/player/amv2_256.png",
		"img/player/amv2_192.png", "img/player/amv2_128.png", "img/player/amv2_96.png"],
		[2, "Amv_3", "Коллекция%", "Пишем плеер", "http://globalmich.ddns.net/elements/video/amv3.mp4",
		"img/player/amv3_512.png", "img/player/amv3_384.png", "img/player/amv3_256.png",
		"img/player/amv3_192.png", "img/player/amv3_128.png", "img/player/amv3_96.png"]
		];
		var video_count=0;

		// Start listin player
		document.addEventListener("DOMContentLoaded", function(event) {
			var video= getelementbyid("videoframe");
			var currentplay=getelementbyid("currentplay");
			var controls = {
				pre:getelementbyid("pre"),
				next:getelementbyid("next")
			}

			currentplay.text(playlist[video_count][1]);
			video[0].addEventListener("ended", function() {
				if (video_count==playlist.length-1) {video_count=0}
					else {video_count++}
					video[0].src=playlist[video_count][4];
					currentplay.text(playlist[video_count][1]);
					video[0].play();
					navigator.mediaSession.metadata = new MediaMetadata({
						title: playlist[video_count][1],
						artist: playlist[video_count][2],
						album: playlist[video_count][3],
						artwork: [
						{ src: playlist[video_count][10],  sizes: '96x96',   type: 'image/png' },
						{ src: playlist[video_count][9], sizes: '128x128', type: 'image/png' },
						{ src: playlist[video_count][8], sizes: '192x192', type: 'image/png' },
						{ src: playlist[video_count][7], sizes: '256x256', type: 'image/png' },
						{ src: playlist[video_count][6], sizes: '384x384', type: 'image/png' },
						{ src: playlist[video_count][5], sizes: '512x512', type: 'image/png' },
						]
					});
				});

			play_item = function(id) {
				video_count=id-1;
				video[0].src=playlist[video_count][4];
				currentplay.text(playlist[video_count][1]);
				video[0].play();
			} 

			play_next = function() {
				if (video_count==playlist.length-1) {video_count=0}
					else {video_count++}
						video[0].src=playlist[video_count][4];
					currentplay.text(playlist[video_count][1]);
					video[0].play();
					navigator.mediaSession.metadata = new MediaMetadata({
						title: playlist[video_count][1],
						artist: playlist[video_count][2],
						album: playlist[video_count][3],
						artwork: [
						{ src: playlist[video_count][10],  sizes: '96x96',   type: 'image/png' },
						{ src: playlist[video_count][9], sizes: '128x128', type: 'image/png' },
						{ src: playlist[video_count][8], sizes: '192x192', type: 'image/png' },
						{ src: playlist[video_count][7], sizes: '256x256', type: 'image/png' },
						{ src: playlist[video_count][6], sizes: '384x384', type: 'image/png' },
						{ src: playlist[video_count][5], sizes: '512x512', type: 'image/png' },
						]
					});
				}
				play_pre = function() {
					if (video_count==0) {video_count=playlist.length-1}
						else {video_count--}
							video[0].src=playlist[video_count][4];
						currentplay.text(playlist[video_count][1]);
						video[0].play();
						navigator.mediaSession.metadata = new MediaMetadata({
							title: playlist[video_count][1],
							artist: playlist[video_count][2],
							album: playlist[video_count][3],
							artwork: [
							{ src: playlist[video_count][10],  sizes: '96x96',   type: 'image/png' },
							{ src: playlist[video_count][9], sizes: '128x128', type: 'image/png' },
							{ src: playlist[video_count][8], sizes: '192x192', type: 'image/png' },
							{ src: playlist[video_count][7], sizes: '256x256', type: 'image/png' },
							{ src: playlist[video_count][6], sizes: '384x384', type: 'image/png' },
							{ src: playlist[video_count][5], sizes: '512x512', type: 'image/png' },
							]
						});
					}
			controls.pre.click(function() {
				play_pre();
				});
			controls.next.click(function() {
				play_next();
				});
		});

		//Open Media session
		if ('mediaSession' in navigator) {
			var video=$("#videoframe");
			let skipTime = 10;
		  navigator.mediaSession.metadata = new MediaMetadata({
		    title: playlist[video_count][1],
		    artist: playlist[video_count][2],
		    album: playlist[video_count][3],
		    artwork: [
		      { src: playlist[video_count][10],  sizes: '96x96',   type: 'image/png' },
		      { src: playlist[video_count][9], sizes: '128x128', type: 'image/png' },
		      { src: playlist[video_count][8], sizes: '192x192', type: 'image/png' },
		      { src: playlist[video_count][7], sizes: '256x256', type: 'image/png' },
		      { src: playlist[video_count][6], sizes: '384x384', type: 'image/png' },
		      { src: playlist[video_count][5], sizes: '512x512', type: 'image/png' },
		    ]
		  });
		  navigator.mediaSession.setActionHandler('play', function() {video[0].play();});
		  navigator.mediaSession.setActionHandler('pause', function() {video[0].pause();});
		  navigator.mediaSession.setActionHandler('seekbackward', function() {video[0].currentTime = Math.max(video[0].currentTime - skipTime, 0);});
		  navigator.mediaSession.setActionHandler('seekforward', function() {video[0].currentTime = Math.min(video[0].currentTime + skipTime, video[0].duration);});
		  navigator.mediaSession.setActionHandler('previoustrack', function() {play_pre();});
		  navigator.mediaSession.setActionHandler('nexttrack', function() {play_next();});
		}