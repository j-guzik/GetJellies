import { Common, VISIBLE_SCREEN, HIDDEN_SCREEN, HIDDEN_CLASS } from './Common.esm.js';

const LOADER_ELEMENT_ID = 'js-loading-screen';
const LOAD_CURRENT_ID = 'js-loading-screen-current';
const LOAD_TOTAL_ID = 'js-loading-screen-total';

export const DATALOADED_EVENT_NAME = 'dataLoaded';


class Loader extends Common {
    constructor() {
        super(LOADER_ELEMENT_ID);
        this.bindToElements();
        this.clearFlags();
    }


    bindToElements() {
        this.loadingScreenElement = this.bindToElement(LOADER_ELEMENT_ID);
        this.currentElement = this.bindToElement(LOAD_CURRENT_ID);
        this.totalElement = this.bindToElement(LOAD_TOTAL_ID);
    }

    loadImage(imageUrl) {
        this.changeVisibilityScreen(this.element, VISIBLE_SCREEN);
        this.isAllLoaded = false;
        this.totalCounter++;
        // this.totalElement = this.totalCounter;
        const image = new Image();

        image.src = imageUrl;
        image.addEventListener('load', event => this.itemLoaded(event), false);

        return image;
    }

    loadMusic(soundUrl) {
        this.changeVisibilityScreen(this.element, VISIBLE_SCREEN);
        this.isAllLoaded = false;
        this.totalCounter++;

        const audio = new Audio();

        audio.addEventListener('canplaythrough', event => this.itemLoaded(event), false);
        audio.src = soundUrl;

        return audio;
    }

    itemLoaded(event) {
        event.target.removeEventListener(event.type, this.itemLoaded, false);
        setTimeout(() => runGameIfLoaded(this), 1000);
    }

    clearFlags() {
        this.isAllLoaded = true;
        this.loadedCounter = 0;
        this.totalCounter = 0;
    }
}

function runGameIfLoaded(that) {
    that.loadedCounter++;

    if (that.loadedCounter === that.totalCounter) {
        that.clearFlags();
        that.changeVisibilityScreen(that.loadingScreenElement, HIDDEN_CLASS);
        window.dispatchEvent(new CustomEvent(DATALOADED_EVENT_NAME));
    }

}

export const loader = new Loader();


setTimeout(function () { $(".loader").fadeOut("slow, easing"); }, 1900);