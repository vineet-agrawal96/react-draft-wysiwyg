const callBacks = [];
let editorFlag = false;

const closeAllModals = (event): void => {
  callBacks.forEach((callBack) => {
    callBack(event);
  });
};

export default {
  init: () => {
    const wrapper = document.getElementById('rdw-wrapper');
    wrapper.addEventListener('click', () => {
      editorFlag = true;
    });
    document.addEventListener('click', () => {
      if (!editorFlag) {
        closeAllModals();
      } else {
        editorFlag = false;
      }
    });
  },
  closeModals: (event: Object): void => {
    closeAllModals(event);
  },
  registerCallBack: (callBack): void => {
    callBacks.push(callBack);
  },
};
