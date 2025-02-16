class Rain {
    constructor(game) {
        this.game = game;
        // this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprite_Sheet_Rain.png"), 0, 0, 64, 64, 32, 0.15);
        // this.animator = new Animator(ASSET_MANAGER.getAsset("./Gas_Station_1_Sprite_Sheet.png"), 0, 0, 320, 180, 11, 0.15);
        this.horizontal = new Animator(ASSET_MANAGER.getAsset("./Rain_Horizontal_Walk.png"), 0, 0, 64, 64, 4, 0.15);
        this.x = -100;
        this.y = 330;
        this.speed = 200;
    };

    update() {
        
        this.x += this.speed * this.game.clockTick;

        if (this.x > 960) this.x = -100;
    };

    draw(ctx) {
        // this.animator.drawFrame(this.game.clockTick, ctx, 100, 150);
        // ctx.drawImage(ASSET_MANAGER.getAsset("./Gas_Station_1.png"),0 ,0);
        this.horizontal.drawFrame(this.game.clockTick, ctx, this.x, this.y)
    };
}
