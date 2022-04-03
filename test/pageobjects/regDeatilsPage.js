import { delayEnable, waitClickable } from '../../utils/waits';

let Skill;

class RegDetails{

    //Modificar Detalles
    get checkBox(){
        return $('//form//mat-checkbox[@id="mat-checkbox-1"]');
    };

    get phone(){
        return $('//div//input[@id="numeroContacto"]');
    };

    get workRange(){ 
        return $('//div//input[@id="rangoTrabajo"]');
    };

    get updateData(){
        return $('//form//button[@id="actDatos"]');
    };

    //Agregar Habilidades
    get selectSkill(){
        return $('//div//mat-select[@role="combobox"]');
    }

    get dinamicSkill(){
        return $(`//div//mat-option[@role="option" and @id='${Skill}']`);
    }

    get addSkillButton(){
        return $('//form//button[@id="agregarHabilidad"]');
    }

    async changeDetails({phone, workRange}){
        await waitClickable(this.checkBox, 5000);
        await this.checkBox.click();

        await this.phone.setValue(phone);
        await delayEnable(200);

        await this.workRange.setValue(workRange);
        await delayEnable(200);

        await this.updateData.click();

        await expect(browser).toHaveTitle('ServiTodo');
    }

    async addSkill(hab){
        Skill = hab;
        await waitClickable(this.selectSkill, 5000);
        await this.selectSkill.click();
        await this.dinamicSkill.click();
        await delayEnable(200);

        await this.addSkillButton.click();

        await expect(browser).toHaveTitle('ServiTodo');
    }

};

export default new RegDetails();