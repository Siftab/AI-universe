const dataLoader = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    // console.log(data.data.tools);
    displayUnit(data.data.tools);
}

//card making and Display 
const displayUnit = (cardInfos) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    cardInfos.forEach(cardinfo => { console.log(cardinfo)
        const card = document.createElement('div');
        card.classList = 'card w-96 bg-base-100 shadow-xl';
        card.innerHTML = `   <figure class="px-10 pt-10">
        <img src="${cardinfo.image}" alt="Loading" class="rounded-xl" />
    </figure>
    <div class="card-body">
        <h2 class="card-title">Features</h2>
        <p>${cardinfo.features[0]}</p>
        <p>${cardinfo.features[1]}</p>
        <p>${cardinfo.features[2]}</p>

    </div>
    <div class="flex justify-between items-center px-8 pb-7">
        <div>
            <h1 class="font-bold">${cardinfo.name}</h1>
            <p>${cardinfo.published_in}</p>
        </div>
        <div class="bg-sky-500 rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
          </div>
    </div>
</div>`
    cardContainer.appendChild(card);
    });
  
}

dataLoader();