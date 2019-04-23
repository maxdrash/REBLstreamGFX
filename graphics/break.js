const np1name = nodecg.Replicant('np1name');
const np2name = nodecg.Replicant('np2name');
const message = nodecg.Replicant('message');
const nuHidden = nodecg.Replicant('nuHidden');
const nowPlaying = nodecg.Replicant("nowPlaying");
const manualsong = nodecg.Replicant("manualSong");
const mSongEnabled = nodecg.Replicant("mSongEnabled");
const songHidden = nodecg.Replicant("songHidden");

np1name.on('change', (newValue, oldValue) => {
    temp2.text = newValue;
});

np2name.on('change', (newValue, oldValue) => {
    temp4.text = newValue;
});

message.on('change', (newValue, oldValue) => {
    exampletext.text = newValue;
});

nuHidden.on('change', (newValue, oldValue) => {
    var nuTl = new TimelineMax();
    if (newValue) {
        nuTl.to("#line2", 1, { ease: Power2.easeIn, width: 0 })
            .to("#exampletext", 1, { ease: Power2.easeIn, left: -860 }, 0.2)
            .to("#line2", 1, { ease: Power2.easeIn, width: 0 }, -0.1)
            .to("#temp1", 1, { ease: Power2.easeIn, left: -860 }, 0.4)
            .to("#temp2", 1, { ease: Power2.easeIn, left: -860 }, 0.6)
            .to("#temp3", 1, { ease: Power2.easeIn, left: -860 }, 0.6)
            .to("#temp4", 1, { ease: Power2.easeIn, left: -860 }, 0.7)
            .to("#exampletext", 0, { top: "45%" })
            .to("#exampletext", 1, { ease: Power2.easeInOut, left: 50});
    } else {
        nuTl.to("#exampletext", 1, { ease: Power2.easeInOut, left: -860 })
            .to("#exampletext", 0, { top: 300 })
            .to("#temp4", 1, { left: 50 }, 1)
            .to("#temp3", 1, { left: 50 }, 1.1)
            .to("#temp2", 1, { left: 50 }, 1.1)
            .to("#temp1", 1, { left: 50 }, 1.2)
            .to("#line2", 1, { width: 900 }, 2)
            .to("#exampletext", 1, { left: 50 }, 1.5);
    }
});

nowPlaying.on("change", (newValue, oldValue) => {
    if (mSongEnabled.value == false || mSongEnabled.value == undefined) {
        song.text = "♫ " + nowPlaying.value.artist + " - " + nowPlaying.value.song + " ♫";
    }
});

manualsong.on("change", (newValue, oldValue) => {
    if (mSongEnabled.value) {
        song.text = "♫ " + manualsong.value + " ♫";
    }
});

mSongEnabled.on("change", (newValue, oldValue) => {
    if (mSongEnabled.value) {
        song.text = "♫ " + manualsong.value + " ♫";
    } else {
        song.text = "♫ " + nowPlaying.value.artist + " - " + nowPlaying.value.song + " ♫";
    }
});

songHidden.on("change", (newValue, oldValue) => {
    if (newValue) {
        TweenMax.to("#song", 0.5, { opacity: 0 });
    } else {
        TweenMax.to("#song", 0.5, { opacity: 1 });
    }
});