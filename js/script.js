const athorMusiccostom = async (categoryName = 'Comedy') => {
    const url = (`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`)
    const res = await fetch(url)
    const data = await res.json()
    const alldata = data.posts
    // console.log(alldata)
    displayLoaddata(alldata);
}

const displayLoaddata = (alldata) => {
    const catagoryItem = document.getElementById('catagory-item');

    catagoryItem.innerText = '';
    for (const item of alldata) {
        const catagoryItemData = document.createElement('div')
        catagoryItemData.innerHTML = `
         <div class="footer mb-6 mt-6 grid grid-flow-row-dense grid-cols-3 rounded-xl bg-base-200 text-base-content p-10">
                <nav>
                    <div class="avatar online">
                        <div class="w-24 rounded-xl">
                            <img src="${item.image}" />
                        </div>
                    </div>
                </nav>
                <nav>
                    <div class="flex gap-5">
                        <h6 class="footer-title"># ${item.category} </h6>
                        <h6 class="footer-title"> Author : ${item.author.name}</h6>
                    </div>
                    <h2 class="mulish-uniquifier font-bold text-xl">${item.title}</h2>
                    <h1> ${item.description} </h1>
                </nav>
                <nav>
                </nav>
                <nav>
                </nav>
                <nav class="">
                    <div class="grid grid-flow-col gap-12">
                        <a class="grid grid-flow-col gap-2">
                            <svg width="22.500000" height="21.333374" viewBox="0 0 22.5 21.3334" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector"
                                    d="M6.58 6.58L15.91 6.58M6.58 11.25L13.58 11.25M4.25 17.08C3.32 17.08 2.43 16.71 1.77 16.05C1.11 15.4 0.75 14.51 0.75 13.58L0.75 4.25C0.75 3.32 1.11 2.43 1.77 1.77C2.43 1.11 3.32 0.75 4.25 0.75L18.25 0.75C19.17 0.75 20.06 1.11 20.72 1.77C21.38 2.43 21.75 3.32 21.75 4.25L21.75 13.58C21.75 14.51 21.38 15.4 20.72 16.05C20.06 16.71 19.17 17.08 18.25 17.08L14.75 17.08L11.25 20.58L7.75 17.08L4.25 17.08Z"
                                    stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000"
                                    stroke-linejoin="round" stroke-linecap="round" />
                            </svg>
                            <p>${item.comment_count}</p>
                        </a>
                        <a class="grid grid-flow-col gap-2">
                            <svg width="22.500000" height="15.500000" viewBox="0 0 22.5 15.5" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector"
                                    d="M9.6 9.39C10.03 9.83 10.63 10.08 11.25 10.08C11.86 10.08 12.46 9.83 12.89 9.39C13.33 8.96 13.58 8.36 13.58 7.75C13.58 7.13 13.33 6.53 12.89 6.1C12.46 5.66 11.86 5.41 11.25 5.41C10.63 5.41 10.03 5.66 9.6 6.1C9.16 6.53 8.91 7.13 8.91 7.75C8.91 8.36 9.16 8.96 9.6 9.39ZM11.25 14.75C7.05 14.75 3.55 12.41 0.75 7.75C3.55 3.08 7.05 0.75 11.25 0.75C15.45 0.75 18.95 3.08 21.75 7.75C18.95 12.41 15.45 14.75 11.25 14.75Z"
                                    stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000"
                                    stroke-linejoin="round" />
                            </svg>
                            <p>${item.view_count}</p>
                        </a>
                        <a class="grid grid-flow-col gap-2">
                            <svg width="22.500000" height="22.500000" viewBox="0 0 22.5 22.5" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector"
                                    d="M1.54 15.26C2.07 16.54 2.85 17.69 3.82 18.67C4.8 19.64 5.95 20.42 7.23 20.95C8.5 21.47 9.87 21.75 11.25 21.75C12.62 21.75 13.99 21.47 15.26 20.95C16.54 20.42 17.69 19.64 18.67 18.67C19.64 17.69 20.42 16.54 20.95 15.26C21.47 13.99 21.75 12.62 21.75 11.25C21.75 9.87 21.47 8.5 20.95 7.23C20.42 5.95 19.64 4.8 18.67 3.82C17.69 2.85 16.54 2.07 15.26 1.54C13.99 1.02 12.62 0.75 11.25 0.75C9.87 0.75 8.5 1.02 7.23 1.54C5.95 2.07 4.8 2.85 3.82 3.82C2.85 4.8 2.07 5.95 1.54 7.23C1.02 8.5 0.75 9.87 0.75 11.25C0.75 12.62 1.02 13.99 1.54 15.26ZM11.25 5.41L11.25 11.25L7.16 11.25"
                                    stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000"
                                    stroke-linejoin="round" stroke-linecap="round" />
                            </svg>
                            <p>${item.posted_time} min</p>
                        </a>
                    </div>
                </nav>

                <!-- khail gor botton -->
                <aside class="grid-flow-col items-center md:justify-self-end">
                    <button onclick="houstButtonClick('${item.category}')" class="btn">
                        <svg width="27.999817" height="28.000000" viewBox="0 0 27.9998 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Vector"
                                d="M13.99 0C6.26 0 0 6.26 0 13.99C0 21.73 6.26 28 13.99 28C21.73 28 27.99 21.73 27.99 13.99C27.99 6.26 21.73 0 13.99 0ZM13.99 4.91L22.28 10.08L5.71 10.08L13.99 4.91ZM22.38 18.33L22.38 18.33C22.38 19.16 21.71 19.83 20.88 19.83L7.11 19.83C6.28 19.83 5.61 19.16 5.61 18.33L5.61 10.41C5.61 10.32 5.62 10.23 5.63 10.15L13.55 15.09C13.56 15.09 13.57 15.1 13.58 15.1C13.59 15.11 13.6 15.11 13.61 15.12C13.66 15.15 13.72 15.17 13.78 15.19C13.79 15.19 13.79 15.19 13.8 15.19C13.86 15.21 13.93 15.21 13.99 15.21L14 15.21C14 15.21 14 15.21 14 15.21C14.06 15.21 14.13 15.21 14.19 15.19C14.2 15.19 14.2 15.19 14.21 15.19C14.27 15.17 14.33 15.15 14.38 15.12C14.39 15.11 14.4 15.11 14.41 15.1C14.42 15.1 14.43 15.09 14.44 15.09L22.36 10.15C22.37 10.23 22.38 10.32 22.38 10.41L22.38 18.33Z"
                                fill="#10B981" fill-opacity="1.000000" fill-rule="nonzero" />
                        </svg>
                    </button>
                </aside>
            </div>
           `
        catagoryItem.appendChild(catagoryItemData);
    }
}

const seachInfuHandeler = () => {
    const searchInfoText = document.getElementById('searchFile');
    categoryName = searchInfoText.value;
    athorMusiccostom(categoryName)
}

const houstButtonClick = (category) => {
    

}

athorMusiccostom();
houstButtonClick();



const cardRidViwePost = async () => {
    const res3 = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    const data3 = await res3.json()
    const itemPostcard = data3
    displyCardViwe(itemPostcard);
}
const displyCardViwe = (itemPostcard) => {
    const cardridViwe = document.getElementById('card-ride-viwe')
    for (const item3 of itemPostcard) {
        const div = document.createElement('div');
        div.innerHTML = `<div class="card bg-base-300">
                <figure class="px-10 pt-10">
                    <img src="${item3.cover_image}" />
                </figure>
                <!-- date -->
                <div class="flex p-4 gap-2">
                    <p>
                        <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs>
                                <clipPath id="clip29_1881">
                                    <rect id="Frame" width="24.000000" height="24.000000" fill="white"
                                        fill-opacity="0" />
                                </clipPath>
                            </defs>
                            <rect id="Frame" width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0" />
                            <g clip-path="url(#clip29_1881)">
                                <path id="Vector"
                                    d="M4.58 5.58C4.96 5.21 5.46 5 6 5L18 5C18.53 5 19.03 5.21 19.41 5.58C19.78 5.96 20 6.46 20 7L20 19C20 19.53 19.78 20.03 19.41 20.41C19.03 20.78 18.53 21 18 21L6 21C5.46 21 4.96 20.78 4.58 20.41C4.21 20.03 4 19.53 4 19L4 7C4 6.46 4.21 5.96 4.58 5.58Z"
                                    stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000"
                                    stroke-linejoin="round" />
                                <path id="Vector" d="M16 3L16 7" stroke="#12132D" stroke-opacity="0.600000"
                                    stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                                <path id="Vector" d="M8 3L8 7" stroke="#12132D" stroke-opacity="0.600000"
                                    stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                                <path id="Vector" d="M4 11L20 11" stroke="#12132D" stroke-opacity="0.600000"
                                    stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                                <path id="Vector"
                                    d="M11.29 16.7C11.48 16.89 11.73 17 12 17C12.26 17 12.51 16.89 12.7 16.7C12.89 16.51 13 16.26 13 16C13 15.73 12.89 15.48 12.7 15.29C12.51 15.1 12.26 15 12 15C11.73 15 11.48 15.1 11.29 15.29C11.1 15.48 11 15.73 11 16C11 16.26 11.1 16.51 11.29 16.7Z"
                                    stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000"
                                    stroke-linejoin="round" />
                            </g>
                        </svg>
                    </p>
                 <h1>${item3.author?.posted_date || 'no publish date'}</h1>
                </div>
                <!-- date end -->
                <div class="card-body items-center text-center">
                    <h2 class="card-title">${item3.title}</h2>
                    <p>${item3.description}</p>
                    <div class="card-actions gap-4">
                        <div class="avatar">
                            <div class="ring-primary ring-base-100 w-12 rounded-full ring ring-offset-2">
                                <img src="${item3.profile_image}" />
                            </div>
                        </div>
                        <div class="">
                            <p>${item3.author.name}</p>
                            <h1>${item3.author?.designation || 'unknow'}</h1>
                        </div>

                    </div>

                </div>
            </div>`
        cardridViwe.appendChild(div);

    }
}

cardRidViwePost()