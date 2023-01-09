const $links = document.getElementById('links');
const $name = document.querySelector('h1');
const $description = document.getElementById('description')
const data = {
    name: "Santiago Valdivia",
    nickname: "spvs",
    tecnologias: '#JavaScript, #npm, #Python, #React',
    description: "Soy un apasionado por la programación, continuamente estoy mejorando mis habilidades en el desarrollo web, me gusta compartir mis aprendizajes y crear proyectos en el área de finanzas y mis series favoritas",
    avatar: "https://pbs.twimg.com/profile_images/1534067141519069184/AyYQAI1b_400x400.jpg",
    social: [
        {
            name: "twitter",
            url: "https://twitter.com/MisaelG51069440",
            username: "@MisaelG51069440",
        },
        {
            name: "instagram",
            url: "https://www.instagram.com/misael.gmz.ctl/",
            username: "misael.gmz.ctl",
        },
    ],
    links: [
        {
            name: "platzi user",
            url: "https://platzi.com/p/misael.gomez1623/",
            color: "green",
            emoji: "🧑‍🚀",
        },
        {
            name: "sitio web",
            url: "https://misael-gmez-cuautle.super.site/",
            color: "yellow",
            emoji: "📖",
        },
        {
            name: "Youtube",
            url: "https://www.youtube.com/channel/UCtIUxzEyQN0DoZVwuuoLVag",
            color: "red",
            emoji: "💬",
        },
        {
            name: "Twitter",
            url: "https://twitter.com/MisaelG51069440",
            color: "blue",
            emoji: "🐦",
        },
        {
            name: "Instagram",
            url: "https://twitter.com/MisaelG51069440",
            color: "purple",
            emoji: "📷",
        },
    ],
    footer: "Made with Love on Argentina",
};
 const descrip =() => {
    let description = document.createTextNode(data?.description);
    $description.appendChild(description);
 }


const main = () => {
    let links = data?.links?.map((link) => {
        return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
          href="${link.url}" target="_blank">
          ${link.name}
        </a>
        <span>${link.emoji}</span>
      </div>`;
    }).join('');
    let newItem = document.createElement("section");
    newItem.innerHTML = links;
    $links.appendChild(newItem);
}
main();
descrip();