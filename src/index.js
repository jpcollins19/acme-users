const generateInfo = require(`./generator`);

const userInfo = generateInfo(50);

const ul = document.querySelector(`#user-list`);

const applyInfo = () => {
  const chosenNumber = window.location.hash.slice(1) * 1;

  const html = userInfo
    .map((user, idx) => {
      return `
        <li>
            <a href='#${idx}'>${user.name}</a>
            ${
              chosenNumber === idx
                ? `
                <ul>
                    <li>
                        ${user.username}
                    </li>
                    <li>
                        ${user.email}
                    </li>
                    <li>
                        ${user.phone}
                    </li>
                </ul>`
                : ""
            }
        </li>`;
    })
    .join("");

  ul.innerHTML = html;
};

window.addEventListener(`hashchange`, () => {
  applyInfo();
});

applyInfo();
