import myHeader from "./myHeader.js";
import mySlider from "./mySlider.js";
import myTarget from "./myTarget.js";
import mySidebar from "./mySidebar.js";
import myFooter from "./myFooter.js";
import myBody from "./myBody.js";

export default{
    showBody(){
        //myHeader.showHeader();
        //myHeader.showFundadores();
        myHeader.fragShow();
        myBody.showBody();
        mySlider.showSlider();
        myTarget.showTarget();
        mySidebar.showAbout();
        myFooter.showFooter();
    }
}
    

