import seeServiceForHacedor from '../pageobjects/seeServiceForMakerPage';
import Login from '../pageobjects/loginPage';
import { delayEnable } from '../../utils/waits';
import * as url from '../../utils/helperURL.json';
import * as users from "../../data/users.json";

describe('Test see oferts', async () => {

    before('Launch Application', async () => {
        await browser.url(url.BASE_URL)
        await browser.maximizeWindow()
        await Login.loginServiTodo(users.userMaker);
    })

    //Oferts
    it('Move to oferts', async () =>{
        await seeServiceForHacedor.toOferts()
        await delayEnable(2000)
    })

    after( async () => {
        await browser.deleteSession()
    })
})