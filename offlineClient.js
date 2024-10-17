const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
    '/',
'/loading-logo.png',
'/spanish.png',
'/hmmg_layoutTransition.css',
'/jquery.gritter.css',
'/speedrunner.png',
'/english.png',
'/erigato.png',
'/ovospaceprogram.png',
'/GameAnalytics.js',
'/ovo3.png',
'/Tween.js',
'/unlockalllevels.js',
'/lzma.js',
'/levels.json',
'/index.html',
'/alien.png',
'/html2canvas.min.js',
'/purified.png',
'/community.png',
'/coinsecret.png',
'/fonts.css',
'/mechanics.png',
'/ovoplus.png',
'/lightspeed.png',
'/theliljoker.png',
'/websdkwrapper.js',
'/check.png',
'/languages.json',
'/lknight.png',
'/knight.png',
'/jquery-3.4.1.min.js',
'/coin.png',
'/frank.png',
'/amongus.png',
'/icon-256.png',
'/shyguy.png',
'/french.png',
'/dknight.png',
'/skins.json',
'/jquery.gritter.js',
'/howler.js',
'/achievements.json',
'/c2runtime.js',
'/data.js',
'/runner.png',
'/gettingserious.png',
'/offlineClient.js',
'/sdkconfig.json',
'/brazilian.png',
'/tips.json',
'/animate.css',
'/thefall.png',
'/default.png',
'/appmanifest.json',
'/pole.png',
'/ada.png',
'/tutorials.png',
'/electrical.png',
'/cmg.png',
'/astronaut.png',
'/style.css',
'/materwelon.png',
'/batter.png',
'/ovo2.png',
'/ovo.png',
'/ovo-level-editor.js',
'/jttp.png',
'/higherorder.png',
'/pulse.png',
'/velocity.png',
'/fl1ckd.png',
'/retron2000.ttf',
'/ovo-multiplayer.js',
'/media/jump.ogg',
'/media/rocket-2.ogg',
'/media/track 2.ogg',
'/media/sfx_transition-03.ogg',
'/media/button.ogg',
'/media/hover.ogg',
'/media/among us slice.ogg',
'/media/track 1.ogg',
'/media/track1.ogg',
'/media/menutrack.ogg',
'/media/sfx_transition-04.ogg',
'/media/track4.ogg',
'/media/sfx_transition-09.ogg',
'/media/sfx_transition-02.ogg',
'/media/death.ogg',
'/media/track 3.ogg',
'/media/plunge.ogg',
'/media/sfx_transition-05.ogg',
'/media/superjump.ogg',
'/media/hurt.ogg',
'/media/transition.ogg',
'/media/among us death.ogg',
'/media/sfx_transition-07.ogg',
'/media/footstep.ogg',
'/media/prepound.ogg',
'/media/step3.ogg',
'/media/jumpstrong.ogg',
'/media/return.ogg',
'/media/slide.ogg',
'/media/sfx_transition-08.ogg',
'/media/slide_recover.ogg',
'/media/coin1.ogg',
'/media/sfx_transition-06.ogg',
'/media/death-2.ogg',
'/media/track2.ogg',
'/media/sfx_transition-01.ogg',
'/media/walljump.ogg',
'/media/track3.ogg',
'/media/stun.ogg',
'/media/pound.ogg',
'/media/step2.ogg',
'/media/track 4.ogg',
'/media/click.ogg',
'/media/jumpboost.ogg',
'/media/step.ogg',
'/images/skin9-sheet0.png',
'/images/sliderbar-sheet0.png',
'/images/skin11-sheet0.png',
'/images/titlelogo-sheet0.png',
'/images/movearea-sheet0.png',
'/images/groundpoundsolid.png',
'/images/sprite5-sheet0.png',
'/images/vector-sheet0.png',
'/images/decor-sheet0.png',
'/images/skin18-sheet0.png',
'/images/spike2-sheet0.png',
'/images/listitem-sheet0.png',
'/images/skin6-sheet0.png',
'/images/ared-sheet0.png',
'/images/particles.png',
'/images/skin4-sheet0.png',
'/images/decor-sheet1.png',
'/images/solid2.png',
'/images/spike-sheet1.png',
'/images/tiledbackground.png',
'/images/background-sheet0.png',
'/images/rocketlauncher-sheet0.png',
'/images/listsubitembtn-sheet0.png',
'/images/layoutnumber.png',
'/images/menubutton-sheet1.png',
'/images/dedraloader-sheet0.png',
'/images/skin13-sheet0.png',
'/images/cmgskin-sheet0.png',
'/images/skin4-sheet1.png',
'/images/pulse-sheet0.png',
'/images/skin21-sheet0.png',
'/images/portal-sheet0.png',
'/images/pulse-sheet1.png',
'/images/rocket-sheet0.png',
'/images/tiledbackground2.png',
'/images/sprite10-sheet0.png',
'/images/endcarddialog-sheet0.png',
'/images/decor2-sheet0.png',
'/images/solidmove.png',
'/images/inputsdialog.png',
'/images/skin10-sheet0.png',
'/images/skin3-sheet1.png',
'/images/layoutnameholder-sheet0.png',
'/images/body-sheet0.png',
'/images/buttontrigger-sheet0.png',
'/images/sprite8-sheet0.png',
'/images/skin16-sheet0.png',
'/images/skin22-sheet0.png',
'/images/collider-sheet0.png',
'/images/agreen-sheet0.png',
'/images/languagebutton2-sheet0.png',
'/images/adblocksign-sheet0.png',
'/images/spike-sheet0.png',
'/images/menubutton3-sheet1.png',
'/images/checkbox-sheet0.png',
'/images/skin5-sheet0.png',
'/images/menubutton3-sheet0.png',
'/images/uidirectionbtn-sheet0.png',
'/images/camera-sheet0.png',
'/images/languageflag-sheet1.png',
'/images/skin4-sheet2.png',
'/images/skin12-sheet0.png',
'/images/sprite7-sheet0.png',
'/images/mark-sheet0.png',
'/images/jumpboost-sheet0.png',
'/images/listsubitembtn-sheet2.png',
'/images/dialogoverlay-sheet0.png',
'/images/skin19-sheet0.png',
'/images/skin1-sheet0.png',
'/images/sprite-sheet0.png',
'/images/skin6-sheet1.png',
'/images/pumpkin-sheet0.png',
'/images/buttontrigger-sheet1.png',
'/images/layoutsubtitle.png',
'/images/skin15-sheet0.png',
'/images/listsubitembtn-sheet1.png',
'/images/pulse-sheet2.png',
'/images/listparent-sheet0.png',
'/images/triggerarea-sheet0.png',
'/images/sprite9-sheet0.png',
'/images/coin-sheet0.png',
'/images/bfakenine-sheet0.png',
'/images/splashscreen-sheet0.png',
'/images/loadinganim-sheet1.png',
'/images/skin23-sheet0.png',
'/images/particlesbg.png',
'/images/spritefontdeluxew.png',
'/images/leftarm-sheet0.png',
'/images/loadinganim-sheet0.png',
'/images/skin17-sheet0.png',
'/images/menubutton-sheet0.png',
'/images/frank_1-sheet0.png',
'/images/skin3-sheet0.png',
'/images/languagebutton-sheet0.png',
'/images/skin2-sheet0.png',
'/images/spritefontdeluxe.png',
'/images/sprite-sheet1.png',
'/images/sprite2-sheet0.png',
'/images/tiledbackground3.png',
'/images/skin24-sheet0.png',
'/images/skin8-sheet0.png',
'/images/collider-sheet1.png',
'/images/sprite4-sheet0.png',
'/images/bannercontainer-sheet0.png',
'/images/languageflag-sheet0.png',
'/images/menubutton-sheet2.png',
'/images/ablue-sheet0.png',
'/images/fakeparseimage-sheet0.png',
'/images/border.png',
'/images/solid.png',
'/images/jumpthrough.png',
'/images/head-sheet0.png',
'/images/levelbutton-sheet0.png',
'/images/skin20-sheet0.png',
'/images/movearea-sheet1.png',
'/images/solid3.png',
'/images/skin10-sheet1.png',
'/images/dedraloader-sheet1.png',
'/images/runningcanvas.png',
'/images/fakenine-sheet0.png',
'/images/skin19-sheet1.png',
'/images/skin7-sheet0.png',
'/images/credits-sheet0.png',
'/images/skin3-sheet2.png',
'/images/sprite6-sheet0.png',
'/images/endflag-sheet0.png',
'/images/skin14-sheet0.png',
'/images/menubutton2-sheet0.png'
];
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return the response from the cached version
                if (response) {
                    return response;
                }
                // Not in cache - return the result from the network
                return fetch(event.request);
            })
    );
});
"use strict";

(function() {
	
	class OfflineClient
	{
		constructor()
		{
			// Create a BroadcastChannel, if supported.
			this._broadcastChannel = (typeof BroadcastChannel === "undefined" ? null : new BroadcastChannel("offline"));
			
			// Queue of messages received before a message callback is set.
			this._queuedMessages = [];
			
			// The message callback.
			this._onMessageCallback = null;
			
			// If BroadcastChannel is supported, listen for messages.
			if (this._broadcastChannel)
				this._broadcastChannel.onmessage = (e => this._OnBroadcastChannelMessage(e));
		}
		
		_OnBroadcastChannelMessage(e)
		{
			// Have a message callback set: just forward the call.
			if (this._onMessageCallback)
			{
				this._onMessageCallback(e);
				return;
			}
			
			// Otherwise the app hasn't loaded far enough to set a message callback.
			// Buffer the incoming messages to replay when the app sets a callback.
			this._queuedMessages.push(e);
		}
		
		SetMessageCallback(f)
		{
			this._onMessageCallback = f;
			
			// Replay any queued messages through the handler, then clear the queue.
			for (let e of this._queuedMessages)
				this._onMessageCallback(e);
			
			this._queuedMessages.length = 0;
		}
	};
	
	// Create the offline client ASAP so we receive and start queueing any messages the SW broadcasts.
	window.OfflineClientInfo = new OfflineClient();
	
}());

