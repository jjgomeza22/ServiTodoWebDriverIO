import { delayEnable, waitClickable } from '../../utils/waits';

let makerID;
let serviceID;

class SeeDetails{

    //See Maker
    get selectMaker(){
        return $('//div//mat-select[@id="form1"]');
    }

    get dinamicMaker(){
        return $(`//div//mat-option[@id="${makerID}"]`);
    }

    get SeeMakerButton(){
        return $('#button1');
    }

    //See Services
    get selectService(){
        return $('//div//mat-select[@id="form2"]');
    }

    get dinamicService(){
        return $(`//div//mat-option[@id="${serviceID}"]`);
    }

    get SeeServiceButton(){
        return $('#button2');
    }

    //See Accept Services
    get selectServiceAccept(){
        return $('//div//mat-select[@id="form3"]');
    }

    get dinamicServiceAccept(){
        return $(`//div//mat-option[@role="option"]`);
    }

    get SeeServiceAcceptButton(){
        return $('#button3');
    }

    get closeButton(){
        return $('//div//button[@id="cerrar1"]');
    }

    async SeeMaker(Makerid){
        makerID = Makerid;
        await waitClickable(this.selectMaker, 5000);
        await this.selectMaker.click();
        await this.dinamicMaker.click();
        await delayEnable(200);

        await this.SeeMakerButton.click();
        await delayEnable(2000);
        await this.closeButton.click();
        await expect(browser).toHaveTitle('ServiTodo');
    }

    async SeeService(ServiceId){
        serviceID = ServiceId;
        await waitClickable(this.selectService, 5000);
        await this.selectService.click();
        await this.dinamicService.click();
        await delayEnable(200);

        await this.SeeServiceButton.click();
        await delayEnable(2000);
        await this.closeButton.click();
        await expect(browser).toHaveTitle('ServiTodo');
    }

    async SeeServiceAccept(){
        await waitClickable(this.selectServiceAccept, 5000);
        await this.selectServiceAccept.click();
        await this.dinamicServiceAccept.click();
        await delayEnable(200);

        await this.SeeServiceAcceptButton.click();
        await delayEnable(2000);
        await this.closeButton.click();
        await expect(browser).toHaveTitle('ServiTodo');
    }
};

export default new SeeDetails();