const wrapper = document.querySelector(".pagination");

const totalPage = 20;
const range = 4; // range가 3이상일 때 정상 작동

function showNumbers(start, end, liContainer, currentPage) {
  for (let page = start; page <= end; page++) {
    let active = page == currentPage ? "active" : "";
    liContainer += `<li class="number ${active}" onclick="pagination(${page}, ${totalPage}, ${range})">${page}</li>`;
  }

  return liContainer;
}

function pagination(currentPage, totalPage, range) {
  let liContainer = "";

  const prev =
    currentPage == 1
      ? ""
      : `<li class="btn prev" onclick="pagination(${
          currentPage - 1
        }, ${totalPage}, ${range})">Prev</li>`;
  const next =
    currentPage == totalPage
      ? ""
      : `<li class="btn next" onclick="pagination(${
          currentPage + 1
        }, ${totalPage}, ${range})">Next</li>`;

  if (currentPage <= range) {
    liContainer = showNumbers(1, range, liContainer, currentPage);
    liContainer = showNumbers(range + 1, range + 1, liContainer, currentPage);
    liContainer += `<li class="dots">...</li>`;
    liContainer = showNumbers(totalPage, totalPage, liContainer, currentPage);
  } else if (currentPage > range && currentPage <= totalPage - range) {
    let beforePage = currentPage - 1;
    let afterPage = currentPage + 1;

    liContainer = showNumbers(1, 1, liContainer, currentPage);
    liContainer += `<li class="dots">...</li>`;
    liContainer = showNumbers(beforePage, afterPage, liContainer, currentPage);
    liContainer += `<li class="dots">...</li>`;
    liContainer = showNumbers(totalPage, totalPage, liContainer, currentPage);
  } else if (currentPage > totalPage - range) {
    liContainer = showNumbers(1, 1, liContainer, currentPage);
    liContainer += `<li class="dots">...</li>`;
    liContainer = showNumbers(
      totalPage - range,
      totalPage - range,
      liContainer,
      currentPage
    );
    liContainer = showNumbers(
      totalPage - range + 1,
      totalPage,
      liContainer,
      currentPage
    );
  }

  wrapper.innerHTML = prev + liContainer + next;
}

pagination((currentPage = 1), totalPage, range);
