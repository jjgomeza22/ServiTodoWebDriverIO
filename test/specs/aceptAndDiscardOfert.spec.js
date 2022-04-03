import Login from '../pageobjects/loginPage';
import seeServiceForMaker from '../pageobjects/seeServiceForMakerPage';
import aceptAndDiscardOfert from '../pageobjects/aceptAndDiscardOfertPage';
import { delayEnable } from '../../utils/waits';
import * as url from '../../utils/helperURL.json';
import * as users from "../../data/users.json";

describe('Test Acept and Discard Oferts', async () => {

    beforeEach('Launch Application', async () => {
        await browser.url(url.BASE_URL);
        await browser.maximizeWindow();
        await Login.loginServiTodo(users.userMaker);
        await delayEnable(500);
        await seeServiceForMaker.toOferts();
    })

    //Acept ofert
    it('Acept Ofert', async () =>{
        await aceptAndDiscardOfert.aceptOfert();
        await delayEnable(2000);
    })

    //Discard ofert
    it('Discard Ofert', async () =>{
        await aceptAndDiscardOfert.discardOfert();
        await delayEnable(2000);
    })

    after( async () => {
        await browser.deleteSession();
    })
})