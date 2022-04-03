import { delayEnable, waitClickable } from '../../utils/waits';

let UserRol;
let Available;

class Register{
    get registerButton(){
        return $('#mat-tab-label-0-1');
    };

    get selectRol(){
        return $('//mat-select[@id="mat-select-2"]');
    };

    get dinamicRolSelector(){
        return $(`//div//mat-option[@value="${UserRol}"]`);
    }

    get name(){
        return $('#nombre');
    };

    get lastName(){
        return $('#apellido');
    };

    get userName(){
        return $('#nombreUsuario');
    };

    get password(){
        return $('#passwordReg');
    };

    get email(){
        return $('#emailReg');
    };

    get phone(){
        return $('#numeroContacto');
    };

    get address(){
        return $('#direccion');
    };

    get availability(){
        return $('//mat-select[@id="mat-select-4"]');
    }

    get dinamicAvailability(){
        return $(`//div//mat-option[@value="${Available}"]`);
    }

    get workRange(){
        return $('#rangoTrabajo');
    }

    get envRegisterButton(){
        return $('//form//button[@type="submit"]');
    }

    async registerServiTodoClient({ 
        rol,
        name,
        lastName,
        userName,
        password,
        email,
        phone,
        address,
    }){
        UserRol = rol;
        await waitClickable(this.registerButton, 5000);
        await this.registerButton.click();
        await delayEnable(200);

        await this.selectRol.click();
        await this.dinamicRolSelector.click();
        await delayEnable(200);

        await waitClickable(this.name, 5000);
        await this.name.setValue(name);
        await delayEnable(200);

        await this.lastName.setValue(lastName);
        await delayEnable(200);

        await this.userName.setValue(userName);
        await delayEnable(200);

        await this.password.setValue(password);
        await delayEnable(200);

        await this.email.setValue(email);
        await delayEnable(200);

        await this.phone.setValue(phone);
        await delayEnable(200);

        await this.address.setValue(address);
        await delayEnable(200);

        await this.envRegisterButton.click();

        await expect(browser).toHaveTitle('ServiTodo');
    }

    async registerServiTodoMaker({ 
        rol,
        name,
        lastName,
        userName,
        password,
        email,
        phone,
        address,
        availability,
        workRange
    }){
        UserRol = rol;
        Available = availability;
        await waitClickable(this.registerButton, 5000);
        await this.registerButton.click();
        await delayEnable(200);

        await this.selectRol.click();
        await this.dinamicRolSelector.click();
        await delayEnable(200);

        await waitClickable(this.name, 5000);
        await this.name.setValue(name);
        await delayEnable(200);

        await this.lastName.setValue(lastName);
        await delayEnable(200);

        await this.userName.setValue(userName);
        await delayEnable(200);

        await this.password.setValue(password);
        await delayEnable(200);

        await this.email.setValue(email);
        await delayEnable(200);

        await this.phone.setValue(phone);
        await delayEnable(200);

        await this.address.setValue(address);
        await delayEnable(200);

        await this.availability.click();
        await this.dinamicAvailability.click();
        await delayEnable(200);

        await this.workRange.setValue(workRange)

        await this.envRegisterButton.click();

        await expect(browser).toHaveTitle('ServiTodo');
    }
};

export default new Register();