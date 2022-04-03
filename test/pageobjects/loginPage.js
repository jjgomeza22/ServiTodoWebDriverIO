import { delayEnable, waitClickable } from '../../utils/waits';

let UserRol;

class Login{
    get selectRol(){
        return $('//div//mat-select[@role="combobox"]');
    }

    get dinamicRolSelector(){
        return $(`//div//mat-option[@value="${UserRol}"]`);
    }

    get email(){
        return $('#email');
    }

    get password(){
        return $('#password');
    }

    get loginButton(){
        return $('//form//button[@class="mat-focus-indicator mat-raised-button mat-button-base"]');
    }

    async loginServiTodo({email, password, rol}){
        UserRol = rol;
        await waitClickable(this.selectRol, 5000);
        await this.selectRol.click();
        await this.dinamicRolSelector.click();

        await waitClickable(this.email, 5000);
        await this.email.setValue(email);
        
        await this.password.setValue(password); 
        await expect(this.password).toBeDisplayed();
        await delayEnable(1000);
        
        await this.loginButton.click();
        await expect(browser).toHaveTitle('ServiTodo');
    }
};

export default new Login();