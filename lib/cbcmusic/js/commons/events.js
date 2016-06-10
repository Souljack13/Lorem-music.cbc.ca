CBCR3.namespace("CBCR3.Player.Events");

CBCR3.Player.Events.StateInitEvent = {
    r3PlayerInit:"stateInitEvent:r3PlayerInit",
	playlistPlayerLoaded:"stateInitEvent:playlistPlayerLoaded",
	streamPlayerLoaded: "stateInitEvent:streamPlayerLoaded",
	streamAudioOnlyLoaded: "stateInitEvent:streamAudioOnlyLoaded"
};

CBCR3.Player.Events.StreamEvent = {
    connecting:"streamEvent:connecting",
    connected:"streamEvent:connected",
    metaData:"streamEvent:metaData",
    metaDataConnected: "streamEvent:metaDataConnected",
    metaDataStreamUpdated: "streamEvent:metaDataStreamUpdated",
    metaDataStreamError: "streamEvent:metaDataStreamError",
    channelSelected: "streamEvent:channelSelected",
    genreSelected: "streamEvent:genreSelected",
    categorySelected: "streamEvent:categorySelected",
    error:"streamEvent:error"
};

CBCR3.Player.Events.StreamErrorEvent = {
    notFound: "streamErrorEvent:notFound",
    failed: "streamErrorEvent:failed"
};

CBCR3.Player.Events.PlaybackEvent = {
    start: "playbackEvent:start",
    pause: "playbackEvent:pause",
	progress:"playbackEvent:progress",
	finished:"playbackEvent:finished",
	stream:"playbackEvent:stream",
	next:"playbackEvent:next",
	prev:"playbackEvent:prev"
};

CBCR3.Player.Events.LoadingEvent = {    
	ready:"loadingEvent:ready",		
	open:"loadingEvent:open",
	progress:"loadingEvent:progress",
	complete:"loadingEvent:complete",
	buffering:"loadingEvent:buffering"
};

CBCR3.Player.Events.ServiceEvent = {
	success:"serviceEvent:success",
	trackReceived:"serviceEvent:trackReceived",
	playlistReceived:"serviceEvent:playlistReceived",
    permalinkContextReceived:"serviceEvent:permalinkContextReceived",
    metaDataUpdated: "serviceEvent:metaDataUpdated",
    cbcMusicMetaDataUpdated: "serviceEvent:cbcMusicMetaDataUpdated",
    permalinkChanged: "serviceEvent:permalinkChanged",
    adminPlaylistsReceived:"serviceEvent:adminPlaylistsReceived"
};

CBCR3.Player.Events.PlaylistEvent = {
	playlistSelected:"playlistEvent:playlistSelected",
	deletePlaylist:"playlistEvent:deletePlaylist",
	permalinkSelected:"playlistEvent:permalinkSelected",
	permalinkAdded:"playlistEvent:permalinkAdded",
	trackSelected:"playlistEvent:trackSelected",
	createNewPlaylist:"playlistEvent:createNewPlaylist",
	savePlaylist:"playlistEvent:savePlaylist",
	addPlaylistSelected:"playlistEvent:addPlaylistSelected",
    newPlaylistCreated:"playlistEvent:newPlaylistCreated"
};

CBCR3.Player.Events.PlaybackCommand = {
	play:"playbackCommand:play",
	stop:"playbackCommand:stop",
	pause:"playbackCommand:pause",
	playPause:"playbackCommand:playPause",
	kill:"playbackCommand:kill"
};

CBCR3.Player.Events.ScrubCommand = {
	playhead:"scrubCommand:playhead",
	playheadPercent:"scrubCommand:playheadPercent",
	volume:"scrubCommand:volume"
};

CBCR3.Player.Events.ScrubEvent = {
	changed:"scrubEvent:changed",
	slide:"scrubEvent:slide"
};

CBCR3.Player.Events.PlayerErrorEvent = {
	streamError: "playerErrorEvent:streamError",
	trackNotFound: "playerErrorEvent:trackNotFound",
	ioError: "playerErrorEvent:ioError"
};

CBCR3.Player.Events.RTMPStreamEvent = {
	ready: "rtmpStreamEvent:ready",
	connecting: "rtmpStreamEvent:connecting",
	connected: "rtmpStreamEvent:connected",
	stopped: "rtmpStreamEvent:stopped",
	progress: "rtmpStreamEvent:progress",
	start: "rtmpStreamEvent:start",
    streaming: "rtmpStreamEvent:streaming",
	buffering: "rtmpStreamEvent:buffering",
	metaDataConnected: "rtmpStreamEvent:metaDataConnected",
    
	metaDataConnectionFailed: "rtmpStreamEvent:metaDataConnectionFailed",
	metaDataReceived: "rtmpStreamEvent:metaDataReceived",
	metaDataStreamUpdated: "rtmpStreamEvent:metaDataStreamUpdated",
    streamAudioOnly: "rtmpStreamEvent:streamAudioOnly",
    failed:"rtmpStreamEvent:failed"
};

CBCR3.Player.Events.StreamCommand = {
	load:"streamCommand:load",
	play:"streamCommand:play",
	stop:"streamCommand:stop",
	pause:"streamCommand:pause",
	kill:"streamCommand:kill",
	playPause: "streamCommand:playPause",
	loadAudioOnly: "streamCommand:loadAudioOnly",
	volume:"streamCommand:volume"
};

CBCR3.Player.Events.ModeControlEvent = {
	stream:"modeControlEvent:stream",
	playlist:"modeControlEvent:playlist",
	browseTracks:"modeControlEvent:browseTracks",
	browseStreams:"modeControlEvent:browseStreams"
};

CBCR3.Player.Events.PermalinkEvent = {
	trackAdded:"permalinkEvent:trackAdded",
	favouriteRemoved:"permalinkEvent:favouriteRemoved",
	favouriteAdded:"permalinkEvent:favouriteAdded",
	favouriteStatus:"permalinkEvent:favouriteStatus",
	confirm:"permalinkEvent:confirm",
	cancel:"permalinkEvent:cancel",
    sendPermalink:"permalinkEvent:sendPermalink",
    retrievePermalinkContext:"permalinkEvent:retrievePermalinkContext"
};

CBCR3.Player.Events.SelectorEvent = {
	scheduleReceived:"selectorEvent:scheduleReceived"
};

CBCR3.Player.Events.ShuffleEvent = {
	changed: "shuffleEvent:changed"
};

CBCR3.Player.Events.ThumbEvent = {
	received:"thumbEvent:received",
	registered:"thumbEvent:registered",
	changed:"thumbEvent:changed"
};

CBCR3.Player.Events.PanelEvent = {
	remove:"panelEvent:remove",
	click:"panelEvent:click"
};

CBCR3.Player.Events.TrackTimeEvent = {
	changed:"trackTimeEvent:changed"
};

CBCR3.Player.Events.ServiceExceptionEvent = {
    userNotAuthenticated: "serviceExceptionEvent:userNotAuthenticated",
    userOutsideCanada: "serviceExceptionEvent:userOutsideCanada",
	duplicateTrack:"serviceExceptionEvent:duplicateTrack",
	emptyPlaylist:"serviceExceptionEvent:emptyPlaylist",
	endOfPlaylist:"serviceExceptionEvent:endOfPlaylist",
	nullPlaylist: "serviceExceptionEvent:nullPlaylist"
};

CBCR3.Player.Events.PlaybackExceptionEvent = {
    emptyPlaylist: "playbackExceptionEvent:emptyPlaylist",
    endOfPlaylist: "playbackExceptionEvent:endOfPlaylist",
    nullPlaylist: "playbackExceptionEvent:nullPlaylist"
};


CBCR3.Player.Events.AuthenticationEvent = {
	loginRequired:"authenticationEvent:loginRequired"
};

CBCR3.Player.Events.PageEvent = {
	playPermalink:"pageEvent:playPermalink",
	addPermalink:"pageEvent:addPermalink",
	favouritePermalink:"pageEvent:favouritePermalink",
	permalink: "pageEvent:permalink",
	showtrackinfo: "pageEvent:showtrackinfo",
	playStream: "pageEvent:playStream",
	socialShare: "pageEvent:socialShare"
};

CBCR3.Player.Events.DisplayEvent = {
	forceIERefresh:"displayEvent:forceIERefresh"    
};

CBCR3.Player.Events.StatusEvent = {
    notify:"statusEvent:notify"       
};

