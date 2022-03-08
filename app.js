const namearray = [];
let divmain = document.getElementById("content");

const getAPI = async () => {
  try {
    for (k = 0; k < 21; k++) {
      let url = "https://randomuser.me/api/";
      let res = await fetch(url);
      let data = await res.json();

      populate(data);
    }
  } catch (e) {
    console.log(e);
  }
};

window.onload = () => {
  getAPI();
};

const populate = (data) => {
  let name = data.results[0].name.first + " " + data.results[0].name.last;

  let display = document.getElementById("display");

  let nameid = name.toLowerCase();
  namearray.push(nameid);

  nameid = nameid.replace(/\s/g, "");

  let address =
    data.results[0].location.street.number +
    " " +
    data.results[0].location.street.name;

  let country = data.results[0].location.country;

  let email = data.results[0].email;

  let phone = data.results[0].cell;

  let imgsrc = data.results[0].picture.large;

  let container = document.createElement("div");
  container.classList.add("col");
  container.classList.add("m9");
  container.classList.add("s10");
  container.classList.add("l4");
  container.setAttribute("id", nameid);

  let card = document.createElement("div");
  card.classList.add("card");

  let imgcontainer = document.createElement("div");
  imgcontainer.classList.add("center-align");

  let img = document.createElement("img");
  img.classList.add("circle");
  img.classList.add("responsive-img");
  img.src = imgsrc;

  let content = document.createElement("div");
  content.classList.add("card-content");
  content.classList.add("left-align");

  for (i = 0; i < 5; i++) {
    let div = document.createElement("div");
    let div_icon = document.createElement("i");
    div_icon.classList.add("small");
    div_icon.classList.add("material-icons");
    div_icon.classList.add("prefix");
    let div_text = document.createElement("span");
    div_text.classList.add("text_size");

    if (i == 0) {
      div_icon.innerHTML = "person";
      div_text.innerHTML = name;
    }

    if (i == 1) {
      div_icon.innerHTML = "house";
      div_text.innerHTML = address;
    }

    if (i == 2) {
      div_icon.innerHTML = "flag";
      div_text.innerHTML = country;
    }

    if (i == 3) {
      div_icon.innerHTML = "phone";
      div_text.innerHTML = phone;
    }

    if (i == 4) {
      div_icon.innerHTML = "email";
      div_text.innerHTML = email;
    }

    div.append(div_icon);
    div.append(div_text);

    content.append(div);
  }

  display.append(container);
  container.append(card);
  card.append(imgcontainer);
  imgcontainer.append(img);

  card.append(content);
};

const clicked = () => {
  console.log(namearray);

  let str = document.getElementById("name").value;

  str = str.toLowerCase();

  namearray.forEach((namea) => {
    getid = namea.replace(/\s/g, "");
    let find = document.getElementById(getid);
    if (!namea.includes(str)) {
      find.style.display = "none";
    } else if (str.length === 0) {
      find.style.display = "block";
    }
  });
};
