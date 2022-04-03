import Login from '../pageobjects/loginPage';
import { delayEnable } from '../../utils/waits';
import * as url from '../../utils/helperURL.json';
import * as users from "../../data/users.json";

describe('Test login', async () => {

    beforeEach('Launch Application', async () => {
        await browser.url(url.BASE_URL)
        await browser.maximizeWindow()
    })

    //Login by client
    it('Successful login by client', async () =>{
        await Login.loginServiTodo(users.userClient)
        await delayEnable(2000)
    })

    //Login con hacedor
    it('Successful login by maker', async () =>{
        await Login.loginServiTodo(users.userMaker)
        await delayEnable(2000)
    })

    after( async () => {
        await browser.deleteSession()
    })
})