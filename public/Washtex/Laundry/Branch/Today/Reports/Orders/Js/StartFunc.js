import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncLoginCheck } from "/Laundry/Js/LoginModal/EntryFile.js";

const StartFunc = async () => {
    StartFuncFormLoad();
    let jVarLocalFromAdmin = await StartFuncLoginCheck({ inSuccessFunc: StartFuncShowOnDom });

    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom({}).then(() => {
            StartFuncAddListeners();
        });
    };
};

StartFunc();