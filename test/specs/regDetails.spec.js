import Login from '../pageobjects/loginPage';
import RegDetails from '../pageobjects/regDeatilsPage'
import { delayEnable } from '../../utils/waits';
import * as url from '../../utils/helperURL.json';
import * as users from "../../data/users.json";
import * as details from "../../data/makerDetails.json";

describe('Test register details', async () => {

    before('Launch Application', async () => {
        await browser.url(url.BASE_URL)
        await browser.maximizeWindow()
        await Login.loginServiTodo(users.userMaker)
    } )

    it('register maker details', async () =>{
        await RegDetails.changeDetails(details.makerDetails);
        await RegDetails.addSkill(details.skills.skill2);
        await delayEnable(2000)
    })

    after( async () => {
        await browser.deleteSession()
    })
})