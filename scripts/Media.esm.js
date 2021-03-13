class Media {
    constructor() {
        this._backgroundImage = null;
        this._diamondsSprite = null;
    }

    set bacgroundImage(imageObject) {
        if (!imageObject instanceof Image) {
            return;
        }
        this._backgroundImage = imageObject;
    }

    get bacgroundImage() {
        return this._bacgroundImage;
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
}

export const media = new Media();
