// Variables Declaration

const requestURL = `https://iloveronilo.github.io/wdd230_final/data/data.json`;
const datas = document.querySelector(".datas");

// Fetch API
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const companies = jsonObject["temple"];
        companies.forEach(displayTemple);
    })

function displayTemple(temple) {
    // Create an elements to add to the directory page
    let comp_section = document.createElement('section');
    let comp_img = document.createElement("img");
    let comp_name = document.createElement("h2");
    let address = document.createElement("h3");
    let phone = document.createElement("h3");
    let web = document.createElement("p");

    comp_img.setAttribute('src', temple.imageUrl);
    comp_img.setAttribute('alt', `temple photo of ${temple.name}`);
    comp_img.setAttribute('loading', 'lazy');

    comp_name.textContent = `${temple.name}`;
    address.textContent = `${temple.addres}`;
    phone.textContent = `${temple.phone}`;
    web.innerHTML = `<a href="${temple.website}">${temple.website}</a>`;

    comp_section.appendChild(comp_name);
    comp_section.appendChild(comp_img);
    comp_section.appendChild(address);
    comp_section.appendChild(phone);
    comp_section.appendChild(web);

    datas.appendChild(comp_section);
}
