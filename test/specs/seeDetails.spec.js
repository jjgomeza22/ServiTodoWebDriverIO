import Login from '../pageobjects/loginPage';
import SeeDetails from '../pageobjects/seeDetailsPage';
import { delayEnable } from '../../utils/waits';
import * as url from '../../utils/helperURL.json';
import * as users from "../../data/users.json";
import * as makers from '../../data/makers.json';
import * as services from '../../data/services.json';

describe('Test See Details', async () => {

    beforeEach('Launch Application', async () => {
        await browser.url(url.BASE_URL);
        await browser.maximizeWindow();
        await Login.loginServiTodo(users.userClient);
    } )

    it('see maker details', async () =>{
        await SeeDetails.SeeMaker(makers.maker2.id);
        await delayEnable(2000)
    })

    it('see service details', async () =>{
        await SeeDetails.SeeService(services.service1.id);
        await delayEnable(2000)
    })

    it('see service accept details', async () =>{
        await SeeDetails.SeeServiceAccept();
        await delayEnable(2000)
    })

    after( async () => {
        await browser.deleteSession()
    })
})