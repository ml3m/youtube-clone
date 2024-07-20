const videos = [{
    thumbnailImage: "assets/thumbnail1.webp",
    time: {
        hour: 0,
        min: 34,
        sec: 48,
    },
    profilePicture: "assets/channel_pictures/channel1pic.jpg",
    videoTitle: "Tata m-a dat în judecată pentru 10 milioane de euro. Povestea șocantă a relației cu părinții mei",
    channelName: "VOI SCHIMBA NUMELE IN FIECARE SAPTAMANA",
    videoStats: "94 K de vizionări &#183; acum 19 ore",
},{
    thumbnailImage: "assets/thumbnail2.webp",
    time: {
        hour: 2,
        min: 58,
        sec: 14,
    },
    profilePicture: "assets/channel_pictures/channel2pic.jpg",
    videoTitle: "irl stream in Austria",
    channelName: "IShowSpeed",
    videoStats: "3,1 mil. de vizionări &#183; Transmis în flux: acum 14 ore"
},{
    thumbnailImage: "assets/thumbnail3.webp",
    time: {
        hour: 0,
        min: 15,
        sec: 49,
    },
    profilePicture: "assets/channel_pictures/channel3pic.jpg",
    videoTitle: "TheRealRed reactioneaza la Martha Logue - LIVE @ Beach, Please! 2024 (FULL)",
    channelName: "therealred LIVE",
    videoStats: "2,1 K de vizionări &#183; acum 1 oră"
},{

    thumbnailImage: "assets/thumbnail4.webp",
    time: {
        hour: 0,
        min: 2,
        sec: 13,
    },
    profilePicture: "assets/channel_pictures/channel4pic.jpg",
    videoTitle: "Prețuri de foc la taxi și ride-sharing în orele de caniculă",
    channelName: "Știrile ProTV",
    videoStats: "9,1 K de vizionări &#183; acum 8 ore"
},{
    
    thumbnailImage: "assets/thumbnail5.webp",
    time: {
        hour: 0,
        min: 54,
        sec: 20,
    },
    profilePicture: "assets/channel_pictures/channel5pic.jpg",
    videoTitle: "Don Toliver - LIVE @ Beach, Please! 2024 (FULL)",
    channelName: "BEACH PLEASE! Festival",
    videoStats: "O vizionare &#183; acum 1 minut"

},{

    thumbnailImage: "assets/thumbnail6.webp",
    time: {
        hour: 0,
        min: 9,
        sec: 56,
    },
    profilePicture: "assets/channel_pictures/channel6pic.jpg",
    videoTitle: "SCANDAL la Beach Please 2024 ( Andrew Tate ?! )",
    channelName: "gunsoLIVE",
    videoStats: "12 K de vizionări &#183; acum 2 zile"
}]

let videosHTML = "";

function formatTime(hours, minutes, seconds) {
    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else if (minutes > 0) {
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    } else {
        return `${seconds} second${seconds !== 1 ? 's' : ''}`;
    }
}

videos.forEach((video) => {
    videosHTML += `
                <div class="video-preview">
                    <div class="thumbnail-row">
                        <img class="thumbnail" src="${video.thumbnailImage}" alt="">
                        <div class="video-time">
                            ${formatTime(video.time.hour,video.time.min,video.time.sec)}
                        </div>
                    </div>
                    <div class="video-info-grid">

                        <div class="channel-image">
                            <img class="profile-picture" src="${video.profilePicture}" alt="">
                        </div>

                        <div class="video-info">

                            <p class="video-title">
                                ${video.videoTitle}
                            </p>

                            <p class="channel-name">
                                ${video.channelName}
                            </p>

                            <p class="video-stats">
                                ${video.videoStats}
                            </p>
                        </div>
                    </div>
                </div>
    `;
    videosHTML += `
                <div class="video-preview">
                    <div class="thumbnail-row">
                        <img class="thumbnail" src="${video.thumbnailImage}" alt="">
                        <div class="video-time">
                            ${formatTime(video.time.hour,video.time.min,video.time.sec)}
                        </div>
                    </div>
                    <div class="video-info-grid">

                        <div class="channel-image">
                            <img class="profile-picture" src="${video.profilePicture}" alt="">
                        </div>

                        <div class="video-info">

                            <p class="video-title">
                                ${video.videoTitle}
                            </p>

                            <p class="channel-name">
                                ${video.channelName}
                            </p>

                            <p class="video-stats">
                                ${video.videoStats}
                            </p>
                        </div>
                    </div>
                </div>
    `;

})

console.log(videosHTML);
document.querySelector(".js-video-grid").innerHTML = videosHTML;
