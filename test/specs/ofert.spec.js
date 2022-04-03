import Login from '../pageobjects/loginPage';
import Ofert from '../pageobjects/ofertPage';
import { delayEnable } from '../../utils/waits';
import * as url from '../../utils/helperURL.json';
import * as users from "../../data/users.json";
import * as oferts from '../../data/oferts.json';
import * as services from '../../data/services.json';

describe('Test create ofert', async () => {

    beforeEach('Launch Application', async () => {
        await browser.url(url.BASE_URL);
        await browser.maximizeWindow();
        await Login.loginServiTodo(users.userClient);
    } )

    it('Send ofert', async () =>{
        await Ofert.sendOfert(oferts.ofert1, services.service3.id);
        await delayEnable(2000)
    })

    after( async () => {
        await browser.deleteSession()
    })
})