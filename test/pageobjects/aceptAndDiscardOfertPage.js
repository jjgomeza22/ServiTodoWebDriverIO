import { delayEnable, waitClickable } from '../../utils/waits';

class aceptAndDiscardOfert{
    get aceptButton(){
        return $('//div//button[@id="0" and @class="mat-focus-indicator acept mat-icon-button mat-button-base"]');
    }

    get discardButton(){
        return $('//div//button[@id="0" and @class="mat-focus-indicator discard mat-icon-button mat-button-base"]');
    }

    async aceptOfert(){
        await this.aceptButton.click();
    };

    async discardOfert(){
        await this.discardButton.click();
    };
};

export default new aceptAndDiscardOfert();