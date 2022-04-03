import { delayEnable, waitClickable } from '../../utils/waits';

class seeServiceForHacedor{
    get OfertButton(){
        return $('//div//button[@id="ofertas"]');
    }

    async toOferts(){
        await this.OfertButton.click();
    };
};

export default new seeServiceForHacedor();