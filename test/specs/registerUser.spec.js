import Register from '../pageobjects/registerUserPage';
import { delayEnable } from '../../utils/waits';
import * as url from '../../utils/helperURL.json';
import * as usersToReg from "../../data/usersToRegister.json";

describe('Test register', async () => {

    beforeEach('Launch Application', async () => {
        await browser.url(url.BASE_URL);
        await browser.maximizeWindow();
    } )

    it('Successful register client', async () =>{
        await Register.registerServiTodoClient(usersToReg.userRegClient);
        await delayEnable(10000);
    })

    
    it('Successful register maker', async () =>{
        await Register.registerServiTodoMaker(usersToReg.userRegMaker);
        await delayEnable(2000);
    })

    after( async () => {
        await browser.deleteSession();
    })
})