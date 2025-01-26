class Background1 {
    constructor(game, x, y) {
        this.game = game;
        this.x = 100;
        this.y = 150;

        // this.gas_station = ASSET_MANAGER.getAsset("./Gas_Station_1_Sprite_Sheet.png");
        this.background = ASSET_MANAGER.getAsset("./Background.png");
        
    }

    update() {

    }

    draw(ctx) {
        // this.background.drawFrame(this.game.clockTick, ctx, 160, 130);
        ctx.drawImage(ASSET_MANAGER.getAsset("./Background.png"),0 ,0);
    }
}

class GasStation1 {
    constructor(game, x, y) {
        this.game = game;
        this.x = 160;
        this.y = 85;

        // this.gas_station = ASSET_MANAGER.getAsset("./Gas_Station_1_Sprite_Sheet.png");
        this.gas_station = new Animator(ASSET_MANAGER.getAsset("./Gas_Station_1_Sprite_Sheet.png"), 0, 0, 320, 180, 11, 0.15);
        
    }

    update() {

    }

    draw(ctx) {
        this.gas_station.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    }
}