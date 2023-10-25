videojs.registerPlugin('pluginName', function() {
    //var myPlayer = this;
    <script src="//path/to/video.js"></script>
    <script src="//path/to/videojs-settings-menu.js"></script>
    <script>
	var player = videojs('videojs-settings-menu-player', {
		'playbackRates': [0.5, 1, 1.5, 2],
		controlBar: {
			children: {
				'playToggle':{},
				'muteToggle':{},
				'volumeControl':{},
				'currentTimeDisplay':{},
				'timeDivider':{},
				'durationDisplay':{},
				'liveDisplay':{},

				'flexibleWidthSpacer':{},
				'progressControl':{},

				'settingsMenuButton': {
					entries : [
						'subtitlesButton',
						'playbackRateMenuButton'
					]
				},
				'fullscreenToggle':{}
			}
		}
	});
</script>
  });
