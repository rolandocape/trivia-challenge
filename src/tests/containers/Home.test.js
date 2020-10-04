import mountApp from '../helpers/mountApp';
import Selector from '../../components/Selector/Selector';
import timer from '../helpers/requestTimer';

describe('home', () => {
    let mountedApp;

    beforeEach(() => {
        mountedApp = mountApp();
    })

    afterEach(() => {
        mountedApp.app.unmount();
    })

    it('should show home screen', () => {
        expect(mountedApp.app.find('Home').length).toBe(1);
    });

    it('should render three Selector elements', () => {
        expect(mountedApp.app.find(Selector)).toHaveLength(3);
    });

    it('navigate to quiz page after begin button is clicked', async () => {
        mountedApp.app.find('form').simulate('submit');
        await timer();
        mountedApp.app.update();
        expect(mountedApp.app.find('Quiz')).toHaveLength(1);
    });
});
