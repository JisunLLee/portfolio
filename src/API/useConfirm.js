const useConfirm = (message, onConfirm, onCancel) => {
    if (!onConfirm && typeof onConfirm  !== "function") {
    return;
  }

    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
}


export default  useConfirm;