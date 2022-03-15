console.log("AAAAAAAA");
const submitButton = document.querySelector(".submitButton");

const createTicket = async () => {
  const inputFirstName = document.querySelector(".first-name").value;
  const inputLastName = document.querySelector(".last-name").value;
  const inputEmail = document.querySelector(".email").value;

  const ticketToCreate = {
    firstName: inputFirstName,
    lastName: inputLastName,
    showtimeId: 1,
    concessions: ["medium coke"],
    email: inputEmail,
  };
  const createNewTicket = await fetch("http://localhost:3000/create_ticket", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(ticketToCreate),
  });
  console.log(createNewTicket);
  if (createNewTicket.status === 200) {
    window.location.assign("/thankyou");
  } else {
    window.alert("Bruh, you messed up somewhere");
  }
};

submitButton.addEventListener("click", () => {
  createTicket();
});
