let data=[];

const container=document.querySelector('.container');

fetch("https://fakestoreapi.com/products")
.then((response)=>{
    // console.log(response);
    return response.json();
})
.then((product_data)=>{

    data=product_data;
    // console.log(data);

    data.forEach((value)=>{

        let colouredRatingStar= parseInt(value.rating.rate);
        let notColored=5-colouredRatingStar;

        let allstarsdiv=document.createElement('div');
        allstarsdiv.setAttribute('class', 'all_stars');

        let tempdiv=document.createElement('div');
 

        for(let i=0; i< colouredRatingStar; i++){

            allstarsdiv.innerHTML+=`<span class="star_filled">&#9733;</span>`;
        }

        for(let i=0; i<notColored; i++){

            allstarsdiv.innerHTML+=`<span class="star_notfilled">&#9734;</span>`
        }

        tempdiv.appendChild(allstarsdiv);


        container.innerHTML+=`<div class="card">

        <img src=${value.image} class="img" alt="image">

        <div class="details">

            <span class="product_name">

                ${value.title}

            </span>

            <span class="product_category">${value.category}</span>

            ${tempdiv.innerHTML}
            <div class="rating_count">

                Rating Count:<span>${value.rating.count}<span/>

            </div>

        </div>

        <div class="btn">
            <button class="btn-buy">Buy Now</button>
        </div>

    </div>`;
    })
})