import { delayEnable, waitClickable } from '../../utils/waits';

let Enable;
let ServiceID;

class Ofert{
    get address(){
        return $('#direccion');
    }

    get selectEnable(){
        return $('//div//mat-select[@ng-reflect-name="habilitar"]');
    }

    get dinamicEnable(){
        return $(`//div//mat-option[@value="${Enable}"]`);
    }

    get date(){
        return $('#fecha');
    }

    get price(){
        return $('#precio');
    }

    get selectService(){
        return $('//div//mat-select[@ng-reflect-name="servicio"]');
    }

    get dinamicService(){
        return $(`//div//mat-option[@id="${ServiceID}"]`);
    }   

    get sendButton(){
        return $('#button0');
    }

    async sendOfert({
        address,
        enable,
        date,
        price,
    }, serviceID){
        Enable = enable;
        ServiceID = serviceID;
        await this.address.setValue(address);
        await this.selectEnable.click();
        await this.dinamicEnable.click();
        await this.date.setValue(date);
        await this.price.setValue(price);
        await this.selectService.click();
        await this.dinamicService.click();
        await delayEnable(500);
        await this.sendButton.click()
    }
};

export default new Ofert();