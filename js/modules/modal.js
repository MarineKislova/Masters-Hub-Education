function modalWindow({ openSelector, closeSelector, parentSelector, itemSelector }) {
    let openModal = document.querySelectorAll(openSelector);
    let closeModal = document.querySelectorAll(closeSelector); //закомментировано для динамического формирования
    let parentModal = document.querySelector(parentSelector);
    let itemModal = document.querySelector(itemSelector); //закомментировано для динамического формирования 

    function showModal() {
      parentModal.style.display = "flex";
      itemModal.style.display = "none";
    }

    openModal.forEach((item) => {
      item.addEventListener("click", showModal);
    });

    function hideModal() {
      parentModal.style.display = "none";
    }

    closeModal.forEach((item) => {
      item.addEventListener("click", hideModal);
    });
    // showModalOne();
    // hideModalOne();

    parentModal.addEventListener("click", (e) => {
      if (e.target === parentModal) {
        hideModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        hideModal();
      }
    });
  }

  export default modalWindow;