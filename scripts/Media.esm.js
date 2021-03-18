import { MUSIC_ON_OFF_BUTTON_ID } from './Settings.esm.js';

class Media {
    constructor() {
        this._backgroundImage = null;
        this._diamondsSprite = null;
        this.musicVolume = 0.3;
        this.allowedMusic = true;
        this._backgroundMusic = null;
        this.isInLevel = false;
    }

    increaseMusicVolume() {
        this.musicVolume += 0.1;
        if (this.musicVolume > 1) {
            this.musicVolume = 1;
        }
        if (this._backgroundMusic) {
            this._backgroundMusic.volume = this.musicVolume;
        }
    }

    decreaseMusicVolume() {
        this.musicVolume -= 0.1;
        if (this.musicVolume < 0) {
            this.musicVolume = 0;
        }
        if (this._backgroundMusic) {
            this._backgroundMusic.volume = this.musicVolume;
        }
    }


    playBackgroundMusic() {
        if (!this.allowedMusic || !this._backgroundMusic) {
            // MUSIC_ON_OFF_BUTTON_ID.classList.add("off");
            return;
        }

        this._backgroundMusic.loop = true;
        this._backgroundMusic.play();
        // MUSIC_ON_OFF_BUTTON_ID.classList.toogle("off");
    }

    stopBackgroundMusic() {
        if (this._backgroundMusic) {
            this._backgroundMusic.pause();
            // MUSIC_ON_OFF_BUTTON_ID.classList.add("off");
        }
    }

    set backgroundMusic(music) {
        this._backgroundMusic = music;
        this._backgroundMusic.volume = this.musicVolume;
    }

    get backgroundMusic() {
        return !!this._backgroundMusic;
    }

    set backgroundImage(imageObject) {
        if (!imageObject instanceof Image) {
            return;
        }
        this._backgroundImage = imageObject;
    }

    get backgroundImage() {
        return this._backgroundImage;
    }

    set diamondsSprite(imageObject) {
        if (!imageObject instanceof Image) {
            return;
        }
        this._diamondsSprite = imageObject;
    }

    get diamondsSprite() {
        return this._diamondsSprite;
    }

    toogleMusicOnOff() {
        if (this.allowedMusic) {
            this.allowedMusic = false;
            this.stopBackgroundMusic();
        }
        else {
            this.allowedMusic = true;
            this.playBackgroundMusic();
        }
    }
}

export const media = new Media();
