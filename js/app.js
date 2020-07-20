//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "Life begins where fear ends.",
      author: "Osho"
    },
    {
      quote:
      "Be realistic: Plan for a miracle"  ,
      author: "Osho"
    },
    {
      quote:
        "Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
      author: "APJ Abdul Kalam "
    },
    {
      quote: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
      author: "APJ Abdul Kalam "
    },
    {
      quote:
        "To succeed in your mission, you must have single-minded devotion to your goal.",
      author: "APJ Abdul Kalam"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
