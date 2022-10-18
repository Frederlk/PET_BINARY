window.onload = function () {
    if (document.querySelector("._filter")) {
        const filterItems = document.querySelectorAll(".filter__item");
        const filterColumns = document.querySelectorAll(".portfolio__column-ibg");
        filterColumns.forEach((item) => item.classList.add("_showed"));

        filterItems.forEach((item) =>
            item.addEventListener("click", function (e) {
                let i = this.dataset.filter;
                if (i == 1) {
                    filterColumns.forEach((item) => item.classList.add("_showed"));
                } else {
                    filterColumns.forEach((item) => item.classList.remove("_showed"));
                    document
                        .querySelectorAll(".portfolio__column-ibg.f_" + i)
                        .forEach((item) => item.classList.add("_showed"));
                }
                filterItems.forEach((item) => item.classList.remove("_active"));
                this.classList.add("_active");
                return false;
            })
        );
    }
};
