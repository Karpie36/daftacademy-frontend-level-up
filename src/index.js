import 'bootstrap';
import '../node_modules/glider-js/glider.min.js';
import './styles/style.scss';
import {module} from './module';

window.addEventListener('DOMContentLoaded', () => {

    module.getCarouselParameters();
    module.resetScroll();
    module.makeScrollBtnListener();
    module.controlScrollUpVisible();
    module.changeYearToPresent();
    module.getProductParameters();
    module.makeAllProductsBtnListener();
});