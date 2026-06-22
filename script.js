const button = document.getElementById("fetchBtn");
const status = document.getElementById("status");
const usersDiv = document.getElementById("users");

button.addEventListener("click", () => {
  status.textContent = "Loading...";

  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        usersDiv.innerHTML = "";

        users.forEach((user) => {
          usersDiv.innerHTML += `
                        <div class="user">
                            <h3>${user.name}</h3>
                            <p>Email: ${user.email}</p>
                            <p>Phone: ${user.phone}</p>
                        </div>
                    `;
        });

        status.textContent = "Loaded successfully";
      })
      .catch((error) => {
        status.textContent = "Error loading data";
        console.log(error);
      });
  }, 2000);
});
