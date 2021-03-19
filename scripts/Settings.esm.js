import { Common, HIDDEN_SCREEN } from "./Common.esm.js";
import { media } from "./Media.esm.js";


const SETTINGS_SCREEN_ID = 'js-settings-screen';
export const MUSIC_ON_OFF_BUTTON_ID = 'js-music-on-off';
const MUSIC_VOLUME_INCREASE_BUTTON_ID = 'js-music-volume-increase';
const MUSIC_VOLUME_DECREASE_BUTTON_ID = 'js-music-volume-decrease';
const SETTINGS_EXIT_BUTTON_ID = 'js-settings-screen-exit-button';

class Settings extends Common {
    constructor() {
        super(SETTINGS_SCREEN_ID);
        this.bindToElements();
    }
    bindToElements() {
        const exitSettingsElement = this.bindToElement(SETTINGS_EXIT_BUTTON_ID);
        const musicOnOffElement = this.bindToElement(MUSIC_ON_OFF_BUTTON_ID);
        const musicVolumeUpElement = this.bindToElement(MUSIC_VOLUME_INCREASE_BUTTON_ID);
        const musicVolumeDownElement = this.bindToElement(MUSIC_VOLUME_DECREASE_BUTTON_ID);

        exitSettingsElement.addEventListener('click', () => this.changeVisibilityScreen(this.element, HIDDEN_SCREEN));
        musicOnOffElement.addEventListener("click", () => media.toogleMusicOnOff());
        musicVolumeUpElement.addEventListener('click', () => media.increaseMusicVolume());
        musicVolumeDownElement.addEventListener('click', () => media.decreaseMusicVolume());
        $('.settings-screen__button--is-music').click(function () {
            $(this).toggleClass('off');
        });
    }
}

export const settings = new Settings();
