videojs.registerPlugin('pluginName', function() {
    //var myPlayer = this;
    <script src="https://players.brightcove.net/18140038001/7VVzCFZXE_default/index.min.js"></script>
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
